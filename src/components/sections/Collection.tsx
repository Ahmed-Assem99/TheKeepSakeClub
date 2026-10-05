import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useState } from 'react'
import { categories, products, type CategoryFilter } from '../../data/products'
import { cn } from '../../lib/cn'
import { SectionHeading } from '../ui/SectionHeading'
import { ProductCard } from './ProductCard'
import { SectionDecor } from '../ui/SectionDecor'

export function Collection() {
  const [filter, setFilter] = useState<CategoryFilter>('all')
  // Layout animations measure the DOM, so only switch them on once someone filters.
  const [filtered, setFiltered] = useState(false)
  const shown = products.filter((p) => filter === 'all' || p.category === filter)

  return (
    <section id="shop" aria-labelledby="shop-title" className="cv-auto relative bg-keepsake-petal py-20 sm:py-28 isolate overflow-hidden">
      <SectionDecor pattern="hearts" tone="text-keepsake-candy/30" doodles="a" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="shop-title"
          eyebrow="the collection"
          title="pick a gift, we’ll make it theirs."
          lead="bundles that are ready to gift, and keepsake books designed just for them. tap any gift to take a closer look.."
        />

        <div role="group" aria-label="filter gifts" className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => {
            const active = filter === c.id
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setFiltered(true)
                  setFilter(c.id)
                }}
                className={cn(
                  'relative min-h-11 rounded-full border-2 border-keepsake-ink px-5 font-semibold lowercase transition-colors',
                  active ? 'text-white' : 'bg-white text-keepsake-ink hover:bg-keepsake-blush',
                )}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-keepsake-ink"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{c.label}</span>
              </button>
            )
          })}
        </div>
        <p className="sr-only" aria-live="polite">
          showing {shown.length} gifts
        </p>

        <LayoutGroup>
          <motion.div
            layout={filtered}
            className="mt-14 grid items-start gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(3n+2)]:mt-14"
          >
            <AnimatePresence mode="popLayout">
              {shown.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} animateLayout={filtered} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}
