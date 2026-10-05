import { testimonials } from '../../data/testimonials'
import { Heart } from '../doodles/Doodles'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionDecor } from '../ui/SectionDecor'

/** Renders nothing until there are consented testimonials in src/data/testimonials.ts. */
export function LoveNotes() {
  if (testimonials.length === 0) return null
  return (
    <section aria-labelledby="love-notes-title" className="bg-keepsake-cream py-20 sm:py-28 relative isolate overflow-hidden">
      <SectionDecor pattern="hearts" tone="text-keepsake-candy/25" doodles="a" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="love-notes-title" eyebrow="love notes" title="from the people who got the gifts." />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.id} className="rounded-[24px] bg-white p-6 shadow-soft" style={{ rotate: `${[-1.5, 1, -0.5][i % 3]}deg` }}>
              <Heart aria-hidden filled className="size-6 text-keepsake-ribbon" />
              <blockquote className="mt-3 font-hand text-2xl leading-snug text-keepsake-ink">“{t.quote}”</blockquote>
              <p className="mt-3 text-sm text-keepsake-ink-soft">
                — {t.name || 'a happy customer'}
                {t.product && <span> · {t.product}</span>}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
