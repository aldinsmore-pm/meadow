import Button from '../components/buttons/Button'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import { applyCopy } from '../lib/copy'

export default function Apply() {
  return (
    <Section className="pb-24">
      <Container>
        <div className="reveal rounded-2xl border border-slate-300 bg-ink p-8 text-fog shadow-card">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl text-fog">{applyCopy.title}</h2>
              <p className="text-slate-200">{applyCopy.body}</p>
            </div>
            <Button size="lg">{applyCopy.primaryCta}</Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
