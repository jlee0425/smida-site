# smida.fit

The website for Smida, a training log for functional fitness and hybrid racing. Static site, three languages, zero framework JS.

## Stack

- [Astro](https://astro.build) 7 (static output, `compressHTML: 'jsx'` default: add `{' '}` between inline elements on separate lines), TypeScript strict, pnpm, Node 22.12+ (`.nvmrc`)
- Tailwind CSS v4 via `@tailwindcss/vite`; brand tokens in `src/styles/tokens.css` (`@theme`), Astro scoped styles where clearer
- Astro i18n routing + `@astrojs/sitemap` (with hreflang alternates)
- Self-hosted fonts: Archivo variable (wdth axis) in `src/assets/brand/fonts/`, IBM Plex Mono via Fontsource. No third-party requests.
- Playwright smoke tests

## Scripts

| | |
|---|---|
| `pnpm dev` | dev server |
| `pnpm build` | `astro check` (0 errors required) + static build into `dist/` |
| `pnpm preview` | serve `dist/` |
| `pnpm test` | build + preview + Playwright smoke tests (uses the system Chrome: `channel: 'chrome'`) |

## i18n layout

- Locales: `en` (default, unprefixed), `ja`, `ko` → `/`, `/features/`, `/ja/`, `/ja/features/`, `/ko/about/` …
- Pages live once in `src/pages/[...lang]/`; `localeStaticPaths()` emits the three locales.
- All copy is in the typed dictionaries in `src/i18n/ui.ts` (`Dict`); components read `useT(locale)`. Adding a string to `Dict` makes `astro check` fail until every locale has it.
- Every page has `hreflang` alternates (+ `x-default`) and a language switcher that links to the same page in the other locales (plain links, works without JS).
- GitHub Pages can't redirect on `Accept-Language`, so `/` carries a tiny inline script: a `ja*` / `ko*` browser goes to `/ja/` or `/ko/` unless the visitor picked a language in the switcher (remembered in `localStorage`). Without JS, `/` is simply the English page.

## Design tokens

`src/styles/tokens.css` is the single token file, named after the app's design tokens so a sync is mechanical (`surfaceCard` → `--color-surface-card` → `bg-surface-card`). Brand assets (wordmark SVG, s-icon SVG, Archivo) are in `src/assets/brand/`.

## App screens

The home page phone shows real captures from the app (`src/assets/screens/<screen>.<locale>.webp`, 780 px wide, status bar and gesture bar blanked so no clock or icons show). Astro (`sharp`) turns them into AVIF + WebP at 360 / 720 w at build time. The share cards on the home page are HTML/CSS renders (`src/components/ShareCards.astro`).

`src/components/mocks/*` (features page) are still HTML/CSS stand-ins.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds with `withastro/action` and publishes with `actions/deploy-pages` on every push to `main`.

1. Repo Settings → Pages → Source: **GitHub Actions**.
2. Custom domain `smida.fit` (kept in `public/CNAME`); tick "Enforce HTTPS".
3. DNS at the registrar (Porkbun): apex `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and optionally the `AAAA` `2606:50c0:8000::153` … `8003::153`); `www` `CNAME` → `jlee0425.github.io`.

Alternatives, if ever needed (it's a plain static `dist/`): Netlify or Cloudflare Pages with build `pnpm build`, output `dist`; both can also do the language redirect at the edge.

## Privacy / terms

Drafts are kept out of the repo (`drafts/` is git-ignored) until approved; nothing links to them.
