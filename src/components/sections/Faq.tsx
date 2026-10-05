import { Clock, CreditCard, Folder, Heart as HeartIcon, Pencil, Printer, type LucideIcon } from 'lucide-react'
import { faq } from '../../data/faq'
import { policy, type PolicyIcon } from '../../data/policy'
import { cn } from '../../lib/cn'
import { Heart } from '../doodles/Doodles'
import { Accordion } from '../ui/Accordion'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionDecor } from '../ui/SectionDecor'

const icons: Record<PolicyIcon, LucideIcon> = {
  card: CreditCard,
  folder: Folder,
  pencil: Pencil,
  clock: Clock,
  printer: Printer,
  heart: HeartIcon,
}

export function Faq() {
  const items = faq.map((f) => ({
    id: f.id,
    title: f.question,
    content: (
      <>
        <p>{f.answer}</p>
        {import.meta.env.DEV && f.todo && (
          <p className="mt-2 inline-block rounded-md bg-yellow-200 px-2 py-1 font-mono text-xs text-keepsake-ink">{f.todo}</p>
        )}
      </>
    ),
  }))

  return (
    <section id="faq" aria-labelledby="faq-title" className="cv-auto bg-keepsake-petal py-20 sm:py-28 relative isolate overflow-hidden">
      <SectionDecor pattern="dots" tone="text-keepsake-candy/35" doodles="b" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="faq-title"
          eyebrow="our policy"
          title="the fine print, but cute."
          lead="the little things to know before you order, straight from our policy."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {policy.map((p, i) => {
            const Icon = icons[p.icon]
            return (
              <li
                key={p.id}
                className={cn(
                  'rounded-[26px] border-2 border-dashed border-keepsake-candy bg-white p-6',
                  ['sm:-rotate-1', 'sm:rotate-[0.6deg]', 'sm:-rotate-[0.4deg]'][i % 3],
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-keepsake-blush text-keepsake-ribbon">
                    <Icon aria-hidden className="size-6" strokeWidth={2} />
                  </span>
                  <h3 className="font-hand text-2xl text-keepsake-ribbon-deep">{p.title}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-[0.9375rem] text-keepsake-ink-soft">
                      <Heart aria-hidden filled className="mt-1 size-3.5 shrink-0 text-keepsake-candy" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>

        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="text-center font-display text-4xl font-black text-keepsake-ribbon sm:text-5xl">questions, answered</h3>
          <div className="mt-8">
            <Accordion items={items} defaultOpen="order" />
          </div>
        </div>
      </div>
    </section>
  )
}
