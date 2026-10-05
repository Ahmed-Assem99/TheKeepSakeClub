import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeTone = 'ribbon' | 'candy' | 'cream' | 'blush' | 'ink' | 'glass'

const tones: Record<BadgeTone, string> = {
  ribbon: 'bg-keepsake-ribbon text-white border-keepsake-ribbon',
  candy: 'bg-keepsake-candy text-keepsake-ink border-keepsake-candy',
  cream: 'bg-keepsake-cream text-keepsake-ink border-keepsake-ink/15',
  blush: 'bg-keepsake-blush text-keepsake-burgundy border-keepsake-candy/40',
  ink: 'bg-keepsake-ink text-keepsake-cream border-keepsake-ink',
  glass: 'bg-white/10 text-keepsake-cream border-white/20',
}

export function Badge({ children, tone = 'blush', className }: { children: ReactNode; tone?: BadgeTone; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[0.8125rem] leading-none font-medium lowercase',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
