import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Heart, Sparkle } from '../doodles/Doodles'
import { Logo, Wordmark } from '../doodles/Logo'
import { Scallop } from '../ui/Scallop'
import { SectionHeading } from '../ui/SectionHeading'
import { Sticker } from '../ui/Sticker'
import { SectionDecor } from '../ui/SectionDecor'

const HEART = 'M100 178C80 165 18 128 10 80C4 44 28 18 58 20C78 21 92 34 100 50C108 34 122 21 142 20C172 18 196 44 190 80C182 128 120 165 100 178Z'

function Piece({ label, children, className, rotate }: { label: string; children: ReactNode; className?: string; rotate: number }) {
  return (
    <figure className={cn('flex flex-col items-center', className)}>
      <Sticker rotate={rotate} className="w-full">
        {children}
      </Sticker>
      <figcaption className="mt-3 font-hand text-lg text-keepsake-cream/75">{label}</figcaption>
    </figure>
  )
}

function Bag() {
  return (
    <div className="relative pt-[18%]">
      {/* satin handles */}
      <svg aria-hidden viewBox="0 -6 200 68" className="absolute top-0 left-1/2 w-[46%] -translate-x-1/2" fill="none">
        <path d="M30 62C30 8 66 2 74 2S112 8 112 62" stroke="#F3D3DA" strokeWidth="9" strokeLinecap="round" />
        <path d="M88 62C88 8 124 2 132 2S170 8 170 62" stroke="#EBC4CD" strokeWidth="9" strokeLinecap="round" />
      </svg>
      <div className="relative grid aspect-[4/3] place-items-center rounded-[6px] bg-[#FAE0E3] shadow-dark">
        <Wordmark className="w-[72%] text-keepsake-ribbon" />
        <span aria-hidden className="absolute inset-y-0 left-0 w-[8%] bg-gradient-to-r from-black/5 to-transparent" />
      </div>
    </div>
  )
}

function Envelope() {
  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-[4px] bg-[#F2F0E2] shadow-dark">
      <svg aria-hidden viewBox="0 0 300 200" className="absolute inset-0 h-full w-full" fill="none" stroke="#DCD6C0" strokeWidth="2">
        <path d="M0 0L150 112L300 0" />
        <path d="M0 200L120 92M300 200L180 92" />
      </svg>
      <span className="absolute top-[10%] left-1/2 -translate-x-1/2 font-script text-2xl text-keepsake-candy">for you</span>
      <span className="absolute top-[56%] left-1/2 grid aspect-square w-[22%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#E9A7B4] shadow-[inset_0_-3px_6px_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.2)]">
        <span className="grid size-[72%] place-items-center rounded-full border-2 border-[#D58C9B]">
          <Heart filled className="size-[55%] text-[#D58C9B]" />
        </span>
      </span>
    </div>
  )
}

function Notecard() {
  return (
    <div className="relative aspect-[3/2] rounded-[4px] bg-[#F4F3E3] shadow-dark">
      <Logo title="" className="absolute right-[7%] bottom-[9%] w-[20%] text-keepsake-ribbon" />
    </div>
  )
}

function EkCard() {
  return (
    <div className="drop-shadow-[0_18px_20px_rgba(0,0,0,0.5)]">
      <Scallop shape="rect" size={7} className="bg-keepsake-ribbon p-[7px]">
        <div className="bg-stripes grid aspect-[3/4] place-items-center bg-keepsake-blush text-white/40">
          <Logo title="" className="w-[62%] text-keepsake-ribbon" />
        </div>
      </Scallop>
    </div>
  )
}

function ThankYouTag() {
  return (
    <div className="relative drop-shadow-[0_14px_16px_rgba(0,0,0,0.45)]">
      <div className="relative flex aspect-[2/1] items-center bg-[#F4B9CB] pr-[18%] pl-[8%] [clip-path:polygon(0_0,84%_0,100%_22%,100%_78%,84%_100%,0_100%)]">
        <div className="w-full rounded-[10px] border border-keepsake-ribbon/60 px-2 py-2 text-center">
          <p className="font-script text-[1.6rem] leading-none text-keepsake-ribbon-deep">Thank you</p>
          <p className="mt-1 text-[0.68rem] tracking-wide text-keepsake-burgundy italic">for celebrating with us</p>
        </div>
        <span className="absolute top-1/2 right-[6%] size-[12%] -translate-y-1/2 rounded-full bg-keepsake-ink ring-2 ring-[#E8A4B9]" />
      </div>
      <svg aria-hidden viewBox="0 0 60 40" className="absolute top-[30%] -right-[18%] w-[24%]" fill="none" stroke="#DA0F1A" strokeWidth="2.5" strokeLinecap="round">
        <path d="M2 18C20 4 40 30 58 8M2 22C22 36 44 16 56 34" />
      </svg>
    </div>
  )
}

