type DocumentationFlowProps = {
  steps: string[];
  ordered?: boolean;
};

export default function DocumentationFlow({ steps, ordered = false }: DocumentationFlowProps) {
  return (
    <ol className="flex flex-wrap items-center gap-x-3 gap-y-4 text-sm font-semibold leading-6 text-slate-300 sm:text-base">
      {steps.map((step, index) => (
        <li key={step} className="inline-flex max-w-full items-center gap-3">
          <span>{ordered && <span className="mr-2 text-cyan-400">{String(index + 1).padStart(2, "0")}</span>}{step}</span>
          {index < steps.length - 1 && <span aria-hidden="true" className="text-cyan-400">&rarr;</span>}
        </li>
      ))}
    </ol>
  );
}
