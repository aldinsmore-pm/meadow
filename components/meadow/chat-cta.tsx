import Link from "next/link";

const prompts = [
  {
    title: "Find My Automations",
    description: "Share your team size, systems, and manual pain points. The chat drafts three automation ideas with ROI ranges.",
  },
  {
    title: "ROI Calculator",
    description: "Upload a CSV or describe your workflow volume to model savings, cost to build, and payback period.",
  },
  {
    title: "Executive Summary",
    description: "Generate stakeholder-ready slides outlining risks, compliance guardrails, and change management steps.",
  },
];

export default function MeadowChatCta() {
  return (
    <section id="start-chat" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
              Start the conversation in under 2 minutes
            </h2>
            <p className="text-base text-[rgb(var(--meadow-ink)/0.75)]">
              Meadow’s guided chat captures your ops context and delivers curated automations, ROI estimates, and governance templates your leadership can review instantly.
            </p>
            <Link
              href="#book-ai-roadmap"
              className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--meadow-primary))] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(var(--meadow-primary)/0.25)] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--meadow-primary))]/90"
            >
              Book the AI Roadmap and unlock the chat
            </Link>
          </div>
          <div className="space-y-4">
            {prompts.map((prompt) => (
              <div
                key={prompt.title}
                className="rounded-3xl border border-[rgba(var(--meadow-primary)/0.12)] bg-white/70 p-6 shadow-sm backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[rgb(var(--meadow-ink))]">{prompt.title}</h3>
                    <p className="mt-2 text-sm text-[rgb(var(--meadow-ink)/0.7)]">{prompt.description}</p>
                  </div>
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[rgba(var(--meadow-primary)/0.15)] text-sm font-semibold text-[rgb(var(--meadow-primary))]">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
