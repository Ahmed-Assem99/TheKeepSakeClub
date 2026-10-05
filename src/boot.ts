// The page is pre-rendered (scripts/prerender.mjs) and every "order via dm" button is a real link,
// so the app JS can wait until the first paint's fonts, styles and images have loaded.
// This keeps slow phone connections free for what's on screen first.
// Imported here (the entry), not in main.tsx, so the stylesheet is linked in <head> and the
// pre-rendered page never paints unstyled.
import './index.css'

const start = () => void import('./main.tsx')

if (import.meta.env.DEV || !document.getElementById('root')?.firstElementChild) {
  start()
} else {
  const idle = () =>
    typeof window.requestIdleCallback === 'function' ? window.requestIdleCallback(start, { timeout: 1200 }) : setTimeout(start, 1)
  if (document.readyState === 'complete') idle()
  else window.addEventListener('load', idle, { once: true })
}
