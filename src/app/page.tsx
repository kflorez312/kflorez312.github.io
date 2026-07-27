import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />

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

      <Projects />

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
