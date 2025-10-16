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
        meadow: { 500: '#3A9F68', 600: '#2F8F5B', 700: '#1F5A43' },
        slate: { 200: '#E2E8E4', 300: '#CBD5D1', 500: '#66747C', 700: '#334155' },
        parchment: '#F3E7D3',
        linen: '#F9F6EF',
        moss: { 200: '#DDEEE2', 400: '#8EBE9B', 600: '#3F7554' },
        dusk: '#132320',
        tide: '#D8F0E6',
        ember: '#D08C52',
        gold: '#D9A441',
      },
      borderRadius: { xl: '1.25rem', '2xl': '1.75rem', '3xl': '2.5rem' },
      boxShadow: {
        card: '0 1px 0 rgba(14,20,18,0.06), 0 12px 24px -10px rgba(14,20,18,0.18)',
        press: 'inset 0 1px 0 rgba(255,255,255,.4), inset 0 -3px 8px rgba(0,0,0,.12)',
        soft: '0 20px 52px -28px rgba(14,20,18,0.22)',
        glow: '0 45px 90px -55px rgba(47,143,91,0.6)',
        ledger: '0 34px 70px -48px rgba(108,73,49,0.45)',
        night: '0 40px 90px -50px rgba(3,11,8,0.68)',
      },
      backgroundImage: {
        'meadow-ledger':
          'linear-gradient(180deg, rgba(249,241,226,0.95) 0%, rgba(242,228,204,0.95) 40%, rgba(236,220,196,0.9) 100%)',
        'meadow-halo':
          'radial-gradient(circle at 18% 18%, rgba(47,143,91,0.25) 0%, rgba(241,236,225,0.85) 52%, rgba(255,255,255,0.95) 100%)',
        'meadow-strata':
          'linear-gradient(135deg, rgba(216,240,230,0.9) 0%, rgba(243,231,204,0.85) 52%, rgba(255,255,255,0.9) 100%)',
        'meadow-dusk': 'linear-gradient(180deg, rgba(19,35,32,0.98) 0%, rgba(9,18,16,0.94) 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-fraunces)', 'Fraunces', 'ui-serif', 'serif'],
        mono: ['var(--font-plex-mono)', 'IBM Plex Mono', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
}

export default config
