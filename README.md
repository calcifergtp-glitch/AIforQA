# AI for Pharmaceutical QA

A static website publishing in-depth articles on AI tools and regulatory compliance for pharmaceutical QA specialists. Hosted on GitHub Pages at [aiforqa.org](https://www.aiforqa.org).

---

## Repository Structure

```
AIforQA/
├── articles/                 # Static article pages — one full HTML file per published post
│   └── <slug>.html           # Standalone crawlable page with inline article content
├── content/                  # Article body fragments — kept for legacy reference
│   └── <slug>.html           # Inner HTML (no <html>/<head>/<body> tags)
├── data/
│   └── posts.json            # Single source of truth for post metadata
├── pdfs/                     # Downloadable PDF version of each article, named by slug
│   └── <slug>.pdf            # e.g. pdfs/ai-data-integrity-alcoa-plus.pdf
├── posts/                    # Legacy PDF storage (kept for backward compatibility)
│   └── <slug>/
│       └── document.pdf
├── assets/                   # Site-wide static assets (SVGs, images)
├── docs/                     # Internal guides (not served as site content)
│   ├── CONTENT-GUIDE.md      # Detailed content workflow documentation
│   └── MONETIZATION.md       # Notes on ads/affiliate strategy
├── index.html                # Homepage (hardcoded featured cards)
├── best-of.html              # Full posts listing (dynamic via list.js)
├── resources.html            # Resources & PDF downloads listing page
├── post.html                 # Legacy post template — JS-redirects to /articles/<slug>.html
├── about.html                # About page
├── affiliate-disclosure.html # Affiliate disclosure
├── privacy-policy.html       # Privacy policy
├── terms-and-conditions.html # Terms and conditions
├── disclaimer.html           # Disclaimer
├── cookie-policy.html        # Cookie policy
├── styles.css                # Shared stylesheet
├── script.js                 # Shared site-wide helpers (toast, etc.)
├── post.js                   # Drives post.html — redirects old ?p= URLs and loads metadata
├── list.js                   # Drives best-of.html — search/filter
├── home.js                   # Utility for dynamic home page cards (see note below)
├── sitemap.xml               # XML sitemap for search engines
├── robots.txt                # Crawler instructions
├── ads.txt                   # AdSense ads.txt
└── CNAME                     # GitHub Pages custom domain
```

---

## Adding a New Article

1. **Add metadata** to `data/posts.json` (insert at the top to appear first):
   ```json
   {
     "slug": "my-post-slug",
     "title": "My Post Title",
     "summary": "One-sentence description shown in listing cards.",
     "category": "GxP & Validation",
     "date": "YYYY-MM-DD",
     "readingTime": "X min read",
     "published": true,
     "pdf": "pdfs/my-post-slug.pdf"
   }
   ```
   Omit `"published": true` (or set to `false`) to hide the post from listings and related-post suggestions while it is a draft.

2. **Create the static article page** at `articles/<slug>.html`.  
   Copy an existing article file as a template and replace the title, description, canonical URL, structured data, and article body. The article body must be **inline HTML** inside `<div class="postContent">` — do not use JavaScript to load the content.

3. **Add the PDF** (optional) at `pdfs/<slug>.pdf` and set the `"pdf"` field in `posts.json`.  
   A "Download PDF" button in the article and a listing on `resources.html` link to this file.

4. **Add an entry to `resources.html`** — copy an existing `<article class="card">` block and update the title, summary, slug, and PDF link.

5. **Update `sitemap.xml`** — add a new `<url>` entry:
   ```xml
   <url><loc>https://www.aiforqa.org/articles/my-post-slug.html</loc><lastmod>YYYY-MM-DD</lastmod></url>
   ```

6. **Update `index.html`** — if you want the new post to appear in the homepage featured cards, edit the hardcoded card entries there.

### Naming Convention

| Asset | Pattern | Example |
|---|---|---|
| Static article page | `articles/<slug>.html` | `articles/my-post-slug.html` |
| PDF download | `pdfs/<slug>.pdf` | `pdfs/my-post-slug.pdf` |
| Slug | lowercase, hyphens only | `my-post-slug` |

---

## Old post.html?p= URLs

Old dynamic URLs of the form `https://www.aiforqa.org/post.html?p=<slug>` are automatically redirected to `https://www.aiforqa.org/articles/<slug>.html` via a JavaScript redirect in `post.js`. Users without JavaScript see a fallback message linking to the posts listing page. Search engines should follow the canonical `<link rel="canonical">` tags in each article page.

---

## Adding a PDF Only (no new article)

Place the file at `pdfs/<slug>.pdf`, update the `"pdf"` field in `data/posts.json`, and add an entry in `resources.html`.

---

## File Rules

- **One static article page per post.** The canonical article lives in `articles/<slug>.html` with full inline content. The `content/<slug>.html` fragment is kept for reference only.
- **No pdf2htmlEX-generated HTML files.** These are large, redundant, and not used by the site.
- **All new PDFs go in `pdfs/<slug>.pdf`.** Legacy PDFs under `posts/<slug>/document.pdf` are kept for backward compatibility but new articles should use `pdfs/`.
- **No stub/placeholder files.** Remove any file whose content is empty or a placeholder before committing.

---

## Notes

- `home.js` exists but is not currently wired into `index.html`. The homepage uses hardcoded featured cards. To switch to dynamic cards, add `<div id="latestCards" class="cards three"></div>` to `index.html` and load `<script src="home.js"></script>` before `</body>`.
- `_config.yml` sets a Jekyll theme for GitHub Pages. Because all HTML pages have no Jekyll front-matter, the theme does not affect the rendered output — pages are served as plain HTML.

