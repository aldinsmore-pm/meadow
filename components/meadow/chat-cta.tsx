import Link from "next/link";

const prompts = [
  {
    title: "Find Your Time-Savers",
    description: "Answer a few questions about your daily tasks. Get back three specific ideas that could save you the most time.",
  },
  {
    title: "See What You'll Save",
    description: "Tell us about a task that's eating your time. Get a clear estimate of hours saved and what it might cost to fix.",
  },
  {
    title: "Share with Your Team",
    description: "Turn the results into a simple summary you can share with your team or partners to get their thoughts.",
  },
];

export default function MeadowChatCta() {
  return (
    <section id="start-chat" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
              Hate sales calls? Start here instead
            </h2>
            <p className="text-base text-[rgb(var(--meadow-ink)/0.75)]">
              Answer a few questions about your typical week. Get instant time-savings ideas with real numbers—no pressure, no sales pitch, no one calling you. See what's possible, then decide.
            </p>
            <Link
              href="#book-ai-roadmap"
              className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--meadow-primary))] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(var(--meadow-primary)/0.25)] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--meadow-primary))]/90"
            >
              Get your free Time-Back Plan to unlock chat
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
