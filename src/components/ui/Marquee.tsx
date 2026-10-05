import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface MarqueeProps {
  items: ReactNode[]
  className?: string
  separator?: ReactNode
}

/** Endless strip. Duplicated content is hidden from assistive tech; pauses on hover. */
export function Marquee({ items, className, separator = '♡' }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <span className="px-5">{item}</span>
          <span aria-hidden className="px-1 opacity-80">
            {separator}
          </span>
        </li>
      ))}
    </ul>
  )
  return (
    <div className={cn('group flex overflow-hidden', className)}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row(false)}
        {row(true)}
        {row(true)}
        {row(true)}
      </div>
    </div>
  )
}
