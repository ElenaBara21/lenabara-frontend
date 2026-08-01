export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 py-16 text-neutral-100">
      <div className="mx-auto max-w-4xl px-6">
        <section>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">Contact</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-300 md:text-lg">
            I&apos;m open to remote and international roles in marketing analytics, growth analytics and performance
            marketing. The fastest way to reach me is email — I reply within one business day.
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
          <form
            className="grid gap-4"
            action="mailto:info@lenabara.com"
            method="post"
            encType="text/plain"
          >
            <label className="text-sm font-medium text-neutral-200">
              Name
              <input
                name="name"
                required
                type="text"
                className="mt-2 w-full border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-orange-500"
              />
            </label>

            <label className="text-sm font-medium text-neutral-200">
              Email
              <input
                name="email"
                required
                type="email"
                className="mt-2 w-full border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-orange-500"
              />
            </label>

            <label className="text-sm font-medium text-neutral-200">
              Company <span className="text-neutral-500">(optional)</span>
              <input
                name="company"
                type="text"
                className="mt-2 w-full border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-orange-500"
              />
            </label>

            <label className="text-sm font-medium text-neutral-200">
              Message
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full resize-y border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-orange-500"
              />
            </label>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center border border-orange-500 bg-orange-500 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-black transition hover:bg-orange-600"
              >
                Send message
              </button>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:info@lenabara.com"
              className="inline-flex items-center justify-center border border-neutral-300 bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-neutral-950 transition hover:bg-neutral-200"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/lenabara/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:border-neutral-400 hover:bg-neutral-800"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:border-neutral-400 hover:bg-neutral-800"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 border-t border-neutral-800 pt-4 text-sm text-neutral-400">
            Looking for freelance or project-based support instead? <a href="/landing" className="underline underline-offset-4 hover:text-neutral-200">See services -&gt;</a>
          </div>
        </section>
      </div>
    </main>
  );
}
