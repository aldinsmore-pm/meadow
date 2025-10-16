import { CaseCard, CaseCardProps } from "../ui/case-card";

interface ResultsGridProps {
  cases: CaseCardProps[];
}

export function ResultsGrid({ cases }: ResultsGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2" data-aos="fade-up" data-aos-delay="120">
      {cases.map((caseStudy, index) => (
        <div key={caseStudy.client} className="h-full" data-aos="fade-up" data-aos-delay={140 + index * 40}>
          <CaseCard {...caseStudy} />
        </div>
      ))}
    </section>
  );
}
