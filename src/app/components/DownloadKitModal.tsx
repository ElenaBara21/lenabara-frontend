"use client";
import { useState } from "react";

type DownloadKitModalProps = {
  triggerLabel?: string;
  buttonClassName?: string;
};

export default function DownloadKitModal({
  triggerLabel = "Download the UAE Ads Readiness Kit (Free)",
  buttonClassName,
}: DownloadKitModalProps) {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    if (!name || !email) {
      setErr("Please provide your name and email.");
      return;
    }
    try {
      setPending(true);
      const res = await fetch("/api/brevo/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) throw new Error(json?.error || "Failed to subscribe");

      const sendRes = await fetch("/api/brevo/send-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const sendJson = await sendRes.json().catch(() => ({}));
      if (!sendRes.ok || !sendJson?.ok) throw new Error(sendJson?.error || "Failed to send email");
      try {
        localStorage.setItem("lb_download_name", name);
        localStorage.setItem("lb_download_email", email);
      } catch {}
      setOpen(false);
      setSubmittedEmail(email);
      setShowThankYou(true);
    } catch (e: any) {
      setErr(e?.message || "Something went wrong");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          buttonClassName ||
          "inline-block bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-none font-extrabold uppercase tracking-[0.1em] transition"
        }
      >
        {triggerLabel}
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-6">
          <div className="mx-auto w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900/95 p-6">
            <h3 className="text-xl md:text-2xl font-extrabold uppercase text-orange-500 text-center">
              Get the Readiness Kit
            </h3>
            <div className="mx-auto h-px w-16 bg-orange-500/60 mt-3" />
            <form className="mt-4 grid gap-3" onSubmit={onSubmit}>
              <input name="name" type="text" placeholder="Full Name" className="bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:border-orange-500" />
              <input name="email" type="email" placeholder="Work Email" className="bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:border-orange-500" />
              {err && <p className="text-sm text-red-400">{err}</p>}
              <div className="flex items-center justify-between gap-3 mt-2">
                <button type="button" onClick={() => setOpen(false)} className="text-neutral-300 hover:text-white underline underline-offset-4 text-sm">Cancel</button>
                <button type="submit" disabled={pending} className="bg-orange-500 disabled:opacity-70 hover:bg-orange-600 transition text-black px-5 py-3 font-extrabold uppercase tracking-[0.1em]">
                  {pending ? "Submitting..." : "Get Download Link"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showThankYou && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-6"
          data-gtm="kit_thank_you_modal"
        >
          <div className="mx-auto w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900/95 p-6 text-center space-y-4">
            <h3 className="text-2xl font-extrabold uppercase text-orange-500">Thank You!</h3>
            <p className="text-sm text-neutral-200 leading-relaxed">
              Your download link is on its way{submittedEmail ? ` to ${submittedEmail}` : ""}. Check your inbox (and spam folder) for the kit.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-black px-5 py-3 font-extrabold uppercase tracking-[0.1em]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
