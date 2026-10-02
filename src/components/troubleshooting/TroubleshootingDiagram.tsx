import type { ReactNode } from "react";

type TroubleshootingDiagramProps = {
  slug: string;
};

export default function TroubleshootingDiagram({
  slug,
}: TroubleshootingDiagramProps) {
  const diagram = diagrams[slug] ?? diagrams["intermittent-latency"];

  return (
    <section
      aria-labelledby={`${slug}-diagram-heading`}
      className="border-b border-slate-800 py-14"
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Troubleshooting map
        </p>

        <h2 id={`${slug}-diagram-heading`} className="mt-3 text-2xl font-bold">
          {diagram.title}
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-400">
          {diagram.description}
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-10">
        {diagram.content}
      </div>
    </section>
  );
}

const diagrams: Record<
  string,
  {
    title: string;
    description: string;
    content: ReactNode;
  }
> = {
  "intermittent-latency": {
    title: "Site latency fault isolation",
    description:
      "A generic path view showing how broad wired, wireless, application, print, and internet symptoms were traced to shared capacity and edge-platform constraints.",
    content: <LatencyDiagram />,
  },
  "wireless-roaming": {
    title: "Wireless roaming isolation",
    description:
      "A sanitized RF workflow showing client movement, controller tracking, wired AP validation, and RF cell tuning.",
    content: <WirelessRoamingDiagram />,
  },
  "8021x": {
    title: "Wired 802.1X authentication path",
    description:
      "A layered view of endpoint, switch, RADIUS, and Cisco ISE evidence used to explain wired 802.1X failure and MAB fallback.",
    content: <Dot1xDiagram />,
  },
  "automation-assurance": {
    title: "Automation-assisted assurance triage",
    description:
      "A scale-focused workflow showing Catalyst Center data flowing through APIs and Python into prioritized troubleshooting inputs.",
    content: <AutomationDiagram />,
  },
};

function LatencyDiagram() {
  return (
    <svg
      viewBox="0 0 1040 520"
      role="img"
      aria-labelledby="latency-title latency-desc"
      className="min-w-[840px] w-full"
    >
      <title id="latency-title">Intermittent site latency troubleshooting</title>
      <desc id="latency-desc">
        User symptoms across wired, wireless, printing, applications, and
        internet access converge on a constrained uplink and older edge
        appliance before remediation.
      </desc>
      <DiagramDefs />
      <Path d="M200 260 H365" />
      <Path d="M475 260 H600" />
      <Path d="M750 260 H900" />
      <Path d="M405 338 V430 H710 V338" dashed />
      <Path d="M130 160 C220 190 270 210 365 238" dashed />
      <Path d="M130 360 C220 330 270 310 365 282" dashed />

      <DiagramNode x={50} y={105} width={170} height={90} eyebrow="Symptoms" title="Wireless" subtitle="Visible complaint" />
      <DiagramNode x={50} y={325} width={170} height={90} eyebrow="Symptoms" title="Wired / Print" subtitle="Same path impact" />
      <DiagramNode x={340} y={205} width={170} height={110} eyebrow="Shared path" title="Site LAN" subtitle="Counters reviewed" accent />
      <DiagramNode x={600} y={195} width={190} height={130} eyebrow="Bottleneck" title="1G Uplink" subtitle="Utilization, drops" accent />
      <DiagramNode x={870} y={205} width={150} height={110} eyebrow="Edge" title="WAN / Internet" subtitle="Older platform" />
      <DiagramNode x={360} y={430} width={360} height={70} eyebrow="Validated fix" title="10G Uplink + Edge Upgrade" subtitle="Stable after change" accent />
      <DiagramBadge x={590} y={95} label="Monitoring history" />
      <DiagramBadge x={675} y={350} label="Errors / drops / load" />
    </svg>
  );
}

