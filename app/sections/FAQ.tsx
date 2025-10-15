import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import FAQTwoPane from '../components/faq/FAQTwoPane'
import { faqItems } from '../lib/copy'

export default function FAQ() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-slate-700">FAQ</p>
          <h2 className="reveal mt-2 font-serif text-3xl text-ink sm:text-4xl">The practical questions operators ask us first.</h2>
        </div>
        <div className="mt-10">
          <FAQTwoPane items={faqItems} />
        </div>
      </Container>
    </Section>
  )
}
