import { StatBlock } from "../ui/stat-block";

export interface SummaryStat {
  value: string;
  unit?: string;
  caption: string;
}

interface SummaryStripProps {
  stats: SummaryStat[];
}

export function SummaryStrip({ stats }: SummaryStripProps) {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <StatBlock key={stat.caption} {...stat} />
      ))}
    </section>
  );
}
