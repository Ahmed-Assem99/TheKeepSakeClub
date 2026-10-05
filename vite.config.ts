import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * The site's public address, used for link previews (WhatsApp, Instagram, iMessage…) and SEO,
 * which need absolute URLs. Set SITE_URL (e.g. https://thekeepsakeclub.com) once you have a custom
 * domain; on Vercel it otherwise defaults to the project's production domain automatically.
 */
function siteUrl() {
  const explicit = process.env.SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/+$/, '')
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  if (vercel) return `https://${vercel}`
  return ''
}

/** Fills %SITE_URL% in index.html and writes robots.txt + sitemap.xml with the real address. */
function siteUrlPlugin(): Plugin {
  const url = siteUrl()
  return {
    name: 'keepsake-site-url',
    transformIndexHtml(html) {
      // Without a known address, drop the tags that must be absolute; the image falls back to a relative path.
      if (!url) html = html.replace(/\s*<link rel="canonical"[^>]*%SITE_URL%[^>]*>/, '').replace(/\s*<meta property="og:url"[^>]*>/, '')
      return html.replaceAll('%SITE_URL%', url)
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n${url ? `\nSitemap: ${url}/sitemap.xml\n` : ''}`,
      })
      if (url)
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${url}/</loc>\n  </url>\n</urlset>\n`,
        })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin()],
  server: {
    port: 3000,
    open: true,
  },
})