function WirelessRoamingDiagram() {
  return (
    <svg
      viewBox="0 0 1040 560"
      role="img"
      aria-labelledby="roaming-title roaming-desc"
      className="min-w-[840px] w-full"
    >
      <title id="roaming-title">Wireless roaming troubleshooting</title>
      <desc id="roaming-desc">
        Test client movement across access points is compared with controller
        association history and wired AP health checks.
      </desc>
      <DiagramDefs />
      <CircleCell cx={240} cy={245} r={140} label="AP cell A" />
      <CircleCell cx={520} cy={245} r={140} label="AP cell B" />
      <CircleCell cx={800} cy={245} r={140} label="AP cell C" />
      <Path d="M190 390 C310 335 420 335 540 390 S770 445 900 360" />
      <Path d="M240 315 V435 H800 V315" dashed />
      <Path d="M520 150 V80 H835" dashed />

      <AccessPoint x={170} y={180} title="AP A" subtitle="Original association" />
      <AccessPoint x={450} y={180} title="AP B" subtitle="Better candidate" accent />
      <AccessPoint x={730} y={180} title="AP C" subtitle="Coverage overlap" />
      <DiagramNode x={430} y={360} width={220} height={90} eyebrow="Test client" title="Roaming Walk" subtitle="MAC tracked onsite" accent />
      <DiagramNode x={705} y={45} width={250} height={95} eyebrow="Controller" title="Client History" subtitle="AP association + RF data" />
      <DiagramNode x={250} y={435} width={540} height={80} eyebrow="Validated separately" title="AP Wired Infrastructure" subtitle="Switchports, cabling, CRCs, errors, drops, uplinks" />
      <DiagramBadge x={365} y={70} label="Power / 2.4GHz / 20MHz channels" />
    </svg>
  );
}

function Dot1xDiagram() {
  return (
    <svg
      viewBox="0 0 1040 500"
      role="img"
      aria-labelledby="dot1x-title dot1x-desc"
      className="min-w-[840px] w-full"
    >
      <title id="dot1x-title">Wired 802.1X and MAB fallback isolation</title>
      <desc id="dot1x-desc">
        Endpoint, supplicant, access switch, RADIUS, and Cisco ISE policy
        evidence are reviewed to explain MAB fallback.
      </desc>
      <DiagramDefs />
      <Path d="M150 245 H310" />
      <Path d="M450 245 H610" />
      <Path d="M750 245 H900" />
      <Path d="M450 315 C540 400 660 400 750 315" dashed />

      <DiagramNode x={35} y={190} width={155} height={110} eyebrow="Endpoint" title="Supplicant" subtitle="EAP attempt" />
      <DiagramNode x={300} y={190} width={170} height={110} eyebrow="Access" title="Switch Port" subtitle="Auth state" accent />
      <DiagramNode x={590} y={190} width={180} height={110} eyebrow="AAA" title="RADIUS" subtitle="Request / response" />
      <DiagramNode x={850} y={180} width={170} height={130} eyebrow="Policy" title="Cisco ISE" subtitle="Authn / authz logs" accent />
      <DiagramNode x={455} y={375} width={290} height={80} eyebrow="Fallback path" title="MAB" subtitle="Investigated, not assumed" />
      <DiagramBadge x={70} y={70} label="Endpoint service state" />
      <DiagramBadge x={360} y={70} label="Method order and EAP exchange" />
      <DiagramBadge x={715} y={70} label="Profiling and reason codes" />
    </svg>
  );
}

function AutomationDiagram() {
  return (
    <svg
      viewBox="0 0 1040 560"
      role="img"
      aria-labelledby="automation-title automation-desc"
      className="min-w-[840px] w-full"
    >
      <title id="automation-title">Catalyst Center automation assurance triage</title>
      <desc id="automation-desc">
        Network devices feed Catalyst Center. APIs and Python automation produce
        prioritized troubleshooting data for engineer investigation.
      </desc>
      <DiagramDefs />
      <Path d="M170 265 H315" />
      <Path d="M475 265 H585" />
      <Path d="M735 265 H870" />
      <Path d="M660 335 V430" dashed />
      <Path d="M350 335 V430" dashed />

      <DiagramNode x={35} y={205} width={170} height={120} eyebrow="Network" title="Devices" subtitle="Switching, wireless, WAN" />
      <DiagramNode x={300} y={190} width={200} height={150} eyebrow="Platform" title="Catalyst Center" subtitle="Inventory, health, assurance" accent />
      <DiagramNode x={585} y={205} width={170} height={120} eyebrow="Data path" title="REST APIs" subtitle="Structured collection" />
      <DiagramNode x={845} y={190} width={170} height={150} eyebrow="Automation" title="Python" subtitle="Normalize + summarize" accent />
      <DiagramNode x={170} y={430} width={360} height={80} eyebrow="Signals" title="Operational Findings" subtitle="Reachability, interfaces, RADIUS, reboots, alerts" />
      <DiagramNode x={605} y={430} width={300} height={80} eyebrow="Output" title="Prioritized Troubleshooting Data" subtitle="Engineer investigation" accent />
      <DiagramBadge x={360} y={70} label="Approx. 1,600 devices" />
      <DiagramBadge x={610} y={360} label="Automation augments judgment" />
    </svg>
  );
}

