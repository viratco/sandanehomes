/**
 * Google Apps Script for the "HR monthly list" on sandanehomes.com/residences
 * (the "Not looking right now?" card, src/components/HrUpdatesSignup.jsx).
 *
 * What it does:
 *  - Each signup becomes a row in the "Subscribers" tab.
 *  - The new subscriber gets a thank-you email at once, sent from your Gmail.
 *  - Menu "Residences > Send monthly note..." emails the text in the "Monthly note"
 *    tab to everyone whose Status is "subscribed", one email each.
 *  - To remove someone, change their Status to "unsubscribed".
 *
 * Setup (one time), signed in as residencesbysandanehomes@gmail.com:
 *  1. Create a Google Sheet named "HR monthly list". Extensions > Apps Script.
 *  2. Delete what is there, paste this whole file, click Save.
 *  3. Choose the function "setup" at the top and click Run. Google asks for
 *     permission (Sheets + send email as you): Review permissions > your account >
 *     Advanced > Go to project > Allow. The two tabs are created.
 *  4. Deploy > New deployment > gear icon > Web app.
 *       Execute as: Me     Who has access: Anyone
 *     Deploy, then copy the Web app URL (ends in /exec) and send it to us to connect.
 *
 * Gmail limit: a normal Gmail account can send about 100 emails a day from scripts.
 */

var SUBSCRIBERS = 'Subscribers';
var NOTE = 'Monthly note';
var SENDER_NAME = 'Residences by Sandane Homes';
var HEADERS = ['Date', 'Email', 'Page', 'Status', 'Thank-you sent', 'Last monthly note'];

var THANK_YOU_SUBJECT = "You're on our list - Residences by Sandane Homes";
var THANK_YOU_BODY = [
  'Hello,',
  'Thank you for joining the Residences by Sandane Homes monthly list.',
  'At the start of each month we will send you one short note on which of our furnished 3-4 BHK homes in Gurugram and Greater Noida are free, so you know where to turn when someone from your company is posted here.',
  'If you need a home sooner, just reply to this email or WhatsApp us on +91 88262 69690.',
  'To stop these emails at any time, reply with "unsubscribe".',
  'Warm regards,\nResidences by Sandane Homes\nhttps://www.sandanehomes.com/residences',
].join('\n\n');

var FOOTER = '\n\n--\nYou are getting this because you signed up for monthly updates on sandanehomes.com. Reply "unsubscribe" to stop.';

function setup() {
  ensureSheets_();
  // Touch Gmail so the permission prompt includes sending email.
  MailApp.getRemainingDailyQuota();
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Residences')
    .addItem('Send monthly note...', 'sendMonthlyNote')
    .addToUi();
}

// Called by the website for each signup.
function doPost(e) {
  var data = {};
  try { data = JSON.parse(e.postData.contents); } catch (err) { return text_('bad request'); }
  if (data.website) return text_('ok'); // honeypot filled in: a bot

  var email = String(data.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) return text_('bad email');

  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sheet = ensureSheets_().subscribers;
    var row = findRow_(sheet, email);
    var now = new Date();

    if (row === -1) {
      sheet.appendRow([now, email, String(data.page || '').slice(0, 300), 'subscribed', '', '']);
      row = sheet.getLastRow();
    } else {
      sheet.getRange(row, 4).setValue('subscribed'); // signed up again: back on the list
    }

    // Send the thank-you only once per address.
    if (!sheet.getRange(row, 5).getValue()) {
      GmailApp.sendEmail(email, THANK_YOU_SUBJECT, THANK_YOU_BODY, { name: SENDER_NAME });
      sheet.getRange(row, 5).setValue(now);
    }
  } finally {
    lock.releaseLock();
  }
  return text_('ok');
}

// Menu: Residences > Send monthly note...
function sendMonthlyNote() {
  var ui = SpreadsheetApp.getUi();
  var sheets = ensureSheets_();
  var subject = String(sheets.note.getRange('B1').getValue()).trim();
  var body = String(sheets.note.getRange('B2').getValue()).trim();
  if (!subject || !body) {
    ui.alert('Write the subject in B1 and the email text in B2 of the "' + NOTE + '" tab first.');
    return;
  }

  var values = sheets.subscribers.getDataRange().getValues();
  var rows = [];
  for (var i = 1; i < values.length; i++) {
    if (String(values[i][3]).toLowerCase() === 'subscribed' && values[i][1]) rows.push(i + 1);
  }
  if (rows.length === 0) { ui.alert('Nobody is subscribed yet.'); return; }

  var quota = MailApp.getRemainingDailyQuota();
  if (rows.length > quota) {
    ui.alert('Gmail lets this account send ' + quota + ' more emails today, but there are ' + rows.length +
      ' subscribers. Try again tomorrow, or move the list to an email tool.');
    return;
  }

  var ok = ui.alert('Send "' + subject + '" to ' + rows.length + ' subscriber(s)?', ui.ButtonSet.YES_NO);
  if (ok !== ui.Button.YES) return;

  var now = new Date();
  rows.forEach(function (r) {
    var email = sheets.subscribers.getRange(r, 2).getValue();
    GmailApp.sendEmail(email, subject, body + FOOTER, { name: SENDER_NAME });
    sheets.subscribers.getRange(r, 6).setValue(now);
  });
  ui.alert('Sent to ' + rows.length + ' subscriber(s).');
}

function ensureSheets_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var subscribers = ss.getSheetByName(SUBSCRIBERS);
  if (!subscribers) {
    subscribers = ss.getSheets()[0];
    subscribers.setName(SUBSCRIBERS);
  }
  if (subscribers.getLastRow() === 0) {
    subscribers.appendRow(HEADERS);
    subscribers.setFrozenRows(1);
    subscribers.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }

  var note = ss.getSheetByName(NOTE);
  if (!note) {
    note = ss.insertSheet(NOTE);
    note.getRange('A1:A2').setValues([['Subject'], ['Email text']]).setFontWeight('bold');
    note.getRange('B1').setValue('Homes free in the next 60 days - Residences by Sandane Homes');
    note.getRange('B2').setValue([
      'Hello,',
      'These homes are free in the next 60 days:',
      '- Conscient Hines Elevate, Sector 58 (3 BHK): from [date]',
      '- Green Meadows, Sector 27 (4 BHK): from [date]',
      '- Sushant Lok Block B, Sector 27 (4 BHK): from [date]',
      'If someone from your company is joining soon, just reply to this email and we will send photos and details.',
      'Warm regards,\nResidences by Sandane Homes\nWhatsApp +91 88262 69690',
    ].join('\n\n'));
    note.setColumnWidth(2, 600);
    note.getRange('B2').setWrap(true).setVerticalAlignment('top');
  }
  return { subscribers: subscribers, note: note };
}

function findRow_(sheet, email) {
  var last = sheet.getLastRow();
  if (last < 2) return -1;
  var emails = sheet.getRange(2, 2, last - 1, 1).getValues();
  for (var i = 0; i < emails.length; i++) {
    if (String(emails[i][0]).trim().toLowerCase() === email) return i + 2;
  }
  return -1;
}

function text_(s) {
  return ContentService.createTextOutput(s);
}
