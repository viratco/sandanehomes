# SEO & AEO cleanup (part 1 of 2)

Branch: `seo-cleanup`. Not deployed to production. Part 2 (Task 5, the page cut, plus the claims cleanup inside the blog posts and building landing pages that survive it) needs the Google Search Console "Pages" export for the last 3 months.

## What this PR does

| Task | Status |
|---|---|
| 1. Remove unconfirmed claims | Done for all pages, components, data files and llms.txt. **Not yet in blog posts or building landing pages** (part 2; most of those posts will be merged or redirected). |
| 2. Consistent facts | Done outside the blog: 3–4 BHK, 30-day minimum, no years or guest-count stats, no generic sq-ft range, residences@sandanehomes.com shown on the site. |
| 3. Structured data | Done. See below. |
| 4. Company-name pages | Done. 48 URLs → 4 area pages, 301 (see redirect-map.csv). |
| 5. Cut scaled/duplicate content | **Waiting for the Search Console export.** |
| 6. llms.txt | Done. |
| 7. Homepage and /residences, /how-it-works-for-hr | Done (see TODO on the /residences H1). |
| 8. Mixed-language keyword lines | None found outside the blog posts; the blog lines are handled in part 2. Google Translate widget untouched. |

### Task 3: structured data
- JSON-LD is now emitted **once per page, in `<head>`**. Pages render their blocks only during the prerender; `generate-seo.js` moves them into the head and merges them with its own (page blocks win), so nothing appears twice (the homepage and /residences used to carry every block twice).
- **One Organization entity** on every page: Sandane Homes (`@id …/#organization`) with **subOrganization Residences by Sandane Homes** (`@id …/residences#organization`, url /residences, residences@sandanehomes.com, +91 97117 22273, areaServed Gurugram / Noida / Greater Noida, no street address).
- The sitewide `LocalBusiness` block with a street address was removed from `index.html`.
- `ApartmentComplex` blocks are gone: a page about the service gets a `Service` (provider: Residences); a building page gets a `WebPage` whose `about` is a `Place` (building name + locality only) and whose `provider` is Residences. No building address or geo coordinates under our name.
- Hotels keep a `Hotel` block, now with the Greater Noida locality (it wrongly said Gurugram).
- Airbnb `sameAs` removed.
- Audit of all 617 built pages: every page has exactly one site Organization, no JSON-LD left in the body, no duplicate blocks, no `ApartmentComplex`, `LocalBusiness`, `streetAddress` or `GeoCoordinates`.

### Task 4: area pages
- /serviced-homes-cyber-city-golf-course-road-gurgaon
- /serviced-homes-near-imt-manesar
- /serviced-homes-greater-noida-industrial-area
- /serviced-homes-noida-sector-62-81

Internal links, the footer and the Japanese page's company directory now point to these pages.

## Page counts
- Prerendered pages: 664 → 617 (48 company URLs removed; 4 area pages and /how-it-works-for-hr added).
- sitemap.xml: 645 → 588 unique URLs. sitemap-residences.xml: 393 → 388.
- Target after part 2: 30–40 indexable pages.

## Files changed
See `git diff --name-status main..seo-cleanup` (55 files). Deleted: `src/components/pages/JapaneseCompanyHousing.jsx`, `src/components/pages/CompanyAccommodation.jsx`, `src/data/japaneseCompanies.js`, `src/data/greaterNoidaCompanies.js`. New: `docs/seo-cleanup/*`.

## Schema test results
Rich Results Test on the Vercel preview: see the PR conversation (to be added once the preview URL is reachable).

## TODO (owner)
1. **Search Console "Pages" export (last 3 months)** for part 2.
2. **sameAs URLs**: LinkedIn company page, Instagram, Google Business Profile.
3. **Confirm or drop**: car to the office; Korean/Japanese meals (the Korean guest-house pages still say breakfast and dinner are included every day: hotel line, left as is); airport pickup (/residences/gurgaon); RO water purification and water softeners (FAQ); "4.9" rating shown on the hotel pages and homepage.
4. **/residences H1** is the brand wordmark inside a decorative layout; the first two visible sentences now explain the on-demand model. A second H1 line would need a design change.
5. `src/components/pages/BuildingOwnersPartner.jsx` and `GreaterNoidaBuildingOwnersPartner.jsx` have the owner's uncommitted edits and were not touched: they still contain "5-star", "guaranteed" and BHK-range wording.
6. Lead forms post to `formsubmit.co/ajax/residencesbysandanehomes@gmail.com` (form delivery, not shown on the site). Left unchanged so leads keep arriving; switch only after activating residences@ on FormSubmit.
7. Hotel pages "stay as they are": room names like "Smart Studio" at CoCo House are unchanged.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
