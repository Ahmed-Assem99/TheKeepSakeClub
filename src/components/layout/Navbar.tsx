import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navLinks, siteConfig } from '../../data/siteConfig'
import { cn } from '../../lib/cn'
import { InstagramGlyph, Sparkle } from '../doodles/Doodles'
import { Logo, Wordmark } from '../doodles/Logo'
import { DmButton } from '../ui/DmButton'

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#top" onClick={onClick} className="flex min-h-11 items-center gap-2.5 rounded-full" aria-label="The Keepsake Club, back to top">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-keepsake-bubblegum ring-2 ring-keepsake-ribbon/15">
        <Logo title="" className="w-8 text-keepsake-ribbon" />
      </span>
      <Wordmark title="" className="h-[15px] w-auto text-keepsake-ribbon sm:h-[18px]" />
    </a>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const drawer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Drawer: lock scroll, close on Escape, keep focus inside, return focus on close.
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const firstFocusable = drawer.current?.querySelector<HTMLElement>('a, button')
    firstFocusable?.focus()
    const button = menuButton.current
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'Tab' && drawer.current) {
        const els = drawer.current.querySelectorAll<HTMLElement>('a, button')
        const first = els[0]
        const last = els[els.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      button?.focus({ preventScroll: true })
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300',
        scrolled
          ? 'border-keepsake-candy/30 bg-keepsake-petal/90 shadow-soft backdrop-blur-md'
          : 'border-transparent bg-keepsake-bubblegum',
      )}
    >
      <nav aria-label="main" className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Brand />

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative inline-flex min-h-11 items-center rounded-full px-4 font-semibold whitespace-nowrap lowercase text-keepsake-ink hover:text-keepsake-ribbon-deep"
              >
                {l.label}
                <span
                  aria-hidden
                  className="absolute inset-x-4 bottom-2 h-0.5 origin-left scale-x-0 rounded-full bg-keepsake-ribbon transition-transform duration-300 group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <DmButton srLabel="general enquiry" icon={false} />
          </div>
          <button
            ref={menuButton}
            type="button"
            className="grid size-11 place-items-center rounded-full border-2 border-keepsake-ink bg-keepsake-cream xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden className="size-5" strokeWidth={2.6} />
            <span className="sr-only">open menu</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              className="fixed inset-0 z-[55] bg-keepsake-ink/40 xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              aria-hidden
            />
            <motion.div
              key="drawer"
              id="mobile-menu"
              ref={drawer}
              role="dialog"
              aria-modal="true"
              aria-label="menu"
              className="fixed inset-y-0 right-0 z-[56] flex w-[min(88vw,380px)] flex-col overflow-y-auto rounded-l-blob bg-keepsake-bubblegum px-6 pt-5 pb-8 shadow-lift xl:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            >
              <div className="flex items-center justify-between">
                <Logo title="" className="w-14 text-keepsake-ribbon" />
                <button
                  type="button"
                  onClick={close}
                  className="grid size-11 place-items-center rounded-full border-2 border-keepsake-ink bg-keepsake-cream"
                >
                  <X aria-hidden className="size-5" strokeWidth={2.6} />
                  <span className="sr-only">close menu</span>
                </button>
              </div>
              <ul className="mt-8 space-y-1">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={close}
                      className="flex min-h-14 items-center gap-3 font-display text-4xl font-black lowercase text-keepsake-ribbon"
                    >
                      <Sparkle className="size-5 text-keepsake-burgundy" />
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-4 pt-10">
                <p className="font-hand text-2xl text-keepsake-burgundy">no cart, no checkout. just a quick dm&lt;3</p>
                <DmButton size="lg" className="w-full" srLabel="general enquiry" />
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center justify-center gap-2 font-semibold text-keepsake-ink"
                >
                  <InstagramGlyph className="size-5" /> @{siteConfig.instagramHandle}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
