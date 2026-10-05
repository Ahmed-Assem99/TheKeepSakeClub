import { motion } from 'framer-motion'
import { goodToKnow, steps } from '../../data/steps'
import { Draw } from '../doodles/Draw'
import { Heart } from '../doodles/Doodles'
import { StepIcon } from '../doodles/StepIcon'
import { Scallop } from '../ui/Scallop'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionDecor } from '../ui/SectionDecor'

const RIBBON_H = 'M0 64C90 14 170 118 260 70S420 6 500 62S690 122 760 64S910 10 1000 58'
const RIBBON_V = 'M30 0C58 90 2 180 30 270S58 450 30 540S2 720 30 810S56 940 30 1000'

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="cv-auto relative overflow-hidden bg-keepsake-bubblegum py-20 sm:py-28 isolate">
      <SectionDecor pattern="dots" tone="text-white/55" doodles="b" doodleTone="text-keepsake-ribbon/70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="how-title"
          eyebrow="how it works"
          title="from your dm to their hands."
          lead="our baskets are ready to gift. books and magazines are designed just for you, so these steps matter most for them."
        />

        <div className="relative mt-16">
          {/* the ribbon that ties the steps together */}
          <svg
            aria-hidden
            viewBox="0 0 1000 128"
            preserveAspectRatio="none"
            className="absolute inset-x-[4%] top-6 hidden h-32 w-[92%] lg:block"
            fill="none"
            strokeLinecap="round"
          >
            <Draw d={RIBBON_H} stroke="#DA0F1A" strokeWidth={12} duration={1.8} vectorEffect="non-scaling-stroke" />
            <path d={RIBBON_H} stroke="#FFF4F9" strokeWidth={2} strokeDasharray="6 9" vectorEffect="non-scaling-stroke" opacity={0.85} />
          </svg>
          <svg
            aria-hidden
            viewBox="0 0 60 1000"
            preserveAspectRatio="none"
            className="absolute top-4 left-[18px] h-[calc(100%-2rem)] w-[60px] lg:hidden"
            fill="none"
            strokeLinecap="round"
          >
            <Draw d={RIBBON_V} stroke="#DA0F1A" strokeWidth={10} duration={1.8} vectorEffect="non-scaling-stroke" />
            <path d={RIBBON_V} stroke="#FFF4F9" strokeWidth={2} strokeDasharray="6 9" vectorEffect="non-scaling-stroke" opacity={0.85} />
          </svg>

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <motion.li
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="grid grid-cols-[96px_1fr] items-start gap-5 lg:grid-cols-1 lg:justify-items-center lg:text-center"
              >
                <div className="relative">
                  <div className="w-24 drop-shadow-[0_8px_12px_rgba(181,12,21,0.25)] lg:w-36" style={{ rotate: `${[-4, 3, -2, 4][i]}deg` }}>
                    <Scallop size={22} className="grid place-items-center bg-keepsake-cream text-keepsake-ribbon">
                      <StepIcon name={s.icon} className="w-12 lg:w-18" />
                    </Scallop>
                  </div>
                  <span className="absolute -top-1 -left-1 grid size-9 place-items-center rounded-full border-2 border-keepsake-bubblegum bg-keepsake-ink font-display text-lg font-black text-keepsake-cream lg:top-1 lg:left-1">
                    {i + 1}
                  </span>
                </div>
                <div className="pt-2 lg:max-w-60">
                  <h3 className="font-display text-[1.9rem] leading-none font-black text-balance text-keepsake-ribbon">{s.title}</h3>
                  <p className="mt-2 text-keepsake-ink-soft">{s.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* good to know */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <span aria-hidden className="absolute -top-3 left-10 z-10 h-7 w-24 -rotate-6 bg-keepsake-candy/70" />
          <span aria-hidden className="absolute -top-3 right-10 z-10 h-7 w-24 rotate-6 bg-keepsake-candy/70" />
          <div className="-rotate-[0.8deg] rounded-[26px] bg-keepsake-cream px-6 py-8 shadow-lift sm:px-10">
            <h3 className="font-hand text-3xl text-keepsake-ribbon-deep">good to know</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {goodToKnow.map((g) => (
                <li key={g} className="flex gap-2.5 text-keepsake-ink">
                  <Heart aria-hidden filled className="mt-1 size-4 shrink-0 text-keepsake-ribbon" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
