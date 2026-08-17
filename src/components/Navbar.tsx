import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <Link href="/" className="font-semibold text-white">
          Kenneth Florez
        </Link>

        <div className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm text-slate-300">
          <Link href="/#about" className="transition hover:text-cyan-400">
            About
          </Link>

          <Link href="/#skills" className="transition hover:text-cyan-400">
            Skills
          </Link>

          <Link href="/projects" className="transition hover:text-cyan-400">
            Projects
          </Link>

          <a
            href="/Kenneth-Florez-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-400"
          >
            Resume
          </a>

          <Link href="/#contact" className="transition hover:text-cyan-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
