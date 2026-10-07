import Navbar from "@/components/Navbar";
import DocumentationCard from "@/components/documentation/DocumentationCard";
import DocumentationFlow from "@/components/documentation/DocumentationFlow";
import { documentationExamples, documentationMetadata, documentationPhilosophy } from "@/data/documentation";

export const metadata = documentationMetadata(
  "Network Documentation",
  "Sanitized enterprise network documentation examples covering network architecture, change management, troubleshooting runbooks, and operational standards.",
  "/documentation",
);

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-36">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Network Documentation</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Documentation that makes complex networks easier to operate.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">Sanitized examples of the architecture diagrams, implementation plans, operational runbooks, and engineering standards I use to make enterprise networks understandable, repeatable, and supportable.</p>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {documentationExamples.map((item, index) => <DocumentationCard key={item.slug} item={item} number={String(index + 1).padStart(2, "0")} />)}
        </div>
        <section className="mt-14 border-t border-slate-800 pt-14">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">How I Document Networks</h2>
          <div className="mt-6"><DocumentationFlow steps={documentationPhilosophy} /></div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400">These examples were created specifically for this portfolio. They illustrate documentation methodology rather than actual production configurations, incidents, or implementation results.</p>
        </section>
      </section>
    </main>
  );
}
