import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Featured Projects
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Enterprise engineering case studies.
      </h2>

      <p className="mt-6 max-w-3xl text-slate-400">
        Explore real-world projects involving enterprise wireless,
        SD-WAN, campus networking, and infrastructure modernization.
      </p>

      <div className="mt-10">
        <Link
          href="/projects"
          className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
