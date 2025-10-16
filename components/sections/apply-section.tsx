import Link from "next/link";

import { Button } from "../ui/button";
import { SectionSurface } from "../ui/section-surface";

export function ApplySection() {
  return (
    <SectionSurface
      variant="aurora"
      className="p-8 md:p-10"
      data-reveal
      data-reveal-delay="120"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-600">Next steps</p>
          <h2 className="text-3xl font-serif text-ink">Ready to reclaim your evenings?</h2>
          <p className="text-slate-700/90">
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
    </SectionSurface>
  );
}
