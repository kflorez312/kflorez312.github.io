import EngineeringNotes from "@/components/documentation/EngineeringNotes";
import type { DocumentationExample } from "@/data/documentation";

const buildDomains = [
  { title: "WAN / Edge", purpose: "Remote reachability and upstream resilience", standards: ["Redundant connectivity", "Route ownership", "Edge resiliency", "Monitoring"] },
  { title: "Core / Distribution", purpose: "Gateway ownership and routed failure boundaries", standards: ["Layer 3 boundaries", "Gateway redundancy", "Routing", "Redundant uplinks"] },
  { title: "Access", purpose: "Consistent endpoint attachment and segmentation", standards: ["VLAN purpose", "Uplink / port standards", "Supported LACP / EtherChannel", "Authentication"] },
  { title: "Wireless", purpose: "Consistent RF, authentication, and forwarding behavior", standards: ["Controller architecture", "AP connectivity / power", "Authentication", "RF consistency / monitoring"] },
  { title: "Operations", purpose: "Manageability and support throughout the lifecycle", standards: ["Management access", "Logging / NTP", "Monitoring", "Configuration backup", "Software standards", "Labels / documentation"] },
];

export function SiteBuildStack() {
  return (
    <figure className="mt-8 rounded-lg border border-cyan-400/25 bg-slate-900/50 p-6 sm:p-8">
      <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <ol className="space-y-5">
          {[
            ["WAN / Edge", "Upstream paths and security handoffs"],
            ["Core / Distribution", "Routing boundaries and client gateways"],
            ["Access", "Segmentation, uplinks, and endpoint power"],
            ["Wireless / Endpoints", "RF, authentication, and service dependencies"],
          ].map(([title, detail], index) => (
            <li key={title} className="relative border-l-2 border-cyan-400/60 pb-5 pl-5">
              <p className="text-sm font-semibold text-cyan-400">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-base leading-7 text-slate-400">{detail}</p>
              {index < 3 && <span aria-hidden="true" className="absolute -bottom-4 left-5 text-cyan-400">&darr;</span>}
            </li>
          ))}
        </ol>
        <div className="border-t border-dashed border-cyan-400/40 pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-400">Across every tier</p>
          <h3 className="mt-3 text-xl font-semibold">Monitoring / Operations</h3>
          <ul className="mt-5 space-y-4 text-base leading-7 text-slate-300">{["Management access", "Monitoring and logging", "Time synchronization", "Configuration backups", "Software baseline", "Documentation ownership"].map((text) => <li key={text}>{text}</li>)}</ul>
        </div>
      </div>
      <figcaption className="mt-6 border-t border-slate-800 pt-5 text-base leading-7 text-slate-400">Build and acceptance scope, not a serial traffic path. Operational coverage spans the entire stack.</figcaption>
    </figure>
  );
}

export default function StandardsDocumentation({ item }: { item: DocumentationExample }) {
  return (
    <>
      <section className="border-b border-slate-800 py-12" aria-labelledby="build-domains-heading">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Site build domains</p>
        <h2 id="build-domains-heading" className="mt-3 text-2xl font-bold">Consistent decisions at every boundary</h2>
        <div className="mt-8 divide-y divide-slate-800">
          {buildDomains.map((domain, index) => (
            <section key={domain.title} className="grid gap-5 py-7 md:grid-cols-[240px_minmax(0,1fr)] md:gap-10">
              <div className="border-l-2 border-cyan-400/50 pl-5"><p className="text-sm font-semibold text-cyan-400">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-2 text-xl font-semibold">{domain.title}</h3><p className="mt-3 text-base leading-7 text-slate-400">{domain.purpose}</p></div>
              <ul className="grid content-start gap-x-6 gap-y-4 sm:grid-cols-2">{domain.standards.map((standard) => <li key={standard} className="flex gap-3 text-base leading-7 text-slate-300"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" /><span>{standard}</span></li>)}</ul>
            </section>
          ))}
        </div>
      </section>

      <section className="border-b border-slate-800 py-12" aria-labelledby="standards-value-heading">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Why standardize</p>
        <h2 id="standards-value-heading" className="mt-3 text-2xl font-bold">Shared standards &rarr; supportable deployments</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["Repeatability", "Operational consistency", "Faster troubleshooting", "Safer changes", "Scalability", "Engineer onboarding"].map((goal) => <li key={goal} className="border-t border-cyan-400/40 pt-4 text-lg font-semibold text-slate-200">{goal}</li>)}
        </ul>
        <p className="mt-6 text-base leading-7 text-slate-400">Intended benefits of the methodology, not measured outcomes claimed by this portfolio example.</p>
        <div className="mt-8 border-l-2 border-cyan-400 bg-slate-900/50 p-6"><p className="font-semibold text-cyan-300">Acceptance gate</p><p className="mt-3 text-base leading-7 text-slate-300">Define the baseline &rarr; validate forwarding, authentication, redundancy, and monitoring &rarr; hand over evidence, diagrams, backups, and owned exceptions.</p></div>
      </section>
      <EngineeringNotes sections={item.sections} summaries={{
        "Guide Scope": "A generic reference standard with ownership, versioning, platform applicability, and reviewed exceptions.",
        "Site Architecture": "Define upstream, routing, access, wireless, and service dependencies before selecting device settings.",
        "Naming & Labeling": "Keep inventory, labels, diagrams, port descriptions, and patch mappings consistent; no deployed naming scheme is shown.",
        "Segmentation & Gateways": "Record VLAN purpose and trust boundaries. Assign gateway ownership and validate role transitions.",
        "Uplinks & Routing": "Match capacity and optics to requirements; validate logical peers, route policy, and alternate-path behavior.",
        "Access & Authentication": "Use approved identity and management controls, explicit exception handling, and verified wireless readiness.",
        "Operational Services": "Require monitoring, logging, synchronized time, restorable backups, supported software, and escalation ownership.",
        "Build Acceptance": "Accept a deployment only with validation evidence, documented exceptions, and a complete operational handoff.",
      }} />
    </>
  );
}
