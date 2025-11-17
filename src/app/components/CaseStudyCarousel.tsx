"use client";
import { useState } from "react";

type Page = {
  id: string;
  title: string;
  content: string;
};

type CaseStudy = {
  id: string;
  title: string;
  pages: Page[];
  pdfUrl?: string;
};

type CaseStudyCarouselProps = {
  caseStudies: CaseStudy[];
};

export default function CaseStudyCarousel({ caseStudies }: CaseStudyCarouselProps) {
  const [currentCaseStudyIndex, setCurrentCaseStudyIndex] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  if (caseStudies.length === 0) {
    return <div className="text-center text-neutral-400">No case studies available yet.</div>;
  }

  const currentCaseStudy = caseStudies[currentCaseStudyIndex];
  const currentPage = currentCaseStudy.pages[currentPageIndex];
  const totalPages = currentCaseStudy.pages.length;

  // Navigate pages within the current case study
  const goToPreviousPage = () => {
    setCurrentPageIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPageIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPage = (index: number) => {
    setCurrentPageIndex(index);
  };

  // Navigate case studies
  const goToPreviousCaseStudy = () => {
    setCurrentCaseStudyIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
    setCurrentPageIndex(0);
  };

  const goToNextCaseStudy = () => {
    setCurrentCaseStudyIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
    setCurrentPageIndex(0);
  };

  return (
    <div className="w-full">
      {/* Case Study Title */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">{currentCaseStudy.title}</h2>
      </div>

      {/* Page Carousel (Horizontal Slider) */}
      <div className="relative bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden mb-8">
        {/* If PDF is available, show PDF viewer; otherwise show text pages */}
        {currentCaseStudy.pdfUrl ? (
          // PDF Viewer
          <div className="w-full h-[500px] md:h-[600px] overflow-y-hidden">
            <iframe
              src={`${currentCaseStudy.pdfUrl}#toolbar=0`}
              className="w-full h-full"
              title={currentCaseStudy.title}
            />
          </div>
        ) : (
          // Text Pages Carousel (Horizontal Slider)
          <div
            className="flex transition-transform duration-500 ease-in-out overflow-y-hidden"
            style={{ transform: `translateX(-${currentPageIndex * 100}%)` }}
          >
            {currentCaseStudy.pages.map((page) => (
              <div
                key={page.id}
                className="w-full flex-shrink-0 h-[500px] md:h-[600px] overflow-y-hidden"
              >
                <div className="p-8 md:p-12 h-full flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-orange-500 mb-6">
                    {page.title}
                  </h3>
                  <div className="text-neutral-200 text-base md:text-lg leading-relaxed overflow-y-auto flex-1">
                    {page.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Left Arrow Button - Only show if no PDF or if you want arrows for PDF too */}
        {!currentCaseStudy.pdfUrl && (
          <button
            onClick={goToPreviousPage}
            aria-label="Previous page"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition z-10 shadow-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Right Arrow Button - Only show if no PDF or if you want arrows for PDF too */}
        {!currentCaseStudy.pdfUrl && (
          <button
            onClick={goToNextPage}
            aria-label="Next page"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition z-10 shadow-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      {/* Page Indicators (Dots) and Counter - Only show if no PDF */}
      {!currentCaseStudy.pdfUrl && (
        <div className="flex flex-col items-center gap-4 mb-12">
          {/* Page Indicator Dots */}
          <div className="flex gap-2">
            {currentCaseStudy.pages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                aria-label={`Go to page ${index + 1}`}
                className={`h-3 rounded-full transition ${
                  index === currentPageIndex
                    ? "bg-orange-500 w-8"
                    : "bg-neutral-600 hover:bg-neutral-500 w-3"
                }`}
              />
            ))}
          </div>

          {/* Page Counter */}
          <div className="text-sm text-neutral-400">
            Page {currentPageIndex + 1} / {totalPages}
          </div>
        </div>
      )}

      {/* Case Study Navigation (Switch between case studies) */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={goToPreviousCaseStudy}
          aria-label="Previous case study"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition font-medium"
        >
          ← Previous Case Study
        </button>

        {/* Case Study Indicators */}
        <div className="flex gap-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentCaseStudyIndex(index);
                setCurrentPageIndex(0);
              }}
              aria-label={`Go to case study ${index + 1}`}
              className={`h-2 rounded-full transition ${
                index === currentCaseStudyIndex
                  ? "bg-orange-500 w-6"
                  : "bg-neutral-600 hover:bg-neutral-500 w-2"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNextCaseStudy}
          aria-label="Next case study"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition font-medium"
        >
          Next Case Study →
        </button>
      </div>

      {/* Case Study Counter */}
      <div className="text-center mt-4 text-sm text-neutral-400">
        Case Study {currentCaseStudyIndex + 1} / {caseStudies.length}
      </div>
    </div>
  );
}
