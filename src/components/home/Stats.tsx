const stats = [
  {
    value: "15+",
    label: "Years of Experience",
  },
  {
    value: "250+",
    label: "Sites Supported",
  },
  {
    value: "1,200+",
    label: "Wireless Access Points",
  },
  {
    value: "24×7",
    label: "Production Operations",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-800 bg-slate-950/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-slate-800 px-4 py-10 text-center even:border-l md:border-l md:first:border-l-0"
          >
            <p className="text-3xl font-bold text-cyan-400 md:text-4xl">
              {stat.value}
            </p>

            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}