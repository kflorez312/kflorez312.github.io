import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-36">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Engineering Portfolio
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Enterprise infrastructure programs and technical case studies.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Selected work focused on network modernization, reliability,
          operational consistency, automation, and production support at
          enterprise scale.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
