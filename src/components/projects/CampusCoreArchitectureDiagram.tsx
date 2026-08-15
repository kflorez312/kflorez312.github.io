export default function CampusCoreArchitectureDiagram() {
  return (
    <section
      aria-labelledby="campus-core-architecture-heading"
      className="border-b border-slate-800 py-14"
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Solution design
        </p>

        <h2
          id="campus-core-architecture-heading"
          className="mt-3 text-2xl font-bold text-white"
        >
          High-level architecture
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-400">
          A generic campus core design with redundant Catalyst core and
          distribution switching, 10G uplinks, LACP EtherChannels, Layer 3
          routing, access-layer connectivity, and resilient paths to WAN and
          enterprise services.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-10">
        <svg
          viewBox="0 0 1040 820"
          role="img"
          aria-labelledby="campus-core-architecture-title campus-core-architecture-description"
          className="min-w-[840px] w-full"
        >
          <title id="campus-core-architecture-title">
            10G campus core architecture
          </title>

          <desc id="campus-core-architecture-description">
            Redundant Cisco Catalyst core switches connect to distribution
            switches with 10G LACP EtherChannels. Distribution switches provide
            Layer 3 routing and resilient connectivity to access switches, WAN,
            and enterprise services.
          </desc>

          <defs>
            <linearGradient
              id="campusNodeGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient
              id="campusServiceGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#164e63" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <filter
              id="campusNodeShadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="10"
                floodColor="#020617"
                floodOpacity="0.7"
              />
            </filter>

            <marker
              id="campusArrow"
              markerWidth="10"
              markerHeight="10"
              refX="8"
              refY="5"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#22d3ee" />
            </marker>
          </defs>

          <g
            fill="none"
            stroke="#22d3ee"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            opacity="0.82"
          >
            <path d="M310 190 V240 H455" markerEnd="url(#campusArrow)" />
            <path d="M730 190 V240 H585" markerEnd="url(#campusArrow)" />
            <path d="M260 190 C205 245 195 300 195 360" markerEnd="url(#campusArrow)" />
            <path d="M390 190 C470 260 570 280 690 360" markerEnd="url(#campusArrow)" />
            <path d="M650 190 C570 260 470 280 350 360" markerEnd="url(#campusArrow)" />
            <path d="M780 190 C835 245 845 300 845 360" markerEnd="url(#campusArrow)" />

            <path d="M350 415 H455" markerEnd="url(#campusArrow)" />
            <path d="M690 415 H585" markerEnd="url(#campusArrow)" />
            <path d="M520 350 V520" markerEnd="url(#campusArrow)" />

            <path d="M250 630 V705" markerEnd="url(#campusArrow)" />
            <path d="M520 630 V705" markerEnd="url(#campusArrow)" />
            <path d="M790 630 V705" markerEnd="url(#campusArrow)" />
          </g>

          <g
            fill="none"
            stroke="#67e8f9"
            strokeDasharray="10 8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            opacity="0.72"
          >
            <path d="M390 135 H650" />
            <path d="M350 470 C440 520 600 520 690 470" />
            <path d="M250 520 C345 460 425 460 520 520" />
            <path d="M790 520 C695 460 615 460 520 520" />
          </g>

          <DiagramNode
            x={140}
            y={80}
            width={250}
            height={110}
            eyebrow="Core switching"
            title="Catalyst Core A"
            subtitle="Layer 3 routing"
            accent
          />

          <DiagramNode
            x={650}
            y={80}
            width={250}
            height={110}
            eyebrow="Core switching"
            title="Catalyst Core B"
            subtitle="Redundant peer"
            accent
          />

          <ServiceNode
            x={370}
            y={240}
            width={300}
            height={110}
            eyebrow="Routing domain"
            title="OSPF and Gateways"
            subtitle="Layer 3 VLAN migration"
          />

          <SwitchPair
            x={90}
            y={360}
            title="Distribution Block A"
            subtitle="10G EtherChannel uplinks"
          />

          <SwitchPair
            x={690}
            y={360}
            title="Distribution Block B"
            subtitle="10G EtherChannel uplinks"
          />

          <SwitchPair
            x={120}
            y={520}
            title="Access Layer A"
            subtitle="Redundant uplinks"
          />

          <SwitchPair
            x={390}
            y={520}
            title="Access Layer B"
            subtitle="Endpoint access"
          />

          <SwitchPair
            x={660}
            y={520}
            title="Access Layer C"
            subtitle="Resilient paths"
          />

          <DiagramNode
            x={120}
            y={705}
            width={260}
            height={85}
            eyebrow="LAN services"
            title="Users and Devices"
            subtitle="Campus connectivity"
          />

          <DiagramNode
            x={390}
            y={705}
            width={260}
            height={85}
            eyebrow="WAN edge"
            title="WAN Connectivity"
            subtitle="Enterprise reachability"
          />

          <DiagramNode
            x={660}
            y={705}
            width={260}
            height={85}
            eyebrow="Services"
            title="Enterprise Apps"
            subtitle="Shared resources"
          />

          <LinkLabel x={200} y={250} label="10G LACP" />
          <LinkLabel x={720} y={250} label="10G LACP" />
          <LinkLabel x={460} y={120} label="Core peer" />
          <LinkLabel x={460} y={370} label="Layer 3 routing" />
          <LinkLabel x={460} y={482} label="Redundant paths" />
        </svg>
      </div>
    </section>
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
    <g filter="url(#campusNodeShadow)">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="16"
        fill="url(#campusNodeGradient)"
        stroke={accent ? "#22d3ee" : "#334155"}
        strokeWidth={accent ? "3" : "2"}
      />

      <NodeText
        x={x}
        y={y}
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
      />
    </g>
  );
}

