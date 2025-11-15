type AddOn = {
  title: string;
  description: string;
  tag: string;
};

type AddonGridProps = {
  items: AddOn[];
};

export function AddonGrid({ items }: AddonGridProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">Signature add-ons</p>
        <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Differentiate your agency</h2>
      </header>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">{item.tag}</p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">{item.title}</h3>
            <p className="text-sm text-zinc-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
