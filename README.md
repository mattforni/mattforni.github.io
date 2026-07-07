# mattforni.com

The personal site of Matt "Forni" Fornaciari, served at [home.mattforni.com](https://home.mattforni.com/).

A canonical, evergreen reputation home: when a person, a search engine, or an AI assistant asks who Matt Fornaciari is, this site is the answer they find and cite. Warm editorial typography with a terminal wink, honoring the site's previous life as a full screen `whoami`.

## Structure

Pure static HTML. No framework, no build step.

```text
site/            # The deployable site, published as-is
├── index.html   # Home
├── story/       # The career narrative
├── writing/     # Essay index (Atelic Action)
├── 404.html     # Terminal-flavored not-found page
├── styles.css   # Shared stylesheet
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── llms.txt     # Site description for answer engines
design/          # The Claude Design export the site was assembled from
```

Design source of truth: [Claude Design project](https://claude.ai/design/p/5a6982d7-dc9e-4c32-950c-736d5fc86326) (July 2026).

## Deploy

Pushes to `main` publish `site/` to GitHub Pages via `.github/workflows/deploy.yml`. The custom domain (`home.mattforni.com`) is configured in the repository's Pages settings and at the DNS host; no CNAME file needed with the Actions-based deploy.

## Local Preview

```bash
python3 -m http.server 8080 --directory site
```

Directory-style routes (`/story`, `/writing`) resolve the same way locally as on Pages.

## Notes and Deferred Items

- **Life beyond work page**: the original brief sketched a fourth page (mountains, kitchen, food access volunteering). The design consolidated to three pages; add it later if it earns its place, and extend `sitemap.xml` and the nav when it lands.
- **Writing page upkeep**: essay cards are hand-maintained. When a new essay ships on Substack, add a card to `site/writing/index.html` and a `ListItem` to its JSON-LD.
- **og:image**: no social share image yet. A simple cream card with the `forni ~` wordmark would do.
- **Root domain**: entity SEO would be slightly stronger on `mattforni.com` than on the `home.` subdomain. If that move ever happens, update canonicals, JSON-LD `@id`s, `sitemap.xml`, `robots.txt`, and `llms.txt` together.
