import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useRef, useState, type PointerEvent } from 'react'
import { productById, type Product } from '../../data/products'
import { useFinePointer } from '../../lib/useMediaQuery'
import { cn } from '../../lib/cn'
import { Bow, Heart, ScribbleCircle, Sparkle } from '../doodles/Doodles'
import { ButtonLink } from '../ui/Button'
import { DmButton } from '../ui/DmButton'
import { DoodleArrow } from '../ui/DoodleArrow'
import { Img } from '../ui/Img'
import { Scallop } from '../ui/Scallop'
import { Sticker } from '../ui/Sticker'

interface CollageCard {
  id: string
  caption: string
  rotate: number
  className: string
  z: number
}

const collage: CollageCard[] = [
  { id: 'reset-kit', caption: 'the reset kit', rotate: -5, className: 'left-[1%] top-[5%] w-[52%]', z: 3 },
  { id: 'matcha-kit', caption: 'the matcha kit', rotate: 5, className: 'right-[0%] top-[0%] w-[42%]', z: 2 },
  { id: 'hug-in-a-mug', caption: 'hug in a mug', rotate: 4, className: 'left-[6%] bottom-[0%] w-[40%]', z: 4 },
  { id: 'birthday-magazine', caption: 'who’s that girl?', rotate: -4, className: 'right-[3%] bottom-[-2%] w-[41%]', z: 3 },
]

function Polaroid({ card, product, index }: { card: CollageCard; product: Product; index: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.a
      href={`#product-${product.id}`}
      className={cn('absolute block rounded-[18px] bg-white p-2 pb-0 shadow-lift sm:p-2.5 sm:pb-0', card.className)}
      style={{ zIndex: card.z }}
      // no opacity fade: these photos are the LCP candidates, so they paint immediately
      initial={reduce ? false : { y: 40, rotate: 0, scale: 0.94 }}
      animate={{ y: 0, rotate: card.rotate, scale: 1 }}
      whileHover={reduce ? undefined : { y: -8, rotate: card.rotate * 0.4, scale: 1.04, zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 160, damping: 18, delay: reduce ? 0 : 0.25 + index * 0.12 }}
    >
      <Img
        src={product.image.src}
        alt={product.image.alt}
        label={product.image.label}
        position={product.image.position}
        priority={false}
        className="aspect-[4/5] rounded-[12px]"
      />
      <span className="block py-1.5 text-center font-hand text-lg leading-tight text-keepsake-ink sm:py-2 sm:text-2xl">
        {card.caption}
      </span>
    </motion.a>
  )
}

function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-[1/1.2] w-full max-w-[540px] lg:max-w-none">
      {collage.map((card, i) => {
        const product = productById(card.id)
        return product ? <Polaroid key={card.id} card={card} product={product} index={i} /> : null
      })}

      {/* best seller sticker on the reset kit */}
      <div className="absolute top-[1%] left-[38%] z-20 w-[22%] max-w-28 drop-shadow-[0_6px_10px_rgba(181,12,21,0.35)]">
        <Sticker rotate={14}>
          <Scallop size={18} className="relative grid w-full place-items-center bg-keepsake-ribbon text-white">
            <span className="absolute inset-[13%] rounded-full border-2 border-dashed border-white/70" aria-hidden />
            <span className="text-center font-display text-[clamp(0.85rem,3.2vw,1.35rem)] leading-[0.9] font-black">
              best
              <br />
              seller
            </span>
          </Scallop>
        </Sticker>
      </div>

      {/* handwritten notes + arrows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-30 text-keepsake-ink">
        <span className="absolute top-[41%] right-[44%] hidden -rotate-6 font-hand text-2xl sm:block">restocked!</span>
        <DoodleArrow variant="curve" delay={1.2} className="absolute top-[33%] right-[37%] hidden w-14 sm:block" />
        <span className="absolute bottom-[-7%] left-[47%] hidden -rotate-3 font-hand text-2xl sm:block">made just for her</span>
        <DoodleArrow variant="curve" delay={1.5} className="absolute bottom-[-4%] left-[77%] hidden w-16 -rotate-[20deg] sm:block" />
        <Sparkle draw delay={1} className="absolute top-[-4%] left-[2%] size-8 text-keepsake-ribbon" />
        <Sparkle draw delay={1.2} className="absolute top-[44%] right-[-3%] size-6 text-keepsake-ribbon" />
        <Heart draw delay={1.4} className="absolute bottom-[38%] left-[-4%] size-8 text-keepsake-ribbon" />
        <Bow draw delay={1.6} className="absolute right-[38%] bottom-[2%] hidden w-12 text-keepsake-ribbon sm:block" />
      </div>
    </div>
  )
}

/** A little ribbon heart that follows the cursor around the hero (mouse only, never on touch). */
function HeartCursor({ x, y, visible }: { x: ReturnType<typeof useSpring>; y: ReturnType<typeof useSpring>; visible: boolean }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 z-40 text-keepsake-ribbon"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <Heart filled className="size-6 drop-shadow-[0_3px_4px_rgba(181,12,21,0.4)]" />
      </div>
    </motion.div>
  )
}

