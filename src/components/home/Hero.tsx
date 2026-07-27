export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
        Staff Network Engineer
      </p>

      <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
        Kenneth Florez
      </h1>

      <h2 className="mt-6 text-2xl text-slate-300 md:text-3xl">
        Enterprise Infrastructure • Network Automation • AI-Assisted Operations
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
        I design, modernize, and operate enterprise networks that support
        thousands of users across healthcare, transportation, and large-scale
        production environments. My focus is building resilient, secure, and
        highly available infrastructure while improving operational efficiency
        through automation and AI.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
        >
          View Projects
        </a>

        <a
          href="https://github.com/kflorez312"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-600 px-8 py-4 transition hover:border-cyan-400"
        >
          GitHub
        </a>

        <a
          href="mailto:kflorez312@gmail.com"
          className="rounded-lg border border-slate-600 px-8 py-4 transition hover:border-cyan-400"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
       
       
       
       
       
