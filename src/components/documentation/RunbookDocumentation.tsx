import EngineeringNotes, { TechnicalDetail } from "@/components/documentation/EngineeringNotes";
import type { DocumentationExample } from "@/data/documentation";

const faultDomains = [
  { code: "L1", title: "Physical", section: "2. Physical Layer", checks: ["Interface state", "CRC / I/O errors", "Optics", "Cabling", "Negotiation"] },
  { code: "L2", title: "Switching", section: "3. Layer 2", checks: ["VLANs", "Trunks", "STP", "MAC learning", "LACP / EtherChannel"] },
  { code: "L3", title: "Routing", section: "4. Layer 3", checks: ["Addressing", "ARP", "Gateway", "Routes", "Adjacencies"] },
  { code: "WAN", title: "Path", section: "5. WAN / Routing", checks: ["Edge state", "Tunnels", "Loss", "Latency", "Utilization"] },
  { code: "SVC", title: "Services", section: "6. Services", checks: ["DHCP", "DNS", "RADIUS / authentication", "Service ownership"] },
  { code: "OBS", title: "Observability", section: "7. Monitoring / Telemetry", checks: ["Historical data", "Logs", "Telemetry", "Assurance", "Synthetic tests"] },
];

export function RunbookWorkflow() {
  const phases = [
    { title: "Scope & compare", start: 1, stages: ["Symptom", "Establish scope"], note: "Affected users, services, timing, and a known-good comparison." },
    { title: "Isolate the path", start: 3, stages: ["L1 / Physical", "L2 / Switching", "L3 / Routing", "WAN / Services", "Observability"], note: "Choose checks from the evidence; investigate in parallel when appropriate." },
    { title: "Decide & recover", start: 8, stages: ["Correlate evidence", "Root cause / escalation", "Remediate", "Validate recovery"], note: "Record uncertainty, use approved change authority, and retest the original symptom." },
  ];
  return (
    <figure className="mt-8 rounded-lg border border-cyan-400/25 bg-slate-900/50 p-6 sm:p-8">
      <figcaption className="border-b border-cyan-400/25 pb-6">
        <p className="text-lg font-semibold text-cyan-300">Collect evidence before making changes</p>
        <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-base text-slate-300"><p>Symptoms &ne; root cause</p><p>Change one variable at a time when possible.</p></div>
      </figcaption>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {phases.map((phase, index) => (
          <div key={phase.title} className="min-w-0">
            <p className="text-sm font-semibold text-cyan-400">{String(index + 1).padStart(2, "0")} {index < phases.length - 1 && <span aria-hidden="true">&rarr;</span>}</p>
            <h3 className="mt-2 text-xl font-semibold">{phase.title}</h3>
            <ol start={phase.start} className="mt-5 space-y-0 border-l border-slate-600">
              {phase.stages.map((stage, stageIndex) => <li key={stage} className="relative flex gap-3 py-3 pl-4 before:absolute before:-left-1 before:top-5 before:h-2 before:w-2 before:rounded-full before:bg-cyan-400"><span className="text-sm leading-6 text-slate-500">{String(phase.start + stageIndex).padStart(2, "0")}</span><span className="text-base font-semibold leading-6 text-slate-200">{stage}</span></li>)}
            </ol>
            <p className="mt-5 text-base leading-7 text-slate-400">{phase.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t border-dashed border-amber-300/40 pt-5 text-base leading-7"><span className="font-semibold text-amber-200">Cause unproven?</span><span className="text-slate-300"> Preserve evidence &rarr; escalate with a clear request. A workaround remains mitigation until the cause is confirmed.</span></div>
    </figure>
  );
}

export default function RunbookDocumentation({ item }: { item: DocumentationExample }) {
  const matrixTitles = faultDomains.map((domain) => domain.section);
  return (
    <>
      <section className="border-b border-slate-800 py-12" aria-labelledby="fault-isolation-heading">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Fault isolation</p>
        <h2 id="fault-isolation-heading" className="mt-3 text-2xl font-bold">Six domains. One evidence timeline.</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">Compare both sides of each boundary and align timestamps. Missing telemetry is an evidence gap, not a healthy-state signal.</p>
        <div className="mt-8 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {faultDomains.map((domain) => (
            <section key={domain.code} className="min-w-0 rounded-lg border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-sm font-semibold text-cyan-400">{domain.code}</p>
              <h3 className="mt-2 text-xl font-semibold">{domain.title}</h3>
              <ul className="mt-5 space-y-2 text-base leading-7 text-slate-300">{domain.checks.map((check) => <li key={check}>{check}</li>)}</ul>
              <TechnicalDetail section={item.sections.find((section) => section.title === domain.section)!} />
            </section>
          ))}
        </div>
      </section>
      <EngineeringNotes sections={item.sections.filter((section) => !matrixTitles.includes(section.title))} summaries={{
        "Runbook Context": "Site connectivity / performance: use observed facts to select the next test, without assuming the network is at fault.",
        "1. Establish Scope": "One endpoint, one access block, wireless clients, an entire site, or a shared service? Compare affected and healthy paths.",
        "8. Correlate Evidence": "Build a timestamped timeline. Separate facts from hypotheses and identify the narrowest supported fault domain.",
        "9. Escalate or Remediate": "Escalate with evidence or take the smallest justified, authorized action with a rollback plan.",
        "10. Validate Recovery": "Repeat the original failing transaction, observe stability, confirm user impact, and record follow-up ownership.",
      }} />
    </>
  );
}
