# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # eslint check
```

No test suite is configured.

## Architecture

**Next.js 15 App Router** project. All pages live in `src/app/`, all UI in `src/components/`.

### Pages → Component mapping

| Route | Page file | Components used |
|---|---|---|
| `/` | `app/page.tsx` | `Hero`, `FlowSection`, `PainSection`, `ComparisonSection`, `CTASection`, `BrandsSection` |
| `/how-it-works` | `app/how-it-works/page.tsx` | everything in `components/how/` |
| `/about` | `app/about/page.tsx` | everything in `components/about/` |
| `/partners` | `app/partners/page.tsx` | everything in `components/partners/` |

`Header` and `Footer` are shared across all pages (rendered in each page, not the root layout).

`src/app/layout.tsx` only sets metadata, fonts, and wraps the app in `SmoothScroll` (Lenis).

### API

`src/app/api/partner/route.ts` — single POST endpoint that sends partner inquiry emails via **Resend**. Requires `RESEND_API_KEY` env variable.

## Styling

**Tailwind CSS v4** — configured via `postcss.config.mjs`, no `tailwind.config.ts` theme extensions. All custom values are used inline.

**Brand colors** (used as raw hex everywhere, not as Tailwind tokens):
- Orange: `#d66501` — primary CTAs, accents
- Purple: `#855dda` — secondary CTAs, hover states, header logo gradient
- Dark text: `#1E1E1E`

**Gradients** (logo, headline, loading bar) always go orange → purple:
```ts
background: "linear-gradient(90deg, #d66501, #855dda)"
```

Text gradient pattern (used in headlines):
```ts
style={{ background: "linear-gradient(...)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
```

**Dark sections** use `#111` background. Site is forced light-mode only (`color-scheme: light` in globals.css).

**Font:** Manrope (Google Fonts, weights 300–800), loaded in `layout.tsx` as `--font-manrope`. Applied globally in `globals.css` via `*:not(code)` selector.

**Custom CSS classes** in `globals.css`: `.animate-loading-bar`, `.animate-marquee`, `.scrollbar-hide`.

## Animations

All scroll-triggered animations use **Framer Motion** `whileInView` with `viewport={{ once: true }}`. Standard entrance:
```ts
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
```

The cubic-bezier `[0.22, 1, 0.36, 1]` is used consistently across the whole site.

## Key patterns

**Carousels/auto-advance:** `FlowSection` (4.5 s), `CTASection` video switcher (10 s), `PartnerSegments` (5 s) — all managed with `useEffect` + `setInterval`, paused on user interaction.

**Partner modal (`PartnerModal.tsx`):** opened by any "Стать партнёром" button sitewide. Sends `FormData` to `/api/partner`. Success state auto-closes after 3 s.

**Before/After slider (`Hero.tsx`):** drag + click interaction, reveals `After` image. Hotspot cards (product name + price) appear on the After side; click outside or drag closes them.

**Interactive phone (`how/HeroInteractive.tsx`):** follows cursor on desktop using `mousemove`. Falls back to auto-demo loop when idle.

## Content language

All copy is in Russian. The site targets Russian-speaking B2C users (main site) and B2B partners (Partners page). The About and Partners pages have some content currently aimed at partners that should eventually be split out.
