const config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E1412',
        fog: '#F6F4EF',
        meadow: { 600: '#2F8F5B', 700: '#1F5A43' },
        wheat: '#E6D6B8',
        clay: '#C07A4C',
        slate: { 300: '#CBD5D1', 700: '#334155' }
      },
      borderRadius: { xl: '1.25rem', '2xl': '1.75rem' },
      boxShadow: {
        card: '0 1px 0 rgba(14,20,18,0.06), 0 12px 24px -10px rgba(14,20,18,0.18)',
        press: 'inset 0 1px 0 rgba(255,255,255,.4), inset 0 -3px 8px rgba(0,0,0,.12)'
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'ui-serif', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular']
      }
    }
  },
  plugins: []
}

export default config
