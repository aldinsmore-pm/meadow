export type FAQItem = { id: string; q: string; a: string };

interface FAQTwoPaneProps {
  items: FAQItem[];
}

export function FAQTwoPane({ items }: FAQTwoPaneProps) {
  return (
    <div className="grid gap-6 md:grid-cols-[280px_1fr]">
      <nav className="space-y-2 md:sticky md:top-24">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="block text-sm text-slate-700 link-animated">
            {item.q}
          </a>
        ))}
      </nav>
      <section className="space-y-8">
        {items.map((item) => (
          <div key={item.id} id={item.id} className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-ink">{item.q}</h3>
            <p className="mt-2 text-slate-700">{item.a}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
