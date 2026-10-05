import type { CSSProperties, ReactNode } from 'react'
import { cn } from '../../lib/cn'

/** SVG path for a scalloped circle in a 100x100 box. */
function scallopCirclePath(bumps: number, radius = 43) {
  const step = (Math.PI * 2) / bumps
  const chord = 2 * radius * Math.sin(step / 2)
  const pt = (i: number) => {
    const a = i * step - Math.PI / 2
    return `${(50 + radius * Math.cos(a)).toFixed(2)} ${(50 + radius * Math.sin(a)).toFixed(2)}`
  }
  let d = `M${pt(0)}`
  for (let i = 1; i <= bumps; i++) d += `A${(chord / 2).toFixed(2)} ${(chord / 2).toFixed(2)} 0 0 1 ${pt(i)}`
  return `${d}Z`
}

const circleMask = (bumps: number) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='${scallopCirclePath(bumps)}'/></svg>`,
  )}")`

/** Outward scallops along every edge of a box of any size (bump radius r). */
const rectMask = (r: number): CSSProperties => {
  const dot = 'radial-gradient(circle closest-side, #000 97%, #0000 100%)'
  const image = ['linear-gradient(#000 0 0)', dot, dot, dot, dot].join(',')
  const size = `calc(100% - ${2 * r}px) calc(100% - ${2 * r}px), ${2 * r}px ${2 * r}px, ${2 * r}px ${2 * r}px, ${2 * r}px ${2 * r}px, ${2 * r}px ${2 * r}px`
  const position = 'center, 0 0, 0 100%, 0 0, 100% 0'
  const repeat = 'no-repeat, round no-repeat, round no-repeat, no-repeat round, no-repeat round'
  return {
    maskImage: image,
    maskSize: size,
    maskPosition: position,
    maskRepeat: repeat,
    WebkitMaskImage: image,
    WebkitMaskSize: size,
    WebkitMaskPosition: position,
    WebkitMaskRepeat: repeat,
  }
}

interface ScallopProps {
  children?: ReactNode
  className?: string
  shape?: 'circle' | 'rect'
  /** circle: number of bumps. rect: bump radius in px. */
  size?: number
  style?: CSSProperties
}

/**
 * Stamp / scalloped edges via an SVG (circle) or gradient (rect) mask.
 * Masks clip box-shadows, so wrap in an element with `drop-shadow` for depth.
 */
export function Scallop({ children, className, shape = 'circle', size, style }: ScallopProps) {
  const mask: CSSProperties =
    shape === 'circle'
      ? {
          maskImage: circleMask(size ?? 20),
          WebkitMaskImage: circleMask(size ?? 20),
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }
      : rectMask(size ?? 7)
  return (
    <div className={cn(shape === 'circle' && 'aspect-square', className)} style={{ ...mask, ...style }}>
      {children}
    </div>
  )
}
