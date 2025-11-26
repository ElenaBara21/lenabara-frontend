"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type CaseStudyGymProps = {
  title?: string;
};

export default function CaseStudyGym({ title = "Gym Case Study" }: CaseStudyGymProps) {
  const [current, setCurrent] = useState(0);

  // Array of image paths
  const images = [
    "/case-studies/gym/1.png",
    "/case-studies/gym/2.png",
    "/case-studies/gym/3.png",
    "/case-studies/gym/4.png",
    "/case-studies/gym/5.png",
    "/case-studies/gym/6.png",
    "/case-studies/gym/7.png",
  ];

  const totalSlides = images.length;

  // Navigation handlers
  const goToPrevious = () => {
    setCurrent((prev) => {
      const newIndex = prev === 0 ? totalSlides - 1 : prev - 1;
      console.log('Going to previous:', newIndex);
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrent((prev) => {
      const newIndex = prev === totalSlides - 1 ? 0 : prev + 1;
      console.log('Going to next:', newIndex);
      return newIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Keyboard navigation
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
    <div className="w-full">
      {/* Title */}
      {title && (
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
        </div>
      )}

      {/* Carousel Container */}
      <div className="relative bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
        {/* Slider Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((imagePath, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-[500px] md:h-[650px] relative"
              style={{ minWidth: '100%' }}
            >
              <Image
                src={imagePath}
                alt={`Gym Case Study Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-contain"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={goToPrevious}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition z-10 shadow-lg"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition z-10 shadow-lg"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Pagination Indicators & Counter */}
      <div className="flex flex-col items-center gap-4 mt-8">
        {/* Dot Indicators */}
        <div className="flex gap-2">
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

        {/* Slide Counter */}
        <div className="text-sm text-neutral-400">
          {current + 1} / {totalSlides}
        </div>
      </div>

      {/* Keyboard Help Text (Optional) */}
      <div className="text-center mt-4 text-xs text-neutral-500">
        Use arrow keys or click buttons to navigate
      </div>
    </div>
  );
}
