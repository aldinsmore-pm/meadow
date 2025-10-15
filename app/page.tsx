import Hero from './sections/Hero'
import SummaryStrip from './sections/SummaryStrip'
import Results from './sections/Results'
import Fit from './sections/Fit'
import Process from './sections/Process'
import Tools from './sections/Tools'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Apply from './sections/Apply'
import RevealObserver from './sections/_reveal'

export default function Home() {
  return (
    <main className="surface">
      <RevealObserver />
      <Hero />
      <SummaryStrip />
      <Results />
      <Fit />
      <Process />
      <Tools />
      <Testimonials />
      <FAQ />
      <Apply />
    </main>
  )
}
