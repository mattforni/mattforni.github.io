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

Design provenance: [Claude Design project](https://claude.ai/design/p/5a6982d7-dc9e-4c32-950c-736d5fc86326) (July 2026). The live pages in `site/` are the source of truth; they have deliberately diverged from the export (real essay titles, cascade fixes, hand-authored SEO heads). Do not regenerate pages from `design/`.

## Deploy

Hosted on Vercel as `ryllc/mattforni-com` (Vercel no longer allows personal accounts as a project scope, so it lives on the `ryllc` team). `vercel.json` at the repo root declares the site as buildless static output from `site/` with clean URLs. Pushes to `main` deploy to production via the Vercel git integration; pull requests get preview deploys. `home.mattforni.com` points at Vercel via a CNAME at the DNS host.

DNS cutover to Vercel completed 2026-07-07; the legacy GitHub Pages workflow has been removed and Pages should remain disabled in the repo settings.

## Local Preview

```bash
npx serve site
```

Directory-style routes (`/story`, `/writing`) resolve the same way locally as on Vercel.

## Notes and Deferred Items

- **Life beyond work page**: the original brief sketched a fourth page (mountains, kitchen, food access volunteering). The design consolidated to three pages; add it later if it earns its place, and extend `sitemap.xml` and the nav when it lands.
- **Writing page upkeep**: essay cards are hand-maintained. When a new essay ships on Substack, add a card to `site/writing/index.html` and a `ListItem` to its JSON-LD.
- **og:image**: no social share image yet. A simple cream card with the `forni ~` wordmark would do.
- **Root domain**: entity SEO would be slightly stronger on `mattforni.com` than on the `home.` subdomain. If that move ever happens, grep `site/` for `home.mattforni.com` and fix every hit (canonicals, og:url, JSON-LD `@id`s and `url`s, `sitemap.xml`, `robots.txt`, `llms.txt`), and keep `home.mattforni.com` alive as a permanent 301 to the root so existing backlinks, index entries, and AI citations follow.
- **Self-hosted fonts**: the Google Fonts stylesheet is the only render-blocking third-party request and the dominant cold-load LCP cost. Self-hosting the two families as preloaded woff2 with a metric-compatible fallback (`size-adjust`/`ascent-override`) would remove the extra connections and the font-swap layout shift.
