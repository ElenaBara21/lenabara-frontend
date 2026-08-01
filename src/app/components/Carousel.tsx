"use client";
import { useState } from "react";

type CarouselProps = {
  slides: {
    id: string;
    title: string;
    pdfUrl: string;
  }[];
};

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const goToPrevious = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  if (slides.length === 0) {
    return <div className="text-center text-neutral-400">No case studies available yet.</div>;
  }

  return (
    <div className="w-full">
      {/* Slider wrapper */}
      <div className="relative bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
        {/* Slider track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s) => (
            <div key={s.id} className="w-full flex-shrink-0">
              <iframe
                src={`${s.pdfUrl}#toolbar=0`}
                className="w-full h-[600px] md:h-[750px]"
                title={s.title}
              />
            </div>
          ))}
        </div>

        {/* Left / Right side arrows to scroll horizontally */}
        <button
          onClick={goToPrevious}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition z-10 shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition z-10 shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Slide Title */}
      <div className="text-center mt-6">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white">{slides[current].title}</h3>
      </div>

      {/* Slide Indicators & Counter Below */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 rounded-full transition ${
                index === current ? "bg-orange-500 w-8" : "bg-neutral-600 hover:bg-neutral-500 w-3"
              }`}
            />
          ))}
        </div>

        <div className="text-sm text-neutral-400">
          {current + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
