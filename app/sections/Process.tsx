import Stepper from '../components/process/Stepper'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import { processSteps } from '../lib/copy'

export default function Process() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-slate-700">Process</p>
          <h2 className="reveal mt-2 font-serif text-3xl text-ink sm:text-4xl">Embedded like an operator, accountable like a partner.</h2>
          <p className="reveal mt-3 text-slate-700">
            Our team joins your ops standups, manages the automation backlog, and ships outcomes weekly.
          </p>
        </div>
        <div className="mt-10">
          <Stepper steps={processSteps} />
        </div>
      </Container>
    </Section>
  )
}
