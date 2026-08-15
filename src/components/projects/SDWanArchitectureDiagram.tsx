export default function SDWanArchitectureDiagram() {
  return (
    <section
      aria-labelledby="sdwan-architecture-heading"
      className="border-b border-slate-800 py-14"
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Solution design
        </p>

        <h2
          id="sdwan-architecture-heading"
          className="mt-3 text-2xl font-bold text-white"
        >
          High-level architecture
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-400">
          A resilient SD-WAN design using dual internet providers,
          high-availability VeloCloud edges, hub overlay connectivity,
          policy-based local internet breakout, and repeatable branch patterns.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-10">
        <svg
          viewBox="0 0 1040 700"
          role="img"
          aria-labelledby="sdwan-architecture-title sdwan-architecture-description"
          className="min-w-[820px] w-full"
        >
          <title id="sdwan-architecture-title">
            Enterprise SD-WAN architecture
          </title>

          <desc id="sdwan-architecture-description">
            Dual ISPs connect into VeloCloud high-availability edge pairs at
            branch sites. Branches use SD-WAN overlay tunnels to enterprise
            hubs while approved traffic uses local internet breakout.
          </desc>

          <defs>
            <linearGradient
              id="sdwanNodeGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient
              id="sdwanCloudGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#164e63" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <filter
              id="sdwanNodeShadow"
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
              id="sdwanArrow"
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
            opacity="0.78"
          >
            <path d="M250 120 H400" markerEnd="url(#sdwanArrow)" />
            <path d="M790 120 H640" markerEnd="url(#sdwanArrow)" />
            <path d="M520 180 V245" markerEnd="url(#sdwanArrow)" />
            <path d="M520 355 V420" markerEnd="url(#sdwanArrow)" />
            <path d="M520 530 V590" markerEnd="url(#sdwanArrow)" />

            <path d="M400 300 H255 V410" markerEnd="url(#sdwanArrow)" />
            <path d="M640 300 H785 V410" markerEnd="url(#sdwanArrow)" />
            <path d="M520 355 H185 V515" markerEnd="url(#sdwanArrow)" />
            <path d="M520 355 H855 V515" markerEnd="url(#sdwanArrow)" />
          </g>

          <g
            fill="none"
            stroke="#67e8f9"
            strokeDasharray="9 9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            opacity="0.7"
          >
            <path d="M265 515 C350 455 430 455 520 530" />
            <path d="M775 515 C690 455 610 455 520 530" />
          </g>

          <DiagramNode
            x={70}
            y={75}
            width={180}
            height={90}
            eyebrow="Provider"
            title="ISP A"
            subtitle="Primary circuit"
          />

          <DiagramNode
            x={790}
            y={75}
            width={180}
            height={90}
            eyebrow="Provider"
            title="ISP B"
            subtitle="Diverse circuit"
          />

          <DiagramNode
            x={400}
            y={70}
            width={240}
            height={110}
            eyebrow="Internet edge"
            title="Dual ISP Underlay"
            subtitle="Resilient transport paths"
            accent
          />

          <CloudNode
            x={385}
            y={245}
            width={270}
            height={110}
            eyebrow="SD-WAN fabric"
            title="VeloCloud Overlay"
            subtitle="Dynamic path selection"
          />

          <DiagramNode
            x={350}
            y={420}
            width={340}
            height={110}
            eyebrow="Hub connectivity"
            title="Enterprise Hubs"
            subtitle="Data center and shared services"
          />

          <DiagramNode
            x={350}
            y={590}
            width={340}
            height={90}
            eyebrow="Local internet breakout"
            title="SaaS and Internet"
            subtitle="Policy-controlled direct egress"
          />

          <BranchSite
            x={55}
            y={410}
            label="Branch Site 01"
            subtitle="HA edges and LAN"
          />

          <BranchSite
            x={655}
            y={410}
            label="Branch Site 02"
            subtitle="HA edges and LAN"
          />

          <BranchSite
            x={55}
            y={515}
            label="Distributed Sites"
            subtitle="Repeatable template"
          />

          <BranchSite
            x={655}
            y={515}
            label="Remote Clinics"
            subtitle="Local breakout"
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
    <g filter="url(#sdwanNodeShadow)">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="16"
        fill="url(#sdwanNodeGradient)"
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
    <g filter="url(#sdwanNodeShadow)">
      <path
        d={`M${x + 45} ${y + height} H${x + width - 35} C${
          x + width + 5
        } ${y + height} ${x + width + 20} ${y + height - 45} ${
          x + width - 8
        } ${y + height - 64} C${x + width - 20} ${y + 10} ${
          x + width - 82
        } ${y} ${x + width - 113} ${y + 28} C${x + width - 145} ${
          y - 5
        } ${x + 82} ${y + 3} ${x + 70} ${y + 42} C${x + 18} ${y + 42} ${
          x + 5
        } ${y + height - 4} ${x + 45} ${y + height} Z`}
        fill="url(#sdwanCloudGradient)"
        stroke="#22d3ee"
        strokeWidth="3"
      />

      <NodeText
        x={x + 12}
        y={y + 8}
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
      />
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

type BranchSiteProps = {
  x: number;
  y: number;
  label: string;
  subtitle: string;
};

function BranchSite({ x, y, label, subtitle }: BranchSiteProps) {
  return (
    <g filter="url(#sdwanNodeShadow)">
      <rect
        x={x}
        y={y}
        width="330"
        height="90"
        rx="16"
        fill="url(#sdwanNodeGradient)"
        stroke="#334155"
        strokeWidth="2"
      />

      <rect
        x={x + 22}
        y={y + 24}
        width="54"
        height="42"
        rx="8"
        fill="#0f172a"
        stroke="#22d3ee"
        strokeWidth="2"
      />

      <rect
        x={x + 56}
        y={y + 34}
        width="54"
        height="42"
        rx="8"
        fill="#0f172a"
        stroke="#67e8f9"
        strokeWidth="2"
      />

      <text
        x={x + 132}
        y={y + 36}
        fill="#22d3ee"
        fontSize="12"
        fontWeight="700"
        letterSpacing="2"
      >
        BRANCH
      </text>

      <text
        x={x + 132}
        y={y + 61}
        fill="#f8fafc"
        fontSize="20"
        fontWeight="700"
      >
        {label}
      </text>

      <text x={x + 132} y={y + 80} fill="#94a3b8" fontSize="13">
        {subtitle}
      </text>
    </g>
  );
}
