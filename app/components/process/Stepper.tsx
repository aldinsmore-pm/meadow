import Chip from '../chips/Chip'

type Step = { title: string; goal: string; receipt: string }

export default function Stepper({ steps }: { steps: Step[] }) {
  return (
    <ol className="space-y-6">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="reveal flex flex-col gap-4 rounded-2xl border border-slate-300 bg-fog p-6 shadow-card transition hover:shadow-lg md:flex-row md:items-start"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-meadow-600 font-mono text-xl text-white tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-serif text-2xl text-ink">{step.title}</h3>
              <p className="mt-1 text-slate-700">{step.goal}</p>
            </div>
          </div>
          <div className="md:ml-auto md:pt-1">
            <Chip label="Receipt" value={step.receipt} tone="stamped" />
          </div>
        </li>
      ))}
    </ol>
  )
}
