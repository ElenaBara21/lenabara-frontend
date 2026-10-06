"use client";

export default function Footer() {
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
