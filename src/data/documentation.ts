import type { Metadata } from "next";

export type DocumentationExample = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  diagramTitle: string;
  diagramDescription: string;
  flow: string[];
  sections: { title: string; introduction?: string; items: string[] }[];
};

export const documentationPhilosophy = [
  "Capture the Current State", "Define the Intended State", "Document Dependencies",
  "Define Implementation", "Define Validation", "Plan Rollback", "Keep Documentation Operational",
];

export const documentationExamples: DocumentationExample[] = [
  {
    slug: "network-architecture",
    title: "Network Architecture & Topology Documentation",
    summary: "A conceptual enterprise site topology explaining traffic flow, routing boundaries, redundancy, failure domains, and operational dependencies.",
    tags: ["Network Architecture", "L2/L3", "Routing", "High Availability", "Topology"],
    diagramTitle: "Enterprise site reference architecture",
    diagramDescription: "A conceptual routed campus with paired edge and core devices, two distribution blocks, and access-layer connectivity. Parallel paths indicate redundancy; exact link counts and platform capabilities require design validation.",
    flow: [],
    sections: [
      { title: "Architecture Overview", items: [
        "Purpose: provide wired and wireless access to enterprise services through a hierarchical design with explicit routing and failure boundaries.",
        "The reference design uses redundant WAN edges, a routed core pair, two distribution blocks, and access switches. Wireless access points connect at the access layer; controller placement is a separate design dependency.",
        "The topology is logical. A deployment document would also record physical cabling, port mappings, power diversity, equipment support, and approved capacity requirements.",
      ] },
      { title: "Traffic Flow", items: [
        "Local traffic follows the access VLAN to its distribution gateway. Traffic between subnets is routed at distribution, with remote enterprise destinations reached through the core and WAN edge.",
        "Internet access follows the approved security and egress design. This example does not assume local breakout or a particular firewall placement.",
        "Wireless forwarding depends on the selected controller and switching mode. Record whether client traffic is locally switched or centrally tunneled before assigning a troubleshooting path.",
      ] },
      { title: "L2 / L3 Boundaries", items: [
        "Layer 2 is contained within each distribution block. Access uplinks carry only the VLAN purposes required by that block; VLANs are not extended across the routed core.",
        "Distribution owns client gateways. Core-to-distribution and core-to-edge links are routed boundaries, limiting broadcast propagation and making route selection visible.",
        "Access redundancy must match the platform: independent distribution devices use a validated spanning-tree design; a shared LACP bundle requires a supported stack or multi-chassis implementation.",
      ] },
      { title: "Routing", items: [
        "OSPF provides internal reachability across routed campus links in this reference design. Document adjacency expectations, route ownership, passive interfaces, and the selected area structure before deployment.",
        "The WAN edge supplies approved remote reachability and any default route. Define route filtering, redistribution ownership, and return-path expectations to avoid loops or asymmetric policy enforcement.",
        "A route table alone is insufficient evidence: verify next-hop resolution, forwarding behavior, and reachability through both intended paths.",
      ] },
      { title: "Redundancy", items: [
        "Each distribution block has routed connectivity to both core devices; the core has paths to both WAN edges. Gateway redundancy is required where distribution devices operate independently.",
        "Document expected behavior after a link, device, power, or upstream-path failure, including which routing or gateway mechanism changes forwarding.",
        "Redundant lines do not prove resilience. Validate power feeds, cable routes, upstream dependencies, and failure behavior under an approved test plan.",
      ] },
      { title: "Failure Domains", items: [
        "An access-switch failure affects its attached endpoints and access points. A distribution-block fault can affect that block while other blocks retain routed connectivity.",
        "Core or edge failures should use alternate paths when the remaining components and dependencies are healthy. Shared software, power, or upstream services may still create common failure modes.",
        "DHCP, DNS, identity services, wireless control, and monitoring are dependencies beyond the switching topology. Record ownership and escalation paths separately.",
      ] },
      { title: "Monitoring / Observability", items: [
        "Monitor link state, errors, utilization, routing neighbors, gateway roles, and device health. Correlate infrastructure signals with path and application tests.",
        "Baseline normal behavior and annotate planned maintenance so that operational teams can distinguish expected transitions from unexplained degradation.",
      ] },
      { title: "Operational Notes", items: [
        "Maintain an owner, revision date, review cadence, and change reference. Update the logical diagram and dependency record after approved changes.",
        "An engineer using this document should be able to trace a client-to-service path, identify its boundary owners, and predict which users a component failure could affect.",
      ] },
    ],
  },
  {
    slug: "change-migration-plan",
    title: "Network Change & Migration Plan",
    summary: "An example 1G-to-10G uplink modernization plan with readiness gates, controlled implementation, validation, rollback, and post-change monitoring.",
    tags: ["Change Management", "10G", "Validation", "Rollback", "Production"],
    diagramTitle: "Change lifecycle and decision gates",
    diagramDescription: "Each stage requires recorded evidence before proceeding. A failed validation gate pauses the change for assessment or invokes the approved rollback plan.",
    flow: ["Baseline", "Pre-Checks", "Implementation", "Validation", "Monitor"],
    sections: [
      { title: "Objective", items: ["Example objective: replace selected 1G campus uplinks with 10G connectivity while preserving approved routing, segmentation, and redundant forwarding behavior. This is a planning example, not a report of a completed migration."] },
      { title: "Scope", items: [
        "Include the selected uplinks, optics, cabling, interface settings, affected port channels, and their monitoring records. Identify impacted access blocks and service paths in the restricted change record.",
        "Keep gateway relocation, VLAN redesign, and routing-policy changes outside this example's scope. Any necessary dependency change needs its own reviewed steps and validation gates.",
        "Assign an implementation owner, independent validator, incident contact, communications owner, maintenance window, and final go/no-go authority.",
      ] },
      { title: "Dependencies", items: [
        "Confirm hardware and software support, optic compatibility, fiber type and distance, available ports, power, and support coverage. Validate the intended design against platform documentation.",
        "Confirm out-of-band access, configuration backups, onsite assistance where needed, application test owners, monitoring visibility, and a working communications channel.",
        "Reserve enough time to restore the previous state and validate it before the approved window ends. Define the latest rollback decision point with the change owner.",
      ] },
      { title: "Pre-Change Checks", items: [
        "Verify the current topology, physical mappings, interface status, negotiated speed, channel membership, routing adjacencies, expected routes, and gateway or redundancy state.",
        "Capture timestamped utilization, errors, drops, optical readings, path tests, and representative service checks. Confirm that monitoring reflects the actual current state.",
        "Verify backups and the previous interface configuration. Confirm replacement components and the original links are available for restoration.",
        "Stop before implementation if readiness evidence is incomplete, redundancy is already degraded, management access is uncertain, or the rollback path is unavailable.",
      ] },
      { title: "Implementation", items: [
        "Announce the start and record the baseline. Select the first path according to the validated redundancy design and confirm the alternate path can carry the required traffic.",
        "Change one uplink or supported channel at a time. Do not mix incompatible link speeds within a bundle; follow the platform-supported channel transition procedure.",
        "Validate optics, speed, interface state, LACP membership where applicable, routing, and reachability before touching the next path. Record evidence and timestamps at each hold point.",
        "Proceed to the remaining path only after the validator accepts the first stage. Pause on unexpected behavior and avoid introducing unrelated changes while diagnosing it.",
      ] },
      { title: "Validation", items: [
        "Confirm intended 10G interface state, correct channel membership, stable routing neighbors, expected routes and next hops, and normal gateway or redundancy roles.",
        "Compare reachability, application tests, synthetic tests where available, and monitoring signals with the pre-change baseline. Check errors, drops, utilization, and logs for new anomalies.",
        "Validate the alternate path using an approved failure test when permitted. If testing is deferred, document the limitation and obtain explicit acceptance rather than marking resiliency as proven.",
        "Request representative user-impact confirmation where appropriate. Record the validator's decision and remaining follow-up items.",
      ] },
      { title: "Rollback", items: [
        "Example rollback triggers: loss of required reachability, unstable adjacencies, failed redundancy checks, persistent new errors, or unresolved application impact before the decision deadline.",
        "Notify the change owner, stop further modifications, and restore the last changed path to its documented configuration, optics, and cabling. Restore other changed paths in the approved reverse sequence.",
        "Validate interface and channel state, routing, gateway roles, reachability, application tests, and monitoring against the original baseline. Escalate if the baseline cannot be restored.",
        "Record the trigger, restoration evidence, remaining impact, and ownership of follow-up investigation before closing the window.",
      ] },
      { title: "Post-Change Monitoring", items: [
        "Review error counters, drops, utilization, adjacency stability, device health, synthetic tests, and incident or user reports over the agreed observation period.",
        "Update topology, port mappings, capacity records, monitoring thresholds, and the change record to reflect the accepted state. Retain the baseline and validation evidence for operational handoff.",
      ] },
    ],
  },
  {
    slug: "troubleshooting-runbook",
    title: "Network Troubleshooting Runbook",
    summary: "A repeatable site connectivity and performance procedure that guides evidence collection, fault isolation, escalation, and recovery validation.",
    tags: ["Troubleshooting", "OSI", "Observability", "Incident Response", "Operations"],
    diagramTitle: "Evidence-led incident workflow",
    diagramDescription: "Collect evidence before making changes. The workflow supports parallel investigation when symptoms justify it; layer checks are decision points rather than a mandatory serial delay.",
    flow: ["Symptoms", "Scope", "Evidence", "Isolation", "Root Cause", "Remediation", "Validation"],
    sections: [
      { title: "Runbook Context", items: [
        "Example scenario: Site Connectivity / Performance Troubleshooting. Use this procedure to establish a fault domain and a defensible next action, not to assume every incident originates in the network.",
        "Collect evidence before making changes. Record timestamps, affected services, observed behavior, and a known-good comparison. Store incident-specific evidence in approved restricted systems.",
      ] },
      { title: "1. Establish Scope", items: [
        "Determine whether the issue affects one endpoint, one access block, wireless clients, an entire site, or a shared service. Distinguish complete loss from intermittent loss or degraded performance.",
        "Record when symptoms started, recent approved changes, affected applications, and whether wired and wireless paths behave differently. Select a known-good test source and destination.",
      ] },
      { title: "2. Physical Layer", items: [
        "Check interface state, negotiated speed and duplex, link transitions, CRC and input/output error deltas, optical levels, and cabling. Compare both ends of the link.",
        "Preserve counters before clearing them. Use timestamped deltas and traffic context to distinguish historical errors from active degradation; replace components only when evidence supports the action.",
      ] },
      { title: "3. Layer 2", items: [
        "Verify expected VLAN membership and trunk state, allowed VLAN purposes, STP root and port roles, MAC learning, and LACP/EtherChannel membership and consistency.",
        "Look for topology changes, MAC movement, blocked paths, or a partially formed channel. Compare with the documented design before changing spanning-tree or bundle settings.",
      ] },
      { title: "4. Layer 3", items: [
        "Validate endpoint addressing, subnet expectations, gateway reachability, ARP resolution, routing tables, next hops, routing adjacencies, and gateway redundancy state.",
        "Test each relevant boundary and the return path. Separate an absent route from failed forwarding or policy enforcement; a failed ping alone does not establish the cause.",
      ] },
      { title: "5. WAN / Routing", items: [
        "Inspect WAN edge health, tunnel and path state, remote reachability, route selection, packet loss, latency, and utilization. Compare active and alternate paths where available.",
        "Correlate symptoms with path transitions, congestion, and upstream events. Collect timestamped evidence for the WAN or provider owner without assuming a circuit fault.",
      ] },
      { title: "6. Services", items: [
        "Check DHCP assignment and relay behavior, DNS resolution, and RADIUS/authentication outcomes where applicable. Test a service directly only through an approved diagnostic method.",
        "Differentiate network reachability from application availability and authorization. Engage the service owner when network checks pass but the service transaction fails.",
      ] },
      { title: "7. Monitoring / Telemetry", items: [
        "Review historical monitoring, interface utilization, assurance events, logs, and synthetic tests where available. Align timestamps and compare the incident interval with a healthy period.",
        "Use infrastructure, path, and application signals together. Missing telemetry is an evidence gap, not proof that a component is healthy.",
      ] },
      { title: "8. Correlate Evidence", items: [
        "Build a short timeline linking symptoms, topology boundaries, counters, route or path changes, and service events. Separate observed facts from hypotheses.",
        "Identify the narrowest supported fault domain and the next test that would confirm or reject it. Record uncertainty when the root cause remains unproven.",
      ] },
      { title: "9. Escalate or Remediate", items: [
        "Escalate with scope, timeline, business impact, known-good comparisons, completed tests, evidence, and a clear request to the responsible owner.",
        "For remediation, follow incident and change authority, select the smallest justified action, define rollback, and preserve evidence. Treat a workaround as mitigation until the cause is confirmed.",
      ] },
      { title: "10. Validate Recovery", items: [
        "Repeat the original failing transaction and representative path tests. Check monitoring, counters, routing, and user-impact confirmation over an agreed observation period.",
        "Document the confirmed cause or remaining uncertainty, the action taken, validation evidence, and follow-up ownership. Update the runbook when the investigation exposes a repeatable gap.",
      ] },
    ],
  },
  {
    slug: "network-standards",
    title: "Network Standards & Site Build Guide",
    summary: "A generic enterprise deployment guide defining architecture, connectivity, access, monitoring, and handoff expectations for repeatable site builds.",
    tags: ["Standards", "Campus", "Wireless", "WAN", "Operations", "Scalability"],
    diagramTitle: "Site build architecture and operational coverage",
    diagramDescription: "The sequence describes design and handoff scope, not a serial traffic path. Monitoring spans every tier; endpoint traffic does not pass through a monitoring platform.",
    flow: ["WAN / Edge", "Core / Distribution", "Access Switching", "Wireless", "Endpoints / Services"],
    sections: [
      { title: "Guide Scope", items: [
        "This example defines the decisions and acceptance evidence expected for a generic enterprise site. It is not an actual organization's production standard or a device configuration template.",
        "Maintain a document owner, approved revision, platform applicability, and exception process. Record design deviations with rationale, risk, compensating controls, and review ownership.",
      ] },
      { title: "Site Architecture", items: [
        "WAN / Edge: define remote connectivity, security handoffs, route ownership, resilience requirements, and upstream dependencies.",
        "Core / Distribution: document routing boundaries, client gateway ownership, failure domains, and capacity assumptions. Keep access-layer broadcasts out of the routed core.",
        "Access Switching: define endpoint and access-point connectivity, power requirements, segmentation, and redundant uplink behavior.",
        "Wireless and Endpoints / Services: define controller and forwarding mode, coverage requirements, authentication dependencies, DHCP, DNS, and service ownership.",
      ] },
      { title: "Naming & Labeling", items: [
        "Define a generic naming methodology based on role, environment, and a documented location reference. This public example intentionally contains no deployed names or actual naming scheme.",
        "Keep inventory records, physical labels, port descriptions, patch mappings, and diagrams consistent. Require updates as part of every accepted change.",
      ] },
      { title: "Segmentation & Gateways", items: [
        "Record each VLAN's purpose, trust boundary, service dependencies, and gateway owner without extending Layer 2 beyond its approved failure domain.",
        "Define the Layer 2 / Layer 3 demarcation and default-gateway redundancy method. Verify role transitions and service reachability before accepting a build.",
      ] },
      { title: "Uplinks & Routing", items: [
        "Select uplink speed, optics, fiber, and capacity according to approved requirements. Document redundant physical paths and the behavior expected after losing either path.",
        "Use LACP/EtherChannel only across supported logical peers. Separate device redundancy from link aggregation, and validate channel membership, consistency, and failure behavior.",
        "Document the routing protocol, adjacency expectations, route filtering, summarization where appropriate, and default-route ownership. Avoid uncontrolled redistribution.",
      ] },
      { title: "Access & Authentication", items: [
        "Use approved management access controls, centralized identity, least-privilege roles, and a separately governed recovery-access process. Keep secrets in the approved secret store rather than documentation.",
        "Define wired and wireless authentication policy, exception handling, and dependency failure behavior. Require validation of allowed and denied access paths.",
        "Document wireless controller architecture, RF design review, forwarding mode, and roaming expectations. Confirm access-point uplink and power readiness before wireless acceptance.",
      ] },
      { title: "Operational Services", items: [
        "Onboard infrastructure into approved monitoring, logging, and time-synchronization services. Verify event delivery, timestamp consistency, device health, and actionable alert ownership.",
        "Schedule configuration backups, restrict access to them, and verify restoration procedures. Track software against an approved compatibility and lifecycle standard.",
        "Record maintenance ownership, escalation paths, and review cadence so that the guide remains useful after initial deployment.",
      ] },
      { title: "Build Acceptance", items: [
        "Require evidence of interface and routing health, intended segmentation, authentication, gateway redundancy, approved path-failure tests, representative service tests, and monitoring coverage.",
        "Hand over the current topology, dependency map, inventory, port and cable records, backups, software baseline, open exceptions, and operational runbooks.",
        "Consistent decisions and acceptance records support repeatable deployment, scalable operations, faster engineer onboarding, and more predictable troubleshooting and change review. These are design goals, not measured outcomes claimed by this example.",
      ] },
    ],
  },
];

export function getDocumentationExample(slug: string) {
  const item = documentationExamples.find((example) => example.slug === slug);
  if (!item) throw new Error(`Unknown documentation example: ${slug}`);
  return item;
}

export function documentationMetadata(title: string, description: string, path: string): Metadata {
  const shareTitle = `${title} | Kenneth Florez`;
  return {
    title, description, alternates: { canonical: path },
    openGraph: { title: shareTitle, description, url: path, siteName: "Kenneth Florez Portfolio", type: "website" },
    twitter: { card: "summary", title: shareTitle, description },
  };
}