function ServiceNode({
  x,
  y,
  width,
  height,
  eyebrow,
  title,
  subtitle,
}: DiagramNodeProps) {
  return (
    <g filter="url(#campusNodeShadow)">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="16"
        fill="url(#campusServiceGradient)"
        stroke="#22d3ee"
        strokeWidth="3"
      />

      <NodeText
        x={x}
        y={y}
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
      />
    </g>
  );
}

type SwitchPairProps = {
  x: number;
  y: number;
  title: string;
  subtitle: string;
};

function SwitchPair({ x, y, title, subtitle }: SwitchPairProps) {
  return (
    <g filter="url(#campusNodeShadow)">
      <rect
        x={x}
        y={y}
        width="260"
        height="110"
        rx="16"
        fill="url(#campusNodeGradient)"
        stroke="#334155"
        strokeWidth="2"
      />

      <rect
        x={x + 22}
        y={y + 24}
        width="68"
        height="36"
        rx="8"
        fill="#0f172a"
        stroke="#22d3ee"
        strokeWidth="2"
      />

      <rect
        x={x + 38}
        y={y + 50}
        width="68"
        height="36"
        rx="8"
        fill="#0f172a"
        stroke="#67e8f9"
        strokeWidth="2"
      />

      <g fill="#22d3ee" opacity="0.9">
        <circle cx={x + 36} cy={y + 42} r="3" />
        <circle cx={x + 50} cy={y + 42} r="3" />
        <circle cx={x + 64} cy={y + 42} r="3" />
        <circle cx={x + 52} cy={y + 68} r="3" />
        <circle cx={x + 66} cy={y + 68} r="3" />
        <circle cx={x + 80} cy={y + 68} r="3" />
      </g>

      <text
        x={x + 125}
        y={y + 35}
        fill="#22d3ee"
        fontSize="12"
        fontWeight="700"
        letterSpacing="2"
      >
        CATALYST
      </text>

      <text
        x={x + 125}
        y={y + 63}
        fill="#f8fafc"
        fontSize="19"
        fontWeight="700"
      >
        {title}
      </text>

      <text x={x + 125} y={y + 86} fill="#94a3b8" fontSize="13">
        {subtitle}
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
      <text
        x={x + 20}
        y={y + 28}
        fill="#22d3ee"
        fontSize="12"
        fontWeight="700"
        letterSpacing="2"
      >
        {eyebrow.toUpperCase()}
      </text>

      <text
        x={x + 20}
        y={y + 58}
        fill="#f8fafc"
        fontSize="20"
        fontWeight="700"
      >
        {title}
      </text>

      <text x={x + 20} y={y + 82} fill="#94a3b8" fontSize="13">
        {subtitle}
      </text>
    </>
  );
}

type LinkLabelProps = {
  x: number;
  y: number;
  label: string;
};

function LinkLabel({ x, y, label }: LinkLabelProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="120"
        height="30"
        rx="15"
        fill="#0f172a"
        stroke="#334155"
      />

      <text
        x={x + 60}
        y={y + 20}
        fill="#cbd5e1"
        fontSize="12"
        fontWeight="700"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}
