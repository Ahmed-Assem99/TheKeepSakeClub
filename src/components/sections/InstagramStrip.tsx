import { instagramTiles } from '../../data/instagram'
import { siteConfig } from '../../data/siteConfig'
import { Heart, InstagramGlyph } from '../doodles/Doodles'
import { ButtonLink } from '../ui/Button'
import { Img } from '../ui/Img'

const tilt = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1.5]

export function InstagramStrip() {
  return (
    <section id="instagram" aria-labelledby="instagram-title" className="cv-auto overflow-hidden bg-keepsake-blush py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-end sm:px-6 lg:px-8">
        <div>
          <p className="font-hand text-2xl text-keepsake-burgundy">the journal</p>
          <h2 id="instagram-title" className="mt-1 font-display text-5xl leading-[0.95] font-black text-keepsake-ribbon sm:text-6xl">
            follow along
          </h2>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-11 items-center gap-2 font-hand text-2xl text-keepsake-ink underline decoration-keepsake-candy decoration-wavy underline-offset-4"
          >
            @{siteConfig.instagramHandle}
          </a>
        </div>
        <ButtonLink href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" variant="cream">
          <InstagramGlyph className="size-5" /> follow on instagram
        </ButtonLink>
      </div>

      <ul className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pt-3 pb-6 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-8 lg:overflow-visible lg:px-8">
        {instagramTiles.map((tile, i) => (
          <li key={tile.src} className="w-40 shrink-0 snap-start sm:w-48 lg:w-auto" style={{ rotate: `${tilt[i % tilt.length]}deg` }}>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-[18px] bg-white p-1.5 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:rotate-0"
            >
              <Img src={tile.src} alt={tile.alt} label={tile.label} className="aspect-square rounded-[13px]" />
              <span className="absolute inset-1.5 grid place-items-center rounded-[13px] bg-keepsake-bubblegum/0 opacity-0 transition-all duration-300 group-hover:bg-keepsake-bubblegum/55 group-hover:opacity-100 group-focus-visible:bg-keepsake-bubblegum/55 group-focus-visible:opacity-100">
                <Heart filled className="size-9 text-keepsake-ribbon" />
              </span>
              <span className="sr-only"> (opens instagram)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
