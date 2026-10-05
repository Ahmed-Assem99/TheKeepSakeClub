export interface Testimonial {
  id: string
  /** Text only. No screenshots of private chats. */
  quote: string
  /** First name or leave empty for "a happy customer". */
  name?: string
  product?: string
}

// TODO: get customer consent. The "you" highlight on Instagram has lovely notes from customers,
// but they are private chats. Add them here (text only, first name or anonymous) once each
// customer has said yes. The "love notes" section stays hidden while this list is empty.
export const testimonials: Testimonial[] = []
