# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

The personal site of Matt "Forni" Fornaciari, served at https://home.mattforni.com/. It is a reputation home: evergreen, built to be the canonical answer when a person, search engine, or AI assistant asks who Matt Fornaciari is. Pure static HTML in `site/` with no framework, no dependencies, and no build step.

## Commands

There is nothing to build, lint, or test. Local preview:

```bash
npx serve site
```

Directory routes (`/story`, `/writing`) resolve the same locally as on Vercel.

## Deploy

Hosted on Vercel as `ryllc/mattforni-com` (Vercel no longer allows personal accounts as a project scope, so it lives on the `ryllc` team). Root `vercel.json` declares buildless static output from `site/` with clean URLs. Pushes to `main` deploy to production through the Vercel git integration; pull requests get preview deploys. `home.mattforni.com` is a CNAME to Vercel. **A merge to main is an immediate production deploy.** The legacy GitHub Pages workflow survives only until DNS cutover is confirmed, then gets deleted.

## Structure and Conventions

- `site/` is the deployable unit: `index.html` (home), `story/index.html`, `writing/index.html`, `404.html`, `styles.css`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `llms.txt`.
- `design/` holds the Claude Design export the site was assembled from ([design project](https://claude.ai/design/p/5a6982d7-dc9e-4c32-950c-736d5fc86326)). It is provenance, not deployed; the live pages in `site/` are the source of truth and have diverged from it (real essay titles, cascade fixes, SEO heads).
- Each page hand-authors its own head: unique title, meta description, canonical, Open Graph, Twitter card, and JSON-LD. The home page defines the `Person` entity at `@id: https://home.mattforni.com/#person`; other pages reference that `@id` rather than redefining the person. When touching one head, keep the others consistent.
- Adding or renaming a page means updating the nav on every page, `sitemap.xml`, and `llms.txt` together.
- The Writing page's essay cards are hand-maintained. A new essay needs a card in `site/writing/index.html` and a matching `ListItem` in that page's JSON-LD.
- Voice and aesthetic: warm editorial serif (Newsreader) with a terminal wink (IBM Plex Mono `$ command` eyebrows). Copy stays evergreen — no "currently," no dated status lines. The play lives in the terminal conceit; the content stays real, semantic, crawlable HTML.
- CSS gotcha: single-class selectors share specificity, so later rules in `styles.css` silently win. Set only the sides you mean (e.g. `.sect{padding-top:44px}`, never a `padding` shorthand that would zero `.wrap`'s horizontal gutters).

## Deferred Items

Tracked in `README.md`: a possible "life beyond work" page, an og:image for link previews, and a potential move from the `home.` subdomain to the root domain (which would require updating canonicals, JSON-LD `@id`s, sitemap, robots, and llms.txt together).
