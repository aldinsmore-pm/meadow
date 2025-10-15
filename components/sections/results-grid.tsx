import { CaseCard, CaseCardProps } from "../ui/case-card";

interface ResultsGridProps {
  cases: CaseCardProps[];
}

export function ResultsGrid({ cases }: ResultsGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {cases.map((caseStudy) => (
        <CaseCard key={caseStudy.client} {...caseStudy} />
      ))}
    </section>
  );
}
