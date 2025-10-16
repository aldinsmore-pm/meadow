import { CaseCard, CaseCardProps } from "../ui/case-card";

interface ResultsGridProps {
  cases: CaseCardProps[];
}

export function ResultsGrid({ cases }: ResultsGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2" data-reveal>
      {cases.map((caseStudy, index) => (
        <div key={caseStudy.client} className="h-full" data-reveal data-reveal-delay={140 + index * 80}>
          <CaseCard {...caseStudy} />
        </div>
      ))}
    </section>
  );
}
