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
category: "Wireless Modernization",
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
      "Improved internet resiliency, business-policy consistency, local breakout, and multi-circuit operations across distributed locations.",
    technologies: ["VeloCloud", "BGP", "High Availability"],
    status: "coming-soon",
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

