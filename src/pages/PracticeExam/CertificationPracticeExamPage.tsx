import InnerPage from "@/assets/inner-page.jpg";
import TrainingImage from "@/assets/training-image.png";
import InnerImage from "@/assets/inner-page.jpg";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import AuthorizedTrainingPartner from "@/components/ReusableComponents/AuthorizedTrainingPartnerSection/AuthorizedTrainingPartner";
import ContentTabs from "@/components/NavPages/ContentTabs";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import type { CourseKey } from "@/components/ReusableComponents/PlanSection/plans";
import {
  ChartIcon,
  ClockIcon,
  ComIcon,
  DetailIcon,
  ExamsIcon,
  HatIcon,
  ImproveIcon,
  LineCahrtIcon,
  PhoneIcon,
  SimulatorsIcon,
} from "@/utils/svgicons";
import {
  CALENDLY_CONSULTATION_URL,
  getCoursePagePath,
  getMockExamUrl,
  getSubscriptionUrl,
  SHOPIFY_EXAM_VOUCHER_URL,
  SHOPIFY_TRAINING_LINKS,
} from "@/utils/links";

type RelatedResource = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  href: string;
};

type CertificationPracticeExamPageProps = {
  courseKey: CourseKey;
  examName: string;
  heroTitle: string;
  resourceLabel: string;
  relatedResources: RelatedResource[];
};

const practiceExamContent: Record<
  CourseKey,
  {
    headline: string;
    description: string;
    buttonText: string;
  }
> = {
  PMP: {
    headline: "Practice with Confidence. Pass with Success.",
    description:
      "Prepare with realistic exam-style questions, detailed explanations, and full-length practice exams designed to help you confidently achieve your PMP® certification.",
    buttonText: "Start PMP Preparation Today",
  },
  PgMP: {
    headline: "Practice with Confidence. Pass with Success.",
    description:
      "Challenge yourself with realistic exam-style questions, detailed explanations, and comprehensive practice exams designed to help you confidently achieve your PgMP® certification.",
    buttonText: "Start PgMP Prepation Today",
  },
  PfMP: {
    headline: "Practice with Confidence. Pass with Success.",
    description:
      "Validate your portfolio management knowledge with realistic practice exams, detailed explanations, and exam-style questions designed to help you confidently achieve your PfMP® certification.",
    buttonText: "Start PfMP Prepation Today",
  },
  PMOCP: {
    headline: "Practice with Confidence. Pass with Success.",
    description:
      "Strengthen your PMO knowledge through realistic practice exams, detailed explanations, and exam-style questions designed to help you confidently achieve your PMI-PMOCP™ certification.",
    buttonText: "Start PMOCP Prepation Today",
  },
  "PMI-RMP": {
    headline: "Practice with Confidence. Pass with Success.",
    description:
      "Develop your risk management expertise with realistic practice exams, detailed explanations, and exam-style questions designed to help you confidently achieve your PMI-RMP® certification.",
    buttonText: "Start RMP Prepation Today",
  },
};

const buildRelatedResources = (
  resources: RelatedResource[],
) =>
  resources.map((resource) => ({
    ...resource,
    image: InnerImage,
  }));

export const pmpRelatedResources: RelatedResource[] = [
  {
    id: 1,
    title: "PMP® Exam Prep Training",
    description:
      "Join expert-led online or in-person classes designed to build knowledge, confidence, and exam readiness.",
    buttonText: "Find A Class",
    href: SHOPIFY_TRAINING_LINKS.PMP,
  },
  {
    id: 2,
    title: "PMP® Exam Simulator",
    description:
      "Test your readiness with realistic mock exams, timed practice, and detailed answer explanations.",
    buttonText: "Learn More",
    href: getMockExamUrl("PMP"),
  },
  {
    id: 3,
    title: "PMP® Application Support",
    description:
      "Get expert help to complete your application correctly and avoid delays or rework.",
    buttonText: "Learn More",
    href: getCoursePagePath("PMP", "application-support"),
  },
  {
    id: 4,
    title: "PMP® On-Demand Course",
    description:
      "Study anytime and anywhere with guided lessons, structured modules, and flexible self-paced learning.",
    buttonText: "Learn More",
    href: getSubscriptionUrl("PMP"),
  },
  {
    id: 5,
    title: "Free PMP® Consultation",
    description:
      "Speak with an expert to discuss eligibility, study plans, and the best pathway to success.",
    buttonText: "Learn More",
    href: CALENDLY_CONSULTATION_URL,
  },
  {
    id: 6,
    title: "PMP® Online Exam Prep Course",
    description:
      "Prepare for the PMP® exam with our all-in-one Exam Prep bundle with access to Online Course, Practice Exams and tools that build confidence",
    buttonText: "Learn More",
    href: getSubscriptionUrl("PMP"),
  },
  {
    id: 7,
    title: "PMP® Exam Voucher Bundle",
    description: "Get Official PMI® Exam Vouchers and Save on Your Exam Fees",
    buttonText: "Learn More",
    href: SHOPIFY_EXAM_VOUCHER_URL,
  },
];

