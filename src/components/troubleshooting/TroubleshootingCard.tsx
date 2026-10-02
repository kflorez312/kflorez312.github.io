import Link from "next/link";
import type { TroubleshootingCase } from "@/data/troubleshooting";

type TroubleshootingCardProps = {
  item: TroubleshootingCase;
  number: string;
  tags: string[];
};

export default function TroubleshootingCard({
  item,
  number,
  tags,
}: TroubleshootingCardProps) {
  return (
    <Link
      href={`/troubleshooting/${item.slug}`}
      className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
    >
      <p className="text-sm font-semibold text-cyan-400">{number}</p>

      <h2 className="mt-5 text-2xl font-bold">{item.title}</h2>

      <p className="mt-4 leading-7 text-slate-400">{item.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-8 text-sm font-semibold text-cyan-400">
        View case study &rarr;
      </p>
    </Link>
  );
}
