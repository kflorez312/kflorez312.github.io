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
      "Modernized LAN connectivity, upgraded switch uplinks, consolidated Layer 3 services, and improved campus redundancy.",
    technologies: ["Cisco Catalyst", "10G", "OSPF", "LACP"],
    status: "coming-soon",
  },

  {
    number: "04",
    slug: "observability",
    title: "Network Observability",
    description:
      "Expanded end-to-end visibility and accelerated root-cause analysis using proactive monitoring and synthetic testing.",
    technologies: ["ThousandEyes", "Catalyst Center", "SolarWinds"],
    status: "coming-soon",
  },
];
