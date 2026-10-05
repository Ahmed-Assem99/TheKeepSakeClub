import { motion } from 'framer-motion'
import { Eye, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { formatPrice, type Product } from '../../data/products'
import { cn } from '../../lib/cn'
import { useFinePointer } from '../../lib/useMediaQuery'
import { Sparkle } from '../doodles/Doodles'
import { AnnotatedView } from '../ui/AnnotatedView'
import { DmButton } from '../ui/DmButton'
import { Img } from '../ui/Img'
import { Scallop } from '../ui/Scallop'
import { Sticker } from '../ui/Sticker'

const themes: Record<
  Product['theme'],
  { card: string; title: string; text: string; chip: string; label: string; tint: 'pink' | 'cream' | 'ink' | 'burgundy'; dm: 'ribbon' | 'candy' }
> = {
  cream: {
    card: 'bg-keepsake-cream',
    title: 'text-keepsake-ribbon',
    text: 'text-keepsake-ink-soft',
    chip: 'bg-white/80 border-keepsake-ink/15 text-keepsake-ink',
    label: 'text-keepsake-burgundy',
    tint: 'cream',
    dm: 'ribbon',
  },
  blush: {
    card: 'bg-keepsake-blush',
    title: 'text-keepsake-ribbon',
    text: 'text-keepsake-ink-soft',
    chip: 'bg-white/80 border-keepsake-candy/40 text-keepsake-ink',
    label: 'text-keepsake-burgundy',
    tint: 'pink',
    dm: 'ribbon',
  },
  bubblegum: {
    card: 'bg-keepsake-bubblegum',
    title: 'text-keepsake-ribbon',
    text: 'text-keepsake-ink-soft',
    chip: 'bg-white/70 border-white text-keepsake-ink',
    label: 'text-keepsake-burgundy',
    tint: 'pink',
    dm: 'ribbon',
  },
  ink: {
    card: 'bg-keepsake-ink',
    title: 'text-keepsake-candy',
    text: 'text-keepsake-cream/80',
    chip: 'bg-white/10 border-white/15 text-keepsake-cream',
    label: 'text-keepsake-bubblegum',
    tint: 'ink',
    dm: 'candy',
  },
  burgundy: {
    card: 'bg-keepsake-burgundy',
    title: 'text-keepsake-bubblegum',
    text: 'text-keepsake-cream/85',
    chip: 'bg-white/10 border-white/15 text-keepsake-cream',
    label: 'text-keepsake-bubblegum',
    tint: 'burgundy',
    dm: 'candy',
  },
}

const tilt = [-1.4, 1.1, -0.7, 1.5, -1.1, 0.8]

export function ProductCard({ product, index, animateLayout = false }: { product: Product; index: number; animateLayout?: boolean }) {
  const fine = useFinePointer()
  const [pinned, setPinned] = useState(false)
  const [hovered, setHovered] = useState(false)
  const flipped = pinned || (fine && hovered)
  const t = themes[product.theme]
  const rotate = tilt[index % tilt.length]
  const back = product.annotatedImage ?? product.detailImage

  return (
    <motion.article
      layout={animateLayout}
      id={`product-${product.id}`}
      aria-labelledby={`${product.id}-name`}
      initial={{ opacity: 0, y: 48, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-60px' }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
      whileHover={{ rotate: 0, y: -6 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
      className={cn('group relative scroll-mt-28 rounded-card p-3 shadow-soft transition-shadow duration-300 hover:shadow-lift', t.card)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* image: front photo / back "take a closer look.." */}
      <div className="perspective relative">
        <motion.div
          className="preserve-3d relative aspect-[4/5]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 110, damping: 17 }}
        >
          <div className="backface-hidden absolute inset-0 overflow-hidden rounded-[20px]" aria-hidden={flipped}>
            <Img
              src={product.image.src}
              alt={product.image.alt}
              label={product.image.label}
              position={product.image.position}
              tint={t.tint}
              className="h-full w-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div
            className="backface-hidden absolute inset-0 overflow-hidden rounded-[20px] bg-white [transform:rotateY(180deg)]"
            aria-hidden={!flipped}
          >
            {product.annotatedImage ? (
              <Img
                src={product.annotatedImage.src}
                alt={product.annotatedImage.alt}
                label={product.annotatedImage.label}
                tint={t.tint}
                className="h-full w-full"
              />
            ) : back ? (
              <AnnotatedView image={back} hotspots={product.hotspots} tint={t.tint} />
            ) : null}
          </div>
        </motion.div>

        {product.bestSeller && (
          <div className="absolute -top-4 -right-3 z-10 w-24 drop-shadow-[0_6px_10px_rgba(181,12,21,0.35)]">
            <Sticker rotate={12}>
              <Scallop size={18} className="relative grid place-items-center bg-keepsake-ribbon text-white">
                <span aria-hidden className="absolute inset-[13%] rounded-full border-2 border-dashed border-white/70" />
                <span className="text-center font-display text-lg leading-[0.9] font-black">
                  best
                  <br />
                  seller
                </span>
              </Scallop>
            </Sticker>
          </div>
        )}
        {product.tag && (
          <Sticker rotate={-6} className="absolute -top-3 -left-2 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-keepsake-ink bg-keepsake-candy px-3.5 py-1 font-hand text-xl leading-none text-keepsake-ink shadow-sticker">
              <Sparkle className="size-4" /> {product.tag}
            </span>
          </Sticker>
        )}

        <button
          type="button"
          aria-pressed={pinned}
          onClick={() => setPinned((p) => !p)}
          className="absolute bottom-3 left-3 z-10 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-keepsake-ink bg-white/95 px-4 font-hand text-xl leading-none text-keepsake-ink shadow-sticker transition-transform hover:-rotate-2"
        >
          {flipped ? <RotateCcw aria-hidden className="size-4" strokeWidth={2.6} /> : <Eye aria-hidden className="size-4" strokeWidth={2.6} />}
          {flipped ? 'flip back' : 'take a closer look..'}
          <span className="sr-only"> at {product.name}</span>
        </button>
      </div>

      {/* text */}
      <div className="px-2 pt-5 pb-2">
        <div className="flex items-start justify-between gap-3">
          <h3 id={`${product.id}-name`} className={cn('font-display text-[2.1rem] leading-[0.95] font-black', t.title)}>
            {product.name}
          </h3>
          {product.price !== undefined && (
            <p className={cn('shrink-0 pt-1 font-semibold', t.text)}>{formatPrice(product.price)}</p>
          )}
        </div>
        <p className={cn('mt-2 font-hand text-[1.4rem] leading-snug', t.label)}>{product.tagline}</p>

        <p className={cn('mt-4 text-xs font-bold tracking-[0.14em] uppercase', t.text)}>what’s inside</p>
        <ul className="mt-2 flex flex-wrap gap-1.5" aria-label={`what’s inside ${product.name}`}>
          {product.inside.map((item) => (
            <li key={item} className={cn('rounded-full border px-2.5 py-1 text-[0.8125rem] leading-none lowercase', t.chip)}>
              {item}
            </li>
          ))}
        </ul>

        <p className={cn('mt-4 text-[0.9375rem]', t.text)}>
          {product.badges.map((b, i) => (
            <span key={b}>
              {i > 0 && <span aria-hidden> · </span>}
              {b}
            </span>
          ))}
        </p>

        <DmButton
          message={product.dmMessage}
          variant={t.dm}
          className="mt-5 w-full"
          withWhatsapp
          whatsappVariant={product.theme === 'ink' || product.theme === 'burgundy' ? 'outline-light' : 'outline'}
          srLabel={product.name}
        />
      </div>
    </motion.article>
  )
}
