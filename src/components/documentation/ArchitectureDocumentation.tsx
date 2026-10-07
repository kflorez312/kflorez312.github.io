import DocumentationFlow from "@/components/documentation/DocumentationFlow";
import EngineeringNotes from "@/components/documentation/EngineeringNotes";
import type { DocumentationExample } from "@/data/documentation";

const summaries: Record<string, string> = {
  "Architecture Overview": "Hierarchy separates access, gateway ownership, routed transit, and upstream dependencies.",
  "Traffic Flow": "Follow the intended forwarding path; verify wireless switching mode and approved internet egress.",
  "L2 / L3 Boundaries": "Keep Layer 2 within a distribution block. Place client gateways at distribution and route toward the core.",
  Routing: "Use OSPF for internal reachability in this example. Record route ownership, next hops, return paths, and filtering.",
  Redundancy: "Validate alternate paths and independent power, cabling, and upstream services; two devices alone do not prove resilience.",
  "Failure Domains": "Bound the impact of a fault, then check for shared service, software, power, or upstream dependencies.",
  "Monitoring / Observability": "Correlate device health and forwarding state with path tests, application signals, and maintenance events.",
  "Operational Notes": "Maintain ownership, review dates, physical mappings, and change references so the topology stays usable.",
};

export default function ArchitectureDocumentation({ item }: { item: DocumentationExample }) {
  return (
    <>
      <section className="border-b border-slate-800 py-12" aria-labelledby="architecture-path-heading">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Traffic flow</p>
        <h2 id="architecture-path-heading" className="mt-3 text-2xl font-bold">Trace the path to enterprise services</h2>
        <div className="mt-6 border-l-2 border-cyan-400 bg-slate-900/50 p-6">
          <DocumentationFlow steps={["Endpoint", "Access", "Distribution", "Core", "Edge", "WAN"]} />
        </div>
        <p className="mt-4 text-base leading-7 text-slate-400">Remote-service path shown. Local inter-subnet traffic routes at distribution; wireless forwarding and internet egress depend on the approved design.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="border-t-2 border-cyan-400/60 pt-5">
            <h3 className="text-xl font-semibold">Routing boundary</h3>
            <p className="mt-3 text-base leading-7 text-slate-400">Access carries Layer 2 to distribution gateways. Distribution, core, and edge exchange routed reachability; client VLANs do not cross the core.</p>
          </div>
          <div className="border-t-2 border-slate-500 pt-5">
            <h3 className="text-xl font-semibold">Redundant paths</h3>
            <p className="mt-3 text-base leading-7 text-slate-400">Each distribution block reaches both cores; each core reaches both edges. Access redundancy requires a supported STP or multi-chassis LACP design.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 py-12" aria-labelledby="failure-domains-heading">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Failure domains</p>
        <h2 id="failure-domains-heading" className="mt-3 text-2xl font-bold">Locate the fault. Predict the impact.</h2>
        <dl className="mt-8 divide-y divide-slate-800">
          {[
            ["Access failure", "Attached users and access points", "Neighboring access switches can remain available."],
            ["Distribution failure", "A block or its gateway paths", "The other block remains isolated by the routed core; remaining paths must be healthy."],
            ["Core / edge failure", "Shared transit or upstream paths", "Use validated alternate components; inspect common power, software, and service dependencies."],
            ["WAN failure", "Remote enterprise reachability", "An alternate upstream path helps only if available and correctly routed; local services may remain reachable."],
          ].map(([fault, impact, note]) => (
            <div key={fault} className="grid gap-3 py-5 md:grid-cols-[200px_1fr]">
              <dt className="border-l-2 border-cyan-400/50 pl-4 text-lg font-semibold">{fault}</dt>
              <dd><p className="font-semibold text-slate-200">{impact}</p><p className="mt-2 text-base leading-7 text-slate-400">{note}</p></dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-b border-slate-800 py-12" aria-labelledby="architecture-visibility-heading">
        <h2 id="architecture-visibility-heading" className="text-2xl font-bold">Visibility across the architecture</h2>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          {[
            ["Infrastructure", "Links, errors, utilization, neighbors, gateway roles, device health"],
            ["Paths & services", "Reachability, application tests, DHCP, DNS, identity, wireless control"],
            ["Operational context", "Baselines, maintenance events, dependency owners, escalation paths"],
          ].map(([title, text]) => <div key={title} className="border-t border-cyan-400/40 pt-4"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-base leading-7 text-slate-400">{text}</p></div>)}
        </div>
      </section>
      <EngineeringNotes sections={item.sections} summaries={summaries} />
    </>
  );
}
