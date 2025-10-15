import Link from 'next/link'
import MiniROI from '../components/roi/MiniROI'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'

export default function Tools() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr),320px]">
          <div className="space-y-4">
            <p className="reveal text-sm uppercase tracking-[0.3em] text-slate-700">Tools</p>
            <h2 className="reveal font-serif text-3xl text-ink sm:text-4xl">Understand the lift before you commit.</h2>
            <p className="reveal text-slate-700">
              The Meadow ROI model helps you map reclaimed hours, cost savings, and reinvestment scenarios. Start with the mini
              check here and dive deeper in the full calculator.
            </p>
            <Link href="#" className="reveal inline-flex items-center text-sm font-medium text-ink hover:text-meadow-600">
              Explore the full calculator →
            </Link>
          </div>
          <MiniROI />
        </div>
      </Container>
    </Section>
  )
}
