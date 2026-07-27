export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            About
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Engineering resilient networks at enterprise scale.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-400">
          <p>
            I am a senior network engineer with more than 15 years of
            experience designing, modernizing, and operating enterprise
            infrastructure across healthcare, transportation, and large-scale
            production environments.
          </p>

          <p>
            My work spans campus and data center networking, wireless,
            SD-WAN, routing, observability, and automation. I focus on building
            reliable platforms that reduce operational complexity and improve
            the experience of both users and engineering teams.
          </p>

          <p>
            I bring a hands-on approach to architecture, troubleshooting, and
            modernization, with experience supporting hundreds of distributed
            sites and mission-critical services.
          </p>
        </div>
      </div>
    </section>
  );
}

