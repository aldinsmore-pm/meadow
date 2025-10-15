import { MiniROI } from "../ui/mini-roi";

export function ToolsSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-serif text-ink">Tools for quicker calls</h2>
        <p className="mt-2 max-w-2xl text-slate-700">
          Estimate your first-year ROI in seconds. Adjust the knobs to match your hours and labor costs, then bring the numbers to discovery.
        </p>
      </div>
      <MiniROI />
    </section>
  );
}
