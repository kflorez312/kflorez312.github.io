export default function ObservabilityArchitectureDiagram() {
  return (
    <section
      aria-labelledby="observability-architecture-heading"
      className="border-b border-slate-800 py-14"
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Solution design
        </p>

        <h2
          id="observability-architecture-heading"
          className="mt-3 text-2xl font-bold text-white"
        >
          High-level architecture
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-400">
          A generic observability design combining infrastructure monitoring,
          Catalyst Center visibility, ThousandEyes synthetic tests, telemetry,
          and centralized alerting to support incident response and root-cause
          analysis across distributed network and application paths.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-10">
        <svg
          viewBox="0 0 1040 760"
          role="img"
          aria-labelledby="observability-architecture-title observability-architecture-description"
          className="min-w-[840px] w-full"
        >
          <title id="observability-architecture-title">
            Network observability architecture
          </title>

          <desc id="observability-architecture-description">
            Branch and campus networks connect through WAN and internet paths
            to enterprise applications and SaaS services. ThousandEyes,
            Catalyst Center, SolarWinds, and telemetry provide complementary
            visibility that flows into alerting, troubleshooting, incident
            response, and root-cause analysis.
          </desc>

          <defs>
            <linearGradient
              id="observabilityNodeGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient
              id="observabilityServiceGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#164e63" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <filter
              id="observabilityNodeShadow"
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
              id="observabilityArrow"
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
            opacity="0.8"
          >
            <path d="M265 160 H390" markerEnd="url(#observabilityArrow)" />
            <path d="M650 160 H775" markerEnd="url(#observabilityArrow)" />
            <path d="M520 215 V300" markerEnd="url(#observabilityArrow)" />
            <path d="M265 460 H390" markerEnd="url(#observabilityArrow)" />
            <path d="M650 460 H775" markerEnd="url(#observabilityArrow)" />
            <path d="M520 515 V610" markerEnd="url(#observabilityArrow)" />

            <path d="M180 245 V355" markerEnd="url(#observabilityArrow)" />
            <path d="M860 245 V355" markerEnd="url(#observabilityArrow)" />
            <path d="M390 655 H650" markerEnd="url(#observabilityArrow)" />
          </g>

          <g
            fill="none"
            stroke="#67e8f9"
            strokeDasharray="9 8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            opacity="0.72"
          >
            <path d="M180 245 C280 305 410 305 520 300" />
            <path d="M860 245 C760 305 630 305 520 300" />
            <path d="M180 355 C285 400 390 420 520 405" />
            <path d="M860 355 C755 400 650 420 520 405" />
            <path d="M520 515 C430 570 355 585 275 610" />
            <path d="M520 515 C610 570 685 585 765 610" />
          </g>

          <EnvironmentNode
            x={55}
            y={105}
            title="Branch Networks"
            subtitle="Distributed users and paths"
          />

          <EnvironmentNode
            x={55}
            y={355}
            title="Campus Networks"
            subtitle="Switching, wireless, clients"
          />

          <CloudNode
            x={390}
            y={105}
            width={260}
            height={110}
            eyebrow="Transport"
            title="WAN and Internet"
            subtitle="Network and service paths"
          />

          <ServiceNode
            x={775}
            y={105}
            width={210}
            height={110}
            eyebrow="Services"
            title="Apps and SaaS"
            subtitle="User experience targets"
          />

          <MonitoringNode
            x={335}
            y={300}
            width={370}
            height={110}
            eyebrow="Synthetic testing"
            title="ThousandEyes"
            subtitle="Path, reachability, and experience tests"
            accent
          />

          <MonitoringNode
            x={80}
            y={500}
            width={280}
            height={110}
            eyebrow="Infrastructure visibility"
            title="Catalyst Center"
            subtitle="Network assurance and client health"
          />

          <MonitoringNode
            x={680}
            y={500}
            width={280}
            height={110}
            eyebrow="Central monitoring"
            title="SolarWinds"
            subtitle="Availability, interfaces, and alerts"
          />

          <MonitoringNode
            x={390}
            y={610}
            width={260}
            height={100}
            eyebrow="Operations"
            title="Incident Response"
            subtitle="Troubleshooting and RCA"
            accent
          />

          <SignalLabel x={295} y={248} label="Synthetic tests" />
          <SignalLabel x={645} y={248} label="User experience" />
          <SignalLabel x={245} y={432} label="Telemetry" />
          <SignalLabel x={660} y={432} label="Alerting" />
          <SignalLabel x={455} y={555} label="Correlated evidence" />
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

function MonitoringNode({
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
    <g filter="url(#observabilityNodeShadow)">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="16"
        fill="url(#observabilityNodeGradient)"
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
    <g filter="url(#observabilityNodeShadow)">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="16"
        fill="url(#observabilityServiceGradient)"
        stroke="#334155"
        strokeWidth="2"
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

function CloudNode({
  x,
  y,
  width,
  height,
  eyebrow,
  title,
  subtitle,
}: DiagramNodeProps) {
  return (
    <g filter="url(#observabilityNodeShadow)">
      <path
        d={`M${x + 42} ${y + height} H${x + width - 32} C${
          x + width + 10
        } ${y + height} ${x + width + 18} ${y + height - 42} ${
          x + width - 8
        } ${y + height - 62} C${x + width - 20} ${y + 10} ${
          x + width - 80
        } ${y + 2} ${x + width - 112} ${y + 28} C${x + width - 145} ${
          y - 4
        } ${x + 78} ${y + 2} ${x + 68} ${y + 40} C${x + 18} ${y + 42} ${
          x + 4
        } ${y + height - 6} ${x + 42} ${y + height} Z`}
        fill="url(#observabilityServiceGradient)"
        stroke="#22d3ee"
        strokeWidth="3"
      />

      <NodeText
        x={x + 10}
        y={y + 8}
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
      />
    </g>
  );
}

type EnvironmentNodeProps = {
  x: number;
  y: number;
  title: string;
  subtitle: string;
};

function EnvironmentNode({ x, y, title, subtitle }: EnvironmentNodeProps) {
  return (
    <g filter="url(#observabilityNodeShadow)">
      <rect
        x={x}
        y={y}
        width="210"
        height="110"
        rx="16"
        fill="url(#observabilityNodeGradient)"
        stroke="#334155"
        strokeWidth="2"
      />

      <rect
        x={x + 22}
        y={y + 24}
        width="54"
        height="36"
        rx="8"
        fill="#0f172a"
        stroke="#22d3ee"
        strokeWidth="2"
      />

      <rect
        x={x + 38}
        y={y + 50}
        width="54"
        height="36"
        rx="8"
        fill="#0f172a"
        stroke="#67e8f9"
        strokeWidth="2"
      />

      <text
        x={x + 98}
        y={y + 36}
        fill="#22d3ee"
        fontSize="12"
        fontWeight="700"
        letterSpacing="2"
      >
        NETWORK
      </text>

      <text
        x={x + 98}
        y={y + 62}
        fill="#f8fafc"
        fontSize="18"
        fontWeight="700"
      >
        {title}
      </text>

      <text x={x + 98} y={y + 84} fill="#94a3b8" fontSize="13">
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

type SignalLabelProps = {
  x: number;
  y: number;
  label: string;
};

function SignalLabel({ x, y, label }: SignalLabelProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="150"
        height="30"
        rx="15"
        fill="#0f172a"
        stroke="#334155"
      />

      <text
        x={x + 75}
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
