import type { Config } from 'tailwindcss'

/**
 * The Keepsake Club design tokens.
 * Colors were sampled from the Instagram assets (logo post, wordmark post,
 * "the art of loving you" cover, the pink "Shop Now" pills and the packaging flat-lay).
 * Loaded into Tailwind v4 via `@config` in src/index.css.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        keepsake: {
          bubblegum: '#FEB4E3', // avatar / logo background
          blush: '#FFE3F0', // soft section wash (shopping bag pink)
          petal: '#FFF4F9', // lightest pink, card insides
          ribbon: '#DA0F1A', // signature red (a touch deeper than the logo's #FE0102 so large type passes AA 3:1 on bubblegum)
          'ribbon-deep': '#B50C15', // AA-safe red for small text on cream / blush
          candy: '#F87CB0', // hot pink "Shop Now" pills and doodles
          cream: '#F6F0E1', // card stock, heart tag, notecards
          burgundy: '#5E1418', // "the art of loving you" cover
          'burgundy-deep': '#3F0C10',
          ink: '#17101A', // near-black panels and body text
          'ink-soft': '#4A3A44', // secondary text on light backgrounds
        },
      },
      fontFamily: {
        display: ['"Londrina Solid"', '"Londrina Fallback"', 'Chewy', '"Bowlby One"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat Brush"', '"Caveat Fallback"', '"Gochi Hand"', 'cursive'],
        script: ['"Pinyon Script"', '"Mrs Saint Delafield"', 'cursive'],
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans Variable"', '"DM Sans Fallback"', '"DM Sans"', 'Nunito', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
        blob: '40px',
      },
      boxShadow: {
        // pink-tinted, never grey
        soft: '0 10px 30px -12px rgba(227, 16, 27, 0.22), 0 4px 12px -6px rgba(248, 124, 176, 0.35)',
        lift: '0 24px 48px -18px rgba(227, 16, 27, 0.32), 0 10px 20px -10px rgba(248, 124, 176, 0.45)',
        sticker: '0 6px 0 -1px rgba(181, 12, 21, 0.18), 0 10px 22px -10px rgba(227, 16, 27, 0.4)',
        dark: '0 24px 60px -24px rgba(0, 0, 0, 0.7)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'translate3d(-50%,0,0)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.8)' },
        },
        pulsering: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        floaty: 'floaty 5s ease-in-out infinite',
        twinkle: 'twinkle 2.8s ease-in-out infinite',
        pulsering: 'pulsering 1.8s ease-out infinite',
      },
    },
  },
} satisfies Config
