"use client";
import { useEffect, useMemo, useState } from "react";
import { track } from "../../lib/analytics";

type Result = {
  spend: number;
  suggestedPackage: "Pilot Pack" | "Growth System" | "Performance Partner";
  mgmtFeeRange: [number, number];
};

export default function BudgetCalculator() {
  const [leads, setLeads] = useState<number>(50);
  const [cpl, setCpl] = useState<number>(80);
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);

  const result: Result = useMemo(() => {
    const spend = Math.round(leads * cpl);

    // Simple tiering logic based on ad spend bands
    if (spend < 4000) {
      return { spend, suggestedPackage: "Pilot Pack", mgmtFeeRange: [2500, 4000] };
    }
    if (spend < 15000) {
      return { spend, suggestedPackage: "Growth System", mgmtFeeRange: [6000, 9000] };
    }
    return { spend, suggestedPackage: "Performance Partner", mgmtFeeRange: [12000, 20000] };
  }, [leads, cpl]);

  useEffect(() => {
    track("calc_viewed");
  }, []);

  useEffect(() => {
    // Summarize and set a super property for segmentation
    track('calc_summary', {
      spend: result.spend,
      plan: result.suggestedPackage,
      fee_min: result.mgmtFeeRange[0],
      fee_max: result.mgmtFeeRange[1],
    });
    try {
      const w = window as any;
      if (w.posthog && typeof w.posthog.register === 'function') {
        w.posthog.register({ plan: result.suggestedPackage });
      }
      // Persist the last calculator result for later (lead submit)
      try {
        localStorage.setItem('lenabara_calc', JSON.stringify({
          plan: result.suggestedPackage,
          spend: result.spend,
          fee_min: result.mgmtFeeRange[0],
          fee_max: result.mgmtFeeRange[1],
        }));
      } catch {}
    } catch {}
  }, [result.spend, result.suggestedPackage, result.mgmtFeeRange]);

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
      <h3 className="text-xl font-semibold text-white">Budget Calculator</h3>
      <p className="text-sm text-neutral-400 mt-1">
        Estimate monthly ad spend and a matching package based on your goals.
      </p>

      <div className="mt-5 grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-neutral-300">Target monthly leads</label>
          <div className="mt-2 flex items-center gap-3">
            <input
              type="range"
              min={10}
              max={500}
              value={leads}
              onChange={(e) => {
                const v = parseInt(e.target.value || "0", 10);
                setLeads(v);
                track("calc_change", { field: "leads", value: v });
              }}
              className="w-full"
            />
            <input
              type="number"
              min={1}
              className="w-24 bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-white"
              value={leads}
              onChange={(e) => {
                const v = Math.max(1, parseInt(e.target.value || "0", 10));
                setLeads(v);
                track("calc_change", { field: "leads", value: v });
              }}
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {[30, 50, 100, 200].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => { setLeads(v); track('calc_quickset', { field: 'leads', value: v }); }}
                className={`px-2.5 py-1 rounded-lg border ${leads===v? 'border-orange-400 text-orange-300 bg-orange-500/10': 'border-neutral-800 text-neutral-300 bg-neutral-900/40'} hover:border-neutral-700`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm text-neutral-300 flex items-center gap-2">
            Expected CPL (AED)
            <span
              className="relative inline-flex items-center justify-center h-4 w-4 text-[10px] rounded-full bg-neutral-800 text-neutral-300 cursor-help"
              title="CPL = Cost Per Lead — average amount you expect to pay for each inquiry or signup."
            >
              i
            </span>
          </label>
          <div className="mt-2 flex items-center gap-3">
            <input
              type="range"
              min={10}
              max={400}
              step={5}
              value={cpl}
              onChange={(e) => {
                const v = parseInt(e.target.value || "0", 10);
                setCpl(v);
                track("calc_change", { field: "cpl", value: v });
              }}
              className="w-full"
            />
            <input
              type="number"
              min={1}
              className="w-24 bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-white"
              value={cpl}
              onChange={(e) => {
                const v = Math.max(1, parseInt(e.target.value || "0", 10));
                setCpl(v);
                track("calc_change", { field: "cpl", value: v });
              }}
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {[50, 100, 150, 200].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => { setCpl(v); track('calc_quickset', { field: 'cpl', value: v }); }}
                className={`px-2.5 py-1 rounded-lg border ${cpl===v? 'border-orange-400 text-orange-300 bg-orange-500/10': 'border-neutral-800 text-neutral-300 bg-neutral-900/40'} hover:border-neutral-700`}
              >
                AED {v}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-neutral-800 p-4">
          <p className="text-xs text-neutral-400">Estimated Ad Spend</p>
          <p className="text-2xl font-bold text-white">AED {result.spend.toLocaleString()}</p>
          <p className="mt-1 text-[11px] text-neutral-500">Formula: Leads × CPL = Ad Spend</p>
        </div>
        <div className="rounded-xl border border-neutral-800 p-4">
          <p className="text-xs text-neutral-400">Suggested Package</p>
          <p className="text-2xl font-bold text-white">{result.suggestedPackage}</p>
        </div>
        <div className="rounded-xl border border-neutral-800 p-4">
          <p className="text-xs text-neutral-400">Mgmt. Fee Range</p>
          <p className="text-2xl font-bold text-white">
            AED {result.mgmtFeeRange[0].toLocaleString()}–{result.mgmtFeeRange[1].toLocaleString()}
          </p>
        </div>
      </div>

      

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-3 rounded-xl font-medium"
          data-track="calc_cta_discuss"
          onClick={() => track("calc_cta_discuss", { spend: result.spend, pkg: result.suggestedPackage })}
        >
          Discuss My Estimate
        </a>
        <a
          href="#packages"
          className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 px-5 py-3 rounded-xl font-medium"
          data-track="calc_cta_compare"
          onClick={() => track("calc_cta_compare", { spend: result.spend, pkg: result.suggestedPackage })}
        >
          Compare Packages
        </a>
      </div>

      <div className="mt-4 text-[11px] text-neutral-400">
        <button
          type="button"
          className="inline-flex items-center gap-2 hover:text-neutral-300"
          aria-expanded={showDisclaimer}
          onClick={() => setShowDisclaimer((v) => !v)}
        >
          <span className="text-neutral-300">ⓘ</span>
          <span className="font-medium">Disclaimer</span>
        </button>
        {showDisclaimer && (
          <div className="mt-2 text-[10px] leading-relaxed text-neutral-500">
            <ul className="space-y-1 list-none">
              <li><span className="mr-1">•</span>The estimates provided by this calculator are for illustrative purposes only and do not constitute a formal quotation.</li>
              <li><span className="mr-1">•</span>Actual costs and results may vary depending on campaign objectives, audience targeting, creative scope, and industry competition.</li>
              <li><span className="mr-1">•</span>All management fees are exclusive of ad spend. Ad spend is paid directly to Meta/Google.</li>
              <li><span className="mr-1">•</span>Management fees cover strategy, setup, optimization, and reporting.</li>
              <li><span className="mr-1">•</span>Estimates are illustrative; exact pricing depends on scope, funnel, and creative volume.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
