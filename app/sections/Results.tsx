import CaseCard from '../components/cards/CaseCard'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import cases from '../data/cases.json'
import type { CaseStudy } from '../lib/types'

export default function Results() {
  const studies = cases as CaseStudy[]

  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-slate-700">Results</p>
          <h2 className="reveal mt-2 font-serif text-3xl text-ink sm:text-4xl">Selective, high-impact partnerships.</h2>
          <p className="reveal mt-3 text-slate-700">
            Every engagement focuses on the repetitive, high-variance work that keeps leaders online after hours. Here’s how the
            last few partners reclaimed their time.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {studies.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
