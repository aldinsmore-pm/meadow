import Link from "next/link";

import { Button } from "../ui/button";

export function ApplySection() {
  return (
    <section className="rounded-2xl border border-meadow-600 bg-meadow-600/10 p-8 shadow-card md:p-10" data-reveal data-reveal-delay="120">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-3xl font-serif text-ink">Ready to reclaim your evenings?</h2>
          <p className="text-slate-700">
            Tell us about your operators and the workflows stealing their time. We’ll reply within two business days with next steps.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="https://cal.com" target="_blank" rel="noreferrer">
              Apply to partner
            </Link>
          </Button>
          <Button asChild variant="ghost-partner">
            <Link href="mailto:hello@meadow.ai">Email the team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
