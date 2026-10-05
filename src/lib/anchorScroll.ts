/**
 * In-page links (#shop, #faq…) with `content-visibility: auto` sections: off-screen sections only have
 * an estimated height, so a native jump lands in the wrong place. Before the first jump we render every
 * section for real (`.cv-off`) and keep it that way: the fast first load is already done by then.
 */
export function scrollToId(id: string, smooth = true) {
  const el = document.getElementById(id)
  if (!el) return false
  const root = document.documentElement
  root.classList.add('cv-off')
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: smooth && !reduce ? 'smooth' : 'auto', block: 'start' })
  return true
}

/** Handles clicks on every same-page `#id` link, and a hash in the URL on first load. */
export function installAnchorScroll() {
  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    const link = (e.target as Element | null)?.closest?.('a[href^="#"]')
    const id = link?.getAttribute('href')?.slice(1)
    if (!id) return
    // let other click handlers (e.g. closing the mobile menu) run and re-render first
    e.preventDefault()
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (scrollToId(id)) history.pushState(null, '', `#${id}`)
      }),
    )
  }
  document.addEventListener('click', onClick)
  if (location.hash.length > 1) scrollToId(decodeURIComponent(location.hash.slice(1)), false)
  return () => document.removeEventListener('click', onClick)
}
