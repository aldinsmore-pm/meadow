import { MiniROI } from "../ui/mini-roi";
import { SectionSurface } from "../ui/section-surface";

export function ToolsSection() {
  return (
    <SectionSurface
      variant="strata"
      className="p-6 md:p-8"
      innerClassName="space-y-6"
      data-reveal
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss-600">Tools</p>
        <h2 className="mt-2 text-3xl font-serif text-ink">Model ROI before we meet</h2>
        <p className="mt-2 max-w-2xl text-slate-700/90">
          Estimate your first-year ROI in seconds. Adjust the knobs to match your hours and labor costs, then bring the numbers to discovery.
        </p>
      </div>
      <MiniROI />
    </SectionSurface>
  );
}
