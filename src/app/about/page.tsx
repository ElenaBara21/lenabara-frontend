import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Page Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">ABOUT</h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Headline & Bio */}
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              <span className="block text-orange-500">Behind The Strategy</span>
            </h2>
            <div className="text-lg md:text-xl leading-relaxed text-neutral-200 space-y-4">
              <p>
                Hi, I'm <span className="font-bold text-white">Yelena Shelepova</span> — thank you for visiting my website. I'm a digital marketing strategist with 9+ years of experience helping brands grow through thoughtful, data-informed advertising. I'm officially certified by <span className="font-bold text-orange-400">Meta</span> (Media Buying Professional) and <span className="font-bold text-orange-400">Google</span> (Search, Display & Ads), and I focus on building campaigns that not only convert — but actually make sense for the people they're reaching.
              </p>
              <p>
                With a postgraduate certification in <span className="font-bold">Data Science and Business Analytics</span> from <span className="font-bold">The University of Texas at Austin</span>, I bring clarity and structure to marketing decisions through data. Right now, I'm also pursuing a <span className="font-bold">Master's degree in Marketing Management</span> at IU International University of Applied Sciences (Berlin campus)—not just to stay current, but to deepen my strategic thinking and better support growing brands.
              </p>
              <p>
                I'm always learning, refining, and exploring new ways to help businesses stand out in a crowded space. As I expand my media agency, I'm focused on offering services that are smart, ethical, and built for long-term impact. Stay tuned — exciting things ahead.
              </p>
            </div>
          </div>
          {/* Right: Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[340px] h-[420px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-orange-500">
              <Image
                src="/hero/lenabara-profile.jpg"
                alt="Yelena Shelepova, Digital Marketing Strategist"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
