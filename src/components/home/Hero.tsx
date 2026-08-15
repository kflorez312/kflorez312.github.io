export default function Hero() {
  return (
    <section
      id="home"
      className="border-b border-slate-800"
    >
      <div className="mx-auto flex min-h-[560px] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Lead / Senior Network Engineer
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Kenneth Florez
        </h1>

        <p className="mt-5 text-xl text-slate-300 sm:text-2xl">
          Enterprise Networking · Wireless · SD-WAN · Network Automation
        </p>

        <p className="mt-8 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
          I design, modernize, and operate enterprise networks that support
          thousands of users across healthcare, transportation, and large-scale
          production environments. My focus is building resilient, secure, and
          highly available infrastructure while improving operational
          efficiency through automation and AI.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/projects"
            className="rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View Projects
          </a>

          <a
            href="https://github.com/kflorez312"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-600 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-600 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
