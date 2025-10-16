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
  const tones = ["fog", "parchment", "tide"] as const;

  return (
    <section className="grid gap-4 md:grid-cols-3" data-reveal>
      {stats.map((stat, index) => (
        <div key={stat.caption} data-reveal data-reveal-delay={80 + index * 80}>
          <StatBlock {...stat} tone={tones[index % tones.length]} />
        </div>
      ))}
    </section>
  );
}
