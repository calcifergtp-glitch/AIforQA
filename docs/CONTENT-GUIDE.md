# AI for QA Content Guide

Primary article content must be crawlable static HTML, not JavaScript-injected content. The current publishing model uses article pages and tool landing pages.

## Publishing structure

```text
/articles/<slug>.html       # Full article page
/articles.html              # Article index
/data/posts.json            # Article metadata and related-card data
/tools/<slug>.html          # Downloadable tool landing page
/tools/<file>               # PDF/DOCX companion files
/tools/index.html           # Tool directory
/sitemap.xml                # Canonical URLs for search engines
```

`/resources.html` is retained as a legacy redirect to `/articles.html`; do not use it as a resource directory. Do not use the retired `/pdfs/` or `/posts/` paths for new content unless the repository architecture is deliberately changed and reviewed.

## Add an article

1. Create `/articles/<slug>.html` using the current article template.
2. Add the article to `articles.html`.
3. Add its title, summary, category, date, reading time, publication state, and useful tags to `data/posts.json`.
4. Add the canonical URL to `sitemap.xml`.
5. If providing a PDF or DOCX companion, store it under `/tools/` and link it from the article. Do not create a download link without a matching file.
6. Check the article's citations, canonical URL, robots directive, headings, responsive layout, and related links.

## Add a downloadable tool

1. Create a useful explanatory landing page at `/tools/<slug>.html`.
2. Store the PDF/DOCX file under `/tools/` and add a working download link on the landing page.
3. Add the landing-page card to `/tools/index.html` and its canonical URL to `sitemap.xml`.
4. Keep the download available to readers even if search engines choose not to index the binary file.

## Legacy routes

- `post.html?p=<slug>` redirects to `/articles/<slug>.html`.
- `best-of.html` redirects to `/articles.html`.
- `/resources.html` redirects to `/articles.html`; it is not a resource directory.

Retain these only to preserve useful incoming links. New pages should link directly to canonical article/tool landing pages.