function DiagramDefs() {
  return (
    <defs>
      <linearGradient id="diagramNode" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#111827" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="diagramAccent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#164e63" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <filter id="diagramShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#020617" floodOpacity="0.7" />
      </filter>
      <marker id="diagramArrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#22d3ee" />
      </marker>
    </defs>
  );
}

function Path({ d, dashed = false }: { d: string; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="#22d3ee"
      strokeDasharray={dashed ? "10 8" : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      markerEnd="url(#diagramArrow)"
      opacity="0.82"
    />
  );
}

type DiagramNodeProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  accent?: boolean;
};

function DiagramNode({
  x,
  y,
  width,
  height,
  eyebrow,
  title,
  subtitle,
  accent = false,
}: DiagramNodeProps) {
  return (
    <g filter="url(#diagramShadow)">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="16"
        fill={accent ? "url(#diagramAccent)" : "url(#diagramNode)"}
        fillOpacity="0.95"
        stroke={accent ? "#22d3ee" : "#334155"}
        strokeWidth={accent ? "3" : "2"}
      />
      <NodeText x={x} y={y} eyebrow={eyebrow} title={title} subtitle={subtitle} />
    </g>
  );
}

function AccessPoint({
  x,
  y,
  title,
  subtitle,
  accent = false,
}: {
  x: number;
  y: number;
  title: string;
  subtitle: string;
  accent?: boolean;
}) {
  return (
    <g>
      <circle
        cx={x + 70}
        cy={y + 46}
        r="44"
        fill={accent ? "#0e7490" : "#111827"}
        fillOpacity={accent ? "0.32" : "0.95"}
        stroke={accent ? "#22d3ee" : "#334155"}
        strokeWidth="3"
      />
      <circle cx={x + 70} cy={y + 46} r="14" fill="#22d3ee" opacity="0.8" />
      <text x={x + 70} y={y + 115} textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">
        {title}
      </text>
      <text x={x + 70} y={y + 138} textAnchor="middle" fill="#94a3b8" fontSize="13">
        {subtitle}
      </text>
    </g>
  );
}

function CircleCell({
  cx,
  cy,
  r,
  label,
}: {
  cx: number;
  cy: number;
  r: number;
  label: string;
}) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="#0891b2"
        fillOpacity="0.08"
        stroke="#22d3ee"
        strokeDasharray="9 9"
        strokeWidth="2"
      />
      <text x={cx} y={cy - r + 28} textAnchor="middle" fill="#67e8f9" fontSize="13" fontWeight="700">
        {label}
      </text>
    </g>
  );
}

type NodeTextProps = {
  x: number;
  y: number;
  eyebrow: string;
  title: string;
  subtitle: string;
};

function NodeText({ x, y, eyebrow, title, subtitle }: NodeTextProps) {
  return (
    <>
      <text x={x + 18} y={y + 30} fill="#22d3ee" fontSize="12" fontWeight="700" letterSpacing="2">
        {eyebrow.toUpperCase()}
      </text>
      <text x={x + 18} y={y + 61} fill="#f8fafc" fontSize="20" fontWeight="700">
        {title}
      </text>
      <text x={x + 18} y={y + 86} fill="#94a3b8" fontSize="13">
        {subtitle}
      </text>
    </>
  );
}

function DiagramBadge({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width="220" height="36" rx="18" fill="#0f172a" stroke="#334155" />
      <text x={x + 110} y={y + 23} fill="#cbd5e1" fontSize="13" fontWeight="700" textAnchor="middle">
        {label}
      </text>
    </g>
  );
}
