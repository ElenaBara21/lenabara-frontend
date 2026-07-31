export type Metric = {
  label: string;
  value: string;
  note?: string;
};

export type Section = {
  heading: string;
  body?: string;
  items?: string[];
};

export type FunnelStage = {
  n: number;
  name: string;
  body: string;
};

export type ProofScreenshot = {
  title: string;
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  type: "real" | "concept";
  title: string;
  premise: string;
  disclaimer?: string;
  metaDescription: string;
  proofScreenshots?: ProofScreenshot[];
  sections: {
    context: Section;
    whatsBroken: Section;
    funnel: {
      intro: string;
      stages: FunnelStage[];
      philosophy: string;
    };
    execution: Section;
    projected: {
      intro: string;
      metrics: Metric[];
      basis: string;
    };
    impact: {
      intro: string;
      metrics: Metric[];
      note: string;
    };
    method: Section;
  };
};
