import CaseStudyGym from "../components/CaseStudyGym";
import CaseStudyBeautyAesthetics from "../components/CaseStudyBeautyAesthetics";
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
    title: "How We Generated 40–60 New Gym Members in 60 Days Using a Meta Ads Funnel (2.0–2.5x ROI)",
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Case Studies & Strategy Work</h1>
          <p className="mx-auto max-w-3xl text-neutral-300 text-lg">
            A selection of funnel architectures, media strategies and analytics setups built for UAE service businesses.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-neutral-400">
            Each case walks through the full thinking: audience segmentation, offer positioning, funnel design, channel mix and measurement setup. Projected figures are based on UAE market benchmarks and unit-economics modelling, and are labelled as such.
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-xs uppercase tracking-[0.18em] text-orange-300/80">
            Cases marked Strategy Concept are strategy and funnel frameworks developed in-house. Cases marked Live Project were executed with active client accounts.
          </p>
        </div>

        <div className="mt-16">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.18em] text-orange-300/80">Strategy Concept</p>
          </div>
          <CaseStudyGym title={caseStudies[0].title} />
        </div>

        <div className="mt-20">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.18em] text-orange-300/80">Strategy Concept</p>
          </div>
          <CaseStudyBeautyAesthetics
            title={caseStudies[1].title}
            images={beautyAestheticsSlides}
          />
        </div>

        <div className="mt-20">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.18em] text-orange-300/80">Live Project</p>
          </div>
          <CaseStudyEscapeRoom
            title={caseStudies[2].title}
            images={escapeRoomSlides}
          />
        </div>

        <div className="mt-20">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.18em] text-orange-300/80">Strategy Concept</p>
          </div>
          <CaseStudyAccounting
            title={caseStudies[3].title}
            images={accountingSlides}
          />
        </div>

        <div className="mt-20">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.18em] text-orange-300/80">Strategy Concept</p>
          </div>
          <CaseStudyCompanyFormation
            title={caseStudies[4].title}
            images={companyFormationSlides}
          />
        </div>

        <section className="mt-24 border-t border-neutral-800 pt-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Data & Analytics</h2>
            <p className="text-neutral-300">
              Alongside campaign work, I build the measurement layer that makes performance marketing accountable — tracking setup, dashboards, and statistical analysis.
            </p>
            <p className="mt-4 text-neutral-300">
              Seven end-to-end data projects completed during the Post Graduate Program in Data Science &amp; Business Analytics (UT Austin McCombs / Great Learning), each framed around a business decision:
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-neutral-300">
              <li><strong>A/B testing a landing page</strong> — hypothesis testing, two-proportion and chi-square tests to determine whether a redesign genuinely improved conversion</li>
              <li><strong>Predicting booking cancellations</strong> — logistic regression and decision trees, 86.6% accuracy, 0.84 recall</li>
              <li><strong>Customer segmentation</strong> — K-means and hierarchical clustering for portfolio grouping</li>
              <li><strong>Pricing models</strong> — OLS regression with full assumption testing, R² 0.845</li>
              <li><strong>Churn / failure prediction</strong> — imbalanced-data handling with SMOTE, 0.88 recall</li>
            </ul>
            <p className="mt-6 text-neutral-300">Stack: Python · pandas · scikit-learn · statsmodels · scipy</p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-neutral-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href="https://github.com/ElenaBara21/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-orange-200"
              >
                View the code: github.com/ElenaBara21/Portfolio
              </a>
              <a
                href="https://mygreatlearning.com/certificate/ZPQUJUFK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-orange-200"
              >
                Academic transcript (GPA 4.05): mygreatlearning.com/certificate/ZPQUJUFK
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
