import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useId, useState, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

export interface AccordionItem {
  id: string
  title: ReactNode
  content: ReactNode
}

export function Accordion({ items, defaultOpen }: { items: AccordionItem[]; defaultOpen?: string }) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? null)
  const uid = useId()

  return (
    <ul className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === item.id
        const btnId = `${uid}-btn-${item.id}`
        const panelId = `${uid}-panel-${item.id}`
        return (
          <li
            key={item.id}
            className={cn(
              'rounded-[22px] border-2 border-keepsake-ink bg-white transition-colors',
              isOpen && 'bg-keepsake-cream',
              i % 2 ? 'sm:rotate-[0.4deg]' : 'sm:-rotate-[0.3deg]',
            )}
          >
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex min-h-14 w-full items-center justify-between gap-4 rounded-[20px] px-5 py-3 text-left text-lg font-semibold lowercase"
              >
                <span>{item.title}</span>
                <span
                  aria-hidden
                  className={cn(
                    'grid size-9 shrink-0 place-items-center rounded-full border-2 border-keepsake-ink transition-[transform,background-color] duration-300',
                    isOpen ? 'rotate-45 bg-keepsake-ribbon text-white' : 'bg-keepsake-bubblegum',
                  )}
                >
                  <Plus className="size-5" strokeWidth={2.6} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-keepsake-ink-soft">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}
