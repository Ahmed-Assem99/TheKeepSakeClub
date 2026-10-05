export type StepIcon = 'chat' | 'photos' | 'pencil' | 'gift'

export interface Step {
  id: string
  title: string
  body: string
  icon: StepIcon
}

/** Grounded in the shop policy (see policy.ts). */
export const steps: Step[] = [
  {
    id: 'pick',
    title: 'pick your gift & dm us',
    body: 'find the one, tap “order via dm” and tell us who it’s for.',
    icon: 'chat',
  },
  {
    id: 'details',
    title: 'send your details',
    body: 'names, dates, messages and photos (as documents, for the best quality), then a 50% deposit to confirm.',
    icon: 'photos',
  },
  {
    id: 'craft',
    title: 'we design & handcraft it',
    body: '2 rounds of minor edits are included, then you give the final approval.',
    icon: 'pencil',
  },
  {
    id: 'deliver',
    title: 'it arrives gift-ready',
    body: 'pay the rest before delivery, and it’s on its way, wrapped and ready to give.',
    icon: 'gift',
  },
]

export const goodToKnow = [
  'order 7-10 days ahead. rush orders depend on availability.',
  'approved/printed orders can’t be cancelled or refunded.',
  'colors may vary slightly when printed.',
  'your photos are never posted without your permission.',
]
