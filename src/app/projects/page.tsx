import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Network Engineering Case Studies",
  description:
    "Enterprise network engineering case studies covering wireless modernization, SD-WAN transformation, campus core upgrades, and network observability.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Network Engineering Case Studies | Kenneth Florez",
    description:
      "A portfolio of enterprise networking projects spanning wireless, SD-WAN, campus core modernization, observability, and automation.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Network Engineering Case Studies | Kenneth Florez",
    description:
      "Enterprise wireless, SD-WAN, campus networking, observability, and network automation case studies.",
  },
};

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
