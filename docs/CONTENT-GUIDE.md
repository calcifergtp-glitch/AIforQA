# AI for QA Content Guide

This site is now a static GitHub Pages website. Primary article content should be crawlable HTML, not JavaScript-injected content.

## Final publishing structure

```text
/articles/<slug>.html       # Full static article HTML page
/pdfs/<slug>.pdf            # Optional PDF download
/articles.html              # Static article listing page
/resources.html             # PDF/resource listing page
/data/posts.json            # Metadata used by related-article widgets
/sitemap.xml                # Canonical URLs for search engines
```

## Add a new article

1. Create the article page at `/articles/<slug>.html`.
2. Add a card for the article to `/articles.html`.
3. Add metadata to `/data/posts.json`.
4. If a PDF exists, place it at `/pdfs/<slug>.pdf` and add the PDF link to `/resources.html`.
5. Add the article URL to `/sitemap.xml`.

## PDF convention

Use this naming pattern:

```text
/pdfs/<slug>.pdf
```

Article pages should link to PDFs from inside `/articles/` using:

```html
<a href="../pdfs/<slug>.pdf" download>Download PDF</a>
```

## Deprecated legacy pages

- `post.html?p=<slug>` redirects to `/articles/<slug>.html`.
- `best-of.html` redirects to `/articles.html`.

These files are kept only to protect old links.
