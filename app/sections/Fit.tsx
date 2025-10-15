import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import fit from '../data/fit.json'
import type { FitItem } from '../lib/types'
import FitCards from './FitCards'

export default function Fit() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-slate-700">Fit</p>
          <h2 className="reveal mt-2 font-serif text-3xl text-ink sm:text-4xl">We do our best work with urgent operators.</h2>
          <p className="reveal mt-3 text-slate-700">
            Review the quick criteria to see whether Meadow is the right acceleration partner right now.
          </p>
        </div>
        <div className="mt-10">
          <FitCards items={fit as FitItem[]} />
        </div>
      </Container>
    </Section>
  )
}
