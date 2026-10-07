import ChangeLifecycleDiagram from "@/components/documentation/ChangeLifecycleDiagram";
import { RunbookWorkflow } from "@/components/documentation/RunbookDocumentation";
import { SiteBuildStack } from "@/components/documentation/StandardsDocumentation";
import type { DocumentationExample } from "@/data/documentation";

export default function DocumentationDiagram({ item }: { item: DocumentationExample }) {
  return (
    <section aria-labelledby="documentation-diagram-heading" className="border-b border-slate-800 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Reference view</p>
      <h2 id="documentation-diagram-heading" className="mt-3 text-2xl font-bold">{item.diagramTitle}</h2>
      <p className="mt-4 max-w-3xl leading-7 text-slate-400">{item.diagramDescription}</p>
      {item.slug === "network-architecture" ? (
        <figure className="mt-8">
          <div role="region" aria-label="Scrollable enterprise site topology" tabIndex={0} className="overflow-x-auto rounded-lg border border-cyan-400/25 bg-slate-900/50 p-4 focus-visible:outline-2 focus-visible:outline-cyan-400 sm:p-8">
            <ArchitectureTopology />
          </div>
          <figcaption className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <span><span className="mr-2 inline-block w-6 border-t-2 border-cyan-400 align-middle" />Routed links</span>
            <span><span className="mr-2 inline-block w-6 border-t-2 border-dashed border-slate-400 align-middle" />Access / endpoint links</span>
            <span>Logical view; line crossings are not junctions</span>
            <span>Shaded blocks: separate Layer 2 domains with gateways at distribution</span>
          </figcaption>
        </figure>
      ) : item.slug === "change-migration-plan" ? (
        <ChangeLifecycleDiagram steps={item.flow} />
      ) : item.slug === "troubleshooting-runbook" ? (
        <RunbookWorkflow />
      ) : (
        <SiteBuildStack />
      )}
    </section>
  );
}

function ArchitectureTopology() {
  return (
    <svg viewBox="0 0 880 750" role="img" aria-labelledby="architecture-title architecture-desc" className="w-full min-w-[880px]">
      <title id="architecture-title">Conceptual enterprise site topology</title>
      <desc id="architecture-desc">WAN connectivity feeds two edge devices, which connect to both core switches. Each distribution block has a routed link to each core and redundant access links to two access switches. Users and access points attach below access switches. Client gateways and Layer 2 domains remain within each distribution block.</desc>
      <g fill="#083344" fillOpacity="0.2" stroke="#22d3ee" strokeOpacity="0.3" strokeDasharray="5 5">
        <rect x={25} y={388} width={410} height={350} rx={8} />
        <rect x={445} y={388} width={410} height={350} rx={8} />
      </g>
      <g fill="none" stroke="#22d3ee" strokeWidth="2">
        <path d="M440 72 V96 H270 V120 M440 96 H610 V120" />
        <path d="M270 184 V260 M610 184 V260" />
        <path d="M290 184 L590 260" />
        <path d="M590 184 L290 260" stroke="#0b1124" strokeWidth="7" />
        <path d="M590 184 L290 260" />
        <path d="M270 324 V360 H250 V400 M610 324 V360 H630 V400" />
        <path d="M290 324 L610 400" />
        <path d="M590 324 L270 400" stroke="#0b1124" strokeWidth="7" />
        <path d="M590 324 L270 400" />
      </g>
      <g fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 5">
        <path d="M205 464 V500 H140 V550 M205 500 H340 V550 M295 464 V522 H140 V550 M295 522 H340 V550" />
        <path d="M585 464 V500 H540 V550 M585 500 H740 V550 M675 464 V522 H540 V550 M675 522 H740 V550" />
        <path d="M140 614 V664 M340 614 V664 M540 614 V664 M740 614 V664" />
      </g>
      <TopologyNode x={300} y={8} width={280} title="WAN / Enterprise Network" detail="Remote services and upstream routing" />
      <TopologyNode x={170} y={120} title="WAN Edge A" detail="Upstream handoff" />
      <TopologyNode x={510} y={120} title="WAN Edge B" detail="Alternate upstream path" />
      <text x={440} y={149} textAnchor="middle" fill="#22d3ee" fontSize={13} fontWeight={600}>REDUNDANT EDGE</text>
      <TopologyNode x={170} y={260} title="Core Switch A" detail="Routed transit" />
      <TopologyNode x={510} y={260} title="Core Switch B" detail="Routed transit" />
      <text x={440} y={286} textAnchor="middle" fill="#22d3ee" fontSize={14} fontWeight={600}>CORE PAIR</text>
      <text x={440} y={308} textAnchor="middle" fill="#94a3b8" fontSize={14}>Layer 3 transit</text>
      <TopologyNode x={150} y={400} title="Distribution Block A" detail="Client gateways / L2 boundary" />
      <TopologyNode x={530} y={400} title="Distribution Block B" detail="Client gateways / L2 boundary" />
      {[140, 340, 540, 740].map((x, index) => <TopologyNode key={x} x={x - 85} y={550} width={170} title="Access Switch" detail={index % 2 === 0 ? "Wired connectivity" : "AP connectivity"} />)}
      {[140, 340, 540, 740].map((x, index) => <TopologyNode key={x} x={x - 85} y={664} width={170} title={index % 2 === 0 ? "Users" : "Access Points"} detail={index % 2 === 0 ? "Wired endpoints" : "Wireless access"} />)}
    </svg>
  );
}

function TopologyNode({ x, y, width = 200, title, detail }: { x: number; y: number; width?: number; title: string; detail: string }) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={64} rx={8} fill="#0f172a" stroke="#334155" />
      <text x={x + width / 2} y={y + 26} textAnchor="middle" fill="#f8fafc" fontSize={16} fontWeight={600}>{title}</text>
      <text x={x + width / 2} y={y + 47} textAnchor="middle" fill="#94a3b8" fontSize={14}>{detail}</text>
    </g>
  );
}
