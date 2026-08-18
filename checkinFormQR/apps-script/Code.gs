/**
 * ================================================================
 *  Sandane Homes — Guest Registration Backend
 * ================================================================
 */

// ── CONFIG ────────────────────────────────────────────────────────

// The ID of your Google Spreadsheet (hotel_check_in)
const SHEET_ID = '1H7sRGJ2ZwLH073FgekA5sPwqln6Duw4uYRXfKj8C2rw';

// The name of the sheet/tab inside the spreadsheet
const SHEET_NAME = 'Guest Registrations';

// The ID of your Google Drive folder where ID photos are saved
// (Leave as '' if you want it to automatically create a folder in your Drive)
const DRIVE_FOLDER_ID = '';

// Your hotel's timezone
const TIMEZONE = 'Asia/Kolkata';

// ── MAIN HANDLER ─────────────────────────────────────────────────

function doPost(e) {
  const response = ContentService.createTextOutput();
  response.setMimeType(ContentService.MimeType.JSON);

  try {
    const raw = e.postData ? e.postData.contents : '{}';
    const data = JSON.parse(raw);

    // Generate or use Registration ID
    const registrationId = data.registrationId || generateRegistrationId();

    // Record the submission timestamp (IST)
    const now = new Date();
    const timestamp = Utilities.formatDate(now, TIMEZONE, 'dd MMM yyyy hh:mm a') + ' IST';
    const dateOnly = Utilities.formatDate(now, TIMEZONE, 'dd MMM yyyy');
    const timeOnly = Utilities.formatDate(now, TIMEZONE, 'hh:mm a') + ' IST';

    // 1. Upload Front & Back ID for Primary Guest (Guest 1)
    let g1FrontId = '', g1FrontLink = '';
    let g1BackId = '', g1BackLink = '';

    try {
      if (data.idFrontBase64 && data.idFrontName) {
        const up = uploadIdToDrive(data.idFrontBase64, data.idFrontName, data.idFrontMime, registrationId, 'G1-FRONT');
        g1FrontId = up.fileId;
        g1FrontLink = up.fileLink;
      }
    } catch (err) {
      g1FrontId = 'UPLOAD_FAILED: ' + err.message;
    }

    try {
      if (data.idBackBase64 && data.idBackName) {
        const up = uploadIdToDrive(data.idBackBase64, data.idBackName, data.idBackMime, registrationId, 'G1-BACK');
        g1BackId = up.fileId;
        g1BackLink = up.fileLink;
      }
    } catch (err) {
      g1BackId = 'UPLOAD_FAILED: ' + err.message;
    }

    // 2. Upload Front & Back IDs for Additional Guests
    const additionalGuestUploads = [];
    if (Array.isArray(data.additionalGuests)) {
      data.additionalGuests.forEach((guest, idx) => {
        const gNum = idx + 2;
        let fId = '', fLink = '';
        let bId = '', bLink = '';

        try {
          if (guest.idFrontBase64 && guest.idFrontName) {
            const up = uploadIdToDrive(guest.idFrontBase64, guest.idFrontName, guest.idFrontMime, registrationId, 'G' + gNum + '-FRONT');
            fId = up.fileId;
            fLink = up.fileLink;
          }
        } catch (err) {
          fId = 'UPLOAD_FAILED: ' + err.message;
        }

        try {
          if (guest.idBackBase64 && guest.idBackName) {
            const up = uploadIdToDrive(guest.idBackBase64, guest.idBackName, guest.idBackMime, registrationId, 'G' + gNum + '-BACK');
            bId = up.fileId;
            bLink = up.fileLink;
          }
        } catch (err) {
          bId = 'UPLOAD_FAILED: ' + err.message;
        }

        additionalGuestUploads.push({
          guestNumber: gNum,
          fullName: guest.fullName,
          age: guest.age,
          nationality: guest.nationality,
          phone: guest.phone || '',
          email: guest.email || '',
          idType: guest.idType,
          frontFileId: fId,
          frontFileLink: fLink,
          backFileId: bId,
          backFileLink: bLink,
        });
      });
    }

    // 3. Write records to Google Sheet
    writeToSheet({
      data,
      registrationId,
      timestamp,
      dateOnly,
      timeOnly,
      g1FrontId,
      g1FrontLink,
      g1BackId,
      g1BackLink,
      additionalGuestUploads,
    });

    response.setContent(JSON.stringify({
      success: true,
      registrationId: registrationId,
    }));

  } catch (err) {
    response.setContent(JSON.stringify({
      success: false,
      error: 'Server error: ' + err.message,
    }));
  }

  return response;
}

// Handle GET requests (health check)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Sandane Homes Registration API is active.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── GOOGLE SHEETS ─────────────────────────────────────────────────

