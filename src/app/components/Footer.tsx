"use client";

type FooterProps = {
  isLenaShelepova: boolean;
};

export default function Footer({ isLenaShelepova }: FooterProps) {
  if (isLenaShelepova) {
    return (
      <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm md:flex-row md:text-left">
          <div className="font-semibold text-white">Yelena Shelepova {new Date().getFullYear()}</div>

          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <a href="mailto:f3780971@gmail.com" className="text-neutral-300 hover:text-orange-300">
              f3780971@gmail.com
            </a>
            <a href="tel:+77756364248" className="text-neutral-300 hover:text-orange-300">
              +77756364248
            </a>
            <a href="tel:+971521595752" className="text-neutral-300 hover:text-orange-300">
              +971521595752
            </a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <div id="global-footer-wrap" className="bg-neutral-950 pb-10">
      <footer id="global-footer" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 h-px w-full bg-neutral-800" />
        <div className="flex flex-col gap-8 text-sm text-neutral-300 md:flex-row">
          <div className="min-w-[180px] flex-1">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 font-bold text-black">LB</div>
              <span className="text-lg font-extrabold text-white">LENABARA</span>
            </div>
            <div className="mb-2">A boutique performance marketing agency helping UAE businesses scale through paid media, analytics, and lead generation systems.</div>
            <div className="mb-2">Dubai • Abu Dhabi • Sharjah • Ras Al Khaimah • Ajman</div>
            <div className="mb-2">Serving clients across the GCC and globally.</div>
            <div className="mb-2">Registered with RAKEZ (Ras Al Khaimah Economic Zone), UAE. Licensed under: Media / Digital Marketing Consultancy.</div>
            <div className="mb-2">Social Media Advertiser Permit from National Media Authority UAE.</div>
            <div className="mt-3 flex gap-2">
              <img src="/badges/meta-buyer-badge.png" alt="Meta Certified Media Buying Professional" className="h-7 w-auto" />
            </div>
          </div>
          <div className="min-w-[180px] flex-1">
            <div className="mb-2 font-bold text-white">CONTACT</div>
            <div className="mb-1 flex items-center gap-2"><span className="text-orange-400">+971 56 325 6848</span></div>
            <div className="mb-1 flex items-center gap-2"><span className="text-orange-400">+971 52 159 5752</span></div>
            <div className="mb-1 flex items-center gap-2"><span className="text-orange-400">info@lenabara.com</span></div>
            <div className="mb-1 flex items-center gap-2"><a href="https://www.lenabara.com" className="hover:text-orange-400" target="_blank" rel="noopener noreferrer">www.lenabara.com</a></div>
            <div className="mt-2">Global (Remote)<br />Book a discovery call: info@lenabara.com<br />Business Hours: 08:00 — 18:00 (Gulf Time)</div>
          </div>
          <div className="min-w-[180px] flex-1">
            <div className="mb-2 font-bold text-white">NAVIGATION</div>
            <div className="mb-1">WORK</div>
            <div className="mb-1">ABOUT</div>
            <div className="mb-1">CONTACT</div>
          </div>
          <div className="min-w-[180px] flex-1">
            <div className="mb-2 font-bold text-white">NEED SUPPORT?</div>
            <div className="mb-1">Submit a ticket or call during business hours.</div>
            <div className="mb-1">support@lenabara.com</div>
            <div className="mb-2 mt-3 font-bold text-white">LEGAL</div>
            <div className="mb-1">Terms &amp; Conditions</div>
            <div className="mb-1">Privacy Policy</div>
          </div>
          <div className="min-w-[180px] flex-1">
            <div className="mb-2 font-bold text-white">COLLABORATIONS</div>
            <div className="mb-1">For employer conversations or portfolio requests, reach out through the contact page:</div>
            <div className="mb-1">info@lenabara.com</div>
            <div className="mb-2 mt-6 text-lg font-extrabold text-white">START A PROJECT</div>
            <a href="https://lenabara.com/contact" target="_blank" rel="noopener noreferrer" className="mb-2 inline-block rounded-none bg-orange-500 px-5 py-2 font-extrabold uppercase tracking-[0.1em] text-black transition hover:bg-orange-600">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-neutral-400">
          Licensed by RAKEZ | © {new Date().getFullYear()} LenaBara — All Rights Reserved.<br />
          Advertising services comply with UAE media and digital marketing regulations.<br />
          Registered office: United Arab Emirates.
        </div>
      </footer>
    </div>
  );
}
