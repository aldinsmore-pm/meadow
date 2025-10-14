import Link from "next/link";

const resources = [
  {
    title: "Time-Savings Calculator",
    description: "Simple spreadsheet to figure out which tasks are costing you the most time and money each month.",
    badge: "Free spreadsheet",
  },
  {
    title: "Small Business Owner Newsletter",
    description: "Monthly tips on saving time in accounting, logistics, and service businesses—real examples from real owners.",
    badge: "Join 2,100+ owners",
  },
  {
    title: "Team Onboarding Guide",
    description: "How to introduce new tools to your team without the pushback—includes talking points and training tips.",
    badge: "PDF guide",
  },
];

export default function MeadowResources() {
  return (
    <section id="resources" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
              Free tools to help you save time
            </h2>
            <p className="text-base text-[rgb(var(--meadow-ink)/0.75)]">
              Practical calculators, guides, and tips from other small business owners who've successfully reclaimed their time.
            </p>
            <Link
              href="mailto:hello@meadow.ai"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.3)] px-6 py-3 text-sm font-semibold text-[rgb(var(--meadow-primary))] transition hover:bg-[rgba(var(--meadow-muted)/0.8)]"
            >
              Get these free resources
            </Link>
          </div>
          <div className="grid gap-4">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="flex flex-col gap-3 rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-6 shadow-sm backdrop-blur"
              >
                <span className="inline-flex w-fit items-center rounded-full border border-[rgba(var(--meadow-accent)/0.3)] bg-[rgba(var(--meadow-accent)/0.2)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
                  {resource.badge}
                </span>
                <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">{resource.title}</h3>
                <p className="text-sm text-[rgb(var(--meadow-ink)/0.75)]">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
