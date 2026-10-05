# Images

Every photo on the site lives in this folder. **To swap in an original, save it here with the exact same
filename** (same name, `.jpg`). No code changes are needed: the site picks it up on the next build/deploy.
If a file is ever missing, the site shows a soft pink placeholder with a label instead of a broken image.

All of the files below are **screenshots taken from the Instagram page** (cleaned up: carousel arrows,
cursor and dots removed, re-saved as progressive JPEG). They look fine at the sizes used, but please
replace them with the original photo files before launch: they will be noticeably sharper.

Recommended for replacements: JPEG, about 1200-1600px on the long side, under ~250 KB each,
same aspect ratio as listed (other ratios work too, they are cropped to fit).

| File | What it is | Used in | Ratio |
|---|---|---|---|
| `reset-kit.jpg` | The Reset Kit basket, flat-lay photo | hero, collection card, "take a closer look" spotlight (hotspots) | 4:5 |
| `reset-kit-annotated.jpg` | "The Reset Kit, take a closer look.." post graphic | collection card (flip side), instagram strip | 4:5 |
| `matcha-kit.jpg` | The Matcha (Match) Kit basket photo | hero, collection card, spotlight (hotspots) | 4:5 |
| `matcha-kit-annotated.jpg` | "The Matcha (Match) Kit, take a closer look.." post graphic | collection card (flip side), instagram strip | 4:5 |
| `hug-in-a-mug.jpg` | Hug in a Mug styled photo | hero, collection card, spotlight (hotspots) | 4:5 |
| `hug-in-a-mug-annotated.jpg` | "Hug in a Mug, take a closer look.." post graphic | collection card (flip side), instagram strip | 4:5 |
| `birthday-magazine.jpg` | "Who's That Girl?" magazine cover (reel still with text) | hero, collection card, keepsake books | 9:16 |
| `birthday-magazine-spread.jpg` | "The Big Three" magazine spread (reel still) | collection card (flip side), keepsake books (inside page) | 9:16 |
| `birthday-magazine-spread-2.jpg` | second magazine spread (reel still) | instagram strip | 9:16 |
| `birthday-magazine-pages.jpg` | magazine flipping pages (reel still) | not used yet (spare) | 9:16 |
| `art-of-loving-you.jpg` | "The Art of Loving You" burgundy cover | collection card, keepsake books | ~4:5 |
| `art-of-loving-you-pages.jpg` | inside pages collage | collection card (flip side), keepsake books (inside page) | 1:1 |
| `art-of-loving-you-open.jpg` | book open in hand | instagram strip | 1:1 |
| `messages-book.jpg` | messages book cover (reel still with text) | collection card, keepsake books | 9:16 |
| `messages-book-back.jpg` | messages book back cover, "20" (reel still) | collection card (flip side), keepsake books (inside page), instagram strip | 9:16 |
| `matcha-kit-reel.jpg`, `matcha-kit-so-matcha.jpg` | matcha kit reel stills | not used yet (spares) | 9:16 |
| `gift-guide.jpg` | "Gift Guide" post | instagram strip | 4:5 |
| `packaging-flatlay.jpg` | "you're invited" packaging flat-lay | instagram strip | 1:1 |
| `packaging-bag.jpg` | "live now" bag + tag post | not used yet (spare) | ~4:5 |
| `brand-film-still.jpg` | "the only playbook we trust" reel still | not used yet (spare) | 16:9 |
| `logo-reveal.jpg` | logo post | not used (the logo is drawn as a vector) | 1:1 |

## Hotspots

The numbered dots in the "take a closer look" spotlight and the doodle labels on the book cards are placed
by percentage on these exact photos (see `hotspots` in `src/data/products.ts`). If a replacement photo is
framed differently, nudge the `x` / `y` numbers there.

## Logo and wordmark

The EK monogram and the "THE KEEPSAKE CLUB" wordmark are vector traces of the Instagram posts, built into
the code (`src/components/doodles/brandPaths.ts`). To use the original artwork instead, add
`logo.svg` / `wordmark.svg` here and set `logoSrc: '/images/logo.svg'` and
`wordmarkSrc: '/images/wordmark.svg'` in `src/data/siteConfig.ts`.

## Not used on purpose

The customer feedback screenshots from the "you" highlight are private chats and are **not** included.
Add customer quotes as text only, with consent, in `src/data/testimonials.ts`.
