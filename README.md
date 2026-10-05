# The Keepsake Club

Landing page for **The Keepsake Club**, an Egypt-based gift shop that sells through Instagram DMs
([@thekeepsakeclubb](https://www.instagram.com/thekeepsakeclubb/)). _for the memories worth keeping._

React + TypeScript + Tailwind CSS + Framer Motion, powered by Vite. No cart, no checkout: every
"order via dm" button copies a pre-written message to the clipboard, shows a little toast, and opens the
Instagram DM.

## Scripts

- `npm run dev`: start the dev server at http://localhost:3000
- `npm run build`: type-check, build, and pre-render the page into `dist/index.html`
- `npm run preview`: preview the production build
- `npm run lint`: lint with oxlint

## Where things live

| What | Where |
|---|---|
| Instagram handle, DM link, WhatsApp number, logo overrides | `src/data/siteConfig.ts` |
| Products (names, copy, "what's inside", badges, hotspots, DM messages, optional prices) | `src/data/products.ts` |
| Shop policy (from the "policy" highlight) | `src/data/policy.ts` |
| FAQ | `src/data/faq.ts` |
| How it works steps + "good to know" | `src/data/steps.ts` |
| Customer quotes ("love notes", hidden while empty) | `src/data/testimonials.ts` |
| Instagram strip tiles | `src/data/instagram.ts` |
| Photos | `public/images/` (see `public/images/README.md`) |
| Colors, fonts, shadows | `tailwind.config.ts` (`keepsake` namespace) + `src/index.css` |

Components are split into `src/components/layout`, `sections`, `ui` (Button, Badge, Scallop, Sticker,
DoodleArrow, Marquee, Accordion, Toast, Img, DmButton…) and `doodles` (inline SVG doodles and the
traced EK logo / wordmark).

## Common edits

- **Add a price:** set `price: 950` on a product in `src/data/products.ts`. It shows on the card as EGP.
- **Turn on WhatsApp:** set `whatsappNumber: '201xxxxxxxxx'` in `src/data/siteConfig.ts`. Every order
  button gets an "order on whatsapp" partner.
- **Swap a photo:** drop a file with the same name into `public/images/`.
- **Add testimonials:** add `{ id, quote, name? }` entries to `src/data/testimonials.ts` (with consent).

## Open TODOs (search the code for `TODO: confirm with owner`)

- Delivery areas and fees, payment methods, prices (FAQ shows friendly fallbacks; in dev they carry a
  yellow TODO badge).
- Final domain for canonical / Open Graph URLs (`index.html`, `public/robots.txt`, `public/sitemap.xml`,
  `siteConfig.siteUrl`).
- Original high-res photos to replace the Instagram screenshots.
- Customer consent for testimonials.

## How it's built for speed

The page is pre-rendered at build time (`src/entry-server.tsx` + `scripts/prerender.mjs`), so text and
links appear before any JavaScript runs. `src/boot.ts` then loads the app after the page's first
resources finish and hydrates it. Fonts are self-hosted with preloads and size-matched fallbacks
(no layout shift on swap), and off-screen sections use `content-visibility: auto`.
