"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type CaseStudyBeautyAestheticsProps = {
  title?: string;
  images?: string[];
};

export default function CaseStudyBeautyAesthetics({
  title = "Case Study: Beauty Aesthetics Clinic",
  images = [
    "/case-studies/beauty-aesthetics/1.png",
    "/case-studies/beauty-aesthetics/2.png",
    "/case-studies/beauty-aesthetics/3.png",
    "/case-studies/beauty-aesthetics/4.png",
    "/case-studies/beauty-aesthetics/5.png",
    "/case-studies/beauty-aesthetics/6.png",
    "/case-studies/beauty-aesthetics/7.png",
    "/case-studies/beauty-aesthetics/8.png",
    "/case-studies/beauty-aesthetics/9.png",
    "/case-studies/beauty-aesthetics/10.png",
  ],
}: CaseStudyBeautyAestheticsProps) {
  const [current, setCurrent] = useState(0);
  const totalSlides = images.length;

  const goToPrevious = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [totalSlides]);

  return (
    <section className="w-full">
      {title && (
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
        </div>
      )}

      <div className="relative bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((imagePath, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-[500px] md:h-[650px] relative"
              style={{ minWidth: "100%" }}
            >
              <Image
                src={imagePath}
                alt={`Beauty Aesthetics Case Study Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-contain"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        <button
          onClick={goToPrevious}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent md:bg-orange-500 md:hover:bg-orange-600 text-orange-500 hover:text-orange-600 md:text-white md:hover:text-white p-2 md:p-3 rounded-full transition z-10 md:shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent md:bg-orange-500 md:hover:bg-orange-600 text-orange-500 hover:text-orange-600 md:text-white md:hover:text-white p-2 md:p-3 rounded-full transition z-10 md:shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center gap-4 mt-8">
        <div className="flex gap-2 flex-wrap justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 rounded-full transition ${
                index === current
                  ? "bg-orange-500 w-8"
                  : "bg-neutral-600 hover:bg-neutral-500 w-3"
              }`}
            />
          ))}
        </div>
        <div className="text-sm text-neutral-400">
          {current + 1} / {totalSlides}
        </div>
      </div>

      <div className="text-center mt-4 text-xs text-neutral-500">
        Use arrow keys or click buttons to navigate
      </div>
    </section>
  );
}
