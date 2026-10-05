import { Marquee } from '../ui/Marquee'

const items = ['for the memories worth keeping', 'ready to gift', 'personalized with love', 'egypt based', 'shop through our dms<3']

export function MarqueeStrip() {
  return (
    <div className="relative z-10 bg-keepsake-ribbon py-4 text-keepsake-cream">
      {/* scalloped ribbon trim */}
      <div aria-hidden className="absolute inset-x-0 -top-[9px] h-[10px] bg-[radial-gradient(circle_at_10px_10px,#DA0F1A_9.5px,transparent_10px)] bg-[length:20px_10px] bg-repeat-x" />
      <div aria-hidden className="absolute inset-x-0 -bottom-[9px] h-[10px] bg-[radial-gradient(circle_at_10px_0,#DA0F1A_9.5px,transparent_10px)] bg-[length:20px_10px] bg-repeat-x" />
      <p className="sr-only">{items.join(' · ')}</p>
      <div aria-hidden>
        <Marquee items={items} className="font-display text-3xl font-black sm:text-4xl" />
      </div>
    </div>
  )
}
