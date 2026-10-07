import type { DocumentationExample } from "@/data/documentation";

export function TechnicalDetail({ section }: { section: DocumentationExample["sections"][number] }) {
  return (
    <details className="group mt-5 border-t border-slate-800 pt-4">
      <summary className="cursor-pointer text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400">
        Engineering notes
        <span className="sr-only">: {section.title}</span>
      </summary>
      <div className="mt-5 space-y-4 text-base leading-7 text-slate-400">
        {section.items.map((text) => <p key={text}>{text}</p>)}
      </div>
    </details>
  );
}

export default function EngineeringNotes({ sections, summaries }: {
  sections: DocumentationExample["sections"];
  summaries: Record<string, string>;
}) {
  return (
    <section className="border-b border-slate-800 py-12" aria-labelledby="engineering-decisions-heading">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Design rationale &amp; operational detail</p>
      <h2 id="engineering-decisions-heading" className="mt-3 text-2xl font-bold">Engineering decisions</h2>
      <div className="mt-8 grid gap-x-10 md:grid-cols-2">
        {sections.map((section, index) => (
          <section key={section.title} className="min-w-0 border-t border-slate-800 py-7">
            <p className="text-sm font-semibold text-slate-500">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 text-xl font-semibold">{section.title.replace(/^\d+\.\s+/, "")}</h3>
            <p className="mt-3 text-base leading-7 text-slate-400">{summaries[section.title]}</p>
            <TechnicalDetail section={section} />
          </section>
        ))}
      </div>
    </section>
  );
}
