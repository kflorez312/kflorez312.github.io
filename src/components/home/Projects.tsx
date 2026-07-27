<h2 className="mt-4 max-w-4xl text-3xl font-bold text-white md:text-5xl">
  Enterprise infrastructure programs and engineering case studies.
</h2>

const projects = [
  {
    number: "01",
    title: "Healthcare Wireless Modernization",
    description:
      "Standardized Cisco Catalyst 9800 wireless infrastructure across a multi-site healthcare environment, improving reliability, roaming, and operational consistency.",
    technologies: ["Catalyst 9800", "Cisco ISE", "Wi-Fi 6/6E"],
  },
  {
    number: "02",
    title: "Enterprise SD-WAN Transformation",
    description:
      "Improved resiliency, business-policy consistency, local internet breakout, and multi-circuit operations across distributed locations.",
    technologies: ["VeloCloud", "BGP", "High Availability"],
  },
  {
    number: "03",
    title: "10G Campus Core Upgrade",
    description:
      "Modernized LAN connectivity, upgraded switch uplinks, consolidated Layer 3 services, and improved campus redundancy.",
    technologies: ["Cisco Catalyst", "10G", "OSPF", "LACP"],
  },
  {
    number: "04",
    title: "Network Observability",
    description:
      "Expanded end-to-end visibility and accelerated root-cause analysis using proactive monitoring and synthetic testing.",
    technologies: ["ThousandEyes", "Catalyst Center", "SolarWinds"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-slate-800 bg-slate-950/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white md:text-5xl">
            Enterprise infrastructure built for reliability and scale.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Selected initiatives focused on modernization, resiliency,
            operational consistency, and improved visibility.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <p className="text-sm font-semibold text-cyan-400">
                {project.number}
              </p>

              <h3 className="mt-5 text-xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

