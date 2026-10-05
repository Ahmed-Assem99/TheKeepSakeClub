import type { Hotspot, ImageAsset } from '../../data/products'
import { cn } from '../../lib/cn'
import { coverPoint } from '../../lib/coverPoint'
import { Img } from './Img'

interface Props {
  image: ImageAsset
  hotspots: Hotspot[]
  /** Frame width / height, used to place labels on the cropped image. */
  aspect?: number
  className?: string
  tint?: 'pink' | 'cream' | 'ink' | 'burgundy'
}

/**
 * A still with "take a closer look.." doodle labels, for products that have no
 * annotated graphic of their own (the books). Purely visual: the labels repeat
 * the "what's inside" list that is already in the card text.
 */
export function AnnotatedView({ image, hotspots, aspect = 4 / 5, className, tint = 'pink' }: Props) {
  return (
    <div className={cn('relative h-full w-full', className)}>
      <Img src={image.src} alt={image.alt} label={image.label} position={image.position} tint={tint} className="absolute inset-0" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-keepsake-ink/45 via-transparent to-keepsake-ink/25" />
      <p aria-hidden className="absolute inset-x-0 top-3 text-center font-hand text-2xl text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]">
        take a closer look..
      </p>
      <ul aria-hidden>
        {hotspots.map((h) => {
          const p = coverPoint(h.x, h.y, image, aspect, image.position)
          if (!p) return null
          const right = p.x < 55
          return (
            <li key={h.id} className="absolute" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
              <span className="absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-keepsake-ribbon shadow" />
              <span
                className={cn(
                  'absolute top-0 flex -translate-y-1/2 items-center gap-1 whitespace-nowrap',
                  right ? 'left-2.5' : 'right-2.5 flex-row-reverse',
                )}
              >
                <svg viewBox="0 0 28 12" className={cn('w-6 text-white', !right && '-scale-x-100')} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 8C9 2 17 2 26 6" />
                </svg>
                <span className="rounded-full bg-white/95 px-2.5 py-0.5 font-hand text-[1.05rem] leading-tight text-keepsake-ink shadow-soft">
                  {h.label}
                </span>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
