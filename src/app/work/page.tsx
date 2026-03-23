import CaseStudyGym from "../components/CaseStudyGym";
import CaseStudyBeautyAesthetics from "../components/CaseStudyBeautyAesthetics";
import CaseStudyRealEstate from "../components/CaseStudyRealEstate";
import CaseStudyEscapeRoom from "../components/CaseStudyEscapeRoom";
import CaseStudyAccounting from "../components/CaseStudyAccounting";
import CaseStudyCompanyFormation from "../components/CaseStudyCompanyFormation";

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

const escapeRoomSlides = [
  "/case-studies/escape-room-analytics/1.png",
  "/case-studies/escape-room-analytics/2.png",
  "/case-studies/escape-room-analytics/3.png",
  "/case-studies/escape-room-analytics/4.png",
  "/case-studies/escape-room-analytics/5.png",
  "/case-studies/escape-room-analytics/6.png",
  "/case-studies/escape-room-analytics/7.png",
  "/case-studies/escape-room-analytics/8.png",
];

const accountingSlides = [
  "/case-studies/accounting/1.png",
  "/case-studies/accounting/2.png",
  "/case-studies/accounting/3.png",
  "/case-studies/accounting/4.png",
  "/case-studies/accounting/5.png",
  "/case-studies/accounting/6.png",
  "/case-studies/accounting/7.png",
  "/case-studies/accounting/8.png",
  "/case-studies/accounting/9.png",
  "/case-studies/accounting/10.png",
];

const companyFormationSlides = [
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
];

const caseStudies = [
  {
    id: "case-gym",
    title: "Gym Marketing Campaign",
    type: "images",
    componentName: "CaseStudyGym",
  },
  {
    id: "case-beauty-aesthetics",
    title: "Beauty Aesthetics Clinic",
    type: "images",
    componentName: "CaseStudyBeautyAesthetics",
  },
  {
    id: "case-real-estate",
    title: "Real Estate",
    type: "images",
    componentName: "CaseStudyRealEstate",
  },
  {
    id: "case-escape-room-analytics",
    title: "Analytics Infrastructure for a UAE Escape Room Business",
    type: "images",
    componentName: "CaseStudyEscapeRoom",
  },
  {
    id: "case-accounting",
    title: "UAE Accounting Firm",
    type: "images",
    componentName: "CaseStudyAccounting",
  },
  {
    id: "case-company-formation",
    title: "Company Formation Case Study",
    type: "images",
    componentName: "CaseStudyCompanyFormation",
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

        {/* Case Study 4: UAE Escape Room Analytics Infrastructure (Images) */}
        <div className="mt-20">
          <CaseStudyEscapeRoom
            title={caseStudies[3].title}
            images={escapeRoomSlides}
          />
        </div>

        {/* Case Study: UAE Accounting Firm (Images) */}
        <div className="mt-20">
          <CaseStudyAccounting
            title={caseStudies[4].title}
            images={accountingSlides}
          />
        </div>

        {/* Case Study: Company Formation (Images) */}
        <div className="mt-20">
          <CaseStudyCompanyFormation
            title={caseStudies[5].title}
            images={companyFormationSlides}
          />
        </div>
      </div>
    </main>
  );
}
