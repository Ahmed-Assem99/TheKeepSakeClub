export interface FaqItem {
  id: string
  question: string
  answer: string
  /**
   * Not confirmed by the owner yet. In development the item shows a "TODO" badge;
   * in production the friendly fallback answer above is shown as-is.
   */
  todo?: string
}

export const faq: FaqItem[] = [
  {
    id: 'order',
    question: 'how do i order?',
    answer:
      "send us a DM on Instagram, tell us what you'd like, and we'll take it from there. every “order via dm” button on this page copies a little message for you, so you just paste and send<3",
  },
  {
    id: 'upfront',
    question: 'do i pay upfront?',
    answer:
      'we ask for a 50% deposit to confirm your order. the deposit is non-refundable once designing begins, and the rest is due before delivery.',
  },
  {
    id: 'changes',
    question: 'can i change my design?',
    answer:
      '2 rounds of minor edits are included. major changes may have an additional fee, and we can’t make changes after final approval.',
  },
  {
    id: 'timing',
    question: 'how early should i order?',
    answer:
      'please order 7-10 days in advance. rush orders depend on availability, so dm us and we’ll see what we can do.',
  },
  {
    id: 'cancel',
    question: 'can i cancel my order?',
    answer:
      'approved/printed orders can’t be cancelled or refunded. colors may vary slightly when printed.',
  },
  {
    id: 'photos',
    question: 'what happens to my photos?',
    answer:
      'your photos will never be posted without your permission. send them as documents for the best quality, and double-check names, dates and messages before sending.',
  },
  {
    id: 'delivery',
    question: 'do you deliver across egypt?',
    answer: 'send us a dm with your area and we’ll let you know the delivery options and fees.',
    todo: 'TODO: confirm with owner: delivery areas and fees',
  },
  {
    id: 'price',
    question: 'how much does it cost?',
    answer: 'prices depend on the gift and how you customize it, so dm us and we’ll send you everything.',
    todo: 'TODO: confirm with owner: prices (add `price` to src/data/products.ts to show them on cards)',
  },
  {
    id: 'payment',
    question: 'how can i pay?',
    answer: 'we’ll share the payment options with you in the dms.',
    todo: 'TODO: confirm with owner: payment methods',
  },
]
