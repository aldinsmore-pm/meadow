const approachHighlights = [
  {
    title: "Operators stay in the loop",
    description:
      "Weekly working sessions with your finance and ops leads keep adoption high and reveal hidden blockers before rollout.",
    receipt: "Standing co-build rituals",
  },
  {
    title: "Systems you already trust",
    description:
      "We automate inside QuickBooks, NetSuite, Airtable, HubSpot, and adjacent stacks so your data keeps flowing through the same sources of truth.",
    receipt: "No rip-and-replace",
  },
  {
    title: "ROI modeled up front",
    description:
      "Every engagement starts with a quantified backlog, payback projection, and staffing plan so the partnership stays grounded in outcomes.",
    receipt: "Backlog + payback deck",
  },
];

export function ApproachHighlights() {
  return (
    <section className="grid gap-4 md:grid-cols-3" data-aos="fade-up" data-aos-delay="180">
      {approachHighlights.map((highlight) => (
        <article
          key={highlight.title}
          className="flex h-full flex-col gap-3 rounded-2xl border border-slate-300 bg-white/90 p-6 shadow-card backdrop-blur"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-meadow-700/80">{highlight.receipt}</p>
          <h3 className="font-serif text-xl text-ink">{highlight.title}</h3>
          <p className="text-sm text-slate-700/95">{highlight.description}</p>
        </article>
      ))}
    </section>
  );
}
