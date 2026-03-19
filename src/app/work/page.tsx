import CaseStudyGym from "../components/CaseStudyGym";
import CaseStudyBeautyAesthetics from "../components/CaseStudyBeautyAesthetics";

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
      </div>
    </main>
  );
}
