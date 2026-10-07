import type { DocumentationExample } from "@/data/documentation";

const sectionLabels: Record<string, string[]> = {
  Objective: ["Intended state"],
  Scope: ["Included work", "Change boundaries", "Ownership"],
  Dependencies: ["Platform readiness", "Operational access", "Rollback window"],
  "Pre-Change Checks": ["Current-state checks", "Baseline evidence", "Recovery readiness", "Go / no-go"],
  Implementation: ["Establish baseline", "Controlled sequence", "Validate each path", "Hold point"],
  Validation: ["Infrastructure health", "Application and path tests", "Resiliency test", "Acceptance evidence"],
  Rollback: ["Defined triggers", "Restore previous state", "Validate restoration", "Record and hand off"],
  "Post-Change Monitoring": ["Observation period", "Operational handoff"],
};

export default function ChangePlanSections({ sections }: { sections: DocumentationExample["sections"] }) {
  return (
    <div>
      {sections.map((section, index) => {
        const contingency = section.title === "Rollback";
        const critical = ["Pre-Change Checks", "Implementation", "Validation"].includes(section.title);
        const id = `change-plan-${index + 1}`;

        return (
          <section key={section.title} id={id} aria-labelledby={`${id}-heading`} className="grid scroll-mt-40 gap-7 border-b border-slate-800 py-10 md:grid-cols-[240px_minmax(0,1fr)] md:gap-10 md:py-12">
            <div>
              <div className={`md:sticky md:top-28 ${contingency ? "border-l-2 border-dashed border-amber-300/60 pl-5" : critical ? "border-l-2 border-cyan-400/70 pl-5" : "pl-5"}`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${contingency ? "text-amber-300" : critical ? "text-cyan-400" : "text-slate-500"}`}>
                  {String(index + 1).padStart(2, "0")}
                  {contingency && <span className="ml-3">Contingency path</span>}
                </p>
                <h2 id={`${id}-heading`} className={`mt-3 text-2xl font-bold leading-8 ${contingency ? "text-amber-100" : critical ? "text-cyan-300" : "text-white"}`}>{section.title}</h2>
              </div>
            </div>

            <ul className="min-w-0 divide-y divide-slate-800/70">
              {section.items.map((text, itemIndex) => (
                <li key={text} className="py-4 first:pt-0 last:pb-0">
                  <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.12em] ${contingency ? "text-amber-200/80" : "text-slate-300"}`}>
                    {sectionLabels[section.title]?.[itemIndex]}
                  </p>
                  <p className="text-base leading-7 text-slate-400">{text}</p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
