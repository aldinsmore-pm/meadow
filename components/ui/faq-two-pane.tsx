export type FAQItem = { id: string; q: string; a: string };

interface FAQTwoPaneProps {
  items: FAQItem[];
}

export function FAQTwoPane({ items }: FAQTwoPaneProps) {
  return (
    <div className="grid gap-6 md:grid-cols-[280px_1fr]">
      <nav className="space-y-2 md:sticky md:top-24" data-reveal data-reveal-delay="120">
        {items.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block text-sm text-slate-700 link-animated"
            data-reveal
            data-reveal-delay={160 + index * 60}
            data-reveal-from="right"
          >
            {item.q}
          </a>
        ))}
      </nav>
      <section className="space-y-8" data-reveal data-reveal-delay="140">
        {items.map((item, index) => (
          <div key={item.id} id={item.id} className="scroll-mt-24" data-reveal data-reveal-delay={180 + index * 80}>
            <h3 className="text-xl font-semibold text-ink">{item.q}</h3>
            <p className="mt-2 text-slate-700">{item.a}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
