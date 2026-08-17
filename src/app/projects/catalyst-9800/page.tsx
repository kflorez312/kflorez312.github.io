import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ArchitectureDiagram from "@/components/projects/WirelessArchitectureDiagram";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectSection from "@/components/projects/ProjectSection";
import ProjectTimeline from "@/components/projects/ProjectTimeline";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Cisco Catalyst 9800 Wireless Modernization",
  description:
    "Case study on enterprise wireless modernization with Cisco Catalyst 9800, Cisco ISE, Wi-Fi 6/6E, RF optimization, resiliency, and operational visibility.",
  alternates: {
    canonical: "/projects/catalyst-9800",
  },
  openGraph: {
    title: "Cisco Catalyst 9800 Wireless Modernization | Kenneth Florez",
    description:
      "Enterprise wireless modernization case study focused on Catalyst 9800, Cisco ISE, RF consistency, roaming, resiliency, and visibility.",
    url: "/projects/catalyst-9800",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Cisco Catalyst 9800 Wireless Modernization | Kenneth Florez",
    description:
      "Enterprise wireless modernization with Catalyst 9800, Cisco ISE, Wi-Fi 6/6E, RF optimization, and high availability.",
  },
};

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

        {project.overview && (
          <ProjectOverview items={project.overview} />
        )}

        <ArchitectureDiagram />

        {project.timeline && (
          <ProjectTimeline steps={project.timeline} />
        )}

        <ProjectSection title="Business Challenge">
          <div className="space-y-5 leading-8 text-slate-400">
            {project.challenge?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection title="Engineering Approach">
          <ul className="space-y-3 leading-8 text-slate-400">
            {project.approach?.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection title="Key Challenges">
          <div className="space-y-5 leading-8 text-slate-400">
            {project.challenges?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection title="Results">
          <div className="grid gap-4 sm:grid-cols-2">
            {project.results?.map((result) => (
              <div
                key={result}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5 leading-7 text-slate-300"
              >
                {result}
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection title="Engineering Takeaway">
          <p className="max-w-4xl text-lg leading-8 text-slate-400">
            {project.takeaway}
          </p>
        </ProjectSection>
      </article>
    </main>
  );
}
