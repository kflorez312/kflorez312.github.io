export default function ChangeLifecycleDiagram({ steps }: { steps: string[] }) {
  const notes = [
    "Capture evidence",
    "Confirm readiness",
    "One path at a time",
    "Record acceptance",
    "Observe stability",
  ];

  return (
    <figure className="mt-8 rounded-lg border border-cyan-400/25 bg-slate-900/50 px-6 py-8 sm:px-8">
      <ol className="relative grid gap-7 before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-cyan-400/30 md:grid-cols-5 md:gap-4 md:before:bottom-auto md:before:left-[10%] md:before:right-[10%] md:before:h-px md:before:w-auto">
        {steps.map((step, index) => (
          <li key={step} className="relative flex min-w-0 items-start gap-4 md:flex-col md:items-center md:gap-3 md:text-center">
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-950 text-xs font-semibold text-cyan-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <p className="text-base font-semibold text-white">{step}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">{notes[index]}</p>
            </div>
            {index < steps.length - 1 && (
              <span aria-hidden="true" className="absolute -bottom-6 left-2.5 rotate-90 text-cyan-400 md:-right-3 md:bottom-auto md:left-auto md:top-1 md:rotate-0">&rarr;</span>
            )}
          </li>
        ))}
      </ol>

      <div aria-hidden="true" className="my-3 hidden h-10 md:block">
        <svg viewBox="0 0 1000 40" preserveAspectRatio="none" className="h-full w-full overflow-visible">
          <path d="M708 0 V16 H500 V36" fill="none" stroke="#fbbf24" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />
          <path d="M495 31 L500 37 L505 31" fill="none" stroke="#fbbf24" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <figcaption className="mt-8 border-t border-dashed border-amber-300/40 pt-5 md:mt-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Contingency / failed validation gate</p>
        <ol className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm leading-6 text-slate-300">
          {["Pause and assess", "Approved rollback", "Validate restored baseline"].map((step, index) => (
            <li key={step} className="inline-flex items-center gap-3">
              <span className={index === 1 ? "font-semibold text-amber-200" : undefined}>{step}</span>
              {index < 2 && <span aria-hidden="true" className="text-amber-300">&rarr;</span>}
            </li>
          ))}
        </ol>
      </figcaption>
    </figure>
  );
}
