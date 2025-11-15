type Tier = {
  name: string;
  price: string;
  audience: string;
  features: string[];
};

type PricingTilesProps = {
  tiers: Tier[];
};

export function PricingTiles({ tiers }: PricingTilesProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Monetization</p>
        <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Scale from solo to enterprise</h2>
      </header>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {tiers.map((tier) => (
          <article key={tier.name} className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">{tier.name}</p>
            <p className="mt-2 text-3xl font-bold text-zinc-900">{tier.price}</p>
            <p className="text-sm text-zinc-600">{tier.audience}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-zinc-900" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
