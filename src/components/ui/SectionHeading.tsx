import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface Props {
  eyebrow?: ReactNode
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
  id?: string
}

/** Handwritten eyebrow + chunky display title + short lead. */
export function SectionHeading({ eyebrow, title, lead, align = 'center', tone = 'light', className, id }: Props) {
  return (
    <div className={cn(align === 'center' ? 'mx-auto text-center' : 'text-left', 'max-w-2xl', className)}>
      {eyebrow && (
        <p className={cn('font-hand text-2xl', tone === 'light' ? 'text-keepsake-burgundy' : 'text-keepsake-bubblegum')}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'mt-1 font-display text-5xl leading-[0.95] font-black text-balance sm:text-6xl',
          tone === 'light' ? 'text-keepsake-ribbon' : 'text-keepsake-cream',
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn('mt-4 text-lg', tone === 'light' ? 'text-keepsake-ink-soft' : 'text-keepsake-cream/85')}>
          {lead}
        </p>
      )}
    </div>
  )
}
