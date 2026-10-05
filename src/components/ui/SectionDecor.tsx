import type { CSSProperties, ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Bow, Heart, Sparkle } from '../doodles/Doodles'
import { Scallop } from './Scallop'

export type DecorPattern = 'dots' | 'hearts' | 'sparkles' | 'stripes' | 'grid' | 'gingham'
export type DoodleSet = 'a' | 'b' | 'c'

interface Props {
  /** Brand pattern on the left and right edges, fading toward the centre. */
  pattern?: DecorPattern
  /** Text color class that tints the pattern, e.g. 'text-keepsake-candy/25'. */
  tone?: string
  /** Which arrangement of side doodles to float in the gutters on wide screens. */
  doodles?: DoodleSet | 'none'
  /** Text color class for the doodles. */
  doodleTone?: string
}

type Spot = { side: 'left' | 'right'; top: string; rotate: number; node: ReactNode; delay?: number }

const stamp = (
  <span className="block w-12 drop-shadow-[0_4px_6px_rgba(181,12,21,0.25)]">
    <Scallop size={14} className="grid place-items-center bg-current">
      <Heart filled className="size-5 text-white" />
    </Scallop>
  </span>
)
const tape = <span className="block h-5 w-16 bg-current opacity-45" />
const note = (text: string) => <span className="block font-hand text-2xl whitespace-nowrap">{text}</span>

const sets: Record<DoodleSet, Spot[]> = {
  a: [
    { side: 'left', top: '14%', rotate: -14, node: <Heart className="size-10" /> },
    { side: 'left', top: '44%', rotate: 0, node: <Sparkle className="size-8" />, delay: 1.2 },
    { side: 'left', top: '74%', rotate: -8, node: <Bow className="w-14" />, delay: 0.6 },
    { side: 'right', top: '20%', rotate: 10, node: <Sparkle filled className="size-7" />, delay: 0.4 },
    { side: 'right', top: '50%', rotate: 8, node: note('xoxo'), delay: 1.6 },
    { side: 'right', top: '80%', rotate: 12, node: <Heart filled className="size-8" />, delay: 0.9 },
  ],
  b: [
    { side: 'left', top: '18%', rotate: -18, node: tape },
    { side: 'left', top: '48%', rotate: -6, node: stamp, delay: 0.8 },
    { side: 'left', top: '80%', rotate: 0, node: <Sparkle className="size-9" />, delay: 1.4 },
    { side: 'right', top: '16%', rotate: 8, node: <Bow className="w-14" />, delay: 0.3 },
    { side: 'right', top: '46%', rotate: -10, node: note('<3'), delay: 1.1 },
    { side: 'right', top: '76%', rotate: 16, node: tape, delay: 0.5 },
  ],
  c: [
    { side: 'left', top: '20%', rotate: -6, node: note('for you'), delay: 0.2 },
    { side: 'left', top: '56%', rotate: 12, node: <Heart filled className="size-9" />, delay: 1 },
    { side: 'left', top: '84%', rotate: 0, node: <Sparkle filled className="size-6" />, delay: 1.7 },
    { side: 'right', top: '24%', rotate: 10, node: stamp, delay: 0.6 },
    { side: 'right', top: '54%', rotate: 0, node: <Sparkle className="size-10" />, delay: 1.3 },
    { side: 'right', top: '82%', rotate: -12, node: <Heart className="size-9" />, delay: 0.1 },
  ],
}

/**
 * Background dressing for a section: patterned edges plus doodles floating in the side gutters.
 * The section must be `relative isolate`; this sits behind its content (`-z-10`).
 */
export function SectionDecor({ pattern, tone = 'text-keepsake-candy/25', doodles = 'a', doodleTone = 'text-keepsake-candy' }: Props) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {pattern && (
        <>
          <div className="decor-rail decor-rail-left absolute inset-y-0 left-0">
            <div className={cn('h-full w-full bg-current', `pattern-${pattern}`, tone)} />
          </div>
          <div className="decor-rail decor-rail-right absolute inset-y-0 right-0">
            <div className={cn('h-full w-full bg-current', `pattern-${pattern}`, tone)} />
          </div>
        </>
      )}
      {doodles !== 'none' &&
        sets[doodles].map((s, i) => (
          <span
            key={i}
            className={cn(
              'absolute hidden -translate-x-1/2 min-[1360px]:block',
              s.side === 'left' ? 'left-[calc((100%-80rem)/4)]' : 'left-[calc(100%-(100%-80rem)/4)]',
              doodleTone,
            )}
            style={{ top: s.top }}
          >
            <span
              className="block animate-floaty motion-reduce:animate-none"
              style={{ animationDelay: `${s.delay ?? 0}s`, rotate: `${s.rotate}deg` } as CSSProperties}
            >
              {s.node}
            </span>
          </span>
        ))}
    </div>
  )
}
