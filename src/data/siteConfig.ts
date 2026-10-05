/**
 * Everything the owner may want to change lives here.
 * Change the Instagram handle once and every DM button, link and label follows.
 */

const instagramHandle = 'thekeepsakeclubb'

export interface SiteConfig {
  name: string
  tagline: string
  location: string
  instagramHandle: string
  instagramUrl: string
  /** Opens an Instagram DM thread with the shop. */
  dmUrl: string
  /**
   * WhatsApp number in international format, digits only (e.g. '201001234567').
   * Leave empty to hide every "order on whatsapp" option.
   */
  whatsappNumber: string
  /** Message copied to the clipboard by generic "dm us" buttons. */
  defaultDmMessage: string
  /**
   * Optional original artwork. When set (e.g. '/images/logo.svg'), these files are used
   * instead of the built-in vector traces of the logo and wordmark.
   */
  logoSrc?: string
  wordmarkSrc?: string
  siteUrl: string
}

export const siteConfig: SiteConfig = {
  name: 'The Keepsake Club',
  tagline: 'for the memories worth keeping.',
  location: 'egypt based',
  instagramHandle,
  instagramUrl: `https://www.instagram.com/${instagramHandle}/`,
  dmUrl: `https://ig.me/m/${instagramHandle}`,
  whatsappNumber: '',
  defaultDmMessage: "hi! i'd love to order a gift from the keepsake club 🎀",
  logoSrc: undefined,
  wordmarkSrc: undefined,
  // TODO: confirm with owner: the final domain (also update og:url / og:image in index.html)
  siteUrl: 'https://thekeepsakeclub.com',
}

export const navLinks = [
  { label: 'shop', href: '#shop' },
  { label: 'how it works', href: '#how-it-works' },
  { label: 'personalize', href: '#personalize' },
  { label: 'instagram', href: '#instagram' },
] as const
