import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TroubleshootingCaseContent from "@/components/troubleshooting/TroubleshootingCaseContent";
import { getTroubleshootingCase } from "@/data/troubleshooting";

const item = getTroubleshootingCase("wireless-roaming")!;

export const metadata: Metadata = {
  title: item.metadata.title,
  description: item.metadata.description,
  alternates: {
    canonical: "/troubleshooting/wireless-roaming",
  },
  openGraph: {
    title: `${item.metadata.title} | Kenneth Florez`,
    description: item.metadata.description,
    url: "/troubleshooting/wireless-roaming",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: `${item.metadata.title} | Kenneth Florez`,
    description: item.metadata.description,
  },
};

export default function WirelessRoamingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <TroubleshootingCaseContent item={item} />
    </main>
  );
}
