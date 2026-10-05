import { siteConfig } from '../../data/siteConfig'
import { LOGO_PATH, LOGO_VIEWBOX, WORDMARK_PATH, WORDMARK_VIEWBOX } from './brandPaths'

/** Rendered once (in App); every Logo / Wordmark below points at these symbols. */
export function BrandSprite() {
  return (
    <svg aria-hidden focusable={false} width="0" height="0" className="absolute">
      <symbol id="ks-logo" viewBox={LOGO_VIEWBOX}>
        <path fill="currentColor" d={LOGO_PATH} />
      </symbol>
      <symbol id="ks-wordmark" viewBox={WORDMARK_VIEWBOX}>
        <path fill="currentColor" d={WORDMARK_PATH} />
      </symbol>
    </svg>
  )
}

interface MarkProps {
  className?: string
  /** Accessible name; pass '' for purely decorative use. */
  title?: string
}

function Mark({ id, viewBox, className, title }: MarkProps & { id: string; viewBox: string }) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      focusable={false}
    >
      <use href={`#${id}`} />
    </svg>
  )
}

/** The EK ribbon-heart monogram. Uses `siteConfig.logoSrc` when the original file is provided. */
export function Logo({ className, title = 'The Keepsake Club' }: MarkProps) {
  if (siteConfig.logoSrc) return <img src={siteConfig.logoSrc} alt={title} className={className} />
  return <Mark id="ks-logo" viewBox={LOGO_VIEWBOX} className={className} title={title} />
}

/** The hand-cut "THE KEEPSAKE CLUB" wordmark. */
export function Wordmark({ className, title = 'The Keepsake Club' }: MarkProps) {
  if (siteConfig.wordmarkSrc) return <img src={siteConfig.wordmarkSrc} alt={title} className={className} />
  return <Mark id="ks-wordmark" viewBox={WORDMARK_VIEWBOX} className={className} title={title} />
}
