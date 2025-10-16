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

const cardVariants = [
  "border-ember/25 bg-parchment/90 shadow-ledger",
  "border-slate-300 bg-white/95 shadow-card",
  "border-transparent bg-dusk/95 text-linen shadow-night",
];

export function ApproachHighlights() {
  return (
    <section className="grid gap-4 md:grid-cols-3" data-reveal data-reveal-delay="120">
      {approachHighlights.map((highlight, index) => {
        const toneIndex = index % cardVariants.length;
        const classes = cardVariants[toneIndex];
        const descriptionClass = toneIndex === 2 ? "text-linen/80" : "text-slate-700/90";
        const labelClass = toneIndex === 2 ? "text-gold/70" : "text-ember/80";
        return (
          <article
            key={highlight.title}
            className={`flex h-full flex-col gap-3 rounded-2xl p-6 backdrop-blur ${classes}`}
            data-reveal
            data-reveal-delay={160 + index * 80}
          >
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${labelClass}`}>
              {highlight.receipt}
            </p>
            <h3 className="font-serif text-xl">{highlight.title}</h3>
            <p className={`text-sm ${descriptionClass}`}>
              {highlight.description}
            </p>
          </article>
        );
      })}
    </section>
  );
}
