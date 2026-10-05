/**
 * The catalog, taken from the Instagram posts (captions quoted where possible).
 * Images live in /public/images; replacing a file with the same name needs no code change.
 * Hotspot x / y are percentages of the image they sit on.
 */

export type ProductCategory = 'bundle' | 'book'

export interface ImageAsset {
  src: string
  alt: string
  /** Shown on the placeholder if the file is missing. */
  label: string
  width: number
  height: number
  /** CSS object-position when the image is cropped into a frame. */
  position?: string
}

export interface Hotspot {
  id: string
  label: string
  note: string
  x: number
  y: number
  /** Which side of the dot the spotlight label sits on (default: left when the dot is right of centre). */
  side?: 'left' | 'right'
}

export interface Product {
  id: string
  name: string
  category: ProductCategory
  /** One-liner shown on cards. */
  tagline: string
  description: string
  /** The Instagram caption, kept for flavour. */
  caption: string
  inside: string[]
  badges: string[]
  bestSeller?: boolean
  /** Small handwritten tag, e.g. "restocked". */
  tag?: string
  /** Leave undefined until confirmed: nothing renders. Amount in EGP. */
  price?: number
  theme: 'cream' | 'blush' | 'ink' | 'burgundy' | 'bubblegum'
  image: ImageAsset
  /** Brand's own "take a closer look.." graphic, when one exists. */
  annotatedImage?: ImageAsset
  /** For products without a brand graphic: a second still annotated with doodles. */
  detailImage?: ImageAsset
  /** Hotspots on `detailImage` (books) or on `image` (bundles, used by the spotlight). */
  hotspots: Hotspot[]
  dmMessage: string
}

const img = (
  file: string,
  alt: string,
  label: string,
  width: number,
  height: number,
  position?: string,
): ImageAsset => ({ src: `/images/${file}`, alt, label, width, height, position })

