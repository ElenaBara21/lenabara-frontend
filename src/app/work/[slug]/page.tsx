import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "../components/CaseStudy";
import { cases, getCaseBySlug } from "../data/cases";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseBySlug(slug);

  if (!study) {
    return {
      title: "Work Not Found | LenaBara",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${study.title} | Work | LenaBara`,
    description: study.metaDescription,
    openGraph: {
      title: `${study.title} | Work | LenaBara`,
      description: study.metaDescription,
      url: `https://lenabara.com/work/${study.slug}`,
      siteName: "LenaBara",
      type: "article",
    },
    robots: { index: true, follow: true },
  };
}

export default async function WorkCasePage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <CaseStudy study={study} />
    </main>
  );
}
