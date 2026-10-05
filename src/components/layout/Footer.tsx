import { navLinks, siteConfig } from '../../data/siteConfig'
import { Heart, InstagramGlyph } from '../doodles/Doodles'
import { Logo, Wordmark } from '../doodles/Logo'

export function Footer() {
  return (
    <footer className="on-dark relative bg-keepsake-ink text-keepsake-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-16 pb-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <span className="grid size-20 place-items-center rounded-full bg-keepsake-bubblegum">
              <Logo title="" className="w-14 text-keepsake-ribbon" />
            </span>
            <Wordmark className="h-6 w-auto text-keepsake-bubblegum" />
          </div>
          <p className="mt-5 font-hand text-3xl text-keepsake-bubblegum">{siteConfig.tagline}</p>
          <p className="mt-2 text-keepsake-cream/80">📍 {siteConfig.location} · shop through our dms&lt;3</p>
        </div>

        <nav aria-label="footer">
          <h2 className="font-hand text-2xl text-keepsake-candy">explore</h2>
          <ul className="mt-3 space-y-1">
            {[...navLinks, { label: 'faq & policy', href: '#faq' }].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-11 items-center lowercase text-keepsake-cream/85 hover:text-keepsake-bubblegum">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-hand text-2xl text-keepsake-candy">say hi</h2>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center gap-2 font-semibold hover:text-keepsake-bubblegum"
          >
            <InstagramGlyph className="size-5" /> @{siteConfig.instagramHandle}
          </a>
          <p className="mt-1 text-keepsake-cream/70">dms are open for orders, questions and custom ideas.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-keepsake-cream/70 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 The Keepsake Club</p>
          <p className="flex items-center gap-1.5">
            made with love&lt;3 <Heart filled className="size-4 text-keepsake-candy" />
          </p>
        </div>
      </div>
    </footer>
  )
}
