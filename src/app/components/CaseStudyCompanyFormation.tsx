"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type CaseStudyCompanyFormationProps = {
  title?: string;
  images?: string[];
};

export default function CaseStudyCompanyFormation({
  title = "Company Formation Case Study",
  images = [
    "/case-studies/company-formation/1_From-Unpredictable-Referrals-to-20-Qualified-Leads-Weekly.png",
    "/case-studies/company-formation/2_Client-Overview-UAE-Business-Setup-Consultancy.png",
    "/case-studies/company-formation/3_The-Challenge-Stuck-in-Unpredictable-Growth.png",
    "/case-studies/company-formation/4_The-Approach-Building-a-Full-Funnel-System.png",
    "/case-studies/company-formation/5_High-Intent-Capture-Google-Search-Strategy.png",
    "/case-studies/company-formation/6_Demand-Creation-Retargeting-Meta-Ads-Strategy.png",
    "/case-studies/company-formation/7_WhatsApp-First-Funnel-The-Core-Driver.png",
    "/case-studies/company-formation/8_Results-Transforming-Lead-Generation-Performance.png",
    "/case-studies/company-formation/9_Key-Insights-for-UAE-Service-Businesses.png",
    "/case-studies/company-formation/10_Ready-to-Scale-Your-UAE-Business-Setup-Leads.png",
  ],
}: CaseStudyCompanyFormationProps) {
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
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      } else if (event.key === "ArrowRight") {
        setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [totalSlides]);

  if (totalSlides === 0) {
    return null;
  }

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
                alt={`Company Formation Case Study Slide ${index + 1}`}
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
                index === current ? "bg-orange-500 w-8" : "bg-neutral-600 hover:bg-neutral-500 w-3"
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
