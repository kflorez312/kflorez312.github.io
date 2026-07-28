type ProjectSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="grid gap-12 border-b border-slate-800 py-14 md:grid-cols-[280px_1fr]">
      <div>
        <h2 className="sticky top-28 text-3xl font-bold text-white">
          {title}
        </h2>
      </div>

      <div>{children}</div>
    </section>
  );
}