export const pgmpRelatedResources: RelatedResource[] = [
  {
    id: 1,
    title: "PgMP® Exam Prep Training",
    description:
      "Join expert-led online or in-person classes designed to build knowledge, confidence, and exam readiness.",
    buttonText: "Find A Class",
    href: SHOPIFY_TRAINING_LINKS.PgMP,
  },
  {
    id: 2,
    title: "PgMP® Exam Simulator",
    description:
      "Test your readiness with realistic mock exams, scenario-based practice, and detailed answer explanations.",
    buttonText: "Learn More",
    href: getMockExamUrl("PgMP"),
  },
  {
    id: 3,
    title: "PgMP® Online Exam Prep Course",
    description:
      "Prepare for the PgMP® exam with our all-in-one Exam Prep bundle with access to Online Course, Practice Exams and tools that build confidence",
    buttonText: "Learn More",
    href: getSubscriptionUrl("PgMP"),
  },
  {
    id: 4,
    title: "Free PgMP® Consultation",
    description:
      "Speak with an expert to discuss eligibility, application strategy, study plans, and the best pathway to success.",
    buttonText: "Talk to Advisor",
    href: CALENDLY_CONSULTATION_URL,
  },
  {
    id: 5,
    title: "PgMP® On-Demand Course",
    description:
      "Study anytime with guided lessons, structured modules, and flexible self-paced learning aligned to the PgMP® exam.",
    buttonText: "Learn More",
    href: getSubscriptionUrl("PgMP"),
  },
  {
    id: 6,
    title: "PgMP® Application Support",
    description:
      "Get expert help to complete your PgMP® application correctly, including audit guidance and full Panel Review support.",
    buttonText: "Learn More",
    href: getCoursePagePath("PgMP", "application-support"),
  },
  {
    id: 7,
    title: "PgMP® Exam Voucher",
    description: "Get Official PgMP® Exam Vouchers and Save on Your Exam Fees",
    buttonText: "Buy Now",
    href: SHOPIFY_EXAM_VOUCHER_URL,
  },
];

export const pfmpRelatedResources: RelatedResource[] = [
  {
    id: 1,
    title: "PfMP® Exam Prep Training",
    description:
      "Join expert-led online or in-person classes designed to build knowledge, confidence, and exam readiness.",
    buttonText: "Find A Class",
    href: SHOPIFY_TRAINING_LINKS.PfMP,
  },
  {
    id: 2,
    title: "PfMP® Exam Simulator",
    description:
      "Test your readiness with realistic mock exams, scenario-based practice, and detailed answer explanations.",
    buttonText: "Learn More",
    href: getMockExamUrl("PfMP"),
  },
  {
    id: 3,
    title: "PfMP® Online Exam Prep Course",
    description:
      "Prepare for the PfMP® exam with our all-in-one Exam Prep bundle with access to Online Course, Practice Exams and tools that build confidence",
    buttonText: "Learn More",
    href: getSubscriptionUrl("PfMP"),
  },
  {
    id: 4,
    title: "Free PfMP® Consultation",
    description:
      "Speak with an expert to discuss eligibility, application strategy, study plans, and the best pathway to success.",
    buttonText: "Talk to Advisor",
    href: CALENDLY_CONSULTATION_URL,
  },
  {
    id: 5,
    title: "PfMP® Application Support",
    description:
      "Get expert help to complete your application correctly, including audit guidance and full Panel Review support.",
    buttonText: "Learn More",
    href: getCoursePagePath("PfMP", "application-support"),
  },
  {
    id: 6,
    title: "PfMP® On-Demand Course",
    description:
      "Study anytime with guided lessons, structured modules, and flexible self-paced learning aligned to the PfMP® exam.",
    buttonText: "Learn More",
    href: getSubscriptionUrl("PfMP"),
  },
  {
    id: 7,
    title: "PfMP® Exam Voucher",
    description: "Get Official PfMP® Exam Vouchers and Save on Your Exam Fees",
    buttonText: "Buy Now",
    href: SHOPIFY_EXAM_VOUCHER_URL,
  },
];

