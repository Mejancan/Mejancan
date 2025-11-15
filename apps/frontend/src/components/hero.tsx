type HeroProps = {
  title: string;
  subtitle: string;
  highlights: { label: string; value: string }[];
};

export function Hero({ title, subtitle, highlights }: HeroProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-purple-600 via-fuchsia-500 to-orange-400 p-8 text-white shadow-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
        AI Digital Marketing OS
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-white/90">{subtitle}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {highlights.map((highlight) => (
          <div key={highlight.label} className="rounded-2xl border border-white/20 bg-white/10 p-4">
            <p className="text-sm uppercase tracking-widest text-white/70">{highlight.label}</p>
            <p className="text-2xl font-bold">{highlight.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
