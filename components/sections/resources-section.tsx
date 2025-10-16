import Link from "next/link";

interface ResourceItem {
  title: string;
  description: string;
  badge: string;
}

interface ResourcesSectionProps {
  items: ResourceItem[];
}

export function ResourcesSection({ items }: ResourcesSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-300 bg-white/95 p-8 shadow-card" data-aos="fade-up" data-aos-delay="200">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl text-ink md:text-3xl">Not ready to apply yet?</h3>
          <p className="text-sm text-slate-700/90">
            Start with our self-serve tools. Quantify the opportunity, get your team aligned, and show up to discovery with numbers in hand.
          </p>
          <Link
            href="mailto:hello@meadow.ai"
            className="inline-flex w-fit items-center justify-center rounded-full border border-meadow-600/40 px-5 py-2 text-sm font-semibold text-meadow-700 transition hover:bg-meadow-600/10"
          >
            Request access to the library
          </Link>
        </div>

        <div className="grid gap-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-300/70 bg-fog/80 p-5 shadow-card backdrop-blur"
            >
              <span className="inline-flex w-fit items-center rounded-full border border-slate-300/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-meadow-700">
                {item.badge}
              </span>
              <h4 className="mt-3 font-serif text-lg text-ink">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-700/90">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
