const faqs = [
  {
    question: "What happens during the free Time-Back Plan session?",
    answer:
      "We spend 90 minutes talking about what's eating up your time, what tools you're already using, and what you've tried before. We'll figure out together which tasks would save you the most time and be easiest to fix first.",
  },
  {
    question: "How quickly will I actually save time?",
    answer:
      "Most business owners decide to move forward within a couple days of getting their plan. We work alongside your team, and typically you're saving hours every week within about a month.",
  },
  {
    question: "Will this work with my current software?",
    answer:
      "Yes. Whether you use QuickBooks, industry-specific software, or even just spreadsheets, we make it work with what you already have. No need to rip everything out and start over.",
  },
  {
    question: "Is my data safe? What about privacy?",
    answer:
      "Absolutely. We include security and access controls from day one. If you work in healthcare, finance, or have specific compliance needs, we'll make sure everything is locked down properly.",
  },
  {
    question: "How much does this cost after the free plan?",
    answer:
      "Setup usually runs between $15k–$40k depending on what you need. We'll give you exact pricing during your free session once we understand what you're trying to fix.",
  },
];

export default function MeadowFaq() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-[rgba(var(--meadow-muted)/0.8)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
            Questions?
          </span>
          <h2 className="mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            Common questions from business owners
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            Don't see your question here? Email us at <a className="font-semibold text-[rgb(var(--meadow-primary))]" href="mailto:hello@meadow.ai">hello@meadow.ai</a> and we'll get back to you quickly.
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
