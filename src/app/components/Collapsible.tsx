"use client";
import { useState } from "react";

export default function Collapsible({
  children,
  summary = "Learn more",
  defaultOpen = false,
}: {
  children: React.ReactNode;
  summary?: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center bg-orange-500/10 text-orange-400">
          {open ? "−" : "+"}
        </span>
        {open ? "Hide" : summary}
      </button>
      {open && <div className="mt-3 text-neutral-300 text-sm md:text-base">{children}</div>}
    </div>
  );
}

