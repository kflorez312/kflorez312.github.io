import { troubleshootingFlow } from "@/data/troubleshooting";

export default function TroubleshootingFlow() {
  return (
    <section className="border-t border-slate-800 pt-14">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        How I Troubleshoot
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3 text-sm font-semibold text-slate-300 sm:text-base">
        {troubleshootingFlow.map((step, index) => (
          <span key={step} className="inline-flex items-center gap-3">
            <span>{step}</span>
            {index < troubleshootingFlow.length - 1 && (
              <span className="text-cyan-400" aria-hidden="true">
                &rarr;
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