function Xoxo() {
  return (
    <div className="drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <div className="grid aspect-[2/1] place-items-center rounded-[50%] bg-[#F7C6D4] p-[6%]">
        <div className="grid h-full w-full place-items-center rounded-[50%] border-2 border-dashed border-keepsake-ribbon/50">
          <span className="font-display text-4xl font-black tracking-wide text-keepsake-ribbon">XOXO</span>
        </div>
      </div>
    </div>
  )
}

function HeartTag() {
  return (
    <div className="relative drop-shadow-[0_18px_20px_rgba(0,0,0,0.5)]">
      <svg viewBox="-12 -12 224 204" className="w-full" aria-hidden>
        {/* scalloped lace edge: a fat dotted stroke around the heart */}
        <path d={HEART} fill="#EFE9D8" stroke="#EFE9D8" strokeWidth="16" strokeDasharray="0 15" strokeLinecap="round" strokeLinejoin="round" />
        <path d={HEART} fill="#EFE9D8" />
        <path d={HEART} fill="none" stroke="#D9D0B8" strokeWidth="3" strokeDasharray="0 9" strokeLinecap="round" transform="translate(10 9) scale(0.9)" />
      </svg>
      <p className="absolute inset-0 grid place-items-center pb-[12%] text-center font-script text-[clamp(2rem,7vw,3.1rem)] leading-[0.85] text-keepsake-ink">
        <span>
          Your
          <br />
          Perfect
          <br />
          gift.
        </span>
      </p>
    </div>
  )
}

export function Unboxing() {
  return (
    <section aria-labelledby="unboxing-title" className="cv-auto bg-keepsake-petal px-3 py-20 sm:px-6 sm:py-28 relative isolate overflow-hidden">
      <SectionDecor pattern="sparkles" tone="text-keepsake-candy/40" doodles="c" />
      <div className="on-dark relative mx-auto max-w-7xl overflow-hidden rounded-blob bg-keepsake-ink px-5 py-16 sm:px-10 lg:px-16 lg:py-20">
        <Sparkle aria-hidden className="absolute top-10 right-[12%] size-8 animate-twinkle text-keepsake-candy" />
        <Sparkle aria-hidden className="absolute bottom-16 left-[8%] size-6 animate-twinkle text-keepsake-candy [animation-delay:1s]" />
        <Sparkle aria-hidden className="absolute top-[45%] left-[48%] size-5 animate-twinkle text-keepsake-bubblegum [animation-delay:.5s]" />

        <SectionHeading
          id="unboxing-title"
          tone="dark"
          eyebrow="the unboxing"
          title="wrapped like it’s already a memory."
          lead="the wrapping is half the fun: our pink keepsake bag, wax-sealed envelopes, cream notecards, little tags and stickers."
        />

        <div className="mt-14 grid grid-cols-2 items-start gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <Piece label="the keepsake bag" rotate={-2} className="col-span-2 mx-auto w-full sm:w-[80%] lg:col-span-7 lg:w-full lg:px-6">
            <Bag />
          </Piece>
          <div className="col-span-2 grid grid-cols-2 gap-6 lg:col-span-5 lg:grid-cols-1 lg:gap-10 lg:pt-10">
            <Piece label="wax-sealed envelope" rotate={3}>
              <Envelope />
            </Piece>
            <Piece label="a notecard for your words" rotate={-3}>
              <Notecard />
            </Piece>
          </div>

          <Piece label="the ek sticker card" rotate={-6} className="mx-auto w-[80%] lg:col-span-3 lg:w-full">
            <EkCard />
          </Piece>
          <div className="flex flex-col items-center gap-8 lg:col-span-4 lg:pt-8">
            <Piece label="thank you tag" rotate={6} className="w-full">
              <ThankYouTag />
            </Piece>
            <Piece label="xoxo" rotate={-8} className="w-[80%]">
              <Xoxo />
            </Piece>
          </div>
          <Piece label="your perfect gift." rotate={4} className="col-span-2 mx-auto w-[78%] sm:w-[60%] lg:col-span-5 lg:w-full">
            <HeartTag />
          </Piece>
        </div>
      </div>
    </section>
  )
}
