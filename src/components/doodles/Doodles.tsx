import type { SVGProps } from 'react'
import { Draw } from './Draw'

type IconProps = SVGProps<SVGSVGElement> & { filled?: boolean; draw?: boolean; delay?: number }

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
}

const SPARKLE = 'M12 2.5C12.7 8.6 15.4 11.3 21.5 12C15.4 12.7 12.7 15.4 12 21.5C11.3 15.4 8.6 12.7 2.5 12C8.6 11.3 11.3 8.6 12 2.5Z'

export function Sparkle({ filled, draw, delay = 0, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.6} {...base} {...props}>
      {draw ? (
        <Draw d={SPARKLE} delay={delay} duration={0.6} fill={filled ? 'currentColor' : 'none'} />
      ) : (
        <path d={SPARKLE} fill={filled ? 'currentColor' : 'none'} />
      )}
    </svg>
  )
}

const HEART = 'M12 20.2C9.6 18.6 3.7 14.6 3 9.8C2.5 6.6 4.6 4.3 7.3 4.4C9.3 4.5 10.9 5.8 12 7.6C13.2 5.7 14.8 4.4 16.9 4.4C19.6 4.4 21.6 6.8 21 9.9C20.2 14.6 14.4 18.6 12 20.2Z'

export function Heart({ filled, draw, delay = 0, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.8} {...base} {...props}>
      {draw ? (
        <Draw d={HEART} delay={delay} fill={filled ? 'currentColor' : 'none'} />
      ) : (
        <path d={HEART} fill={filled ? 'currentColor' : 'none'} />
      )}
    </svg>
  )
}

const BOW = [
  'M24 15C19 6.5 8.5 3 6 9.5C3.8 15.4 13.5 18.6 24 15Z',
  'M24 15C29 6.5 39.5 3 42 9.5C44.2 15.4 34.5 18.6 24 15Z',
  'M22.5 16.5C20.5 21.5 17 26 13 29.5',
  'M25.5 16.5C27.5 21.5 31 26 35 29.5',
]

export function Bow({ draw, delay = 0, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" strokeWidth={1.8} {...base} {...props}>
      {BOW.map((d, i) =>
        draw ? <Draw key={d} d={d} delay={delay + i * 0.15} duration={0.5} /> : <path key={d} d={d} />,
      )}
      <circle cx="24" cy="15" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

const SCRIBBLE =
  'M34 16C78 2 172 4 191 30C206 54 142 76 92 74C40 72 6 58 10 38C14 20 56 9 112 9C142 9 164 13 178 21'

export function ScribbleCircle({ draw = true, delay = 0, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 200 80" strokeWidth={3} preserveAspectRatio="none" {...base} {...props}>
      {draw ? <Draw d={SCRIBBLE} delay={delay} duration={1.1} vectorEffect="non-scaling-stroke" /> : <path d={SCRIBBLE} vectorEffect="non-scaling-stroke" />}
    </svg>
  )
}

const SQUIGGLE = 'M2 12C20 3 30 19 48 10S78 3 96 12S128 19 146 9S178 4 198 11'

export function Squiggle({ draw = true, delay = 0, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 200 20" strokeWidth={3} preserveAspectRatio="none" {...base} {...props}>
      {draw ? <Draw d={SQUIGGLE} delay={delay} vectorEffect="non-scaling-stroke" /> : <path d={SQUIGGLE} vectorEffect="non-scaling-stroke" />}
    </svg>
  )
}

/** Little dashed "stitch" heart trail used as a section divider. */
export function HeartTrail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 24" {...base} strokeWidth={1.6} {...props}>
      <path d="M2 12H104" strokeDasharray="5 6" />
      <path d={HEART} transform="translate(108 0)" />
      <path d="M136 12H238" strokeDasharray="5 6" />
    </svg>
  )
}

export function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WhatsappGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={1.9} {...props}>
      <path d="M4.2 19.8L5.3 16.1C4.5 14.9 4 13.5 4 12C4 7.6 7.6 4 12 4S20 7.6 20 12S16.4 20 12 20C10.5 20 9.1 19.6 7.9 18.8L4.2 19.8Z" />
      <path d="M9.2 8.8C9.2 11.6 11.6 14.4 14.8 14.9L15.6 13.6L14 12.8L13.2 13.5C12 13 11 12 10.6 10.9L11.3 10.1L10.6 8.4L9.2 8.8Z" fill="currentColor" stroke="none" />
    </svg>
  )
}
