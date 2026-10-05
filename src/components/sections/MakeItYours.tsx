import { useId, useState } from 'react'
import { products } from '../../data/products'
import { cn } from '../../lib/cn'
import { Heart, Sparkle } from '../doodles/Doodles'
import { Logo } from '../doodles/Logo'
import { DmButton } from '../ui/DmButton'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionDecor } from '../ui/SectionDecor'

const features = [
  { title: 'a personalized card', body: 'your words, tucked into every gift bundle.', emoji: '💌' },
  { title: 'custom keychains', body: 'beads that spell out their name (hug in a mug).', emoji: '🔑' },
  { title: 'names, dates & photos', body: 'the heart of every keepsake book and magazine.', emoji: '📸' },
  { title: 'messages from their people', body: 'letters from everyone who loves them, in one book.', emoji: '🎀' },
]

const paper = {
  pink: { label: 'pink', card: 'bg-[#F9B3D2]', swatch: 'bg-[#F9B3D2]' },
  cream: { label: 'cream', card: 'bg-keepsake-cream', swatch: 'bg-keepsake-cream' },
  blush: { label: 'blush', card: 'bg-keepsake-blush', swatch: 'bg-keepsake-blush' },
} as const
type Paper = keyof typeof paper

const field =
  'mt-1.5 block w-full rounded-2xl border-2 border-keepsake-ink/80 bg-white px-4 py-3 text-base text-keepsake-ink placeholder:text-keepsake-ink-soft/70 focus:border-keepsake-ribbon focus:outline-none focus-visible:outline-none focus:ring-4 focus:ring-keepsake-candy/40'

export function MakeItYours() {
  const uid = useId()
  const [to, setTo] = useState('')
  const [message, setMessage] = useState('')
  const [from, setFrom] = useState('')
  const [gift, setGift] = useState('')
  const [color, setColor] = useState<Paper>('pink')

  const shownTo = to.trim() || 'bestie'
  const shownMessage = message.trim() || 'happy birthday to my favorite person in the whole world<3'
  const shownFrom = from.trim() || 'me'

  const dm = [
    `hi! i'd like a personalized card${gift ? ` with the ${gift}` : ''} 🎀`,
    `to: ${shownTo}`,
    `message: "${shownMessage}"`,
    `from: ${shownFrom}`,
    `card color: ${paper[color].label}`,
  ].join('\n')

  return (
    <section id="personalize" aria-labelledby="personalize-title" className="cv-auto relative overflow-hidden bg-keepsake-petal py-20 sm:py-28 isolate">
      <SectionDecor pattern="grid" tone="text-keepsake-candy/35" doodles="c" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            id="personalize-title"
            align="left"
            eyebrow="personalize"
            title="make it yours."
            lead="the best gifts feel like they could only be for them. here’s what we can make about them:"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <li
                key={f.title}
                className={cn(
                  'rounded-[24px] border-2 border-keepsake-ink/10 bg-white p-5 shadow-soft',
                  i % 2 ? 'sm:rotate-1' : 'sm:-rotate-1',
                )}
              >
                <span aria-hidden className="grid size-11 place-items-center rounded-full bg-keepsake-bubblegum text-xl">
                  {f.emoji}
                </span>
                <p className="mt-3 font-hand text-2xl leading-tight text-keepsake-ribbon-deep">{f.title}</p>
                <p className="mt-1 text-[0.9375rem] text-keepsake-ink-soft">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* the card builder */}
        <div className="relative">
          <p className="mb-4 flex items-center gap-2 font-hand text-2xl text-keepsake-burgundy">
            <Sparkle aria-hidden className="size-5" /> try it: write their card
          </p>

          {/* live preview */}
          <figure className="relative mx-auto max-w-lg px-2">
            <span aria-hidden className="absolute -top-3 left-1/2 z-10 h-7 w-28 -translate-x-1/2 -rotate-3 bg-keepsake-candy/60" />
            <div
              className={cn(
                'relative aspect-[7/5] rotate-[1.5deg] rounded-[10px] p-6 shadow-lift transition-colors duration-500 sm:p-8',
                paper[color].card,
              )}
            >
              <div className="flex h-full flex-col text-keepsake-burgundy">
                <p className="font-hand text-2xl sm:text-3xl">to {shownTo},</p>
                <p className="mt-2 line-clamp-4 flex-1 font-hand text-[1.35rem] leading-snug break-words text-keepsake-ink sm:text-2xl">
                  {shownMessage}
                </p>
                <div className="flex items-end justify-between">
                  <p className="font-script text-3xl sm:text-4xl">- {shownFrom}</p>
                  <Logo title="" className="w-12 text-keepsake-ribbon sm:w-14" />
                </div>
              </div>
            </div>
            <figcaption className="sr-only">live preview of your card</figcaption>
          </figure>

          {/* form */}
          <form
            className="mt-10 rounded-card border-2 border-keepsake-ink bg-white p-5 shadow-soft sm:p-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold" htmlFor={`${uid}-to`}>
                to
                <input id={`${uid}-to`} className={field} value={to} maxLength={28} placeholder="their name" onChange={(e) => setTo(e.target.value)} autoComplete="off" />
              </label>
              <label className="block text-sm font-semibold" htmlFor={`${uid}-from`}>
                from
                <input id={`${uid}-from`} className={field} value={from} maxLength={28} placeholder="your name" onChange={(e) => setFrom(e.target.value)} autoComplete="off" />
              </label>
            </div>
            <label className="mt-4 block text-sm font-semibold" htmlFor={`${uid}-msg`}>
              your message
              <textarea
                id={`${uid}-msg`}
                className={cn(field, 'min-h-24 resize-none')}
                value={message}
                maxLength={140}
                rows={3}
                placeholder="happy birthday to my favorite person…"
                onChange={(e) => setMessage(e.target.value)}
                aria-describedby={`${uid}-count`}
              />
            </label>
            <p id={`${uid}-count`} className="mt-1 text-right text-xs text-keepsake-ink-soft">
              {message.length}/140
            </p>

            <div className="mt-2 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <label className="block text-sm font-semibold" htmlFor={`${uid}-gift`}>
                for which gift?
                <select id={`${uid}-gift`} className={field} value={gift} onChange={(e) => setGift(e.target.value)}>
                  <option value="">not sure yet</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </label>
              <fieldset>
                <legend className="text-sm font-semibold">card color</legend>
                <div className="mt-1.5 flex gap-2">
                  {(Object.keys(paper) as Paper[]).map((c) => (
                    <label key={c} className="relative grid size-12 cursor-pointer place-items-center">
                      <input
                        type="radio"
                        name={`${uid}-color`}
                        value={c}
                        checked={color === c}
                        onChange={() => setColor(c)}
                        className="peer sr-only"
                      />
                      <span
                        className={cn(
                          'size-10 rounded-full border-2 border-keepsake-ink/40 transition-transform peer-checked:scale-110 peer-checked:border-keepsake-ink peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-keepsake-ribbon',
                          paper[c].swatch,
                        )}
                      />
                      <span className="sr-only">{paper[c].label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <DmButton message={dm} size="lg" className="mt-6 w-full" withWhatsapp>
              send this idea in a dm
            </DmButton>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-sm text-keepsake-ink-soft">
              <Heart aria-hidden className="size-4 text-keepsake-ribbon" /> we copy your card text, you just paste it in the dm
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
