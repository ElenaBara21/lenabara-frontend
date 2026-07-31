import type { CaseStudy } from "../types";
import Image from "next/image";

function TextSection({
  title,
  body,
  items,
}: {
  title: string;
  body?: string;
  items?: string[];
}) {
  return (
    <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
      <h2 className="text-2xl font-extrabold text-white md:text-3xl">{title}</h2>
      {body && <p className="mt-4 text-neutral-300 leading-relaxed">{body}</p>}
      {items && items.length > 0 && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function CaseStudy({ study }: { study: CaseStudy }) {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">
      {study.type === "concept" && (
        <div className="mb-6 rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-xs uppercase tracking-[0.12em] text-neutral-300">
          STRATEGY CONCEPT · Illustrative model, not delivered client results
        </div>
      )}

      <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-10">
        <h1 className="text-3xl font-extrabold text-white md:text-5xl">{study.title}</h1>
        <p className="mt-4 text-lg text-neutral-200 md:text-xl">{study.premise}</p>
        {study.type === "concept" && study.disclaimer && (
          <p className="mt-4 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-300">
            {study.disclaimer}
          </p>
        )}
      </section>

      <div className="mt-8 space-y-6">
        <TextSection
          title={study.sections.context.heading}
          body={study.sections.context.body}
          items={study.sections.context.items}
        />

        <TextSection
          title={study.sections.whatsBroken.heading}
          body={study.sections.whatsBroken.body}
          items={study.sections.whatsBroken.items}
        />

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">Funnel Architecture</h2>
          <p className="mt-4 text-neutral-300 leading-relaxed">{study.sections.funnel.intro}</p>
          <ol className="mt-5 space-y-4">
            {study.sections.funnel.stages.map((stage) => (
              <li key={`${stage.n}-${stage.name}`} className="rounded-xl border border-neutral-800 bg-neutral-950/50 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-300/80">
                  Stage {stage.n} · {stage.name}
                </p>
                <p className="mt-2 text-neutral-300 leading-relaxed">{stage.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-neutral-300">{study.sections.funnel.philosophy}</p>
        </section>

        <TextSection
          title={study.sections.execution.heading}
          body={study.sections.execution.body}
          items={study.sections.execution.items}
        />

        {study.proofScreenshots && study.proofScreenshots.length > 0 && (
          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">Live GTM Evidence</h2>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              Screenshots from the live container setup used in this implementation.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {study.proofScreenshots.map((shot) => (
                <article key={shot.title} className="rounded-xl border border-neutral-800 bg-neutral-950/50 p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-300">{shot.title}</h3>
                  <div className="mt-3 overflow-hidden rounded-lg border border-neutral-800">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1600}
                      height={900}
                      loading="lazy"
                      className="h-auto w-full"
                    />
                  </div>
                  {shot.caption && <p className="mt-3 text-sm text-neutral-400">{shot.caption}</p>}
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">Projected Outcomes</h2>
          <p className="mt-4 text-neutral-300 leading-relaxed">{study.sections.projected.intro}</p>
          <dl className="mt-5 space-y-3">
            {study.sections.projected.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-neutral-800 bg-neutral-950/50 p-4">
                <dt className="text-sm uppercase tracking-[0.12em] text-neutral-400">{metric.label}</dt>
                <dd className="mt-1 text-xl font-semibold text-white">{metric.value}</dd>
                {metric.note && <p className="mt-1 text-sm text-neutral-300">{metric.note}</p>}
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm text-neutral-400">{study.sections.projected.basis}</p>
        </section>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">Modeled Business Impact</h2>
          <p className="mt-4 text-neutral-300 leading-relaxed">{study.sections.impact.intro}</p>
          <dl className="mt-5 space-y-3">
            {study.sections.impact.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-neutral-800 bg-neutral-950/50 p-4">
                <dt className="text-sm uppercase tracking-[0.12em] text-neutral-400">{metric.label}</dt>
                <dd className="mt-1 text-xl font-semibold text-white">{metric.value}</dd>
                {metric.note && <p className="mt-1 text-sm text-neutral-300">{metric.note}</p>}
              </div>
            ))}
          </dl>
          <p className="mt-5 text-neutral-300">{study.sections.impact.note}</p>
        </section>

        <TextSection
          title={study.sections.method.heading}
          body={study.sections.method.body}
          items={study.sections.method.items}
        />
      </div>
    </article>
  );
}
