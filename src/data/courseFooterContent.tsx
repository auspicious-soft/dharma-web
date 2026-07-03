import type { FooterContent } from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import { getSubscriptionUrl } from "@/utils/links";

export const pgmpLeadershipFooterContent: FooterContent = {
  title: (
    <>
      Unlock Better
      <br />
      Program Leadership Opportunities
    </>
  ),
  description:
    "The vCare PgMP® Exam Prep Course helps you build advanced program management expertise while preparing you to confidently achieve your PgMP® certification.",
  points: [
    "Lead strategic enterprise programs with confidence",
    "Deliver measurable business benefits",
    "Qualify for senior program leadership roles",
    "Build global credibility as a program management leader",
  ],
  buttonText: "Start PgMP Preparation Today",
  buttonLink: getSubscriptionUrl("PgMP"),
};

export const pfmpLeadershipFooterContent: FooterContent = {
  title: <>Advance Your Portfolio Leadership Career</>,
  description: (
    <>
      Global demand for senior leaders who can align strategy with execution
      continues to grow. Organizations need experienced professionals who can
      prioritize investments, balance competing demands, and ensure the right
      initiatives deliver measurable value.
      <br />
      <br />
      The PfMP® certification is designed for executives and senior
      practitioners managing portfolios of projects, programs, and operations
      aligned with organizational strategy. Strengthening your credentials today
      positions you for tomorrow's leadership opportunities.
    </>
  ),
  pointsIntro:
    "Build elite portfolio management capability while preparing for the PfMP® certification.",
  pointsHeading: "Earning your PfMP® sets you apart:",
  points: [
    "Stronger influence in executive decision-making",
    "Recognition as a senior portfolio leader",
    "Enhanced credibility in enterprise governance",
    "Greater opportunities to lead transformation portfolios",
    "Globally recognized strategic credibility",
  ],
  buttonText: "Start PfMP Preparation Today",
  buttonLink: getSubscriptionUrl("PfMP"),
};

export const pmocpLeadershipFooterContent: FooterContent = {
  title: <>Advance Your PMO Leadership Career</>,
  description: (
    <>
      Global demand for leaders who can build, optimize, and elevate Project
      Management Offices continues to grow. Organizations need experienced
      professionals who can establish governance frameworks, improve delivery
      capability, standardize practices, and ensure strategic initiatives
      generate measurable value.
      <br />
      <br />
      The PMI-PMOCP™ certification is designed for PMO leaders, transformation
      professionals, and senior practitioners responsible for creating or
      enhancing PMOs aligned with organizational strategy. Strengthening your
      credentials today positions you for tomorrow's leadership opportunities.
    </>
  ),
  pointsIntro:
    "Build elite PMO leadership capability while preparing for the PMI-PMOCP™ certification.",
  pointsHeading: "Earning your PMI-PMOCP™ helps you stand out:",
  points: [
    "Stronger influence in executive decision-making",
    "Recognition as a strategic PMO leader",
    "Enhanced credibility in governance and delivery oversight",
    "Greater opportunities to lead enterprise transformation initiatives",
    "Globally recognized professional credibility",
  ],
  buttonText: "Start PMOCP Preparation Today",
  buttonLink: getSubscriptionUrl("PMOCP"),
};

export const rmpRiskFooterContent: FooterContent = {
  title: <>Advance Your Risk Management Career</>,
  description: (
    <>
      Global demand for professionals who can identify risks, improve
      decision-making, and protect project outcomes continues to grow.
      Organizations need leaders who can build effective risk frameworks and
      strengthen delivery confidence.
      <br />
      <br />
      The PMI-RMP® certification is designed for project professionals and risk
      practitioners responsible for managing risks aligned with business
      objectives. Earning this credential helps you stand out and grow into
      higher-value opportunities.
    </>
  ),
  pointsIntro:
    "Build advanced risk management capability while preparing for the PMI-RMP® certification.",
  pointsHeading: "Achieving your PMI-RMP® strengthens your professional profile:",
  points: [
    "Stronger influence in risk-based decision-making",
    "Recognition as a trusted risk management professional",
    "Enhanced credibility in project governance and controls",
    "Greater opportunities to lead complex, high-risk initiatives",
    "Globally recognized professional credibility",
  ],
  buttonText: "Start RMP Preparation Today",
  buttonLink: getSubscriptionUrl("PMI-RMP"),
};
