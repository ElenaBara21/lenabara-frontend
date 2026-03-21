import CaseStudyGym from "../components/CaseStudyGym";
import CaseStudyBeautyAesthetics from "../components/CaseStudyBeautyAesthetics";
import CaseStudyRealEstate from "../components/CaseStudyRealEstate";

const beautyAestheticsSlides = [
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
];

const realEstateSlides = [
  "/case-studies/real-estate/1.png",
  "/case-studies/real-estate/2.png",
  "/case-studies/real-estate/3.png",
  "/case-studies/real-estate/4.png",
  "/case-studies/real-estate/5.png",
  "/case-studies/real-estate/6.png",
  "/case-studies/real-estate/7.png",
  "/case-studies/real-estate/8.png",
  "/case-studies/real-estate/9.png",
  "/case-studies/real-estate/10.png",
  "/case-studies/real-estate/11.png",
  "/case-studies/real-estate/12.png",
  "/case-studies/real-estate/13.png",
  "/case-studies/real-estate/14.png",
  "/case-studies/real-estate/15.png",
];

const caseStudies = [
  {
    id: "case-gym",
    title: "Case Study: Gym Marketing Campaign",
    type: "images",
    componentName: "CaseStudyGym",
  },
  {
    id: "case-beauty-aesthetics",
    title: "Case Study: Beauty Aesthetics Clinic",
    type: "images",
    componentName: "CaseStudyBeautyAesthetics",
  },
  {
    id: "case-real-estate",
    title: "Case Study: Real Estate",
    type: "images",
    componentName: "CaseStudyRealEstate",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Case Studies</h1>
          <p className="text-neutral-300 text-lg">Explore real-world examples of how we've helped brands grow through data-driven advertising and strategic media buying.</p>
        </div>

        {/* Case Study: Gym Marketing Campaign (Images) */}
        <CaseStudyGym title={caseStudies[0].title} />

        {/* Case Study: Beauty Aesthetics Clinic (Images) */}
        <div className="mt-20">
          <CaseStudyBeautyAesthetics
            title={caseStudies[1].title}
            images={beautyAestheticsSlides}
          />
        </div>

        {/* Case Study: Real Estate (Images) */}
        <div className="mt-20">
          <CaseStudyRealEstate
            title={caseStudies[2].title}
            images={realEstateSlides}
          />
        </div>
      </div>
    </main>
  );
}
