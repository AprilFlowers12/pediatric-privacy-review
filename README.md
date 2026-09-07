# The Pediatric Privacy Review

A static website with six articles and a searchable U.S. privacy law library.

## Preview locally

Serve this folder with any static file server, then open the local address in a browser.

## Update the existing GitHub-connected website

1. Extract `PPR-GITHUB-PRIVACY-LIBRARY-20260906.zip`.
2. Open `AprilFlowers12/pediatric-privacy-review` on GitHub and select the branch connected to Cloudflare.
3. Choose **Add file > Upload files**. Upload all files inside the extracted folder into the repository's top level, replacing existing files. The ZIP itself is not the website.
4. Commit the upload. In Cloudflare, confirm that a successful production deployment uses the new commit.

The repository should contain `index.html`, `styles.css`, `app.js`, `privacy-laws.js`,
`laws-data.js`, `package.json`, `build.mjs`, `_headers`, `wrangler.toml`, `logo.png`,
and `favicon.png` at its top level.

## Git deployment settings

Keep the existing working Cloudflare project type. For a **Pages** Git integration:

- Framework preset: `None`
- Build command: `npm run build`
- Root directory: leave blank
- Build output directory: `public`

For an existing **Workers** integration, use `npm run build` and deploy with
`npx wrangler deploy`. The included Wrangler file points to `public`.

`PPR-CLOUDFLARE-DIRECT-PRIVACY-LIBRARY-20260906.zip` contains the built site for
an existing direct-upload workflow. Use the GitHub archive above for a Git-connected project.

## Maintain the law library

`laws-data.js` holds the 14 records and source-review date. `privacy-laws.js`
implements search, topic/jurisdiction filters, expandable details, empty results,
and direct links such as `#law-coppa`.

The selected collection covers federal laws and rules plus California and
Washington protections. It is not a complete national or 50-state database.
Full legal text is linked at government publishers. Legislative and agency
credits are separate from editorial summaries. Dates are reviewed manually;
this release does not automatically track amendments.

When updating a record, review current primary legal text and agency guidance,
including effective dates, compliance dates, and court orders. After a complete
review, update the review date in the data and the library heading.

The three requested placeholder articles are absent from the source and build.
The six retained articles are separate from the law library.
