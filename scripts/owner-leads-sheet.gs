/**
 * Google Apps Script: appends every property-owner lead from sandanehomes.com to a Google Sheet,
 * as a second record next to the FormSubmit email (see src/utils/ownerLeads.js).
 *
 * Setup (one time):
 * 1. Create a Google Sheet, e.g. "Sandane owner leads". Extensions → Apps Script.
 * 2. Paste this file, save, then Deploy → New deployment → type "Web app":
 *      Execute as: Me    Who has access: Anyone
 * 3. Copy the web app URL (ends in /exec).
 * 4. In Vercel → Project → Settings → Environment Variables, add
 *      VITE_OWNER_LEAD_WEBHOOK = <that URL>
 *    and redeploy. Leads then appear as rows; new form fields add new columns automatically.
 */
function doPost(e) {
  var lead = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  var headers = sheet.getLastRow() > 0
    ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    : [];
  Object.keys(lead).forEach(function (key) {
    if (key.charAt(0) !== '_' && headers.indexOf(key) === -1) {
      headers.push(key);
      sheet.getRange(1, headers.length).setValue(key);
    }
  });

  sheet.appendRow(headers.map(function (key) {
    return lead[key] !== undefined ? lead[key] : '';
  }));
  return ContentService.createTextOutput('ok');
}
