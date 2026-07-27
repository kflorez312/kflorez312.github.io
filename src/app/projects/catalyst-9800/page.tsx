import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";
import ArchitectureDiagram from "@/components/projects/ArchitectureDiagram";

export default function Catalyst9800Page() {
  const project = projects.find(
    (item) => item.slug === "catalyst-9800"
  );

  if (!project) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <article className="mx-auto max-w-5xl px-6 pb-24 pt-36">
        <Link
          href="/projects"
          className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to projects
        </Link>

        <header className="mt-10 border-b border-slate-800 pb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            {project.category}
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </header>

        {project.metrics && (
          <section className="grid gap-4 border-b border-slate-800 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <p className="text-3xl font-bold text-white">
                  {metric.value}
                </p>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </section>
        )}

        <section className="grid gap-12 border-b border-slate-800 py-14 md:grid-cols-[0.35fr_0.65fr]">
          <ArchitectureDiagram />
          <h2 className="text-2xl font-bold">Business challenge</h2>

          <div className="space-y-5 leading-8 text-slate-400">
            {project.challenge?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="grid gap-12 border-b border-slate-800 py-14 md:grid-cols-[0.35fr_0.65fr]">
          <h2 className="text-2xl font-bold">Engineering approach</h2>

          <ul className="space-y-3 leading-8 text-slate-400">
            {project.approach?.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="grid gap-12 border-b border-slate-800 py-14 md:grid-cols-[0.35fr_0.65fr]">
          <h2 className="text-2xl font-bold">Key challenges</h2>

          <div className="space-y-5 leading-8 text-slate-400">
            {project.challenges?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="grid gap-12 border-b border-slate-800 py-14 md:grid-cols-[0.35fr_0.65fr]">
          <h2 className="text-2xl font-bold">Results</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.results?.map((result) => (
              <div
                key={result}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-slate-300"
              >
                {result}
              </div>
            ))}
          </div>
        </section>

        <section className="py-14">
          <h2 className="text-2xl font-bold">Engineering takeaway</h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            {project.takeaway}
          </p>
        </section>
      </article>
    </main>
  );
}


