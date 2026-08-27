import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads & Google Ads Management Dubai UAE | LenaBara Media",
  description:
    "Performance marketing agency in Dubai. We run Meta Ads and Google Ads for UAE businesses, build lead generation systems, and optimise conversion tracking, GA4, and WhatsApp funnels. Book a free audit.",
  keywords: [
    "Meta Ads Dubai",
    "Google Ads UAE",
    "lead generation Dubai",
    "performance marketing UAE",
    "Facebook Ads agency Dubai",
    "paid ads management UAE",
    "conversion tracking UAE",
    "GA4 setup Dubai",
    "WhatsApp marketing UAE",
    "digital marketing agency Dubai",
    "LenaBara Media",
    "Lena Bara",
  ],
  authors: [{ name: "Lena Bara" }],
  creator: "LenaBara Media",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.lenabara.com/growth" },
  openGraph: {
    type: "website",
    url: "https://www.lenabara.com/growth",
    title: "Meta Ads & Google Ads Management Dubai UAE | LenaBara Media",
    description:
      "Performance marketing agency in Dubai. We run Meta Ads and Google Ads for UAE businesses, build lead generation systems, and optimise conversion tracking, GA4, and WhatsApp funnels. Book a free audit.",
    siteName: "LenaBara Media",
    images: [
      {
        url: "https://www.lenabara.com/hero/og-growth.jpg",
        width: 1200,
        height: 630,
        alt: "LenaBara Media — Performance Marketing UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads & Google Ads Management Dubai UAE | LenaBara Media",
    description:
      "Performance marketing agency in Dubai. We run Meta Ads and Google Ads for UAE businesses, build lead generation systems, and optimise conversion tracking, GA4, and WhatsApp funnels. Book a free audit.",
    images: ["https://www.lenabara.com/hero/og-growth.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.lenabara.com/growth#business",
      name: "LenaBara Media",
      url: "https://www.lenabara.com/growth",
      logo: "https://www.lenabara.com/hero/lb-editorial-logo.svg",
      image: "https://www.lenabara.com/hero/og-growth.jpg",
      description:
        "Performance marketing agency specialising in Meta Ads, Google Ads, and lead generation for UAE businesses.",
      telephone: "+971563256848",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AE",
        addressRegion: "Dubai",
      },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "City", name: "Abu Dhabi" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      knowsAbout: [
        "Meta Ads",
        "Google Ads",
        "Lead Generation",
        "Conversion Tracking",
        "GA4",
        "WhatsApp Marketing",
        "Performance Marketing",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Performance Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Pilot Launch",
            description:
              "First paid ads campaign setup on Meta or Google with pixel/GA4 tracking. 2–3 weeks.",
            price: "2500",
            priceCurrency: "AED",
          },
          {
            "@type": "Offer",
            name: "Growth System",
            description:
              "Ongoing Meta and Google Ads management with weekly optimisation and monthly reports.",
            price: "5000",
            priceCurrency: "AED",
          },
          {
            "@type": "Offer",
            name: "Performance Partner",
            description:
              "Full-funnel campaign strategy, Meta + Google management, advanced analytics.",
            price: "9000",
            priceCurrency: "AED",
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.lenabara.com/growth#founder",
      name: "Lena Bara",
      jobTitle: "Performance Marketing Specialist",
      worksFor: { "@id": "https://www.lenabara.com/growth#business" },
      knowsAbout: [
        "Meta Ads",
        "Google Ads",
        "GA4",
        "Marketing Analytics",
        "Lead Generation",
        "UAE Market",
      ],
      hasCredential: [
        "Meta Certified Media Buying Professional",
        "Google Ads Certified",
        "Google Analytics Certified",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the minimum ad spend for Meta or Google Ads in UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We recommend a minimum of AED 3,000–5,000/month in ad spend to generate meaningful data and leads in the UAE market.",
          },
        },
        {
          "@type": "Question",
          name: "How long before I see results from paid ads in Dubai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most campaigns show initial results within 2–3 weeks. The learning phase for Meta Ads typically takes 1–2 weeks. We track results from day one with proper conversion tracking.",
          },
        },
        {
          "@type": "Question",
          name: "Do you set up conversion tracking and GA4?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every campaign includes Meta Pixel, GA4, and Google Ads conversion tracking setup so you can measure every lead, call, and WhatsApp message.",
          },
        },
        {
          "@type": "Question",
          name: "Which industries do you work with in UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with real estate, gyms, beauty and wellness, e-commerce, healthcare, education, and hospitality businesses across Dubai and the UAE.",
          },
        },
      ],
    },
  ],
};

export default function GrowthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
