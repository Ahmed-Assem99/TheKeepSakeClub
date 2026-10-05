import type { StepIcon as StepIconName } from '../../data/steps'
import { Draw } from './Draw'

const paths: Record<StepIconName, string[]> = {
  chat: [
    'M10 14C10 9.6 13.6 7 18 7H46C50.4 7 54 9.6 54 14V36C54 40.4 50.4 43 46 43H26L15 53L17 43C13 42.6 10 40 10 36V14Z',
    'M32 33C29.6 31.4 23.6 27.6 23.2 23.4C22.9 20.6 25 18.8 27.2 19C28.9 19.1 30.6 20.2 32 22.2C33.4 20.2 35.1 19.1 36.8 19C39 18.8 41.1 20.6 40.8 23.4C40.4 27.6 34.4 31.4 32 33Z',
  ],
  photos: [
    'M9 18L37 12.5L42.6 44L14.6 49.5Z',
    'M24 13.5L50 9L56 42L45.2 44',
    'M14.6 41L39.6 36',
    'M18 26.5C20 22.6 25 23.6 25.5 27.2C26 30.6 21.6 31.8 19.4 30.4',
  ],
  pencil: [
    'M14 50L17.5 38.5L42 14C44.2 11.8 47.6 11.8 49.8 14C52 16.2 52 19.6 49.8 21.8L25.5 46.4Z',
    'M38.4 17.8L46 25.4',
    'M14 50L25.5 46.4',
    'M8 57C14 54.5 20 58.5 27 56',
  ],
  gift: [
    'M11 27H53V35H11Z',
    'M14 35V54H50V35',
    'M32 27V54',
    'M32 27C26 26 18.5 22.5 20.5 16.5C22.5 11 30 14 32 27Z',
    'M32 27C38 26 45.5 22.5 43.5 16.5C41.5 11 34 14 32 27Z',
  ],
}

export function StepIcon({ name, className }: { name: StepIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable={false}
      className={className}
    >
      {paths[name].map((d, i) => (
        <Draw key={d} d={d} delay={0.15 + i * 0.18} duration={0.7} />
      ))}
    </svg>
  )
}
