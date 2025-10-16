import { FAQItem, FAQTwoPane } from "../ui/faq-two-pane";

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <section className="space-y-6" data-aos="fade-up" data-aos-delay="100">
      <div>
        <h2 className="text-3xl font-serif text-ink">Frequently asked</h2>
        <p className="mt-2 max-w-2xl text-slate-700">
          Straight answers about how we work, what to expect, and how fast we get you your evenings back.
        </p>
      </div>
      <FAQTwoPane items={items} />
    </section>
  );
}
