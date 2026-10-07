import Link from "next/link";
import ProjectSection from "@/components/projects/ProjectSection";
import DocumentationDiagram from "@/components/documentation/DocumentationDiagram";
import ChangePlanSections from "@/components/documentation/ChangePlanSections";
import type { DocumentationExample } from "@/data/documentation";

export default function DocumentationContent({ item }: { item: DocumentationExample }) {
  return (
    <article className="mx-auto max-w-5xl px-6 pb-24 pt-36">
      <Link href="/documentation" className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">&larr; Back to documentation</Link>
      <header className="mt-10 border-b border-slate-800 pb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Network Documentation</p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{item.title}</h1>
        <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-400">{item.summary}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {item.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">{tag}</span>)}
        </div>
        <p className="mt-8 border-l-2 border-cyan-400 pl-5 text-sm leading-7 text-slate-400">Portfolio example created for public review. This conceptual document demonstrates an engineering methodology; it does not reproduce production documentation or claim a completed implementation.</p>
      </header>
      <DocumentationDiagram item={item} />
      {item.slug === "change-migration-plan" ? (
        <ChangePlanSections sections={item.sections} />
      ) : item.sections.map((section) => (
        <ProjectSection key={section.title} title={section.title}>
          <div className="min-w-0">
            {section.introduction && <p className="mb-5 leading-8 text-slate-400">{section.introduction}</p>}
            <ul className="space-y-4 leading-8 text-slate-400">
              {section.items.map((text) => (
                <li key={text} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span className="min-w-0">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </ProjectSection>
      ))}
      <div className="pt-10"><Link href="/documentation" className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">Explore all documentation &rarr;</Link></div>
    </article>
  );
}
