import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface StickerProps {
  children: ReactNode
  className?: string
  /** Resting rotation in degrees (placed-by-hand look). */
  rotate?: number
  /** Wiggle on hover / focus within. */
  wiggle?: boolean
}

/** Something that looks stuck on: tilted, with a wiggle on hover. */
export function Sticker({ children, className, rotate = -3, wiggle = true }: StickerProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={cn('will-change-transform', className)}
      initial={false}
      style={{ rotate }}
      whileHover={
        wiggle && !reduce
          ? { rotate: [rotate, rotate - 6, rotate + 5, rotate - 3, rotate], scale: 1.06, transition: { duration: 0.5 } }
          : undefined
      }
    >
      {children}
    </motion.div>
  )
}