export const pmocpRelatedResources: RelatedResource[] = [
  {
    id: 1,
    title: "PMI-PMOCP® Exam Prep Training",
    description:
      "Join expert-led online or in-person classes designed to build PMO leadership knowledge, confidence, and certification readiness.",
    buttonText: "Find A Class",
    href: SHOPIFY_TRAINING_LINKS.PMOCP,
  },
  {
    id: 2,
    title: "PMI-PMOCP® Exam Simulator",
    description:
      "Test your knowledge, track your progress, and feel confident walking into the exam.",
    buttonText: "Learn More",
    href: getMockExamUrl("PMOCP"),
  },
  {
    id: 3,
    title: "PMI-PMOCP® Online Exam Prep Bundle",
    description:
      "Get everything you need to apply and prepare for exam day with our all-in-one bundle, including online course access, practice exams, and tools that build confidence.",
    buttonText: "Learn More",
    href: getSubscriptionUrl("PMOCP"),
  },
  {
    id: 4,
    title: "PMI-PMOCP® Application Support",
    description:
      "Get expert guidance to complete your PMI-PMOCP® application correctly, including audit support and eligibility assistance.",
    buttonText: "Learn More",
    href: getCoursePagePath("PMOCP", "application-support"),
  },
  {
    id: 5,
    title: "Free PMI-PMOCP® Consultation",
    description:
      "Speak with an expert to discuss eligibility, career goals, study plans, and the best pathway to success.",
    buttonText: "Talk to Advisor",
    href: CALENDLY_CONSULTATION_URL,
  },
  {
    id: 6,
    title: "PMI-PMOCP® On-Demand Course",
    description:
      "Study anytime with guided lessons, structured modules, and flexible self-paced learning aligned to the PMI-PMOCP® exam.",
    buttonText: "Learn More",
    href: getSubscriptionUrl("PMOCP"),
  },
  {
    id: 7,
    title: "PMI-PMOCP® Exam Voucher",
    description: "Get Official PMI-PMOCP® Exam Vouchers and Save on Your Exam Fees.",
    buttonText: "Buy Now",
    href: SHOPIFY_EXAM_VOUCHER_URL,
  },
];

export const pmiRmpRelatedResources: RelatedResource[] = [
  {
    id: 1,
    title: "PMI-RMP® Exam Prep Training",
    description:
      "Join expert-led online or in-person classes designed to build advanced risk management knowledge, confidence, and certification readiness.",
    buttonText: "Find A Class",
    href: SHOPIFY_TRAINING_LINKS["PMI-RMP"],
  },
  {
    id: 2,
    title: "PMI-RMP® Exam Simulator",
    description:
      "Test your knowledge, track your progress, and feel confident walking into the exam.",
    buttonText: "Learn More",
    href: getMockExamUrl("PMI-RMP"),
  },
  {
    id: 3,
    title: "PMI-RMP® Online Exam Prep Bundle",
    description:
      "Get everything you need to apply and prepare for exam day with our all-in-one bundle, including online course access, practice exams, and tools that build confidence.",
    buttonText: "Learn More",
    href: getSubscriptionUrl("PMI-RMP"),
  },
  {
    id: 4,
    title: "PMI-RMP® Application Support",
    description:
      "Get expert guidance to complete your PMI-RMP® application confidently, including audit support and eligibility assistance.",
    buttonText: "Learn More",
    href: getCoursePagePath("PMI-RMP", "application-support"),
  },
  {
    id: 5,
    title: "Free PMI-RMP® Consultation",
    description:
      "Speak with an expert to discuss eligibility, career goals, study plans, and the best pathway to success.",
    buttonText: "Talk to Advisor",
    href: CALENDLY_CONSULTATION_URL,
  },
  {
    id: 6,
    title: "PMI-RMP® On-Demand Course",
    description:
      "Study anytime with guided lessons, structured modules, and flexible self-paced learning designed to advance your risk management skills and prepare you for the PMI-RMP® exam.",
    buttonText: "Learn More",
    href: getSubscriptionUrl("PMI-RMP"),
  },
  {
    id: 7,
    title: "PMI-RMP® Exam Voucher",
    description: "Get Official PMI® Exam Vouchers and Save on Your Exam Fees.",
    buttonText: "Buy Now",
    href: SHOPIFY_EXAM_VOUCHER_URL,
  },
];

