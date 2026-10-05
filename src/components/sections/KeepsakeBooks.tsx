import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { useState } from 'react'
import { products, type Product } from '../../data/products'
import { cn } from '../../lib/cn'
import { useFinePointer } from '../../lib/useMediaQuery'
import { Sparkle } from '../doodles/Doodles'
import { DmButton } from '../ui/DmButton'
import { Img } from '../ui/Img'
import { SectionDecor } from '../ui/SectionDecor'

const books = products.filter((p) => p.category === 'book')
const order = ['art-of-loving-you', 'birthday-magazine', 'messages-book']
books.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))

function BookSpread({ book, index }: { book: Product; index: number }) {
  const fine = useFinePointer()
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const isOpen = open || (fine && hovered)
  const inside = book.detailImage ?? book.image

  return (
    <motion.article
      aria-labelledby={`book-${book.id}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={cn('md:grid md:grid-cols-[2fr_3fr] md:items-center md:gap-10 lg:block', index === 1 && 'lg:mt-16')}
    >
      <div
        className="perspective relative mx-auto aspect-[4/5] w-[86%] sm:w-[70%] md:w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* the inside page, revealed when the cover turns */}
        <div className="absolute inset-0 overflow-hidden rounded-r-[14px] rounded-l-[4px] bg-keepsake-cream shadow-dark">
          <Img src={inside.src} alt={inside.alt} label={inside.label} position={inside.position} tint="cream" className="h-full w-full" />
        </div>
        {/* the cover */}
        <motion.div
          className="preserve-3d absolute inset-0 origin-left"
          animate={{ rotateY: isOpen ? -38 : 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 16 }}
        >
          <div className="backface-hidden absolute inset-0 overflow-hidden rounded-r-[14px] rounded-l-[4px] shadow-dark">
            <Img src={book.image.src} alt={book.image.alt} label={book.image.label} position={book.image.position} tint="burgundy" className="h-full w-full" />
            {/* spine shading */}
            <span aria-hidden className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/35 to-transparent" />
          </div>
          <div aria-hidden className="backface-hidden absolute inset-0 rounded-l-[14px] rounded-r-[4px] bg-keepsake-cream [transform:rotateY(180deg)]" />
        </motion.div>

        <button
          type="button"
          aria-pressed={open}
          onClick={() => setOpen((o) => !o)}
          className="absolute right-3 bottom-3 z-10 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-keepsake-ink bg-keepsake-cream px-4 font-hand text-xl text-keepsake-ink shadow-sticker"
        >
          <BookOpen aria-hidden className="size-4" strokeWidth={2.4} />
          {isOpen ? 'close it' : 'peek inside'}
          <span className="sr-only"> {book.name}</span>
        </button>
      </div>

      <div className="mt-7 px-1 md:mt-0 lg:mt-7">
        <h3 id={`book-${book.id}`} className="font-serif text-[2.4rem] leading-none text-keepsake-cream">
          {book.name}
        </h3>
        <p className="mt-2 font-serif text-xl text-keepsake-bubblegum italic">{book.tagline}</p>
        <p className="mt-3 text-keepsake-cream/80">{book.description}</p>
        <DmButton message={book.dmMessage} variant="candy" className="mt-5" withWhatsapp whatsappVariant="outline-light" srLabel={book.name} />
      </div>
    </motion.article>
  )
}

export function KeepsakeBooks() {
  return (
    <section id="books" aria-labelledby="books-title" className="on-dark cv-auto relative overflow-hidden bg-keepsake-burgundy py-20 text-keepsake-cream sm:py-28 isolate">
      <SectionDecor doodles="a" doodleTone="text-keepsake-bubblegum/60" />
      <div aria-hidden className="bg-stripes pointer-events-none absolute inset-0 text-white/[0.035]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 id="books-title" className="font-hand text-2xl text-keepsake-bubblegum">
            the keepsake books
          </h2>
          <figure className="mt-3">
            <blockquote>
              <p className="font-serif text-[3.2rem] leading-[0.95] tracking-tight text-keepsake-cream italic sm:text-7xl lg:text-[6.5rem]">
                “don’t let instagram be your only <span className="text-keepsake-bubblegum">archive.</span>”
              </p>
            </blockquote>
          <figcaption className="mt-4 font-hand text-xl text-keepsake-cream/80">— from our birthday magazine reel</figcaption>
          </figure>
          <p className="mt-6 max-w-xl text-lg text-keepsake-cream/85">
            custom printed books and magazines, designed around your people: their photos, their dates, their story.
            for all the little moments you never want to forget.
          </p>
        </div>

        <Sparkle aria-hidden className="absolute top-4 right-8 hidden size-12 text-keepsake-bubblegum lg:block" />

        <div className="mt-16 grid gap-16 lg:grid-cols-3 lg:gap-12">
          {books.map((b, i) => (
            <BookSpread key={b.id} book={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
