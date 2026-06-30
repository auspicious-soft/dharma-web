import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import InnerPage from "@/assets/inner-page.jpg";
import TrainingImage from "@/assets/training-image.png";
import {
  ChartIcon,
  ClockIcon,
  DetailIcon,
  ExamsIcon,
  GreenTickIcon,
} from "@/utils/svgicons";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import { getCoursePagePath, getSubscriptionUrl } from "@/utils/links";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import { practiceExamFaqs } from "@/data/faqs";

const keyValues = [
  {
    icon: ExamsIcon,
    title: "Real Exam-Style Practice",
    description:
      "Practice with scenario-based questions designed to reflect certification exam expectations.",
  },
  {
    icon: ClockIcon,
    title: "Timed Exam Readiness",
    description:
      "Build confidence with structured practice that helps improve time management.",
  },
  {
    icon: DetailIcon,
    title: "Detailed Explanations",
    description:
      "Review clear answer explanations to understand the reasoning behind each response.",
  },
  {
    icon: ChartIcon,
    title: "Performance Insights",
    description:
      "Identify strengths, knowledge gaps, and areas that need focused revision.",
  },
];

const overviewPoints = [
  "Full-length mock exams and focused practice sets",
  "Questions aligned with current exam content outlines",
  "Detailed explanations for concept reinforcement",
  "Flexible practice for early preparation and final review",
  "Links to certification-specific practice exam resources",
];

const practiceExamLinks = [
  {
    title: "Explore PMP® Practice Exams",
    href: getCoursePagePath("PMP", "practice-exam"),
  },
  {
    title: "Explore PgMP® Practice Exams",
    href: getCoursePagePath("PgMP", "practice-exam"),
  },
  {
    title: "Explore PfMP® Practice Exams",
    href: getCoursePagePath("PfMP", "practice-exam"),
  },
  {
    title: "Explore PMOCP Practice Exams",
    href: getCoursePagePath("PMOCP", "practice-exam"),
  },
  {
    title: "Explore PMI-RMP® Practice Exams",
    href: getCoursePagePath("PMI-RMP", "practice-exam"),
  },
];

const PracticeExams = () => {
  return (
    <>
      <NavHeroSection
        title="Practice Exams for Confident Certification Readiness"
        description="Prepare smarter with exam-style practice tests designed to help you measure readiness, strengthen recall, and build confidence before exam day. These practice exams support focused preparation across key concepts, domains, scenarios, and exam-focused knowledge areas."
        descriptionsecond="Whether you are beginning your preparation or completing a final review, practice exams help you identify gaps, improve timing, and approach your certification exam with greater confidence."
        sideImage={InnerPage}
      />

      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="max-w-[820px] mx-auto text-center mb-7">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Key Value Bullets
            </h2>
            <p className="text-paragraph text-sm md:text-base leading-[28px] mt-2">
              Practice exams are built to turn preparation into measurable
              progress, helping you review smarter and focus where it matters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyValues.map((item) => (
              <div
                key={item.title}
                className="bg-light-blue rounded-[20px] p-5 text-center"
              >
                <div className="w-[60px] h-[60px] flex items-center justify-center m-auto bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
                  <item.icon />
                </div>
                <h3 className="text-primary_heading text-base md:text-lg font-bold mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-paragraph text-xs md:text-sm leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 lg:gap-10 items-center">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-3">
                Overview
              </h2>
              <p className="text-paragraph text-sm md:text-base leading-[28px] mb-5">
                Practice exams are designed to help candidates experience
                exam-style questions before test day. They support realistic
                preparation, reinforce critical knowledge, and help learners
                understand how well they are applying concepts across exam
                domains.
              </p>
              <div className="space-y-3">
                {overviewPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 text-paragraph text-sm"
                  >
                    <span>
                      <GreenTickIcon />
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={TrainingImage}
                alt="Practice exam preparation"
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="max-w-[820px] mx-auto text-center mb-7">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Explore Practice Exams by Certification
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {practiceExamLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="min-h-28 p-5 bg-light-blue rounded-[20px] flex items-center justify-center text-center text-primary_heading text-base font-bold hover:shadow-md transition"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={practiceExamFaqs} hideButton />

      <TopFooterSection
        content={{
          title: <>Practice Exams That Build Certification Confidence</>,
          description:
            "Use focused practice, detailed review, and exam-style testing to prepare with clarity and confidence.",
          points: [
            "Practice real exam-style questions",
            "Review explanations and improve weak areas",
            "Track readiness before exam day",
            "Choose the practice exam for your certification",
          ],
          buttonText: "Start Practicing",
          buttonLink: getSubscriptionUrl("PMP"),
        }}
      />
    </>
  );
};

export default PracticeExams;
