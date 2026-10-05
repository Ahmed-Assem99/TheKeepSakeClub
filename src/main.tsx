import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Fetch the fonts used further down the page now, while nobody is looking. Otherwise they only load
// when their section scrolls into view, and the swap shifts everything below (and in-page links miss).
for (const font of ['400 1em "Instrument Serif"', 'italic 400 1em "Instrument Serif"', '400 1em "Pinyon Script"']) {
  document.fonts?.load(font).catch(() => {})
}

// Production builds ship pre-rendered HTML (see scripts/prerender.mjs); dev renders from scratch.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
