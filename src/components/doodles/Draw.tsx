import { motion, useReducedMotion } from 'framer-motion'
import type { SVGProps } from 'react'

type DrawProps = Omit<
  SVGProps<SVGPathElement>,
  'ref' | 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'values'
> & {
  d: string
  delay?: number
  duration?: number
  /** Animate when scrolled into view (default) or immediately on mount. */
  onMount?: boolean
}

/** A path that draws itself in (stroke-dashoffset via pathLength). Static under reduced motion. */
export function Draw({ d, delay = 0, duration = 0.9, onMount = false, ...rest }: DrawProps) {
  const reduce = useReducedMotion()
  if (reduce) return <path d={d} {...rest} />
  const target = { pathLength: 1, opacity: 1 }
  return (
    <motion.path
      d={d}
      initial={{ pathLength: 0, opacity: 0 }}
      {...(onMount ? { animate: target } : { whileInView: target, viewport: { once: true, margin: '-10% 0px' } })}
      transition={{
        pathLength: { delay, duration, ease: [0.65, 0, 0.35, 1] },
        opacity: { delay, duration: 0.01 },
      }}
      {...(rest as object)}
    />
  )
}
