import Link from "next/link";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectSection from "@/components/projects/ProjectSection";
import ProjectTimeline from "@/components/projects/ProjectTimeline";
import TroubleshootingDiagram from "@/components/troubleshooting/TroubleshootingDiagram";
import type { TroubleshootingCase } from "@/data/troubleshooting";

type TroubleshootingCaseContentProps = {
  item: TroubleshootingCase;
};

export default function TroubleshootingCaseContent({
  item,
}: TroubleshootingCaseContentProps) {
  return (
    <article className="mx-auto max-w-5xl px-6 pb-24 pt-36">
      <Link
        href="/troubleshooting"
        className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
      >
        &larr; Back to troubleshooting
      </Link>

      <header className="mt-10 border-b border-slate-800 pb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {item.eyebrow}
        </p>

        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {item.title}
        </h1>

        <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-400">
          {item.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <ProjectOverview items={item.overview} />

      <TroubleshootingDiagram slug={item.slug} />

      <ProjectTimeline steps={item.timeline} />

      <TextSection title="Problem" items={item.problem} />
      <ListSection title="Investigation" items={item.investigation} />
      <ListSection title="Evidence" items={item.evidence} />
      <TextSection title={item.rootCauseTitle ?? "Root Cause"} items={item.rootCause} />
      <ListSection title="Resolution" items={item.resolution} />
      <ListSection title="Validation / Outcome" items={item.validation} />

      <ProjectSection title="Engineering Takeaway">
        <p className="max-w-4xl text-lg leading-8 text-slate-400">
          {item.takeaway}
        </p>
      </ProjectSection>
    </article>
  );
}

function TextSection({ title, items }: { title: string; items: string[] }) {
  return (
    <ProjectSection title={title}>
      <div className="space-y-5 leading-8 text-slate-400">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </ProjectSection>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <ProjectSection title={title}>
      <ul className="space-y-3 leading-8 text-slate-400">
        {items.map((item) => (
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
  );
}
