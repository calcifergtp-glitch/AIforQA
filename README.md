# AI for QA

Static website publishing practical content about artificial intelligence in pharmaceutical quality assurance. The public site is https://www.aiforqa.org and the current host is GitHub Pages.

## Current site structure

```text
/
├── index.html                 # Homepage
├── articles.html              # Static article listing
├── articles/                  # Full crawlable article pages and legacy routes
├── tools/index.html           # Downloadable tools directory
├── tools/                     # Tool landing pages and downloadable PDF/DOCX files
├── about.html                 # Site and author information
├── privacy-policy.html        # Privacy disclosures
├── cookie-policy.html         # Cookie disclosures
├── terms-and-conditions.html  # Site terms
├── disclaimer.html            # Educational-use disclaimer
├── affiliate-disclosure.html  # Affiliate disclosure
├── data/posts.json            # Published article metadata
├── sitemap.xml                # Canonical pages submitted to search engines
├── robots.txt                 # Crawl instructions
├── assets/                    # Images, icons, and other static assets
├── styles.css                 # Shared site styling
├── script.js                  # Mobile menu and toast helpers
└── .github/workflows/         # GitHub Pages deployment workflow
```

There is no current `resources.html`, `pdfs/`, or `posts/` publishing directory. Article PDFs and tool PDF/DOCX downloads currently live under `tools/`.

## Adding an article

1. Create a complete, crawlable page at `/articles/<slug>.html`. Follow the current article template and include a descriptive title, summary, canonical URL, robots directive, references, and Article structured data where appropriate.
2. Add a visible article card to `articles.html`.
3. Add or update the article's record in `data/posts.json`, including `slug`, `title`, `summary`, `category`, `date`, `readingTime`, `published`, and relevant `tags`.
4. Add the canonical article URL to `sitemap.xml`.
5. If the article has a downloadable companion, place it under `tools/` and link it from the article. Do not add a broken download link.

## Publishing a downloadable tool

1. Create a crawlable landing page under `/tools/<slug>.html`.
2. Place the downloadable file or files under `/tools/` and link them from the landing page.
3. Add the landing page to `tools/index.html` and `sitemap.xml`.
4. Verify the download URL resolves and the landing page has a canonical URL and useful description.

## Validation before publication

- Confirm every local link and referenced file resolves.
- Confirm the article/tool landing page has one descriptive H1, a canonical URL on `https://www.aiforqa.org`, and the intended robots directive.
- Confirm the article metadata matches `data/posts.json`, the article listing, and sitemap.
- Review all regulatory statements against current primary sources.
- Check desktop and mobile layouts and the rendered download links.
- Deploy only through the configured GitHub Pages workflow after the required approvals.

## Legacy routes

- `post.html?p=<slug>` redirects to `/articles/<slug>.html`.
- `best-of.html` redirects to `/articles.html`.

Keep legacy redirects only where they preserve useful existing links; do not introduce new links to the legacy route.

## Canonical domain and design

The `CNAME` file configures `www.aiforqa.org`. Canonical URLs, Open Graph URLs, robots.txt, and sitemap entries should use `https://www.aiforqa.org`.

Primary article content must remain static HTML rather than JavaScript-injected text. Keep the shared design consistent with `styles.css`.
