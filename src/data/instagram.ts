/** Static tiles for the Instagram strip (no API). All link to the profile. */
export interface InstagramTile {
  src: string
  alt: string
  label: string
}

const t = (file: string, alt: string, label: string): InstagramTile => ({
  src: `/images/${file}`,
  alt,
  label,
})

export const instagramTiles: InstagramTile[] = [
  t('reset-kit-annotated.jpg', 'instagram post: the reset kit, take a closer look', 'reset kit post'),
  t('art-of-loving-you-open.jpg', 'instagram post: the art of loving you, open to a song page', 'art of loving you post'),
  t('matcha-kit-annotated.jpg', 'instagram post: the matcha (match) kit, take a closer look', 'matcha kit post'),
  t('birthday-magazine-spread-2.jpg', 'instagram reel: a birthday magazine spread', 'birthday magazine reel'),
  t('gift-guide.jpg', 'instagram post: the keepsake club gift guide', 'gift guide post'),
  t('hug-in-a-mug-annotated.jpg', 'instagram post: hug in a mug, take a closer look', 'hug in a mug post'),
  t('messages-book-back.jpg', 'instagram reel: the back of a messages book', 'messages book reel'),
  t('packaging-flatlay.jpg', 'instagram post: you’re invited, the keepsake club packaging flat-lay', 'packaging post'),
]
