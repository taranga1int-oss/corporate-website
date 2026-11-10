> **Superseded (Nov 2026):** the website form is now an embedded Tally form
> ("Swiggy for Work — Talk to our team", id `1WkZDb`, FMP-Corporate workspace).
> Tally stores every submission, emails the team and syncs to Google Sheets via
> its built-in integration. The Apps Script below is no longer called by the site.

# Google Sheets Contact Form Setup

This website is deployed as a static site on GitHub Pages, so the contact form writes to Google Sheets through a Google Apps Script web app.

## Sheet target

- Spreadsheet: `1kZqI9dfWjujDhAXV-4xn1R-HVb-FQ9MDfmR_ql7rBS0`
- Tab: `Sheet1`

## Deploy the Apps Script

1. Open the spreadsheet.
2. Go to `Extensions` -> `Apps Script`.
3. Replace the default script with the contents of [google-sheets-contact-form.gs](C:/dev/Swiggy%20Corporate%20Website/docs/google-sheets-contact-form.gs).
4. Click `Deploy` -> `New deployment`.
5. Select `Web app`.
6. Set `Execute as` to `Me`.
7. Set `Who has access` to `Anyone`.
8. Authorize the script.
9. Copy the deployed web app URL. It will look like `https://script.google.com/macros/s/.../exec`.

## Connect the site

1. In GitHub, open the repository settings.
2. Go to `Secrets and variables` -> `Actions` -> `Variables`.
3. Add a repository variable named `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`.
4. Paste the Apps Script web app URL as the value.
5. Re-run the `Deploy to GitHub Pages` workflow or push a new commit.

Once that variable is set, the `Talk to our team` form will append each submission into `Sheet1`.

## Columns written to the sheet

`Timestamp | Name | Designation | Email | Phone | Offerings | Page URL | Source | City`

`City` is the last column on purpose: older rows keep their positions and simply have an empty City cell. On the first submission after the update, the script rewrites the header row in place to add `City`.

## Updating the script after a form change (e.g. adding City)

Edit the **existing** deployment instead of creating a new one, so the `/exec` URL stays the same and nothing needs to change in GitHub:

1. Open the spreadsheet -> `Extensions` -> `Apps Script`.
2. Replace the code with the latest [google-sheets-contact-form.gs](./google-sheets-contact-form.gs) and click `Save`.
3. Click `Deploy` -> `Manage deployments`.
4. Select the active web app deployment and click the pencil (`Edit`) icon.
5. Under `Version`, choose `New version`, then click `Deploy`.
6. Optional: type `City` into cell `I1` of `Sheet1` yourself (the script will also do it on the next submission).

> If you create a *new* deployment instead, Google issues a new `/exec` URL. You would then have to update the `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` variable in GitHub (or wherever the site is hosted) and redeploy the site.
