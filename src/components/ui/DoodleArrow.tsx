import type { SVGProps } from 'react'
import { Draw } from '../doodles/Draw'

const arrows = {
  // gentle curve from bottom-left to top-right
  curve: { box: '0 0 100 80', body: 'M6 72C18 36 46 14 88 14', head: 'M76 5L89 14L77 24' },
  // loop-de-loop, then up and right
  loop: {
    box: '0 0 100 80',
    body: 'M4 62C22 72 46 60 42 44C38 28 16 36 25 50C34 64 68 54 90 24',
    head: 'M79 22L91 23L88 35',
  },
  // swoop down and right
  swoop: { box: '0 0 100 80', body: 'M10 8C14 48 48 70 90 62', head: 'M79 53L91 62L79 71' },
  // short hooked arrow, like the "take a closer look" labels
  hook: { box: '0 0 60 60', body: 'M8 8C34 6 52 22 48 50', head: 'M40 42L48 52L55 41' },
} as const

export type ArrowVariant = keyof typeof arrows

type Props = SVGProps<SVGSVGElement> & { variant?: ArrowVariant; delay?: number; strokeWidth?: number }

/** Hand-drawn arrow that draws itself in when scrolled into view. */
export function DoodleArrow({ variant = 'curve', delay = 0, strokeWidth = 2.6, ...props }: Props) {
  const a = arrows[variant]
  return (
    <svg
      viewBox={a.box}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable={false}
      {...props}
    >
      <Draw d={a.body} delay={delay} duration={0.8} />
      <Draw d={a.head} delay={delay + 0.7} duration={0.25} />
    </svg>
  )
}
