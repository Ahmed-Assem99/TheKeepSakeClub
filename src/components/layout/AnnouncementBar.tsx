import { siteConfig } from '../../data/siteConfig'

export function AnnouncementBar() {
  return (
    <div className="border-b border-keepsake-ribbon/20 bg-keepsake-cream">
      <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-[0.8125rem] font-semibold tracking-wide text-keepsake-ribbon-deep lowercase">
        <span>order through our dms&lt;3</span>
        <span aria-hidden>·</span>
        <span>📍 {siteConfig.location}</span>
      </p>
    </div>
  )
}
