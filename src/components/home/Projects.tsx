import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.status === "published"
  );

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

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.slug}
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {project.category}
            </p>

            <h3 className="mt-4 text-2xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="mt-7 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              View Case Study →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
