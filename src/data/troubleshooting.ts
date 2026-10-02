export type TroubleshootingCase = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  featured?: boolean;
  tags: string[];
  tools: string[];
  overview: {
    label: string;
    value: string;
  }[];
  timeline: {
    title: string;
    description: string;
  }[];
  problem: string[];
  investigation: string[];
  evidence: string[];
  rootCauseTitle?: string;
  rootCause: string[];
  resolution: string[];
  validation: string[];
  takeaway: string;
  metadata: {
    title: string;
    description: string;
  };
};

export const troubleshootingFlow = [
  "Establish Scope",
  "Form Hypotheses",
  "Collect Evidence",
  "Isolate Layers",
  "Identify Root Cause",
  "Remediate",
  "Validate",
];

export const troubleshootingCases: TroubleshootingCase[] = [
  {
    slug: "intermittent-latency",
    title: "Intermittent Site Latency and Edge Capacity",
    eyebrow: "Performance Troubleshooting",
    summary:
      "Correlated inconsistent wireless, wired, print, application, and internet complaints to a shared site infrastructure bottleneck.",
    featured: true,
    tags: ["L1", "L2", "L3", "WAN", "Observability", "Performance"],
    tools: [
      "Interface counters",
      "Monitoring history",
      "Path review",
      "Wired and wireless validation",
    ],
    overview: [
      {
        label: "Scenario",
        value: "Intermittent site-wide latency",
      },
      {
        label: "Role",
        value: "Senior network engineering investigation",
      },
      {
        label: "Primary Layers",
        value: "L1 / L2 / L3 / WAN edge",
      },
      {
        label: "Outcome",
        value: "Stabilized site performance after capacity upgrade",
      },
    ],
    timeline: [
      {
        title: "Scope",
        description:
          "Compared reports across wireless clients, wired endpoints, printing, applications, and internet access to determine whether symptoms shared a common path.",
      },
      {
        title: "Hypotheses",
        description:
          "Considered wireless, access switching, WAN, application, and edge-platform causes instead of assuming the visible wireless complaints were the root issue.",
      },
      {
        title: "Evidence",
        description:
          "Reviewed monitoring history, interface utilization, errors, drops, device behavior, and path dependencies during affected periods.",
      },
      {
        title: "Isolation",
        description:
          "Ruled out the AP and wireless layer as the primary failure domain by comparing wired and wireless behavior through the same site path.",
      },
      {
        title: "Remediation",
        description:
          "Upgraded the constrained LAN/uplink path from 1G to 10G and replaced the older edge platform with a higher-capacity appliance.",
      },
      {
        title: "Validation",
        description:
          "Compared before-and-after monitoring, user experience, application reachability, and interface health to confirm stabilization.",
      },
    ],
    problem: [
      "A remote environment reported intermittent slowness that appeared across multiple services. Users described wireless instability, slow wired devices, delayed printing, application latency, and unreliable internet access.",
      "The symptom pattern made wireless an easy first suspect, but the reports crossed too many client types and services to treat the AP layer as the default cause.",
    ],
    investigation: [
      "Established the scope by comparing wired and wireless symptoms, affected services, time windows, and shared network paths.",
      "Reviewed monitoring history for utilization spikes, interface counters for errors and drops, and edge-platform behavior during periods of user impact.",
      "Checked the wireless path as part of the investigation, then ruled it out as the primary source after wired clients showed similar degradation through the same site infrastructure.",
    ],
    evidence: [
      "Historical utilization showed sustained pressure on a constrained 1G uplink during affected periods.",
      "Interface counters showed drops and errors along the shared site path.",
      "The older edge platform showed resource limitations when the site was under load.",
    ],
    rootCauseTitle: "Root Cause",
    rootCause: [
      "The issue was a shared site bottleneck created by limited uplink capacity and an older edge appliance that could not reliably support peak demand.",
    ],
    resolution: [
      "Upgraded the LAN/uplink path from 1G to 10G.",
      "Replaced the older edge appliance with a higher-capacity platform.",
      "Validated the upgraded path under normal production load before considering the incident closed.",
    ],
    validation: [
      "Before-and-after monitoring showed healthier utilization and interface behavior.",
      "The recurring complaints stopped after the capacity and edge-platform changes.",
      "The troubleshooting record preserved the important lesson: broad site symptoms need layered evidence, not a single-domain assumption.",
    ],
    takeaway:
      "The visible symptom is not always the failing layer. A senior troubleshooting process starts by defining scope, then proves or eliminates each layer with evidence.",
    metadata: {
      title: "Intermittent Site Latency Troubleshooting",
      description:
        "Sanitized network troubleshooting case study showing how intermittent site latency was isolated across wired, wireless, uplink, and edge-capacity layers.",
    },
  },
  {
    slug: "wireless-roaming",
    title: "Wireless Roaming and Sticky Client Isolation",
    eyebrow: "Wireless / RF Troubleshooting",
    summary:
      "Used onsite testing, client tracking, RF validation, and wired AP infrastructure checks to isolate sticky-client roaming behavior.",
    tags: ["Wireless", "RF", "L1", "L2", "Performance"],
    tools: [
      "Wireless controller client history",
      "Onsite test client",
      "RF profile review",
      "Switch interface validation",
    ],
    overview: [
      {
        label: "Scenario",
        value: "Sticky wireless clients and roaming complaints",
      },
      {
        label: "Role",
        value: "Onsite wireless troubleshooting and RF tuning",
      },
      {
        label: "Primary Layers",
        value: "RF / L1 / L2",
      },
      {
        label: "Outcome",
        value: "Cleaner roaming behavior after RF design changes",
      },
    ],
    timeline: [
      {
        title: "Reproduce",
        description:
          "Used an onsite test client to reproduce roaming behavior while moving through the affected area.",
      },
      {
        title: "Track",
        description:
          "Tracked the client through wireless controller data and compared physical location to AP association history.",
      },
      {
        title: "Eliminate L1",
        description:
          "Validated AP switchports, uplinks, cabling indicators, CRCs, errors, and drops so wired infrastructure was not mistaken for RF behavior.",
      },
      {
        title: "Analyze RF",
        description:
          "Reviewed transmit power, band usage, channel width, RF profiles, and cell overlap.",
      },
      {
        title: "Tune",
        description:
          "Adjusted RF design choices including transmit power, unnecessary 2.4GHz coverage, and 5GHz channel width where appropriate.",
      },
      {
        title: "Validate",
        description:
          "Repeated roaming tests and monitored client association behavior to confirm the change improved the user experience.",
      },
    ],
    problem: [
      "Users reported inconsistent wireless experience while moving through an area. Clients appeared to remain associated with farther access points instead of roaming cleanly to nearer APs.",
      "The issue needed to be separated from cabling, switchport, uplink, and AP hardware concerns before making RF changes.",
    ],
    investigation: [
      "Reproduced the behavior onsite with a known test client and tracked its MAC address through controller telemetry.",
      "Compared the client physical location, AP association, RSSI/SNR behavior, band selection, and RF profile settings.",
      "Validated the wired AP infrastructure, including switchport health, CRCs, errors, drops, cabling indicators, and uplink behavior.",
    ],
    evidence: [
      "The client remained associated to less optimal APs despite being closer to better candidates.",
      "Wired AP connectivity and switch uplinks did not show evidence of a physical-layer or switching fault.",
      "RF design choices were allowing oversized cells and less predictable roaming decisions.",
    ],
    rootCauseTitle: "Root Cause",
    rootCause: [
      "RF cell design and profile settings were encouraging sticky-client behavior instead of clean client transitions between APs.",
    ],
    resolution: [
      "Adjusted transmit power to create more appropriate RF cell boundaries.",
      "Disabled unnecessary 2.4GHz radios where appropriate for the environment.",
      "Standardized 5GHz channel width to 20MHz where the design required cleaner channel reuse and roaming behavior.",
    ],
    validation: [
      "Repeated onsite movement tests showed more predictable client association decisions.",
      "Controller data aligned more closely with the physical location of the test client.",
      "The final notes separated RF causes from access-layer infrastructure, reducing future troubleshooting ambiguity.",
    ],
    takeaway:
      "Wireless troubleshooting is strongest when RF behavior and wired AP infrastructure are investigated together, then separated with evidence before changes are made.",
    metadata: {
      title: "Wireless Roaming Troubleshooting",
      description:
        "Sanitized wireless troubleshooting case study covering sticky clients, onsite testing, controller client tracking, RF tuning, and wired AP validation.",
    },
  },
  {
    slug: "8021x",
    title: "Wired 802.1X and MAB Fallback Isolation",
    eyebrow: "Identity / Access Troubleshooting",
    summary:
      "Structured fault isolation for endpoints that fell back to MAB instead of completing wired 802.1X authentication.",
    tags: ["802.1X", "RADIUS", "Cisco ISE", "L2", "Endpoint"],
    tools: [
      "Endpoint supplicant checks",
      "Switch authentication state",
      "RADIUS flow review",
      "Cisco ISE logs and policy review",
    ],
    overview: [
      {
        label: "Scenario",
        value: "Wired clients falling back to MAB",
      },
      {
        label: "Role",
        value: "Identity access troubleshooting",
      },
      {
        label: "Primary Layers",
        value: "Endpoint / L2 / RADIUS / Policy",
      },
      {
        label: "Outcome",
        value: "Repeatable isolation workflow for auth failures",
      },
    ],
    timeline: [
      {
        title: "Endpoint",
        description:
          "Checked supplicant state, wired authentication service behavior, certificate or profile readiness where applicable, and whether the client attempted EAP.",
      },
      {
        title: "Access Switch",
        description:
          "Reviewed interface authentication state, host mode, method order, violation behavior, and whether the switch initiated the expected 802.1X flow.",
      },
      {
        title: "RADIUS",
        description:
          "Validated whether RADIUS requests were sent and whether responses aligned with the intended authentication method.",
      },
      {
        title: "Cisco ISE",
        description:
          "Reviewed live logs, profiling signals, authentication policy, authorization policy, and reason codes.",
      },
      {
        title: "Fallback",
        description:
          "Determined why the endpoint moved to MAB, separating endpoint readiness, switch behavior, RADIUS reachability, and policy outcomes.",
      },
      {
        title: "Correct",
        description:
          "Applied the appropriate correction based on the isolated fault domain and validated the endpoint returned to the intended access method.",
      },
    ],
    problem: [
      "Some wired endpoints did not complete 802.1X authentication and instead fell back to MAC Authentication Bypass.",
      "Because 802.1X spans endpoint supplicant state, switch configuration, RADIUS exchange, Cisco ISE policy, and profiling, the investigation needed a structured path instead of a single-system guess.",
    ],
    investigation: [
      "Started at the endpoint to confirm the supplicant state and wired authentication service behavior where applicable.",
      "Reviewed access-switch authentication state, configured method order, EAP exchange indicators, and RADIUS reachability.",
      "Used Cisco ISE live logs, profiling context, authentication policy, authorization policy, and reason codes to determine where the access decision diverged.",
    ],
    evidence: [
      "The access switch showed endpoints entering fallback behavior rather than completing the intended wired 802.1X path.",
      "Cisco ISE and RADIUS evidence provided the decision trail needed to separate endpoint, switch, transport, profiling, and policy causes.",
      "The workflow identified the specific failure domain without exposing endpoint identities, policies, addresses, or internal names.",
    ],
    rootCauseTitle: "Fault Isolation",
    rootCause: [
      "This public version does not assert a single universal root cause. It documents the investigation pattern used to determine why a wired endpoint falls back to MAB in a given incident.",
    ],
    resolution: [
      "Corrected the isolated issue at the appropriate layer, such as endpoint supplicant readiness, switch authentication state, RADIUS communication, profiling, or Cisco ISE policy.",
      "Kept the remediation tied to observed evidence instead of treating MAB fallback as a generic policy problem.",
    ],
    validation: [
      "Confirmed endpoints completed the intended authentication flow after correction.",
      "Verified switch state, RADIUS exchange, Cisco ISE logs, and authorization outcome aligned with the expected access method.",
      "Captured the layered workflow for reuse in future wired access investigations.",
    ],
    takeaway:
      "802.1X troubleshooting is a chain-of-custody exercise for authentication evidence. Each hop has to be verified before the fallback reason can be trusted.",
    metadata: {
      title: "Wired 802.1X Troubleshooting",
      description:
        "Sanitized troubleshooting case study for wired 802.1X, MAB fallback, RADIUS, Cisco ISE, endpoint supplicants, and switch authentication state.",
    },
  },
  {
    slug: "automation-assurance",
    title: "Catalyst Center Automation and Assurance Triage",
    eyebrow: "Automation / Assurance Troubleshooting",
    summary:
      "Used Catalyst Center APIs and Python automation to turn large-scale inventory, health, reachability, and assurance data into prioritized troubleshooting inputs.",
    tags: [
      "Cisco Catalyst Center",
      "APIs",
      "Python",
      "Observability",
      "Performance",
    ],
    tools: [
      "Catalyst Center APIs",
      "Python automation",
      "Inventory data",
      "Health and assurance signals",
    ],
    overview: [
      {
        label: "Scenario",
        value: "Troubleshooting at enterprise scale",
      },
      {
        label: "Role",
        value: "Network automation and assurance triage",
      },
      {
        label: "Scale",
        value: "Approximately 1,600 network devices",
      },
      {
        label: "Outcome",
        value: "Prioritized operational investigation data",
      },
    ],
    timeline: [
      {
        title: "Scale",
        description:
          "Defined the operational problem: manual navigation through a large controller inventory was too slow for recurring triage.",
      },
      {
        title: "Collect",
        description:
          "Used Catalyst Center APIs to retrieve inventory, reachability, health, and assurance signals.",
      },
      {
        title: "Normalize",
        description:
          "Used Python automation to structure the data into repeatable troubleshooting outputs.",
      },
      {
        title: "Prioritize",
        description:
          "Highlighted unreachable equipment, interface issues, RADIUS server response problems, recent device reboots, and assurance alerts.",
      },
      {
        title: "Investigate",
        description:
          "Used the automation output as a triage layer for engineering follow-up, not as a replacement for root-cause analysis.",
      },
      {
        title: "Refine",
        description:
          "Compared automated findings against platform views and operational feedback to improve usefulness.",
      },
    ],
    problem: [
      "At enterprise scale, manually navigating controller screens for every device and alert does not scale well during daily operations or incident response.",
      "The team needed a faster way to identify patterns across inventory, reachability, health, interface state, authentication dependencies, and assurance alerts.",
    ],
    investigation: [
      "Used Catalyst Center APIs to retrieve device inventory, reachability, health, and assurance issue data.",
      "Built Python automation to normalize the data and surface actionable signals for engineering review.",
      "Focused on issues such as unreachable equipment, interface problems, RADIUS servers not responding, device reboots, and assurance alerts.",
    ],
    evidence: [
      "API data made it possible to review broad infrastructure state more consistently than manual navigation alone.",
      "Repeated data collection helped reveal recurring patterns across device health, reachability, and assurance categories.",
      "The output created a practical bridge between platform telemetry and engineer-led investigation.",
    ],
    rootCauseTitle: "Operational Bottleneck",
    rootCause: [
      "The core issue was scale: the environment contained too much operational data for manual review to remain fast, consistent, and repeatable.",
    ],
    resolution: [
      "Created API-driven Python workflows to retrieve, normalize, and summarize relevant Catalyst Center data.",
      "Turned inventory, health, reachability, and assurance data into prioritized troubleshooting inputs.",
      "Used the automation output to focus engineer time on investigation and remediation rather than screen-by-screen discovery.",
    ],
    validation: [
      "Compared automation output against platform views to confirm accuracy and usefulness.",
      "Used the prioritized data to accelerate follow-up on unreachable devices, interface issues, authentication dependencies, reboots, and assurance alerts.",
      "Preserved the engineering boundary: automation improved triage, while root-cause decisions remained evidence-led.",
    ],
    takeaway:
      "Automation is most useful when it compresses discovery time and improves consistency, while leaving judgment, validation, and remediation decisions with the engineer.",
    metadata: {
      title: "Catalyst Center Automation Troubleshooting",
      description:
        "Sanitized troubleshooting case study covering Catalyst Center APIs, Python automation, inventory, health, assurance, and enterprise-scale triage.",
    },
  },
];

export function getTroubleshootingCase(slug: string) {
  return troubleshootingCases.find((item) => item.slug === slug);
}
