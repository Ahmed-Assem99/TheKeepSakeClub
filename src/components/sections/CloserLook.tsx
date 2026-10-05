import { AnimatePresence, motion } from 'framer-motion'
import { useId, useState } from 'react'
import { productById, type Product } from '../../data/products'
import { cn } from '../../lib/cn'
import { Bow, Heart, Sparkle } from '../doodles/Doodles'
import { Badge } from '../ui/Badge'
import { DmButton } from '../ui/DmButton'
import { DoodleArrow } from '../ui/DoodleArrow'
import { Img } from '../ui/Img'
import { SectionHeading } from '../ui/SectionHeading'

const spotlight = ['reset-kit', 'matcha-kit', 'hug-in-a-mug']
  .map((id) => productById(id))
  .filter((p): p is Product => Boolean(p))

export function CloserLook() {
  const [productId, setProductId] = useState(spotlight[0].id)
  const product = spotlight.find((p) => p.id === productId) ?? spotlight[0]
  const [activeId, setActiveId] = useState(product.hotspots[0]?.id)
  const active = product.hotspots.find((h) => h.id === activeId) ?? product.hotspots[0]
  const uid = useId()
  const noteId = `${uid}-note`

  const choose = (p: Product) => {
    setProductId(p.id)
    setActiveId(p.hotspots[0]?.id)
  }

  return (
    <section id="closer-look" aria-labelledby="closer-look-title" className="cv-auto relative overflow-hidden bg-keepsake-blush py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="closer-look-title"
          eyebrow="the spotlight"
          title="take a closer look.."
          lead="tap the little dots to see what’s inside, just like our posts."
        />

        <div role="tablist" aria-label="choose a gift" className="mt-8 flex flex-wrap justify-center gap-2">
          {spotlight.map((p) => {
            const selected = p.id === product.id
            return (
              <button
                key={p.id}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${uid}-panel`}
                onClick={() => choose(p)}
                className={cn(
                  'min-h-11 rounded-full border-2 border-keepsake-ink px-5 font-hand text-xl transition-colors',
                  selected ? 'bg-keepsake-ribbon text-white' : 'bg-white text-keepsake-ink hover:bg-keepsake-petal',
                )}
              >
                {p.name}
              </button>
            )
          })}
        </div>

        <div
          id={`${uid}-panel`}
          role="tabpanel"
          aria-label={product.name}
          className="mt-12 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16"
        >
          {/* the photo with hotspots */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <Bow aria-hidden className="absolute -top-8 -left-4 z-10 w-16 -rotate-12 text-keepsake-ribbon sm:-left-10 sm:w-20" />
            <Sparkle aria-hidden className="absolute -right-3 -bottom-6 z-10 size-10 text-keepsake-candy" />
            <div className="-rotate-[1.5deg] rounded-[30px] bg-white p-3 shadow-lift">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={product.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Img
                      src={product.image.src}
                      alt={product.image.alt}
                      label={product.image.label}
                      className="h-full w-full"
                    />
                  </motion.div>
                </AnimatePresence>

                {product.hotspots.map((h, i) => {
                  const isActive = h.id === active?.id
                  const left = h.side ? h.side === 'left' : h.x > 58
                  return (
                    <div key={`${product.id}-${h.id}`} className="absolute z-10" style={{ left: `${h.x}%`, top: `${h.y}%` }}>
                      <button
                        type="button"
                        aria-pressed={isActive}
                        aria-describedby={isActive ? noteId : undefined}
                        aria-label={`${i + 1}. ${h.label}`}
                        onClick={() => setActiveId(h.id)}
                        onMouseEnter={() => setActiveId(h.id)}
                        onFocus={() => setActiveId(h.id)}
                        className="absolute grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
                      >
                        {!isActive && (
                          <span aria-hidden className="absolute inset-1.5 animate-pulsering rounded-full bg-white/70" />
                        )}
                        <span
                          aria-hidden
                          className={cn(
                            'relative grid size-8 place-items-center rounded-full border-2 text-sm font-bold shadow-sticker transition-all duration-300',
                            isActive
                              ? 'scale-110 border-white bg-keepsake-ribbon text-white'
                              : 'border-keepsake-ink bg-white text-keepsake-ink',
                          )}
                        >
                          {i + 1}
                        </span>
                      </button>
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            aria-hidden
                            initial={{ opacity: 0, y: 6, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className={cn(
                              'pointer-events-none absolute top-0 flex -translate-y-[130%] items-end gap-0.5 whitespace-nowrap',
                              left ? 'right-3 flex-row-reverse' : 'left-3',
                            )}
                          >
                            <DoodleArrow
                              variant="hook"
                              strokeWidth={4}
                              className={cn('w-7 text-white drop-shadow', left ? 'rotate-[200deg]' : 'rotate-[160deg] -scale-x-100')}
                            />
                            <span className="rounded-full border-2 border-keepsake-ink bg-white px-3 py-0.5 font-hand text-xl text-keepsake-ink shadow-sticker">
                              {h.label}
                            </span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* what's inside list + note */}
          <div>
            <p className="font-display text-4xl leading-none font-black text-keepsake-ribbon sm:text-5xl">{product.name}</p>
            <p className="mt-2 font-hand text-2xl text-keepsake-burgundy">{product.tagline}</p>

            <p className="mt-8 text-xs font-bold tracking-[0.14em] text-keepsake-ink-soft uppercase">what’s inside</p>
            <ol className="mt-3 grid gap-2 sm:grid-cols-2">
              {product.hotspots.map((h, i) => {
                const isActive = h.id === active?.id
                return (
                  <li key={h.id}>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveId(h.id)}
                      onMouseEnter={() => setActiveId(h.id)}
                      className={cn(
                        'flex min-h-12 w-full items-center gap-3 rounded-2xl border-2 px-3 text-left transition-all duration-200',
                        isActive
                          ? '-rotate-1 border-keepsake-ink bg-white shadow-sticker'
                          : 'border-transparent hover:border-keepsake-ink/20 hover:bg-white/60',
                      )}
                    >
                      <span
                        className={cn(
                          'grid size-7 shrink-0 place-items-center rounded-full text-sm font-bold',
                          isActive ? 'bg-keepsake-ribbon text-white' : 'bg-keepsake-bubblegum text-keepsake-ink',
                        )}
                      >
                        {i + 1}
                      </span>
                      <span className="font-hand text-xl leading-tight">{h.label}</span>
                    </button>
                  </li>
                )
              })}
            </ol>

            <div
              id={noteId}
              aria-live="polite"
              className="relative mt-6 rotate-[0.6deg] rounded-[22px] border-2 border-dashed border-keepsake-candy bg-keepsake-cream px-6 py-5"
            >
              <Heart aria-hidden filled className="absolute -top-3 -right-2 size-7 rotate-12 text-keepsake-ribbon" />
              <p className="font-hand text-2xl text-keepsake-ribbon-deep">{active?.label}</p>
              <p className="mt-1 text-keepsake-ink-soft">{active?.note}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.badges.map((b) => (
                <Badge key={b} tone="cream">
                  ♡ {b}
                </Badge>
              ))}
            </div>
            <DmButton message={product.dmMessage} size="lg" className="mt-8" withWhatsapp srLabel={product.name}>
              order the {product.name.replace(/^the /, '')} 🎀
            </DmButton>
          </div>
        </div>
      </div>
    </section>
  )
}
