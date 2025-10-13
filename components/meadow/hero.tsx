import Link from "next/link";

const highlights = [
  "Automations scoped to your ops KPIs",
  "Stakeholder-ready roadmap in 10 days",
  "Done-with-you pilots in under 6 weeks",
];

export default function MeadowHero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[rgba(var(--meadow-muted)/0.7)] via-white/60 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-white/80 px-4 py-2 text-sm font-semibold text-[rgb(var(--meadow-primary))] shadow-sm">
              Practical AI for Operations
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[rgb(var(--meadow-ink))] sm:text-5xl md:text-6xl">
              Unlock profitable automation without hiring a full AI team
            </h1>
            <p className="max-w-xl text-lg text-[rgb(var(--meadow-ink)/0.8)]">
              Meadow partners with operators at $500k–$10M revenue companies to surface high-ROI automations, align stakeholders, and launch production-ready pilots that your team trusts.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#book-ai-roadmap"
                className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--meadow-primary))] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[rgba(var(--meadow-primary)/0.3)] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--meadow-primary))]/90"
              >
                Book your AI Roadmap (Free)
              </Link>
              <Link
                href="#start-chat"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-white px-6 py-3 text-base font-semibold text-[rgb(var(--meadow-ink))] transition hover:border-[rgba(var(--meadow-primary)/0.5)] hover:bg-[rgba(var(--meadow-muted)/0.6)]"
              >
                Start "Find My Automations"
              </Link>
            </div>
            <ul className="grid gap-3 text-sm text-[rgb(var(--meadow-ink)/0.75)] sm:grid-cols-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-2xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-4 shadow-sm backdrop-blur"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[rgba(var(--meadow-primary)/0.15)] text-sm font-semibold text-[rgb(var(--meadow-primary))]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 hidden h-32 w-32 rounded-full bg-[rgba(var(--meadow-accent)/0.35)] blur-3xl sm:block" />
            <div className="relative rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/80 p-6 shadow-2xl shadow-[rgba(var(--meadow-ink)/0.12)] backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-base font-semibold text-[rgb(var(--meadow-ink))]">Ops Snapshot</h2>
                  <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">
                    Built during your free AI Roadmap session
                  </p>
                </div>
                <span className="rounded-full bg-[rgba(var(--meadow-primary)/0.18)] px-3 py-1 text-xs font-semibold text-[rgb(var(--meadow-primary))]">
                  2 weeks
                </span>
              </div>
              <dl className="mt-8 grid gap-6 text-sm text-[rgb(var(--meadow-ink)/0.75)]">
                <div className="space-y-1">
                  <dt className="font-semibold text-[rgb(var(--meadow-ink))]">Top automation bet</dt>
                  <dd>Accounts payable triage automated with vendor-aware agent, projected to save 28 hrs/mo.</dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-semibold text-[rgb(var(--meadow-ink))]">Stakeholder alignment</dt>
                  <dd>Ops, finance, and compliance review ready; includes risks, guardrails, and LLM evaluation criteria.</dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-semibold text-[rgb(var(--meadow-ink))]">Pilot game plan</dt>
                  <dd>Defines data needs, integration path, success metrics, and 30-60-90 hand-off checklist.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="grid gap-6 rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/60 p-6 shadow-sm backdrop-blur-sm sm:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold text-[rgb(var(--meadow-primary))]">$120k</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">Average annual run-rate savings unlocked per client in year one</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-[rgb(var(--meadow-primary))]">18 days</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">From kickoff to first automation in production with change management support</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-[rgb(var(--meadow-primary))]">94%</p>
            <p className="text-sm text-[rgb(var(--meadow-ink)/0.7)]">Leaders who expand scope after roadmap delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
