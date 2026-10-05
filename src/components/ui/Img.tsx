import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type Tint = 'pink' | 'cream' | 'ink' | 'burgundy'

const tints: Record<Tint, string> = {
  pink: 'from-keepsake-bubblegum via-keepsake-blush to-keepsake-petal text-keepsake-burgundy',
  cream: 'from-keepsake-cream via-keepsake-petal to-keepsake-blush text-keepsake-burgundy',
  ink: 'from-keepsake-ink via-[#2a1c27] to-keepsake-burgundy-deep text-keepsake-bubblegum',
  burgundy: 'from-keepsake-burgundy via-keepsake-burgundy-deep to-keepsake-ink text-keepsake-cream',
}

export interface ImgProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'className'> {
  src: string
  alt: string
  /** Shown on the placeholder if the file is missing, e.g. "reset kit". */
  label?: string
  /** Above-the-fold images: load eagerly with high priority. */
  priority?: boolean
  tint?: Tint
  /** Classes for the frame (size, radius, aspect ratio). */
  className?: string
  /** Classes for the <img> itself. */
  imgClassName?: string
  /** CSS object-position. */
  position?: string
}

/**
 * Image with a soft blush placeholder while loading and a tinted, labelled fallback
 * if the file is missing. Drop a file with the same name into /public/images and it shows up.
 */
export function Img({
  src,
  alt,
  label,
  priority = false,
  tint = 'pink',
  className,
  imgClassName,
  position,
  ...rest
}: ImgProps) {
  const [state, setState] = useState<'loading' | 'loaded' | 'error'>('loading')
  const ref = useRef<HTMLImageElement>(null)

  // Cached images can finish before React attaches onLoad.
  useEffect(() => {
    const el = ref.current
    if (el?.complete) setState(el.naturalWidth > 0 ? 'loaded' : 'error')
  }, [src])

  return (
    <div className={cn('relative overflow-hidden bg-keepsake-blush', className)}>
      {state !== 'error' && (
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
          style={position ? { objectPosition: position } : undefined}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-500',
            state === 'loaded' || priority ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
          {...rest}
        />
      )}
      {state === 'loading' && !priority && (
        <div aria-hidden className="absolute inset-0 animate-pulse bg-gradient-to-br from-keepsake-blush to-keepsake-petal" />
      )}
      {state === 'error' && (
        <div
          role="img"
          aria-label={alt}
          className={cn('absolute inset-0 grid place-items-center bg-gradient-to-br p-4 text-center', tints[tint])}
        >
          <span className="font-hand text-xl leading-tight opacity-80">{label ?? 'photo'} photo ♡</span>
        </div>
      )}
    </div>
  )
}
