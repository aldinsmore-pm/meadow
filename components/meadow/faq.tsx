const faqs = [
  {
    question: "What happens during the discovery call?",
    answer:
      "We spend 90 minutes understanding your workflows, technical environment, and growth goals. We'll evaluate whether systematic automation will deliver meaningful ROI for your business—and assess if our partnership model aligns with how you operate.",
  },
  {
    question: "How quickly will I actually save time?",
    answer:
      "Most business owners decide to move forward within a couple days of getting their plan. We work alongside your team, and typically you're saving hours every week within about a month.",
  },
  {
    question: "Will this work with our existing systems?",
    answer:
      "Yes. We integrate with what you already use—QuickBooks, industry-specific tools, spreadsheets, even custom databases. We'll also tell you upfront if your current stack isn't ready for systematic automation.",
  },
  {
    question: "Is my data safe? What about privacy?",
    answer:
      "Absolutely. We include security and access controls from day one. If you work in healthcare, finance, or have specific compliance needs, we'll make sure everything is locked down properly.",
  },
  {
    question: "What does a typical engagement cost?",
    answer:
      "Partnership investments range from $15k–$45k depending on workflow complexity and engagement length (typically 6–9 months). You'll receive a detailed proposal after the discovery call if we both agree there's strong fit.",
  },
];

export default function MeadowFaq() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--meadow-primary)/0.2)] bg-[rgba(var(--meadow-muted)/0.8)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--meadow-primary))]">
            FAQs for prospective partners
          </span>
          <h2 className="mt-6 text-pretty text-3xl font-semibold text-[rgb(var(--meadow-ink))] sm:text-4xl">
            "We're selective. Here's how to know if we're aligned."
          </h2>
          <p className="mt-4 text-base text-[rgb(var(--meadow-ink)/0.75)]">
            We work with a limited number of partners each quarter. Here are the details selective owners ask before deciding if it's worth applying.
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
