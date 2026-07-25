export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="text-lg font-bold tracking-wide">
          Kenneth Florez
        </a>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#skills" className="transition hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
