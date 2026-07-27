import Link from "next/link";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={
        project.status === "published"
          ? `/projects/${project.slug}`
          : "#"
      }
      className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
    >
      <p className="text-sm font-semibold text-cyan-400">
        {project.number}
      </p>

      <h2 className="mt-5 text-2xl font-bold">
        {project.title}
      </h2>

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

      <p className="mt-8 text-sm font-semibold text-cyan-400">
        {project.status === "published"
          ? "View case study →"
          : "Coming Soon"}
      </p>
    </Link>
  );
}

