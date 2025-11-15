type InsightCard = {
  label: string;
  value: string;
  delta?: string;
};

type Prediction = {
  statement: string;
  channel: string;
  confidence: number;
};

type InsightsPanelProps = {
  highlights: InsightCard[];
  predictions: Prediction[];
};

export function InsightsPanel({ highlights, predictions }: InsightsPanelProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-500">Intelligent insights</p>
          <h2 className="text-2xl font-semibold text-zinc-900">Performance pulse</h2>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Updated 2 mins ago</p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.label} className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold text-zinc-900">{item.value}</p>
            {item.delta && <p className="text-xs font-semibold text-emerald-600">{item.delta}</p>}
          </article>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        {predictions.map((prediction) => (
          <article key={prediction.statement} className="rounded-2xl border border-dashed border-zinc-300 p-4">
            <div className="flex items-center justify-between text-sm">
              <p className="font-semibold text-zinc-900">{prediction.channel}</p>
              <p className="text-zinc-500">{prediction.confidence}% confidence</p>
            </div>
            <p className="mt-2 text-sm text-zinc-600">{prediction.statement}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
