export default function Footer() {
  return (
    <div className="bg-neutral-950 pb-10">
      <footer id="footer" className="mx-auto max-w-7xl px-6 py-12">
        <div className="h-px w-full bg-neutral-800 mb-8" />
        <div className="flex flex-col md:flex-row gap-8 text-sm text-neutral-300">
        {/* Five columns */}
        <div className="flex-1 min-w-[180px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-8 w-8 rounded-xl bg-orange-500 flex items-center justify-center font-bold text-black">LB</div>
            <span className="font-extrabold text-white text-lg">LENABARA</span>
          </div>
          <div className="mb-2">A boutique performance marketing agency based in the UAE, specializing in paid media, analytics, and creative execution.</div>
          <div className="mb-2">Dubai • Abu Dhabi • Sharjah • Ras Al Khaimah • Ajman</div>
          <div className="mb-2">Serving clients across the GCC and globally.</div>
          <div className="mb-2">Registered with RAKEZ (Ras Al Khaimah Economic Zone), UAE. Licensed under: Media / Digital Marketing Consultancy.</div>
          <div className="flex gap-2 mt-3">
            <img src="/badges/google-partner-badge.png" alt="Google Partner" className="h-7 w-auto" />
            <img src="/badges/meta-buyer-badge.png" alt="Meta Certified Media Buying Professional" className="h-7 w-auto" />
          </div>
        </div>
        <div className="flex-1 min-w-[180px]">
          <div className="font-bold text-white mb-2">CONTACT</div>
          <div className="mb-1 flex items-center gap-2"><span className="text-orange-400">+971 56 325 6848</span></div>
          <div className="mb-1 flex items-center gap-2"><span className="text-orange-400">+971 52 159 5752</span></div>
          <div className="mb-1 flex items-center gap-2"><span className="text-orange-400">info@lenabara.com</span></div>
          <div className="mb-1 flex items-center gap-2"><a href="https://www.lenabara.com" className="hover:text-orange-400" target="_blank" rel="noopener noreferrer">www.lenabara.com</a></div>
          <div className="mt-2">Global (Remote)<br />Book a discovery call: info@lenabara.com<br />Business Hours: 08:00 — 18:00 (Gulf Time)</div>
        </div>
        <div className="flex-1 min-w-[180px]">
          <div className="font-bold text-white mb-2">NAVIGATION</div>
          <div className="mb-1">PACKAGES</div>
          <div className="mb-1">WHAT MAKES US DIFFERENT</div>
          <div className="mb-1">CONTACT</div>
        </div>
        <div className="flex-1 min-w-[180px]">
          <div className="font-bold text-white mb-2">NEED SUPPORT?</div>
          <div className="mb-1">Submit a ticket or call during business hours.</div>
          <div className="mb-1">support@lenabara.com</div>
          <div className="font-bold text-white mt-3 mb-2">LEGAL</div>
          <div className="mb-1">Terms & Conditions</div>
          <div className="mb-1">Privacy Policy</div>
        </div>
        <div className="flex-1 min-w-[180px]">
          <div className="font-bold text-white mb-2">COLLABORATIONS</div>
          <div className="mb-1">We love working with creative freelancers and marketing specialists. If you'd like to collaborate, send your portfolio or proposal to:</div>
          <div className="mb-1">info@lenabara.com</div>
          <div className="font-extrabold text-white text-lg mt-6 mb-2">START A PROJECT</div>
          <a href="https://lenabara.com/contact" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-5 py-2 rounded-none font-extrabold uppercase tracking-[0.1em] transition mb-2">Contact</a>
        </div>
      </div>
      <div className="mt-8 text-xs text-neutral-400 text-center">
          Licensed by RAKEZ | © {new Date().getFullYear()} LenaBara — All Rights Reserved.<br />
          Advertising services comply with UAE media and digital marketing regulations.<br />
          Registered office: United Arab Emirates.
        </div>
      </footer>
    </div>
  );
}
