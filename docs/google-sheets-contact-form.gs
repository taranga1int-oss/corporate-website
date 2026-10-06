const SPREADSHEET_ID = "1moMaGYDDx6Kh-h7SndiI7OaeljzhisDJ_96ABj-ROD0";
const SHEET_NAME = "Sheet1";
const HEADERS = [
  "Timestamp",
  "Name",
  "Designation",
  "Email",
  "Phone",
  "Offerings",
  "Page URL",
  "Source",
  "City",
];

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, message: "Contact form endpoint is live." }),
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(5000);

    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(
      SHEET_NAME,
    );

    if (!sheet) {
      throw new Error(`Sheet "${SHEET_NAME}" was not found.`);
    }

    ensureHeaders_(sheet);

    const params = e && e.parameter ? e.parameter : {};
    sheet.appendRow([
      new Date(),
      cleanup_(params.name),
      cleanup_(params.designation),
      cleanup_(params.email),
      cleanup_(params.phone),
      cleanup_(params.offerings),
      cleanup_(params.pageUrl),
      cleanup_(params.source || "swiggy-for-work-website"),
      cleanup_(params.city),
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    try {
      lock.releaseLock();
    } catch {}
  }
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    return;
  }

  const firstRow = sheet
    .getRange(1, 1, 1, HEADERS.length)
    .getValues()[0]
    .map((cell) => String(cell).trim());

  const headerMismatch = HEADERS.some((header, index) => firstRow[index] !== header);
  if (!headerMismatch) {
    return;
  }

  // Row 1 is already a header row (e.g. an older version without "City"):
  // update it in place so existing rows stay aligned under the right columns.
  if (firstRow[0] === HEADERS[0]) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    return;
  }

  // Row 1 holds data, so add a header row above it.
  sheet.insertRowBefore(1);
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
}

// Store values as plain text. A leading + = - or @ (e.g. "+91 98...")
// would otherwise be read as a formula and show #ERROR! in the sheet.
function cleanup_(value) {
  const text = String(value || "").trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}