function writeToSheet({ data, registrationId, timestamp, dateOnly, timeOnly, g1FrontId, g1FrontLink, g1BackId, g1BackLink, additionalGuestUploads }) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);

  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  const headers = [
    'Registration ID',
    'Guest Role',
    'Guest Name',
    'Age',
    'Nationality',
    'Phone',
    'Email',
    'ID Type',
    'ID Front File ID',
    'ID Front File Link',
    'ID Back File ID',
    'ID Back File Link',
    'Property',
    'Room Number',
    'Check-In Date',
    'Check-Out Date',
    'Registration Timestamp',
    'Permanent Address',
    'Purpose of Visit',
    'Detailed Reason',
    'Total Guests in Room',
    'Consent',
    'Status',
    'Staff Notes',
  ];

  // If header row is empty, write and format headers
  if (sheet.getLastRow() === 0 || sheet.getRange(1, 1).getValue() === '') {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#2C1810');
    headerRange.setFontColor('#C5A572');
    headerRange.setFontWeight('bold');
    headerRange.setFontSize(11);
    sheet.setFrozenRows(1);
  }

  const PROPERTY_LABELS = {
    sandane_homes: 'Sandane Homes',
    amaaltash: 'Amaaltash by Sandane Homes',
    the_glam: 'The Glam by Sandane Homes',
    amara_inn: 'Amara Inn by Sandane Homes',
    pine_tales: 'Pine Tales by Sandane Homes',
    coco_house: 'CoCo House',
  };

  const PURPOSE_LABELS = {
    business_trip: 'Business Trip',
    corporate_assignment: 'Corporate Assignment',
    expatriate_stay: 'Expatriate Stay',
    leisure_vacation: 'Leisure / Vacation',
    family_visit: 'Family Visit',
    exhibition_event: 'Exhibition / Event',
    medical_visit: 'Medical Visit',
    relocation: 'Relocation',
    long_term_stay: 'Long-Term Stay',
    other: 'Other',
  };

  const ID_LABELS = {
    aadhaar: 'Aadhaar Card',
    ration_card: 'Ration Card',
    driving_licence: 'Driving Licence (DL)',
  };

  const totalGuests = 1 + (additionalGuestUploads ? additionalGuestUploads.length : 0);

  // Row 1: Primary Guest
  const primaryRow = [
    registrationId,
    'Primary Guest',
    data.fullName || '',
    data.age || '',
    data.nationality || '',
    data.phone ? "'" + data.phone : '',
    data.email || '',
    ID_LABELS[data.idType] || data.idType || '',
    g1FrontId,
    g1FrontLink,
    g1BackId,
    g1BackLink,
    PROPERTY_LABELS[data.property] || data.property || '',
    data.roomNumber ? "'" + data.roomNumber : '',
    data.checkInDate || '',
    data.checkOutDate || '',
    timestamp,
    data.permanentAddress || '',
    PURPOSE_LABELS[data.visitPurpose] || data.visitPurpose || '',
    data.visitDetails || '',
    totalGuests,
    data.consentGiven ? 'Yes' : 'No',
    'Registration Received',
    '',
  ];

  sheet.appendRow(primaryRow);

  // Rows 2+: Additional Guests
  if (additionalGuestUploads && additionalGuestUploads.length > 0) {
    additionalGuestUploads.forEach((guest) => {
      const guestPhone = guest.phone ? "'" + guest.phone : (data.phone ? "'" + data.phone : '');
      const guestEmail = guest.email || data.email || '';

      const guestRow = [
        registrationId,
        'Guest ' + guest.guestNumber,
        guest.fullName || '',
        guest.age || '',
        guest.nationality || '',
        guestPhone,
        guestEmail,
        ID_LABELS[guest.idType] || guest.idType || '',
        guest.frontFileId,
        guest.frontFileLink,
        guest.backFileId,
        guest.backFileLink,
        PROPERTY_LABELS[data.property] || data.property || '',
        data.roomNumber ? "'" + data.roomNumber : '',
        data.checkInDate || '',
        data.checkOutDate || '',
        timestamp,
        data.permanentAddress || '',
        PURPOSE_LABELS[data.visitPurpose] || data.visitPurpose || '',
        data.visitDetails || '',
        totalGuests,
        data.consentGiven ? 'Yes' : 'No',
        'Registration Received',
        'Accompanying ' + data.fullName,
      ];
      sheet.appendRow(guestRow);
    });
  }

  sheet.autoResizeColumns(1, primaryRow.length);
}

// ── GOOGLE DRIVE ──────────────────────────────────────────────────

function uploadIdToDrive(base64Data, originalFileName, mimeType, registrationId, tag) {
  let folder;
  if (DRIVE_FOLDER_ID && DRIVE_FOLDER_ID.trim() !== '') {
    folder = DriveApp.getFolderById(DRIVE_FOLDER_ID.trim());
  } else {
    const folders = DriveApp.getFoldersByName('Sandane Homes - Guest IDs');
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder('Sandane Homes - Guest IDs');
    }
  }

  const ext = mimeType === 'application/pdf' ? 'pdf'
    : mimeType === 'image/png' ? 'png'
    : 'jpg';

  const today = Utilities.formatDate(new Date(), TIMEZONE, 'yyyyMMdd');
  const uniqueFilename = `SH-GUEST-${today}-${registrationId}-${tag}.${ext}`;

  const bytes = Utilities.base64Decode(base64Data);
  const blob = Utilities.newBlob(bytes, mimeType, uniqueFilename);

  const file = folder.createFile(blob);

  return {
    fileId: file.getId(),
    fileLink: file.getUrl(),
  };
}

// ── ID GENERATOR ──────────────────────────────────────────────────

function generateRegistrationId() {
  const year = new Date().getFullYear();
  const random = Math.floor(10000 + Math.random() * 90000);
  return `SH-${year}-${random}`;
}
