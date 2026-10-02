import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TroubleshootingCaseContent from "@/components/troubleshooting/TroubleshootingCaseContent";
import { getTroubleshootingCase } from "@/data/troubleshooting";

const item = getTroubleshootingCase("intermittent-latency")!;

export const metadata: Metadata = {
  title: item.metadata.title,
  description: item.metadata.description,
  alternates: {
    canonical: "/troubleshooting/intermittent-latency",
  },
  openGraph: {
    title: `${item.metadata.title} | Kenneth Florez`,
    description: item.metadata.description,
    url: "/troubleshooting/intermittent-latency",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: `${item.metadata.title} | Kenneth Florez`,
    description: item.metadata.description,
  },
};

export default function IntermittentLatencyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <TroubleshootingCaseContent item={item} />
    </main>
  );
}
