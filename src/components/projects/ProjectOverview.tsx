type OverviewItem = {
  label: string;
  value: string;
};

type ProjectOverviewProps = {
  items: OverviewItem[];
};

export default function ProjectOverview({
  items,
}: ProjectOverviewProps) {
  return (
    <section className="border-b border-slate-800 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Project Overview
      </p>

      <div className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              {item.label}
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}