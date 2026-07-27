export default function ArchitectureDiagram() {
  return (
    <section
      aria-labelledby="architecture-heading"
      className="border-b border-slate-800 py-14"
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Solution design
        </p>

        <h2
          id="architecture-heading"
          className="mt-3 text-2xl font-bold text-white"
        >
          High-level architecture
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-400">
          A resilient wireless design integrating centralized controller
          services, enterprise authentication, operational visibility, and
          modern access points across distributed locations.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-10">
        <svg
          viewBox="0 0 960 620"
          role="img"
          aria-labelledby="wireless-architecture-title wireless-architecture-description"
          className="min-w-[760px] w-full"
        >
          <title id="wireless-architecture-title">
            Cisco Catalyst 9800 wireless architecture
          </title>

          <desc id="wireless-architecture-description">
            Catalyst 9800 high-availability wireless controllers integrate
            with Cisco ISE and management services, connecting through the
            campus network to wireless access points and client devices.
          </desc>

          <defs>
            <linearGradient
              id="nodeGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="10"
                floodColor="#020617"
                floodOpacity="0.7"
              />
            </filter>

            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="8"
              refY="5"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#22d3ee" />
            </marker>
          </defs>

          {/* Connection lines */}
          <g
            fill="none"
            stroke="#22d3ee"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          >
            <path d="M480 110 V165" markerEnd="url(#arrow)" />
            <path d="M480 275 V330" markerEnd="url(#arrow)" />
            <path d="M480 440 V485" markerEnd="url(#arrow)" />

            <path d="M290 220 H350" markerEnd="url(#arrow)" />
            <path d="M670 220 H610" markerEnd="url(#arrow)" />

            <path d="M480 440 H235 V485" markerEnd="url(#arrow)" />
            <path d="M480 440 H725 V485" markerEnd="url(#arrow)" />
          </g>

          {/* Management and authentication */}
          <DiagramNode
            x={90}
            y={170}
            width={200}
            height={100}
            eyebrow="Authentication"
            title="Cisco ISE"
            subtitle="802.1X and policy"
          />

          <DiagramNode
            x={670}
            y={170}
            width={200}
            height={100}
            eyebrow="Operations"
            title="Monitoring"
            subtitle="Health and visibility"
          />

          {/* Controller */}
          <DiagramNode
            x={350}
            y={165}
            width={260}
            height={110}
            eyebrow="Control plane"
            title="Catalyst 9800 HA"
            subtitle="Centralized wireless services"
            accent
          />

          {/* Network */}
          <DiagramNode
            x={350}
            y={330}
            width={260}
            height={110}
            eyebrow="Network"
            title="Campus Switching"
            subtitle="PoE, VLANs, DHCP and routing"
          />

          {/* Access points */}
          <DiagramNode
            x={135}
            y={485}
            width={200}
            height={100}
            eyebrow="Wireless access"
            title="CW9162 APs"
            subtitle="Wi-Fi 6 and 6E"
          />

          <DiagramNode
            x={380}
            y={485}
            width={200}
            height={100}
            eyebrow="Endpoints"
            title="Clinical Devices"
            subtitle="Secure application access"
          />

          <DiagramNode
            x={625}
            y={485}
            width={200}
            height={100}
            eyebrow="Endpoints"
            title="Staff and Guests"
            subtitle="Policy-based access"
          />

          {/* Internet / enterprise services */}
          <DiagramNode
            x={350}
            y={20}
            width={260}
            height={90}
            eyebrow="Enterprise services"
            title="Applications and Internet"
            subtitle="Business-critical connectivity"
          />
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
    <g filter="url(#nodeShadow)">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="16"
        fill="url(#nodeGradient)"
        stroke={accent ? "#22d3ee" : "#334155"}
        strokeWidth={accent ? "3" : "2"}
      />

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

      <text
        x={x + 20}
        y={y + 82}
        fill="#94a3b8"
        fontSize="13"
      >
        {subtitle}
      </text>
    </g>
  );
}
