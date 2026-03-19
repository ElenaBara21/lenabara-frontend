import CaseStudyGym from "../components/CaseStudyGym";

const caseStudies = [
  {
    id: "case-gym",
    title: "Case Study: Gym Marketing Campaign",
    type: "images",
    componentName: "CaseStudyGym",
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
      </div>
    </main>
  );
}
