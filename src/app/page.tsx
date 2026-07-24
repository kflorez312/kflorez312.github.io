const projects = [
  {
    title: "Healthcare Wireless Modernization",
    description:
      "Standardized Cisco Catalyst 9800 wireless infrastructure across a multi-site healthcare environment, improving reliability, roaming, and operational consistency.",
    technologies: ["Catalyst 9800", "Cisco ISE", "Wi-Fi 6/6E"],
  },
  {
    title: "Enterprise SD-WAN Transformation",
    description:
      "Improved resiliency, business policy consistency, local internet breakout, and multi-circuit operations across distributed locations.",
    technologies: ["VeloCloud", "BGP", "High Availability"],
  },
  {
    title: "10G Campus Core Upgrade",
    description:
      "Modernized LAN connectivity, upgraded switch uplinks, consolidated Layer 3 services, and improved campus redundancy.",
    technologies: ["Cisco Catalyst", "10G", "OSPF", "LACP"],
  },
  {
    title: "Network Observability",
    description:
      "Expanded end-to-end visibility and accelerated root cause analysis using proactive monitoring and synthetic testing.",
    technologies: ["ThousandEyes", "Catalyst Center", "SolarWinds"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="text-lg font-bold tracking-wide">
            Kenneth Florez
          </a>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
          Staff Network Engineer
        </p>

        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
          Kenneth Florez
        </h1>

        <h2 className="mt-6 text-2xl text-slate-300 md:text-3xl">
          Enterprise Infrastructure • Network Automation • AI-Assisted
          Operations
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          I design, modernize, and operate enterprise networks that support
          thousands of users across healthcare, transportation, and large-scale
          production environments. My focus is building resilient, secure, and
          highly available infrastructure while improving operational efficiency
          through automation and AI.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            View Projects
          </a>

          <a
            href="https://github.com/kflorez312"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-600 px-8 py-4 transition hover:border-cyan-400"
          >
            GitHub
          </a>

          <a
            href="mailto:kflorez312@gmail.com"
            className="rounded-lg border border-slate-600 px-8 py-4 transition hover:border-cyan-400"
          >
            Contact
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-4">
        {[
          ["20+", "Years in Networking"],
          ["600+", "Enterprise Sites Supported"],
          ["100+", "Healthcare Facilities"],
          ["CCNP", "Enterprise Certified"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-xl bg-slate-900 p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">{value}</h3>
            <p className="mt-2 text-slate-400">{label}</p>
          </div>
        ))}
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          About
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-bold md:text-5xl">
          Production networking, infrastructure modernization, and technical
          leadership.
        </h2>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-400">
          I have worked across healthcare, transportation, retail, and consulting
          environments, supporting highly distributed production networks. My
          work centers on reliability, high availability, incident response,
          root cause analysis, standardization, and operational improvement.
        </p>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Technical Skills
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Routing & Switching", "BGP, OSPF, VRFs, HSRP, STP, VLANs, QoS"],
            ["Campus & Data Center", "Cisco Catalyst, Cisco Nexus, vPC, DCI"],
            ["Wireless", "Catalyst 9800, Cisco ISE, Wi-Fi 6/6E, RF optimization"],
            ["WAN & SD-WAN", "VMware VeloCloud, redundant ISP design, BGP"],
            ["Observability", "ThousandEyes, Catalyst Center, SolarWinds"],
            ["Automation & AI", "Python, REST APIs, Git, AI-assisted operations"],
          ].map(([title, description]) => (
            <article
              key={title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-7"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Featured Projects
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          Enterprise infrastructure programs and engineering case studies.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-cyan-500"
            >
              <span className="text-sm font-semibold text-cyan-400">
                0{index + 1}
              </span>

              <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Let&apos;s connect.
            </h2>

            <p className="mt-4 text-slate-400">
              Open to Staff and senior production network engineering
              opportunities.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:kflorez312@gmail.com"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Email Me
            </a>

            <a
              href="https://github.com/kflorez312"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-600 px-6 py-3 transition hover:border-cyan-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © 2026 Kenneth Florez
      </footer>
    </main>
  );
}
