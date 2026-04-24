# AI for Pharmaceutical QA

A static website publishing in-depth articles on AI tools and regulatory compliance for pharmaceutical QA specialists. Hosted on GitHub Pages at [aiforqa.org](https://www.aiforqa.org).

---

## Repository Structure

```
AIforQA/
├── content/                  # Article body fragments — one .html per published post
│   └── <slug>.html           # Inner HTML injected by post.js (no <html>/<head>/<body> tags)
├── data/
│   └── posts.json            # Single source of truth for post metadata
├── posts/
│   └── <slug>/
│       └── document.pdf      # Downloadable PDF for the post (optional)
├── assets/                   # Site-wide static assets (SVGs, images)
├── docs/                     # Internal guides (not served as site content)
│   ├── CONTENT-GUIDE.md      # Detailed content workflow documentation
│   └── MONETIZATION.md       # Notes on ads/affiliate strategy
├── index.html                # Homepage (hardcoded featured cards)
├── best-of.html              # Full posts listing (dynamic via list.js)
├── post.html                 # Post template (dynamic via post.js)
├── about.html                # About page
├── affiliate-disclosure.html # Affiliate disclosure
├── privacy-policy.html       # Privacy policy
├── terms-and-conditions.html # Terms and conditions
├── disclaimer.html           # Disclaimer
├── cookie-policy.html        # Cookie policy
├── styles.css                # Shared stylesheet
├── script.js                 # Shared site-wide helpers (toast, etc.)
├── post.js                   # Drives post.html — loads metadata + content fragment
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
     "pdf": "posts/my-post-slug/document.pdf"
   }
   ```
   Omit `"published": true` (or set to `false`) to hide the post from listings and related-post suggestions while it is a draft.

2. **Create the article body fragment** at `content/<slug>.html`.  
   The file must contain only the inner HTML (no `<html>`, `<head>`, or `<body>` tags). It is injected verbatim into `<div id="postContent">` by `post.js`.

3. **Add the PDF** (optional) at `posts/<slug>/document.pdf` and set the `"pdf"` field in `posts.json`.  
   A "Download PDF" button appears automatically on the post page.

4. **Update `sitemap.xml`** — add a new `<url>` entry:
   ```xml
   <url><loc>https://www.aiforqa.org/post.html?p=my-post-slug</loc><lastmod>YYYY-MM-DD</lastmod></url>
   ```

5. **Update `index.html`** — if you want the new post to appear in the homepage featured cards, edit the hardcoded card entries there.

### Naming Convention

| Asset | Pattern | Example |
|---|---|---|
| Content fragment | `content/<slug>.html` | `content/my-post-slug.html` |
| PDF download | `posts/<slug>/document.pdf` | `posts/my-post-slug/document.pdf` |
| Slug | lowercase, hyphens only | `my-post-slug` |

---

## Adding a PDF Only (no new article)

Place the file at `posts/<slug>/document.pdf` and make sure the corresponding entry in `data/posts.json` has `"pdf": "posts/<slug>/document.pdf"`.

---

## File Rules

- **One content source per post.** The canonical article body lives in `content/<slug>.html`. Do not create separate full HTML pages for individual articles.
- **No pdf2htmlEX-generated HTML files.** These are large, redundant, and not used by the site. PDFs go in `posts/<slug>/document.pdf` only.
- **No duplicate root-level PDFs.** All PDFs live under `posts/<slug>/document.pdf`.
- **No stub/placeholder files.** Remove any file whose content is empty or a placeholder before committing.

---

## Notes

- `home.js` exists but is not currently wired into `index.html`. The homepage uses hardcoded featured cards. To switch to dynamic cards, add `<div id="latestCards" class="cards three"></div>` to `index.html` and load `<script src="home.js"></script>` before `</body>`.
- `_config.yml` sets a Jekyll theme for GitHub Pages. Because all HTML pages have no Jekyll front-matter, the theme does not affect the rendered output — pages are served as plain HTML.
