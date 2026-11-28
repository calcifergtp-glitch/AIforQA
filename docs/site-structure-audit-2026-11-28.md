# AIforQA.org site structure audit — 2026-11-28

## Scope and results

- Reviewed all 71 HTML pages in the repository, including article pages, tool pages, root pages, and legacy article aliases.
- Checked local page, asset, and download links: no broken local file links were found.
- Checked in-page fragment links: found one missing topic anchor, `tags.html#contamination-control`, and added the matching topic section and article card to `tags.html`.
- Confirmed all 31 published articles listed in `data/posts.json` have canonical article pages and sitemap entries.
- Confirmed all sitemap paths point to files in the repository.
- Identified 16 older article filename aliases. They are small redirect pages, not duplicate article content. They remain available to preserve old incoming links, are excluded from the sitemap, and now have a `noindex,follow` directive.
- Removed `list.js`, an unused script that attempted to load a missing `articles.json`. The article directory uses crawlable static cards and its current client-side controls.

## Follow-up

The older JSON audit files in this directory describe earlier snapshots and are retained as history. Added `/references.html`, a curated regulatory-reference hub with official FDA, EU, EMA, and ICH sources, scope notes, document-type labels, and a review date.
