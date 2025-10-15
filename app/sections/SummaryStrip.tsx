import Chip from '../components/chips/Chip'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import { summaryItems } from '../lib/copy'

export default function SummaryStrip() {
  return (
    <Section className="py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {summaryItems.map((item) => (
            <Chip key={item.label} label={item.label} value={item.value} tone="stamped" />
          ))}
        </div>
      </Container>
    </Section>
  )
}
