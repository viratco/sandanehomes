# Sandane Homes — Guest Registration System
## Setup Guide

This is a **pure frontend** app. No server required.
Form submissions go directly to **Google Apps Script → Google Sheets + Google Drive**.

---

## Step 1 — Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **Sandane Homes — Guest Registration**
4. Copy the Sheet ID from the URL:
   ```
   docs.google.com/spreadsheets/d/  ← THIS PART →  /edit
   ```

---

## Step 2 — Create a Google Drive Folder

1. Go to [drive.google.com](https://drive.google.com)
2. Create a new folder: **Sandane Homes / Guest ID Documents**
3. Copy the Folder ID from the URL:
   ```
   drive.google.com/drive/folders/  ← THIS PART
   ```
4. **Important:** Do NOT share this folder publicly. Keep it private.

---

## Step 3 — Deploy the Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click **New Project**
3. Delete the default code
4. Open the file `apps-script/Code.gs` from this project
5. Paste the entire code into the Apps Script editor
6. Update the two constants at the top:
   ```javascript
   const SHEET_ID = 'YOUR_SHEET_ID_FROM_STEP_1';
   const DRIVE_FOLDER_ID = 'YOUR_FOLDER_ID_FROM_STEP_2';
   ```
7. Click **Deploy → New Deployment**
8. Set:
   - **Type:** Web App
   - **Execute as:** Me
   - **Who has access:** Anyone
9. Click **Deploy** — grant permissions when prompted
10. **Copy the Web App URL** (looks like):
    ```
    https://script.google.com/macros/s/AKfycb.../exec
    ```

---

## Step 4 — Connect the Frontend

1. Open `src/config.js`
2. Paste your Web App URL:
   ```javascript
   export const APPS_SCRIPT_URL =
     'https://script.google.com/macros/s/YOUR_URL/exec';
   ```

---

## Step 5 — Run Locally

```bash
cd checkinFormQR
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to test the form.

---

## Step 6 — Deploy to Vercel

```bash
npm run build
# Then connect this folder to Vercel via the Vercel dashboard
```

The QR code URL should point to:
```
https://www.sandanehomes.com/guest-registration
```

---

## Google Sheet Columns (auto-created on first submission)

| Column | Content |
|--------|---------|
| Registration ID | SH-2026-XXXXX |
| Registration Timestamp | 14 Aug 2026 07:42 PM IST |
| Guest Name | Full legal name |
| Age | Number |
| Nationality | Country |
| Phone | With country code |
| Email | Optional |
| ID Type | Aadhaar / Passport / etc. |
| ID File ID | Google Drive file ID |
| ID File Link | Secure Drive link (not public) |
| Property | Hotel name |
| Room Number | Assigned room |
| Check-In Date | Date |
| Check-Out Date | Date |
| Permanent Address | Full address |
| Purpose of Visit | Category |
| Detailed Reason | Free text |
| Consent | Yes |
| Status | Registration Received |
| Staff Notes | Empty initially |

> **Note:** The ID document is stored in Google Drive as a private file.
> Only people with access to your Drive folder can view it.
> The Sheet only contains the file ID reference — not the actual image.
