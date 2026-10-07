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
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm md:flex-row md:text-left">
        <div>
          <div className="font-semibold text-white">LenaBara Media {new Date().getFullYear()}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.12em] text-neutral-400">
            Performance Marketing UAE
          </div>
        </div>

        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
          <a href="mailto:info@lenabara.com" className="text-neutral-300 hover:text-orange-300">
            info@lenabara.com
          </a>
          <a href="tel:+971563256848" className="text-neutral-300 hover:text-orange-300">
            +971 56 325 6848
          </a>
          <a href="https://www.linkedin.com/in/lenabara/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-orange-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