export function Hero() {
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  const follow = fine && !reduce
  const ref = useRef<HTMLElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 180, damping: 18, mass: 0.6 })
  const y = useSpring(my, { stiffness: 180, damping: 18, mass: 0.6 })
  const [visible, setVisible] = useState(false)

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (!follow || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set(e.clientX - r.left + 18)
    my.set(e.clientY - r.top + 18)
    if (!visible) setVisible(true)
  }

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-keepsake-bubblegum"
      onPointerMove={onMove}
      onPointerLeave={() => setVisible(false)}
    >
      {/* soft light + polka dots */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 size-[38rem] rounded-full bg-white/35 blur-3xl" />
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-y-0 right-0 w-1/2 text-white/40 [mask-image:linear-gradient(to_left,#000,transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-8 pb-20 sm:px-6 sm:pt-12 lg:grid-cols-[1.02fr_1fr] lg:gap-8 lg:px-8 lg:pt-14 lg:pb-24">
        <div className="relative z-10">
          <Sticker rotate={-3} className="inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-keepsake-ink bg-keepsake-cream px-4 py-1.5 text-sm font-semibold lowercase">
              📍 egypt based gift shop
            </span>
          </Sticker>

          <h1
            id="hero-title"
            className="mt-6 font-display text-[3.65rem] leading-[0.86] font-black text-keepsake-ribbon sm:text-[5.2rem] lg:text-[6.1rem] xl:text-[6.6rem]"
          >
            {/* explicit lines: same wrapping in the web font and its fallback, so no layout shift */}
            <span className="block">for the</span>
            <span className="relative inline-block">
              memories
              <ScribbleCircle delay={0.6} className="absolute -top-[10%] -left-[5%] h-[125%] w-[110%] text-keepsake-ink/80" />
            </span>
            <span className="block whitespace-nowrap">worth keeping.</span>
          </h1>

          <p className="mt-6 font-hand text-[1.75rem] leading-tight text-balance text-keepsake-ink sm:text-[2.1rem]">
            gifts that say “i&nbsp;thought&nbsp;of&nbsp;you.”
            <Heart filled className="ml-1.5 inline size-6 -translate-y-0.5 text-keepsake-ribbon" />
          </p>

          <p className="mt-4 max-w-md text-lg text-keepsake-ink-soft">
            personalized gift bundles and custom keepsake books, wrapped and ready to give. no cart, no checkout:
            just a quick dm.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#shop" size="lg">
              shop the gifts <ArrowDown aria-hidden className="size-5" strokeWidth={2.6} />
            </ButtonLink>
            <DmButton variant="cream" size="lg" icon srLabel="general enquiry">
              dm us to order
            </DmButton>
          </div>

          <p className="mt-5 flex items-center gap-2 font-hand text-xl text-keepsake-burgundy">
            <Sparkle className="size-5" /> psst.. every dm button copies the message for you 💌
          </p>
        </div>

        <HeroCollage />
      </div>

      {follow && <HeartCursor x={x} y={y} visible={visible} />}
    </section>
  )
}
