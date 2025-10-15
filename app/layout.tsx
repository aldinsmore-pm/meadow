import './globals.css'

import type { ReactNode } from 'react'
import { mono, sans, serif } from './fonts'

export const metadata = {
  title: 'Meadow | Stop Working Weekends, Start Scaling',
  description:
    'Selective partnerships for $2M-$20M businesses. We work alongside 15-20 owners per year to systematically automate workflows and reclaim 20+ hours weekly. 6-9 month engagements. ~30% acceptance rate.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-fog font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
