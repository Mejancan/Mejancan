type CalendarItem = {
  day: string;
  focus: string;
  channel: string;
  assets: string[];
};

type AutopilotCalendarProps = {
  items: CalendarItem[];
};

export function AutopilotCalendar({ items }: AutopilotCalendarProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-500">Autopilot</p>
          <h2 className="text-2xl font-semibold text-zinc-900">Content calendar</h2>
        </div>
        <button className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50">
          Generate month
        </button>
      </header>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.day} className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">{item.day}</p>
            <p className="mt-2 text-lg font-semibold text-zinc-900">{item.focus}</p>
            <p className="text-sm text-zinc-600">{item.channel}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.assets.map((asset) => (
                <span key={asset} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                  {asset}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
