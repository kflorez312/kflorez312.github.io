export type Project = {
  number: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  status: "published" | "coming-soon";
  category?: string;
  challenge?: string[];
  approach?: string[];
  challenges?: string[];
  results?: string[];
  takeaway?: string;

  metrics?: {
    label: string;
    value: string;
  }[];

  overview?: {
    label: string;
    value: string;
  }[];

  timeline?: {
    title: string;
    description: string;
  }[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "catalyst-9800",
    title: "Cisco Catalyst 9800 Wireless Modernization",
    description:
      "Standardized enterprise wireless infrastructure across a multi-site healthcare environment, improving roaming, resiliency, RF consistency, and operational visibility.",

    technologies: [
      "Catalyst 9800",
      "Cisco ISE",
      "CW9162",
      "Wi-Fi 6/6E",
      "RF Optimization",
      "High Availability",
    ],

    status: "published",
    category: "Wireless Modernization",

    metrics: [
      {
        value: "1,200+",
        label: "Access Points",
      },
      {
        value: "250+",
        label: "Healthcare Sites",
      },
      {
        value: "High Availability",
        label: "Controller Architecture",
      },
      {
        value: "Wi-Fi 6E",
        label: "Modern Wireless",
      },
    ],

    overview: [
      {
        label: "Role",
        value: "Senior Network Engineer",
      },
      {
        label: "Industry",
        value: "Healthcare",
      },
      {
        label: "Environment",
        value: "250+ distributed sites",
      },
      {
        label: "Infrastructure",
        value: "1,200+ wireless access points",
      },
      {
        label: "Platform",
        value: "Cisco Catalyst 9800 / Cisco ISE",
      },
      {
        label: "Focus",
        value:
          "Reliability, roaming, RF consistency, and operational visibility",
      },
    ],

    timeline: [
      {
        title: "Assessment",
        description:
          "Reviewed controller architecture, WLAN configuration, AP models, RF conditions, authentication dependencies, and site requirements.",
      },
      {
        title: "Design",
        description:
          "Defined standardized controller, WLAN, policy, RF, authentication, and high-availability design patterns.",
      },
      {
        title: "Pilot",
        description:
          "Validated configuration and client behavior in a controlled production environment before broader deployment.",
      },
      {
        title: "RF Optimization",
        description:
          "Tuned RF profiles, channel utilization, transmit power, roaming behavior, and coverage using real client performance.",
      },
      {
        title: "Validation",
        description:
          "Verified switching, PoE, DHCP, authentication, roaming, application access, and controller resiliency.",
      },
      {
        title: "Production Rollout",
        description:
          "Expanded the standardized design across distributed locations using repeatable deployment and validation processes.",
      },
    ],

    challenge: [
      "The wireless environment supported distributed healthcare locations with different building layouts, mixed generations of access points, and varied RF conditions.",
      "The existing design required greater consistency across controllers, WLAN configuration, RF profiles, authentication, high availability, and operational monitoring.",
    ],

    approach: [
      "Standardized WLAN, policy, site, and RF configuration across locations.",
      "Integrated enterprise authentication through Cisco ISE.",
      "Tuned RF profiles to improve roaming, coverage, and capacity.",
      "Expanded Wi-Fi 6 and Wi-Fi 6E capabilities where supported.",
      "Improved controller resiliency and access-point recovery options.",
      "Validated switching, PoE, DHCP, routing, and client behavior during deployment.",
    ],

    challenges: [
      "The modernization had to be completed while maintaining production healthcare operations.",
      "Mixed access-point models, site-specific RF conditions, roaming complaints, controller capacity, licensing limits, and phased replacement schedules required careful change planning.",
    ],

    results: [
      "More consistent wireless configuration across sites",
      "Improved roaming and RF alignment",
      "Greater visibility into client and access-point health",
      "Stronger controller and access-point resiliency",
      "Expanded support for modern Wi-Fi capabilities",
      "Reduced operational complexity",
    ],

    takeaway:
      "Successful wireless modernization requires more than replacing access points. Controller architecture, authentication, RF design, switching, DHCP, licensing, monitoring, and client behavior must be treated as one production system.",
  },

  {
    number: "02",
    slug: "sdwan",
    title: "Enterprise SD-WAN Transformation",
    description:
      "Modernized wide-area connectivity with redundant internet circuits, VeloCloud high-availability edge pairs, centralized hub access, and local internet breakout across distributed branch locations.",
    technologies: [
      "VeloCloud",
      "SD-WAN",
      "BGP",
      "High Availability",
      "Local Breakout",
      "Dual ISP",
    ],
    status: "published",
    category: "SD-WAN Transformation",

    metrics: [
      {
        value: "Dual ISP",
        label: "WAN Resiliency",
      },
      {
        value: "HA Edge",
        label: "Branch Design",
      },
      {
        value: "Local Breakout",
        label: "Internet Access",
      },
      {
        value: "Distributed",
        label: "Site Architecture",
      },
    ],

    overview: [
      {
        label: "Role",
        value: "Senior Network Engineer",
      },
      {
        label: "Industry",
        value: "Healthcare",
      },
      {
        label: "Environment",
        value: "Distributed branch and hub network",
      },
      {
        label: "Infrastructure",
        value: "Dual ISP circuits with VeloCloud HA edge pairs",
      },
      {
        label: "Platform",
        value: "VMware VeloCloud SD-WAN",
      },
      {
        label: "Focus",
        value:
          "Internet resiliency, application steering, hub connectivity, and local breakout",
      },
    ],

    timeline: [
      {
        title: "Discovery",
        description:
          "Reviewed circuit inventory, routing dependencies, hub connectivity, firewall policies, application paths, and site readiness.",
      },
      {
        title: "Design",
        description:
          "Defined the standard branch pattern for dual internet circuits, high-availability edges, overlay tunnels, business policies, and failover behavior.",
      },
      {
        title: "Pilot",
        description:
          "Validated the SD-WAN edge configuration, ISP handoff, overlay reachability, local breakout, and application performance at representative sites.",
      },
      {
        title: "Migration",
        description:
          "Moved branches through a repeatable cutover process with routing validation, circuit testing, traffic steering, and rollback planning.",
      },
      {
        title: "Optimization",
        description:
          "Tuned path selection, application policies, hub preference, link remediation, and monitoring thresholds based on production behavior.",
      },
      {
        title: "Operational Handoff",
        description:
          "Documented deployment standards, troubleshooting workflows, failover validation, and steady-state support responsibilities.",
      },
    ],

    challenge: [
      "The WAN environment depended on distributed locations with varying carrier availability, circuit performance, and local operational constraints.",
      "The design needed to improve resiliency and application experience while preserving access to enterprise hub services, cloud applications, and internet destinations during phased production migration.",
    ],

    approach: [
      "Standardized branch connectivity around dual ISP circuits and VeloCloud high-availability edge pairs.",
      "Built overlay connectivity back to enterprise hubs for data center and shared service access.",
      "Enabled local internet breakout for SaaS and web traffic where policy allowed.",
      "Used business policy and path selection to steer critical applications over the best available circuit.",
      "Validated BGP, LAN handoff, NAT, firewall, DNS, DHCP, and application reachability during each cutover.",
      "Created repeatable deployment and verification steps for distributed branch migrations.",
    ],

    challenges: [
      "Carrier diversity, inconsistent last-mile performance, branch maintenance windows, and site-specific LAN dependencies required careful rollout sequencing.",
      "Failover behavior had to be tested across ISP loss, edge failover, hub-path preference, local breakout, and application-specific policy scenarios without disrupting production operations.",
    ],

    results: [
      "Improved WAN resiliency through dual-carrier branch connectivity",
      "More consistent SD-WAN edge and business-policy configuration",
      "Reduced dependency on centralized internet egress for approved traffic",
      "Maintained hub connectivity for enterprise and shared services",
      "Improved visibility into circuit health and path selection",
      "Created a repeatable operating model for future branch deployments",
    ],

    takeaway:
      "Successful SD-WAN transformation depends on more than adding overlay tunnels. Circuit diversity, HA edge behavior, routing, security policy, local breakout, hub reachability, monitoring, and branch operations all have to work as one production design.",
  },

  {
    number: "03",
    slug: "campus-core",
    title: "10G Campus Core Upgrade",
    description:
      "Modernized campus LAN connectivity with Cisco Catalyst switching, redundant 10G uplinks, Layer 3 gateway migration, OSPF routing, and resilient production cutover planning.",
    technologies: [
      "Cisco Catalyst",
      "10G Uplinks",
      "OSPF",
      "LACP",
      "EtherChannel",
      "Layer 3 Routing",
    ],
    status: "published",
    category: "Campus Core Modernization",

    metrics: [
      {
        value: "10G",
        label: "Uplink Capacity",
      },
      {
        value: "Redundant",
        label: "Core Design",
      },
      {
        value: "OSPF",
        label: "Routing Protocol",
      },
      {
        value: "LACP",
        label: "Path Resiliency",
      },
    ],

    overview: [
      {
        label: "Role",
        value: "Senior Network Engineer",
      },
      {
        label: "Industry",
        value: "Healthcare",
      },
      {
        label: "Environment",
        value: "Campus LAN core, distribution, and access layers",
      },
      {
        label: "Infrastructure",
        value: "Cisco Catalyst switching with redundant 10G uplinks",
      },
      {
        label: "Platform",
        value: "Cisco Catalyst / OSPF / LACP EtherChannel",
      },
      {
        label: "Focus",
        value:
          "Gateway migration, routing resiliency, uplink capacity, validation, and production cutover",
      },
    ],

    timeline: [
      {
        title: "Assessment",
        description:
          "Reviewed switching topology, uplink utilization, Layer 2 boundaries, gateway placement, routing adjacencies, redundancy gaps, and production dependencies.",
      },
      {
        title: "Design",
        description:
          "Defined the target core and distribution architecture with redundant Catalyst switches, 10G uplinks, LACP EtherChannels, OSPF routing, and gateway migration sequencing.",
      },
      {
        title: "Staging",
        description:
          "Prepared switch configuration, interface standards, routing policy, spanning-tree guardrails, monitoring, rollback steps, and validation checklists before field work.",
      },
      {
        title: "Migration",
        description:
          "Moved VLAN gateways, routed links, uplinks, and access-layer connections through controlled maintenance windows with senior engineering oversight.",
      },
      {
        title: "Validation",
        description:
          "Verified routing neighbors, path failover, EtherChannel health, endpoint reachability, application access, monitoring, and operational visibility.",
      },
      {
        title: "Handoff",
        description:
          "Documented the final topology, support model, escalation paths, standard checks, and lessons learned for future campus network changes.",
      },
    ],

    challenge: [
      "The campus network needed additional uplink capacity, cleaner Layer 3 boundaries, and stronger resiliency while continuing to support production users, applications, and connected infrastructure.",
      "Gateway placement, VLAN migration, routing transitions, redundant path behavior, and access-layer dependencies had to be planned carefully so the modernization could proceed without exposing internal identifiers or disrupting business operations.",
    ],

    approach: [
      "Designed a redundant Cisco Catalyst core and distribution pattern with resilient 10G uplinks.",
      "Used LACP EtherChannel to aggregate paths and improve link-level resiliency between network layers.",
      "Migrated VLAN gateways and Layer 3 routing responsibilities through controlled change windows.",
      "Standardized OSPF adjacency, route propagation, interface, and uplink validation steps.",
      "Validated spanning-tree behavior, redundant forwarding paths, gateway reachability, routing failover, and application access before and after cutover.",
      "Prepared change plans, rollback procedures, implementation checklists, and stakeholder communication for production maintenance windows.",
    ],

    challenges: [
      "The migration touched shared infrastructure where switching, routing, endpoint connectivity, security policy, and monitoring all had to align during the same maintenance sequence.",
      "Legacy VLAN placement, access-layer uplink dependencies, routing convergence, EtherChannel negotiation, maintenance-window limits, and rollback readiness required precise coordination and validation.",
    ],

    results: [
      "Increased campus uplink capacity with standardized 10G connectivity",
      "Improved core and distribution redundancy",
      "More consistent Layer 3 routing and gateway placement",
      "Stronger resiliency through redundant paths and LACP EtherChannels",
      "Cleaner production cutover process with validation and rollback planning",
      "Improved operational visibility into uplink, routing, and switch health",
    ],

    takeaway:
      "A campus core upgrade is a production routing and resiliency change, not just a switch replacement. Uplink capacity, gateway ownership, OSPF behavior, EtherChannel health, access-layer dependencies, monitoring, change planning, validation, and rollback all need to be engineered as one system.",
  },

  {
    number: "04",
    slug: "observability",
    title: "Network Observability",
    description:
      "Expanded end-to-end visibility across network infrastructure, WAN paths, applications, and user experience using enterprise monitoring, telemetry, proactive alerting, and synthetic testing.",
    technologies: [
      "ThousandEyes",
      "Cisco Catalyst Center",
      "SolarWinds",
      "Network telemetry",
      "Synthetic testing",
      "Performance monitoring",
    ],
    status: "published",
    category: "Network Observability",

    metrics: [
      {
        value: "24×7",
        label: "Monitoring",
      },
      {
        value: "End-to-End",
        label: "Visibility",
      },
      {
        value: "Synthetic",
        label: "Testing",
      },
      {
        value: "Faster RCA",
        label: "Troubleshooting",
      },
    ],

    overview: [
      {
        label: "Role",
        value: "Senior Network Engineer",
      },
      {
        label: "Industry",
        value: "Healthcare",
      },
      {
        label: "Environment",
        value: "Distributed enterprise network and application paths",
      },
      {
        label: "Infrastructure",
        value: "Branch, campus, WAN, internet, and enterprise services",
      },
      {
        label: "Platform",
        value: "ThousandEyes / Cisco Catalyst Center / SolarWinds",
      },
      {
        label: "Focus",
        value:
          "Proactive detection, troubleshooting, incident response, and root-cause analysis",
      },
    ],

    timeline: [
      {
        title: "Assessment",
        description:
          "Reviewed monitoring coverage, alert quality, device inventory, application dependencies, WAN paths, incident history, and operational troubleshooting workflows.",
      },
      {
        title: "Design",
        description:
          "Mapped complementary visibility across infrastructure health, synthetic user experience, path performance, application reachability, telemetry, and centralized alerting.",
      },
      {
        title: "Instrumentation",
        description:
          "Expanded monitoring sources, validated device and path coverage, tuned polling and telemetry inputs, and aligned dashboards to operational support needs.",
      },
      {
        title: "Synthetic Testing",
        description:
          "Implemented generic synthetic tests for critical paths and services to identify reachability, latency, packet loss, and application experience issues before users escalated.",
      },
      {
        title: "Alert Tuning",
        description:
          "Reduced noise by refining thresholds, alert routing, escalation context, dependency mapping, and actionable fault indicators.",
      },
      {
        title: "Operations Handoff",
        description:
          "Documented troubleshooting workflows, dashboard usage, incident response steps, and root-cause analysis patterns for ongoing production support.",
      },
    ],

    challenge: [
      "The network supported distributed users, branch and campus infrastructure, WAN and internet paths, and enterprise applications where a single monitoring view could not explain every incident.",
      "Operations needed faster fault detection and clearer root-cause evidence without exposing internal names, addresses, monitoring secrets, or confidential infrastructure details in public-facing materials.",
    ],

    approach: [
      "Used SolarWinds and centralized monitoring to track device availability, interface health, performance trends, and alerting across network infrastructure.",
      "Used Cisco Catalyst Center visibility to improve insight into Catalyst switching, wireless infrastructure, client experience, and operational assurance.",
      "Used ThousandEyes synthetic tests and agents to validate network paths, internet reachability, SaaS access, and application experience from distributed locations.",
      "Correlated telemetry, alerts, path visibility, and synthetic test results during troubleshooting and incident response.",
      "Improved alert thresholds, dashboard organization, escalation context, and operational runbooks to reduce noise and accelerate triage.",
      "Validated monitoring coverage after network changes so new infrastructure, paths, and services were observable before being handed to operations.",
    ],

    challenges: [
      "Monitoring data came from multiple platforms with different strengths, timing, terminology, and alerting models, so correlation was essential for accurate root-cause analysis.",
      "Alert fatigue, incomplete inventory, path asymmetry, intermittent packet loss, SaaS dependencies, and user-experience complaints required careful tuning and repeatable troubleshooting workflows.",
    ],

    results: [
      "Improved visibility across infrastructure, network paths, applications, and user experience",
      "Earlier detection of reachability, latency, packet loss, and device health issues",
      "Faster incident triage through correlated monitoring and synthetic test evidence",
      "Reduced alert noise through threshold tuning and clearer escalation context",
      "Better operational dashboards for senior engineering and support teams",
      "More repeatable root-cause analysis during production incidents",
    ],

    takeaway:
      "Strong network observability comes from combining multiple views of the same service path. Device monitoring, Catalyst infrastructure assurance, telemetry, synthetic testing, alerting, and incident workflows must work together so engineers can move from symptom to root cause quickly.",
  },
];
