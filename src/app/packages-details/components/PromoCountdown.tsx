"use client";
import { useEffect, useState } from "react";

function diff(end: number) {
  const ms = Math.max(end - Date.now(), 0);
  const s = Math.floor(ms / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return { d, h, m, sec, expired: ms === 0 };
}

type Props = {
  endsAtISO: string;
  paused?: boolean;
  fixedDays?: number; // when paused, show this many days and 00:00:00
};

export default function PromoCountdown({ endsAtISO, paused = false, fixedDays }: Props) {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    if (paused) return; // static mode handled outside effect
    const end = new Date(endsAtISO).getTime();
    const tick = () => setT(diff(end));
    tick(); // set immediately on mount
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endsAtISO, paused]);

  if (paused && typeof fixedDays === "number") {
    return (
      <div className="flex items-center gap-3 text-base">
        <span className="text-neutral-300">Ends in</span>
        {[["d", fixedDays], ["h", 0], ["m", 0], ["s", 0]].map(([lbl, val]) => (
          <div key={lbl} className="min-w-[56px] text-center rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-1.5">
            <div className="text-white font-extrabold text-2xl leading-none">{String(val).padStart(2, "0")}</div>
            <div className="text-[11px] text-neutral-400 uppercase tracking-wide">{lbl}</div>
          </div>
        ))}
      </div>
    );
  }

  if (!t) {
    return (
      <div className="flex items-center gap-3 text-base">
        <span className="text-neutral-300">Ends in</span>
        {[["d", "--"], ["h", "--"], ["m", "--"], ["s", "--"]].map(([lbl, val]) => (
          <div key={lbl} className="min-w-[56px] text-center rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-1.5">
            <div className="text-white font-extrabold text-2xl leading-none">{val}</div>
            <div className="text-[11px] text-neutral-400 uppercase tracking-wide">{lbl}</div>
          </div>
        ))}
      </div>
    );
  }

  if (t.expired) return <span className="text-sm text-neutral-400">Offer ended</span>;

  // If paused with fixedDays, render static
  const blocks: Array<[string, number]> = [["d", t.d], ["h", t.h], ["m", t.m], ["s", t.sec]];

  return (
    <div className="flex items-center gap-3 text-base">
      <span className="text-neutral-300">Ends in</span>
      {blocks.map(([lbl, val]) => (
        <div key={lbl} className="min-w-[56px] text-center rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-1.5">
          <div className="text-white font-extrabold text-2xl leading-none">{String(val).padStart(2, "0")}</div>
          <div className="text-[11px] text-neutral-400 uppercase tracking-wide">{lbl}</div>
        </div>
      ))}
    </div>
  );
}
