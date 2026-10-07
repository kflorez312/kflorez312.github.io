import Link from "next/link";
import type { DocumentationExample } from "@/data/documentation";

export default function DocumentationCard({ item, number }: { item: DocumentationExample; number: string }) {
  return (
    <Link href={`/documentation/${item.slug}`} className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400">
      <p className="text-sm font-semibold text-cyan-400">{number}</p>
      <h2 className="mt-5 text-2xl font-bold">{item.title}</h2>
      <p className="mt-4 leading-7 text-slate-400">{item.summary}</p>
      <div className="mb-8 mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{tag}</span>)}
      </div>
      <p className="mt-auto text-sm font-semibold text-cyan-400">View documentation &rarr;</p>
    </Link>
  );
}
