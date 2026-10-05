/**
 * The shop policy, transcribed from the "policy" story highlight on Instagram.
 */

export type PolicyIcon = 'card' | 'folder' | 'pencil' | 'clock' | 'printer' | 'heart'

export interface PolicySection {
  id: string
  title: string
  icon: PolicyIcon
  points: string[]
}

export const policy: PolicySection[] = [
  {
    id: 'orders',
    title: 'orders & payment',
    icon: 'card',
    points: [
      '50% deposit to confirm your order',
      'deposit is non-refundable once designing begins',
      'remaining payment is due before delivery',
    ],
  },
  {
    id: 'photos',
    title: 'photos & content',
    icon: 'folder',
    points: [
      'send photos as documents for the best quality',
      'please double-check all names, dates & messages before sending',
    ],
  },
  {
    id: 'edits',
    title: 'design & edits',
    icon: 'pencil',
    points: [
      '2 rounds of minor edits included',
      'major changes may have an additional fee',
      'no changes after final approval',
    ],
  },
  {
    id: 'timing',
    title: 'timing',
    icon: 'clock',
    points: ['please order 7-10 days in advance', 'rush orders depend on availability'],
  },
  {
    id: 'final',
    title: 'final orders',
    icon: 'printer',
    points: [
      'approved/printed orders cannot be cancelled or refunded',
      'colors may vary slightly when printed',
    ],
  },
  {
    id: 'privacy',
    title: 'privacy',
    icon: 'heart',
    points: ['your photos will never be posted without your permission'],
  },
]
