"use client";

import Link from "next/link";
import Script from "next/script";
import { ReactNode, useEffect, useRef, useState } from "react";
import { track } from "../../lib/analytics";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

const benefits = [
  {
    title: "Personalized Recommendations",
    text: "Get channel and funnel guidance tailored to your business model and goals.",
  },
  {
    title: "Transparent Pricing Estimate",
    text: "Understand projected budget ranges and expected acquisition outcomes before scaling.",
  },
  {
    title: "Tailored Marketing Strategy",
    text: "Receive a practical strategy direction you can execute immediately.",
  },
];

function pushGaEvent(eventName: string, params: Record<string, unknown>) {
  track(eventName, params);

  // GTM/GA4 hook: map these dataLayer events to GA4 events in GTM if needed.
  if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...params });
  }
}

export default function Demo3Page() {
  const quizRef = useRef<HTMLElement>(null);
  const [completionTracked, setCompletionTracked] = useState(false);
  const marquizId = process.env.NEXT_PUBLIC_MARQUIZ_ID || "YOUR_EXISTING_QUIZ_ID";

  const scrollToQuiz = () => {
    pushGaEvent("quiz_started", {
      landing: "work_demo3",
      source: "cta_button",
    });

    quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const onQuizCompleted = () => {
      if (completionTracked) return;
      pushGaEvent("quiz_completed", {
        landing: "work_demo3",
      });
      setCompletionTracked(true);
    };

    // Connect your Marquiz completion callback to dispatch this custom event:
    // window.dispatchEvent(new Event("marquiz:completed"));
    window.addEventListener("marquiz:completed", onQuizCompleted);
    return () => window.removeEventListener("marquiz:completed", onQuizCompleted);
  }, [completionTracked]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pt-20">
        <Reveal className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Interactive Quote Quiz</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Answer 7 Questions and Receive a Personalized Marketing Quote
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Complete the short quiz to receive a tailored proposal based on your business goals.
          </p>
          <button
            type="button"
            onClick={scrollToQuiz}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Start the Quiz
          </button>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900">Why Take This Quiz</h2>
        </Reveal>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {benefits.map((item) => (
            <Reveal key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section ref={quizRef} id="quiz" className="mx-auto max-w-6xl px-6 py-10">
        <Reveal className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">Marketing Needs Assessment</h2>
          <p className="mt-3 text-sm text-slate-600">This section embeds your existing Marquiz widget.</p>

          <div className="mt-6 rounded-2xl border border-slate-300 bg-white p-4">
            <div
              id="marquiz-widget"
              className="min-h-[460px] w-full rounded-xl border border-slate-200 bg-white"
              data-marquiz-id={marquizId}
              data-marquiz-mode="inline"
            />
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Configure NEXT_PUBLIC_MARQUIZ_ID with your existing quiz ID. The page embeds that live quiz and does not recreate it.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900">Automation Workflow</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Quiz responses are processed automatically and routed to your CRM and reporting stack.
          </p>
        </Reveal>

        <Reveal className="mt-7 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-6">
          <div className="flex min-w-[760px] items-center justify-between gap-4">
            {[
              "Landing Page",
              "Marquiz",
              "Make",
              "CRM",
              "Google Sheets",
            ].map((node, idx) => (
              <div key={node} className="flex items-center gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">{node}</div>
                {idx < 4 && <span className="text-xl text-slate-400">&rarr;</span>}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <Reveal className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white md:p-10">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Discover Your Growth Opportunities?</h2>
          <button
            type="button"
            onClick={scrollToQuiz}
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Take the Quiz
          </button>
        </Reveal>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>LenaBara Quiz Funnel</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="hover:text-slate-900">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-slate-900">Privacy</Link>
            <a href="https://www.linkedin.com/in/lenabara/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">LinkedIn</a>
          </div>
        </div>
      </footer>

      <Script src="https://script.marquiz.ru/v2.js" strategy="afterInteractive" />
      <Script id="marquiz-init" strategy="afterInteractive">
        {`
          // GTM note: fire quiz_started on CTA click and quiz_completed when Marquiz callback runs.
          (function () {
            if (!window.Marquiz || !window.Marquiz.init) return;
            window.Marquiz.init({
              id: "marquiz-widget"
            });
          })();
        `}
      </Script>
    </main>
  );
}
