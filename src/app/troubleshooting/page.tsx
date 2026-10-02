import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TroubleshootingCard from "@/components/troubleshooting/TroubleshootingCard";
import TroubleshootingFlow from "@/components/troubleshooting/TroubleshootingFlow";
import { troubleshootingCases } from "@/data/troubleshooting";

export const metadata: Metadata = {
  title: "Network Troubleshooting Case Studies",
  description:
    "Sanitized senior network engineering troubleshooting case studies covering latency, wireless roaming, wired 802.1X, Catalyst Center automation, assurance, and operational triage.",
  alternates: {
    canonical: "/troubleshooting",
  },
  openGraph: {
    title: "Network Troubleshooting Case Studies | Kenneth Florez",
    description:
      "Public-safe troubleshooting case studies focused on evidence-led network engineering across performance, wireless, identity, automation, and assurance.",
    url: "/troubleshooting",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Network Troubleshooting Case Studies | Kenneth Florez",
    description:
      "Evidence-led enterprise network troubleshooting case studies covering latency, wireless, 802.1X, and Catalyst Center automation.",
  },
};

const landingTags: Record<string, string[]> = {
  "intermittent-latency": [
    "Performance",
    "L1",
    "L2",
    "L3",
    "WAN",
    "Observability",
  ],
  "wireless-roaming": ["Wireless", "RF", "L1", "L2", "Roaming"],
  "8021x": ["802.1X", "RADIUS", "Cisco ISE", "L2", "Authentication"],
  "automation-assurance": [
    "Catalyst Center",
    "REST APIs",
    "Python",
    "Assurance",
    "Automation",
  ],
};

export default function TroubleshootingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-36">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Troubleshooting Case Studies
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Troubleshooting complex network problems through evidence and
          isolation.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Real-world case studies showing how I establish scope, test
          hypotheses, isolate fault domains, identify root causes, and validate
          production fixes across enterprise networks.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {troubleshootingCases.map((item, index) => (
            <TroubleshootingCard
              key={item.slug}
              item={item}
              number={String(index + 1).padStart(2, "0")}
              tags={landingTags[item.slug] ?? item.tags}
            />
          ))}
        </div>

        <div className="mt-14">
          <TroubleshootingFlow />
        </div>
      </section>
    </main>
  );
}
