Google Sheets Lead Capture (Apps Script)

Overview
- This script creates a simple Web App endpoint that accepts JSON POSTs and appends rows to a Google Sheet.
- Use the resulting URL as `SHEETS_WEBHOOK_URL` in your app env.

Steps
1) Create a new Google Sheet. Add a header row with columns:
   Timestamp | Name | Email | Company | Website | Message | Source | Plan | Spend | UserAgent | IP
2) Extensions → Apps Script → replace contents with the code below.
3) Deploy → New deployment → Select type: Web app → Execute as: Me → Who has access: Anyone → Deploy.
4) Copy the Web App URL and set it as `SHEETS_WEBHOOK_URL` in your environment.

Apps Script Code
```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const body = JSON.parse(e.postData.contents || '{}');
    const payload = body.payload || {};
    const now = new Date();

    const ua = e && e.parameter ? e.parameter.userAgent : '';
    const ip = e && e.parameter ? e.parameter.ip : '';

    const row = [
      now,
      payload.name || '',
      payload.email || '',
      payload.company || '',
      payload.website || '',
      payload.message || '',
      payload.source || '',
      payload.plan || '',
      payload.spend || '',
      ua,
      ip,
    ];
    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

Tips
- To route to a specific sheet tab, use `getSheetByName('Leads')`.
- You can add simple spam filtering (e.g., require `email` and reject disposable domains).
- Re‑deploy when you change the script; the URL can stay the same if you update the deployment.