export default function CertificationPracticeExamPage({
  courseKey,
  examName,
  heroTitle,
  resourceLabel,
  relatedResources,
}: CertificationPracticeExamPageProps) {
  const pageContent = practiceExamContent[courseKey];
  const overview = {
    heading: "Overview",
    text: pageContent.description,
  };

  const access = {
    heading: "What You'll Access",
    cards: [
      {
        id: 1,
        icon: ComIcon,
        title: "Mini practice tests",
        description:
          "Practice targeted question sets to strengthen weak knowledge areas effectively.",
      },
      {
        id: 2,
        icon: ExamsIcon,
        title: `2,000+ ${resourceLabel}-style practice questions`,
        description:
          `Large question bank aligned with real ${resourceLabel} exam difficulty and structure.`,
      },
      {
        id: 3,
        icon: DetailIcon,
        title: "Detailed answer explanations",
        description:
          "Understand correct answers with clear logic, references, and concept explanations.",
      },
      {
        id: 4,
        icon: ChartIcon,
        title: "Smart performance analytics",
        description:
          "Track progress, accuracy, and improvement areas with detailed performance insights.",
      },
      {
        id: 5,
        icon: HatIcon,
        title: `Structured ${resourceLabel} study plan`,
        description:
          "Follow a guided study roadmap designed for busy working professionals.",
      },
    ],
  };

  const work = {
    heading: "How It Works",
    dis: "Boost your confidence and exam readiness - your success partner for PMI certifications.",
    cards: [
      {
        id: 1,
        icon: ClockIcon,
        title: "Enroll in a Plan",
        description: `Choose the ${resourceLabel} bundle that fits your goal`,
      },
      {
        id: 2,
        icon: LineCahrtIcon,
        title: "Follow the Study Plan",
        description: "Learn with guided practice and focused review",
      },
      {
        id: 3,
        icon: SimulatorsIcon,
        title: "Practice with Simulators",
        description: "Attempt real exam-style practice tests",
      },
      {
        id: 4,
        icon: ImproveIcon,
        title: "Analyze & Improve",
        description: "Review results and strengthen weak areas",
      },
      {
        id: 5,
        icon: PhoneIcon,
        title: `Clear the ${examName} Exam`,
        description: "Walk into the exam with confidence",
      },
    ],
  };

  return (
    <>
      <NavHeroSection
        title={heroTitle}
        description={pageContent.headline}
        descriptionsecond={pageContent.description}
        sideImage={InnerPage}
      />
      <AuthorizedTrainingPartner
        title={pageContent.headline}
        subtitle={pageContent.description}
        bullets={[
          {
            text: "Practice aligned with the latest exam standards",
          },
          { text: "Realistic exam-style questions" },
          { text: "100% online, flexible learning" },
          { text: "Detailed explanations and performance insights" },
          { text: "Instant access to practice materials" },
        ]}
        descriptionTop=""
        descriptionBottom=""
        image={TrainingImage}
      />

      <ContentTabs
        id={`${courseKey.toLowerCase().replace(/[^a-z0-9]/g, "")}-practice`}
        overview={overview}
        access={access}
        work={work}
        alsoLike={{
          heading: "You May Also Like",
          subheading: `Related ${resourceLabel} Learning Resources`,
          slides: buildRelatedResources(relatedResources),
        }}
      />
      <TopFooterSection
        content={{
          title: <>Practice Exams That Build Certification Confidence</>,
          description: pageContent.description,
          points: [
            "Practice real exam-style questions",
            "Review explanations and improve weak areas",
            "Track readiness before exam day",
            "Choose the practice exam for your certification",
          ],
          buttonText: pageContent.buttonText,
          buttonLink: getSubscriptionUrl(courseKey),
        }}
      />
    </>
  );
}
