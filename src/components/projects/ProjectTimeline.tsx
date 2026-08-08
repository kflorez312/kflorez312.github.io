type TimelineStep = {
  title: string;
  description: string;
};

type ProjectTimelineProps = {
  steps: TimelineStep[];
};

export default function ProjectTimeline({
  steps,
}: ProjectTimelineProps) {
  return (
    <section className="border-b border-slate-800 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Implementation
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Project timeline
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-6"
          >
            <p className="text-sm font-semibold text-cyan-400">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="mt-4 text-xl font-bold text-white">
              {step.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}