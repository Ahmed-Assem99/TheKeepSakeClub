import { MotionConfig } from 'framer-motion'
import { AnnouncementBar } from './components/layout/AnnouncementBar'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { CloserLook } from './components/sections/CloserLook'
import { Collection } from './components/sections/Collection'
import { Faq } from './components/sections/Faq'
import { FinalCta } from './components/sections/FinalCta'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { InstagramStrip } from './components/sections/InstagramStrip'
import { KeepsakeBooks } from './components/sections/KeepsakeBooks'
import { LoveNotes } from './components/sections/LoveNotes'
import { MakeItYours } from './components/sections/MakeItYours'
import { MarqueeStrip } from './components/sections/MarqueeStrip'
import { Unboxing } from './components/sections/Unboxing'
import { BrandSprite } from './components/doodles/Logo'
import { ToastProvider } from './components/ui/Toast'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ToastProvider>
        <div className="paper-grain min-h-screen overflow-x-clip">
          <BrandSprite />
          <a
            href="#main"
            className="sr-only z-[80] rounded-full bg-keepsake-ink px-5 py-3 text-keepsake-cream focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
          >
            skip to content
          </a>
          <AnnouncementBar />
          <Navbar />
          <main id="main">
            <Hero />
            <MarqueeStrip />
            <Collection />
            <CloserLook />
            <MakeItYours />
            <KeepsakeBooks />
            <HowItWorks />
            <Unboxing />
            <LoveNotes />
            <InstagramStrip />
            <Faq />
            <FinalCta />
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </MotionConfig>
  )
}
