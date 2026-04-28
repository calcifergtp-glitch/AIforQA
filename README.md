# AI for QA

Static GitHub Pages website for AI-focused pharmaceutical Quality Assurance content, hosted at https://www.aiforqa.org.

## Current site structure

```text
/
├── index.html                 # Homepage
├── articles.html              # Static article listing page
├── resources.html             # PDF/resource download listing
├── about.html                 # About page
├── post.html                  # Legacy redirect: post.html?p=slug → /articles/slug.html
├── best-of.html               # Legacy redirect: /best-of.html → /articles.html
├── sitemap.xml                # Active canonical URLs
├── robots.txt                 # Crawl instructions
├── styles.css                 # Shared styling
├── script.js                  # Shared mobile menu/toast helper
├── data/posts.json            # Metadata for existing static articles and related cards
├── articles/                  # Full static article HTML pages
├── pdfs/                      # Downloadable article PDF files
├── assets/                    # Images/icons/background assets
└── posts/                     # Legacy PDF source folders retained only for safety
```

## Adding a new article

1. Create the static article page at:

```text
/articles/my-new-article-slug.html
```

2. Add the article card to `articles.html`.

3. Add a metadata entry to `data/posts.json` so related-article sections can use it:

```json
{
  "slug": "my-new-article-slug",
  "title": "My New Article Title",
  "summary": "Short article summary.",
  "category": "GxP & Validation",
  "date": "YYYY-MM-DD",
  "readingTime": "10 min read",
  "published": true,
  "pdf": "pdfs/my-new-article-slug.pdf"
}
```

4. If a PDF exists, place it here:

```text
/pdfs/my-new-article-slug.pdf
```

5. If a PDF exists, add it to `resources.html`.

6. Add the article URL to `sitemap.xml` using the canonical domain:

```text
https://www.aiforqa.org/articles/my-new-article-slug.html
```

## PDF workflow

PDF downloads should live in:

```text
/pdfs/<article-slug>.pdf
```

Article pages should link to PDFs using a relative path from `/articles/`:

```html
<a href="../pdfs/<article-slug>.pdf" download>Download PDF</a>
```

The Resources page should link to PDFs using:

```html
<a href="/pdfs/<article-slug>.pdf" download>Download PDF</a>
```

## Legacy redirects

The old dynamic article system has been deprecated.

- `post.html?p=<slug>` redirects to `/articles/<slug>.html`
- `/best-of.html` redirects to `/articles.html`

These files are retained only to protect old links that may already exist online.

## Canonical domain

The repository uses the `www` custom domain configured in `CNAME`:

```text
www.aiforqa.org
```

Canonical URLs, Open Graph URLs, robots.txt, and sitemap.xml should consistently use:

```text
https://www.aiforqa.org
```

## Notes

- Do not use JavaScript-dependent pages for primary article content.
- Individual articles should remain full static HTML for SEO and reliability.
- Do not add broken PDF buttons when no PDF exists.
- Keep the design system in `styles.css` consistent across new pages.