export const products: Product[] = [
  {
    id: 'reset-kit',
    name: 'the reset kit',
    category: 'bundle',
    tagline: "your 'i have my life together' starter pack.",
    description:
      'a handmade woven basket with a polka-dot pouch, hair mist, body lotion, hair clips and a claw clip. dont know what to get her? we’ve got you covered.',
    caption: 'dm to claim yours<3',
    inside: ['polka-dot pouch', 'hair mist', 'body lotion', 'hair clips', 'claw clip'],
    badges: ['handmade basket', 'ready to gift', 'personalized card included'],
    bestSeller: true,
    theme: 'cream',
    image: img(
      'reset-kit.jpg',
      'the reset kit: a woven basket with wooden handles holding a quilted polka-dot pouch, a hair mist box, a body lotion bottle, black hair clips and a black claw clip',
      'reset kit',
      784,
      980,
    ),
    annotatedImage: img(
      'reset-kit-annotated.jpg',
      'the reset kit, take a closer look: arrows label the hair mist, body lotion, claw clip, hair clips and pouch',
      'reset kit closer look',
      784,
      980,
    ),
    hotspots: [
      { id: 'pouch', label: 'pouch', note: 'a quilted polka-dot pouch for all her little things.', x: 31, y: 52, side: 'left' },
      { id: 'hair-mist', label: 'hair mist', note: 'a hair mist by the bathland.', x: 61, y: 37 },
      { id: 'body-lotion', label: 'body lotion', note: 'a body lotion by the bathland.', x: 76, y: 41 },
      { id: 'hair-clips', label: 'hair clips', note: 'black hair clips.', x: 56, y: 49 },
      { id: 'claw-clip', label: 'claw clip', note: 'a black claw clip.', x: 75, y: 60 },
    ],
    dmMessage: "hi! i'd like to order the Reset Kit 🎀",
  },
  {
    id: 'matcha-kit',
    name: 'the matcha (match) kit',
    category: 'bundle',
    tagline: 'everything she needs to whisk up her perfect matcha.',
    description:
      'a basket with a personalized card, utensils, a whisk and whisk stand, a bowl, an on-the-go cup, flowers and an “i love you so matcha” card.',
    caption: 'restocked, get yours now through our dms💗',
    inside: ['personalized card', 'utensils', 'whisk', 'whisk stand', 'bowl', 'on-the-go cup', 'flowers'],
    badges: ['ready to gift', 'personalized card included'],
    tag: 'restocked',
    theme: 'ink',
    image: img(
      'matcha-kit.jpg',
      'the matcha kit: a wicker basket with pink roses, a bamboo whisk, a wooden spoon, a ribbed on-the-go cup, a pink scalloped bowl, a white whisk stand and a striped “i love you so matcha” card',
      'matcha kit',
      784,
      980,
    ),
    annotatedImage: img(
      'matcha-kit-annotated.jpg',
      'the matcha (match) kit, take a closer look: arrows label the personalized card, utensils, whisk, on-the-go cup, whisk stand and bowl',
      'matcha kit closer look',
      784,
      980,
    ),
    hotspots: [
      { id: 'flowers', label: 'flowers', note: 'flowers tucked into the basket.', x: 23, y: 17 },
      { id: 'whisk', label: 'whisk', note: 'a bamboo matcha whisk.', x: 44, y: 40 },
      { id: 'utensils', label: 'utensils', note: 'a bamboo scoop and spoon.', x: 60, y: 33 },
      { id: 'cup', label: 'on-the-go cup', note: 'a ribbed cup with a straw, for matcha on the move.', x: 78, y: 42 },
      { id: 'bowl', label: 'bowl', note: 'a pink scalloped bowl.', x: 26, y: 54 },
      { id: 'whisk-stand', label: 'whisk stand', note: 'keeps the whisk in shape between lattes.', x: 50, y: 59 },
      { id: 'card', label: '“i love you so matcha”', note: 'the card that says it for you.', x: 76, y: 58 },
    ],
    dmMessage: "hi! i'd like to order the Matcha (Match) Kit 🍵",
  },
  {
    id: 'hug-in-a-mug',
    name: 'hug in a mug',
    category: 'bundle',
    tagline: 'a cup full of love<3',
    description:
      'a pink mug wrapped in iridescent cellophane and tied with twine, filled with a personalized card, a customizable keychain, a “happy birthday” topper, your fav candy and a claw clip.',
    caption: 'customize your hug in a mug bundle now at the keepsake club🎀',
    inside: ['personalized card', 'customizable keychain', '“happy birthday” topper', 'your fav candy', 'claw clip'],
    badges: ['customizable', 'personalized card included'],
    theme: 'blush',
    image: img(
      'hug-in-a-mug.jpg',
      'hug in a mug: a pink mug wrapped in pink cellophane and twine, with a pink “happy birthday” card, a silver happy birthday topper, chocolate bars and a beaded name keychain',
      'hug in a mug',
      784,
      980,
    ),
    annotatedImage: img(
      'hug-in-a-mug-annotated.jpg',
      'hug in a mug, take a closer look: arrows label the personalized card, customizable keychain, your fav candy and claw clip',
      'hug in a mug closer look',
      588,
      735,
    ),
    hotspots: [
      { id: 'card', label: 'personalized card', note: 'your message, written on a pink card.', x: 57, y: 27 },
      { id: 'topper', label: 'happy birthday topper', note: 'a silver “happy birthday” topper.', x: 53, y: 46 },
      { id: 'candy', label: 'your fav candy', note: 'snickers, milka… tell us their favourites.', x: 60, y: 66 },
      { id: 'keychain', label: 'customizable keychain', note: 'beads that spell out their name.', x: 50, y: 71 },
      { id: 'mug', label: 'the mug', note: 'a pink mug tied with twine and a little tag.', x: 46, y: 85 },
    ],
    dmMessage: "hi! i'd like to order a Hug in a Mug 🎀",
  },
  {
    id: 'birthday-magazine',
    name: 'the birthday magazine',
    category: 'book',
    tagline: '“who’s that girl?” a magazine all about her.',
    description:
      'a custom printed, editorial-style birthday magazine: a cover story, a calendar spread, photo collages and long-form pages about the birthday girl.',
    caption: 'the birthday magazine is available now💌 order through our dms <3',
    inside: ['custom cover', 'calendar spread', 'photo collages', 'pages about her'],
    badges: ['designed for her', 'printed'],
    theme: 'bubblegum',
    image: img(
      'birthday-magazine.jpg',
      'the birthday magazine: a vogue-style printed cover reading “who’s that girl?”, with the words “don’t let instagram be your only archive” over it',
      'birthday magazine',
      656,
      1090,
      '50% 45%',
    ),
    detailImage: img(
      'birthday-magazine-spread.jpg',
      'an open birthday magazine spread titled “the big three”, with dubai, paris and stockholm in big pink letters and travel photos',
      'birthday magazine spread',
      656,
      1090,
      '50% 40%',
    ),
    hotspots: [
      { id: 'spread', label: 'her own spreads', note: 'like “the big three”, her dream trips.', x: 70, y: 25 },
      { id: 'type', label: 'big editorial type', note: '', x: 18, y: 45 },
      { id: 'photos', label: 'her photos', note: '', x: 84, y: 62 },
      { id: 'story', label: 'pages about her', note: '', x: 60, y: 72 },
    ],
    dmMessage: "hi! i'd like to order the Birthday Magazine 💌",
  },
  {
    id: 'art-of-loving-you',
    name: 'the art of loving you',
    category: 'book',
    tagline: 'for all the little moments you never want to forget.',
    description:
      'a burgundy keepsake book with white calligraphy on the cover, filled with your story: a calendar with your date, polaroids, your song, mini-me + mini-you = us, and photo strips.',
    caption: 'the art of loving you, by the keepsake club💌',
    inside: ['calendar page', 'polaroid collage', 'your song', 'mini me + mini you', 'photo strips'],
    badges: ['made for two', 'printed'],
    theme: 'burgundy',
    image: img(
      'art-of-loving-you.jpg',
      'the art of loving you: a burgundy softcover book with “the art of loving you” in white calligraphy',
      'the art of loving you',
      784,
      952,
    ),
    detailImage: img(
      'art-of-loving-you-pages.jpg',
      'inside pages of the art of loving you: a june calendar with a date circled, photo strips, a song page, mini me plus mini you equals us, and a photo collage, with faces covered by hearts',
      'art of loving you pages',
      874,
      874,
    ),
    hotspots: [
      { id: 'calendar', label: 'your date, circled', note: '', x: 22, y: 30 },
      { id: 'strips', label: 'photo strips', note: '', x: 50, y: 16 },
      { id: 'song', label: 'your song', note: '', x: 84, y: 36 },
      { id: 'us', label: 'mini me + mini you = us', note: '', x: 30, y: 74 },
      { id: 'collage', label: 'polaroid collage', note: '', x: 82, y: 80 },
    ],
    dmMessage: "hi! i'd like to order The Art of Loving You book 💌",
  },
  {
    id: 'messages-book',
    name: 'the messages book',
    category: 'book',
    tagline: 'a book filled with messages from everyone who loves them.',
    description:
      'a spiral-bound “happy birthday” book with their photo on the cover, filled with letters from the people who love them most.',
    caption: 'customize your own through our dms🎀',
    inside: ['photo cover', 'letters from their people', 'spiral bound', 'a note on the back'],
    badges: ['customizable', 'printed'],
    theme: 'cream',
    image: img(
      'messages-book.jpg',
      'the messages book: a spiral “happy birthday” book with a photo on the cover, with the words “i think i made THE book for my bsfs 20th bd<3”',
      'messages book',
      656,
      1090,
      '50% 30%',
    ),
    detailImage: img(
      'messages-book-back.jpg',
      'the back of the messages book: “to the girl who deserves the whole world and more, we love you. 20”',
      'messages book back',
      656,
      1090,
      '50% 45%',
    ),
    hotspots: [
      { id: 'letters', label: '20 letters, 20 people', note: '', x: 30, y: 52 },
      { id: 'note', label: 'a note on the back', note: '', x: 38, y: 42 },
      { id: 'spiral', label: 'spiral bound', note: '', x: 58, y: 60 },
    ],
    dmMessage: "hi! i'd like to order a Messages Book 🎀",
  },
]

export const productById = (id: string) => products.find((p) => p.id === id)

export const categories = [
  { id: 'all', label: 'all' },
  { id: 'bundle', label: 'gift bundles' },
  { id: 'book', label: 'keepsake books' },
] as const

export type CategoryFilter = (typeof categories)[number]['id']

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-EG', { style: 'currency', currency: 'EGP', maximumFractionDigits: 0 }).format(
    price,
  )
