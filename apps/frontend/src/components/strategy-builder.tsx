"use client";

import { useState } from "react";

type StrategyInput = {
  brandVoice: string;
  industry: string;
  primaryGoal: string;
  postingFrequency: string;
};

export function StrategyBuilder() {
  const [strategy, setStrategy] = useState<StrategyInput>({
    brandVoice: "Witty expert",
    industry: "SaaS",
    primaryGoal: "Pipeline",
    postingFrequency: "5x week",
  });

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500">Strategy engine</p>
      <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Brand guardrails</h2>
      <form className="mt-6 grid gap-4">
        {Object.entries(strategy).map(([key, value]) => (
          <label key={key} className="text-sm font-medium text-zinc-700">
            <span className="block text-xs uppercase tracking-[0.35em] text-zinc-500">{key}</span>
            <input
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none"
              value={value}
              onChange={(event) =>
                setStrategy((prev) => ({
                  ...prev,
                  [key]: event.target.value,
                }))
              }
            />
          </label>
        ))}
      </form>
      <div className="mt-6 rounded-2xl border border-dashed border-zinc-400 bg-zinc-50/80 p-4 text-sm text-zinc-700">
        <p className="font-semibold text-zinc-900">Latest insight</p>
        <p className="mt-1">
          Autopilot recommends pivoting Wednesday posts to short-form video to capture trending demand keywords.
        </p>
      </div>
    </section>
  );
}
