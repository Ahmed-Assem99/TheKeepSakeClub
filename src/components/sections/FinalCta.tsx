import { siteConfig } from '../../data/siteConfig'
import { Bow, Heart, Sparkle } from '../doodles/Doodles'
import { Logo } from '../doodles/Logo'
import { DmButton } from '../ui/DmButton'
import { Scallop } from '../ui/Scallop'
import { SectionDecor } from '../ui/SectionDecor'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="cv-auto bg-keepsake-petal px-4 pt-4 pb-24 sm:px-6 relative isolate overflow-hidden">
      <SectionDecor pattern="hearts" tone="text-keepsake-candy/25" doodles="c" />
      <div className="mx-auto max-w-5xl drop-shadow-[0_24px_30px_rgba(218,15,26,0.28)]">
        <Scallop shape="rect" size={12} className="bg-keepsake-ribbon p-[14px]">
          <div className="relative overflow-hidden rounded-[18px] bg-keepsake-bubblegum px-6 py-16 text-center sm:px-12 sm:py-20">
            <Logo title="" className="pointer-events-none absolute -right-16 -bottom-10 w-80 text-white/35 sm:w-[28rem]" />
            <Sparkle aria-hidden className="absolute top-8 left-8 size-9 animate-twinkle text-keepsake-ribbon" />
            <Bow aria-hidden className="absolute top-10 right-10 w-16 text-keepsake-ribbon" />
            <Heart aria-hidden className="absolute bottom-10 left-[12%] size-8 -rotate-12 text-keepsake-ribbon" />

            <p className="relative font-hand text-3xl text-keepsake-burgundy">you’re invited ♡</p>
            <h2 id="cta-title" className="relative mt-2 font-display text-[3.4rem] leading-[0.88] font-black text-keepsake-ribbon sm:text-8xl">
              join the keepsake club
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-lg text-keepsake-ink">
              {siteConfig.tagline} tell us who it’s for, and we’ll take it from there&lt;3
            </p>
            <div className="relative mt-8 flex justify-center">
              <DmButton size="lg" withWhatsapp whatsappVariant="cream" srLabel="general enquiry">
                dm us to order
              </DmButton>
            </div>
          </div>
        </Scallop>
      </div>
    </section>
  )
}
