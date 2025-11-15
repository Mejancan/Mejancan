type InboxThread = {
  id: string;
  platform: string;
  participant: string;
  preview: string;
  awaitingApproval: boolean;
};

type InboxPanelProps = {
  threads: InboxThread[];
};

const platformStyles: Record<string, string> = {
  whatsapp: "bg-green-100 text-green-700",
  instagram: "bg-pink-100 text-pink-700",
  linkedin: "bg-sky-100 text-sky-800",
};

export function InboxPanel({ threads }: InboxPanelProps) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">Real-time inbox</p>
          <h2 className="text-2xl font-semibold text-zinc-900">Unified conversations</h2>
        </div>
        <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white">Enable AI replies</button>
      </div>
      <div className="mt-6 space-y-4">
        {threads.map((thread) => (
          <article key={thread.id} className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-4">
            <div className="flex items-center justify-between">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${platformStyles[thread.platform] ?? "bg-zinc-200 text-zinc-700"}`}>
                {thread.platform}
              </span>
              {thread.awaitingApproval && (
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">Awaiting approval</span>
              )}
            </div>
            <p className="mt-3 text-sm font-semibold text-zinc-900">{thread.participant}</p>
            <p className="text-sm text-zinc-600">{thread.preview}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
