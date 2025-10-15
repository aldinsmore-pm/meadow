import type { Config } from 'tailwindcss'

const config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx,json}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0E1412',
        fog: '#F6F4EF',
        wheat: '#E6D6B8',
        clay: '#C07A4C',
        meadow: { 600: '#2F8F5B', 700: '#1F5A43' },
        slate: { 300: '#CBD5D1', 700: '#334155' },
      },
      borderRadius: { xl: '1.25rem', '2xl': '1.75rem' },
      boxShadow: {
        card: '0 1px 0 rgba(14,20,18,0.06), 0 12px 24px -10px rgba(14,20,18,0.18)',
        press: 'inset 0 1px 0 rgba(255,255,255,.4), inset 0 -3px 8px rgba(0,0,0,.12)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-fraunces)', 'Fraunces', 'ui-serif', 'serif'],
        mono: ['var(--font-plex-mono)', 'IBM Plex Mono', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
