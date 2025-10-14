const faqs = [
  {
    question: "What happens during the free AI Game Plan (Roadmap)?",
    answer:
      "We spend 90 minutes digging into the jobs slowing your team down, the tools you already use, and any rules we need to follow. Together we rank ideas, run first-pass savings numbers, and pick the pilot you want working first.",
  },
  {
    question: "How soon do we see something working?",
    answer:
      "Most teams greenlight a pilot within 48 hours of getting the plan. Meadow co-builds with your operators so you usually have a governed, human-in-the-loop workflow live in about 30 days.",
  },
  {
    question: "Which systems do you integrate with?",
    answer:
      "We meet you where you work—ERPs, EMRs, TMS, CRMs, or homegrown spreadsheets. Part of the plan includes the integration path, security steps, and prompts tuned for your stack.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Every engagement includes a risk register, access controls, and vendor evaluation templates. If you have HIPAA, SOC 2, or internal guardrails, we map automation steps so reviewers can approve quickly.",
  },
  {
    question: "What does working with Meadow cost after the plan?",
    answer:
      "Pilot builds usually start between $15k–$40k depending on scope. We align on pricing during the plan once the automation complexity and guardrails are clear.",
  },
];

export default function MeadowFaq() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-[rgba(var(--meadow-muted)/0.8)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
            Still have questions?
          </span>
          <h2 className="mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            Everything you need before booking the free Game Plan
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            If you need a deeper technical review or security questionnaire, email <a className="font-semibold text-[rgb(var(--meadow-primary))]" href="mailto:hello@meadow.ai">hello@meadow.ai</a> and we&rsquo;ll line it up.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-3xl border border-[rgba(var(--meadow-primary)/0.15)] bg-white/75 p-6 shadow-sm backdrop-blur"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-[rgb(var(--meadow-ink))]">
                <span>{faq.question}</span>
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-white text-sm font-semibold text-[rgb(var(--meadow-primary))] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--meadow-ink)/0.75)]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
