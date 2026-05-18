import React from "react";
import InnerPage from "@/assets/inner-page.jpg";
import TrainingImage from "@/assets/training-image.png";
import ContentTabs from "@/components/NavPages/ContentTabs";
import { PremiumPacks } from "@/components/ReusableComponents/PlanSection/PremiumPacks";
import InnerImage from "@/assets/inner-page.jpg";
import { Button } from "@/components/ui/button";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import VideoSection from "@/components/ReusableComponents/VideoSection/VideoSection";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import AuthorizedTrainingPartner from "@/components/ReusableComponents/AuthorizedTrainingPartnerSection/AuthorizedTrainingPartner";

import {
  ExamsIcon,
  ClockIcon,
  LineCahrtIcon,
  SimulatorsIcon,
  ImproveIcon,
  ComIcon,
  DetailIcon,
  ChartIcon,
  HatIcon,
  MovieIcon,
  PhoneIcon,
  FlashCardIcon,
} from "@/utils/svgicons";
// Tab 1 (Overview Content)
const overview = {
  heading: "Overview",
  text: "Build confidence with realistic PgMP® practice tests created to reflect the latest exam style and evolving question patterns. Our domain-wise practice tests support focused preparation aligned with current PgMP® exam expectations. Master each domain one at a time, strengthen your understanding step by step, and enhance overall performance for your certification exam.",
};
// Tab 2 What You’ll Access
const access = {
  heading: "What You’ll Access",
  cards: [
    {
      id: 1,
      icon: ExamsIcon,
      title: "Full-length PgMP® mock exams",
      description:
        "Simulate real PgMP exam conditions with timed, full-length practice tests.",
    },
    {
      id: 2,
      icon: ComIcon,
      title: "Mini practice tests by domain",
      description:
        "Practice individual PgMP domains to strengthen weak knowledge areas effectively.",
    },
    {
      id: 3,
      icon: ExamsIcon,
      title: "1800+ PgMP-style practice questions",
      description:
        "Large question bank aligned with real PgMP exam difficulty and structure.",
    },
    {
      id: 4,
      icon: DetailIcon,
      title: "Detailed answer explanations",
      description:
        "Understand correct answers with clear logic, references, and concept explanations.",
    },
    {
      id: 5,
      icon: ChartIcon,
      title: "Smart performance analytics",
      description:
        "Track progress, accuracy, and improvement areas with detailed performance insights.",
    },
    {
      id: 6,
      icon: HatIcon,
      title: "Structured PgMP study plan",
      description:
        "Follow a guided study roadmap designed for busy working professionals.",
    },
    {
      id: 7,
      icon: MovieIcon,
      title: "Video lessons & concept breakdowns",
      description:
        "Learn complex PgMP concepts through concise, instructor-led video lessons.",
    },
    {
      id: 8,
      icon: PhoneIcon,
      title: "Downloadable study resources",
      description:
        "Access printable notes and guides for offline PgMP exam preparation.",
    },
    {
      id: 9,
      icon: FlashCardIcon,
      title: "Flashcards and revision tools",
      description:
        "Quickly revise key formulas, processes, and PgMP terminology.",
    },
  ],
};
// Tab 3 How It Works
const work = {
  heading: "How It Works",
  dis: "Boost your confidence and exam readiness with vCare Exam Simulators—your success partner for PMI certifications.",
  cards: [
    {
      id: 1,
      icon: ClockIcon,
      title: "Enroll in a Plan",
      description: "Choose the PgMP bundle that fits your goal",
    },
    {
      id: 2,
      icon: LineCahrtIcon,
      title: "Follow the Study Plan",
      description: "Learn domain-wise with guided lessons",
    },
    {
      id: 3,
      icon: SimulatorsIcon,
      title: "Practice with Simulators",
      description: "Attempt real exam-style mock tests",
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
      title: "Clear the PgMP® Exam",
      description: "Walk into the exam with confidence",
    },
  ],
};
// Tab 4 You May Also Like
const slides = [
  {
    id: 1,
    image: InnerImage, // Replace with actual image
    title: "PgMP® Full-Length Exam Simulator",
    description:
      "Experience real PgMP exam conditions with timed, scenario-based full mock tests.",
  },
  {
    id: 2,
    image: InnerImage,
    title: "PgMP® Practice Question Bank",
    description:
      "Strengthen your concepts with a large collection of PgMP-aligned practice questions.",
  },
  {
    id: 3,
    image: InnerImage,
    title: "PgMP® Exam Prep Training",
    description:
      "Learn proven exam strategies, time management, and question-solving techniques from experts.",
    buttonText: "Book appointment",
  },
];

const PrepCourse = [
  "Meets PgMP® training hour requirements for certification eligibility",
  "Fully aligned with the latest PMI® PgMP Exam Content Outline (ECO)",
  "Real exam-style questions and full-length PgMP mock tests",
  "Structured study plan designed for working professionals",
];
const courseCard = {
  heading: "Why Choose Our PgMP® Exam Prep Course?",
  card: [
    {
      id: 1,
      title: "Beginner-friendly video lessons",
      description:
        "Easy-to-follow videos simplify complex PgMP concepts for all experience levels.",
    },
    {
      id: 2,
      title: "PMI®-aligned PgMP simulators",
      description:
        "Practice with simulators designed to match the latest PMI® exam format.",
    },
    {
      id: 3,
      title: "Real-world scenario-based questions",
      description:
        "Apply project management concepts through realistic, exam-style scenarios.",
    },
    {
      id: 4,
      title: "Detailed explanations & analytics",
      description:
        "Understand mistakes and track progress with clear insights and performance data.",
    },
    {
      id: 5,
      title: "Access anytime, anywhere",
      description:
        "Study seamlessly across devices with flexible, on-demand course access.",
    },
    {
      id: 6,
      title: "Trusted by PgMP aspirants worldwide",
      description:
        "Join thousands of professionals who rely on vCare for PgMP exam success.",
    },
  ],
};

const pgmpPracticeTestFaqs = [
  {
    question: "Are the Practice Tests aligned to the latest exam outline?",
    answer:
      "Yes. Our Practice Tests are designed to reflect the current exam content outline, domains, and question style for each certification.",
  },
  {
    question: "Do PMP® Practice Tests include agile and hybrid questions?",
    answer:
      "Yes. PMP® Practice Tests include predictive, agile, and hybrid scenarios aligned with current exam expectations.",
  },
  {
    question: "Does the PMI-RMP® Practice Tests focus on agile methods?",
    answer:
      "They cover agile principles, frameworks, tools, team collaboration, and adaptive delivery approaches.",
  },
  {
    question: "Does the PMI-RMP® Practice Tests include risk scenarios?",
    answer:
      "Yes. They focus on risk identification, analysis, response planning, monitoring, and real-world risk scenarios.",
  },
  {
    question: "Does the PgMP® Practice Tests cover strategic topics?",
    answer:
      "Yes. They include governance, benefits management, stakeholder alignment, portfolio strategy, and leadership-focused questions.",
  },
  {
    question: "Does the PfMP® Practice Tests cover strategic topics?",
    answer:
      "Yes. They include governance, benefits management, stakeholder alignment, portfolio strategy, and leadership-focused questions.",
  },
  {
    question: "Does the PMOCP™ Practice Tests reflect PMO concepts?",
    answer:
      "Yes. They cover PMO design, governance, value delivery, performance, and organisational alignment topics.",
  },
  {
    question: "Can I choose tests based on weak areas?",
    answer:
      "Yes. You can focus on specific domains or topics to improve weaker areas first.",
  },
];

const PgMPExamPrepCourse = () => {
  return (
    <>
      <NavHeroSection
        title="Program Management Professional (PgMP®) Practice Exam"
        description="Our PgMP® Practice Exam is aligned with the latest PMI® PgMP Exam Content Outline and key principles from The Standard for Program Management – 5th Edition. Designed for certification success, it delivers focused domain-wise practice through realistic PgMP®-style questions that strengthen knowledge, reinforce strategy alignment, benefits management, stakeholder engagement, governance, and lifecycle management, while building confidence for advanced situational questions on exam day."
        descriptionsecond=""
        sideImage={InnerPage}
      />

      <AuthorizedTrainingPartner
        title="PgMP® Exam Simulator"
        subtitle="The PgMP® Practice Exam is built to help professionals prepare for real PgMP® exam conditions before exam day. Practice with high-quality PgMP®-style scenario questions, become familiar with exam patterns, and measure your readiness through detailed performance insights. Build confidence, identify knowledge gaps, and approach the exam fully prepared."
        bullets={[
          {
            text: "Step-by-Step Training Aligned with the Latest Exam Standards",
          },
          { text: "Expert Instructors with Real-World Project Experience" },
          { text: "100% Online, Flexible Learning" },
          { text: "PMI®-Approved PDUs" },
          { text: "Instant access to course materials" },
        ]}
        descriptionTop="Prepare with Confidence. Get PgMP® Certified."
        descriptionBottom="Designed to help you prepare with confidence and pass the PgMP® exam The PgMP® certification isn't just another credential—it's the global gold standard for project management professionals seeking recognition, credibility, and career growth."
        image={TrainingImage}
      />

      <ContentTabs
        id="PgMP"
        overview={overview}
        access={access}
        work={work}
        alsoLike={{
          heading: "You May Also Like",
          subheading: "Related PgMP Learning Resources",
          slides: slides,
        }}
      />

      <PremiumPacks
        showCourseSelect={false}
        courseKey="PgMP"
        heading="Choose the PgMP Exam Prep Plan That Fits You"
        description="Three flexible plans designed for different learning needs and timelines."
      />

      <section className="bg-white pb-10 lg:pt-0 lg:pb-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.38fr_1fr] gap-5 lg:gap-10 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                PgMP Exam Prep Course – Enroll Today
              </h2>
              <p className="text-paragraph text-sm font-normal mt-1 max-w-[520px] w-full leading-[26px]">
                The vCare PgMP Exam Prep Course helps you build real-world
                project management skills while preparing you to confidently
                clear the PgMP® certification exam on your first attempt.
              </p>
              <h4 className="text-Black_light  text-xl font-bold mt-5 mb-4">
                Key Value Bullets
              </h4>
              <ul className="space-y-1  self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1 mb-5">
                {PrepCourse.map((text, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 self-stretch justify-start"
                  >
                    <span className="text-[8px]">•</span> <span>{text}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="max-w-[280px] w-full">
                Learn More
              </Button>
            </div>
            <div>
              {" "}
              <img
                src={InnerImage}
                alt="InnerImage"
                className="w-full aspect-[1/0.72] object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-10 lg:pt-5 lg:pb-16">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="text-left">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-5">
              {courseCard.heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
              {courseCard.card.map((card) => (
                <div
                  key={card.id}
                  className="p-5 bg-light-blue rounded-[20px] text-left transition"
                >
                  <div className="w-[60px] h-[60px] text-xl font-bold text-primary_heading flex items-center justify-center relative bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
                    {String(card.id).padStart(2, "0")}
                  </div>
                  <h4 className="text-primary_heading text-base md:text-xl font-bold mb-2 mt-4">
                    {card.title}
                  </h4>
                  <p className="text-paragraph text-xs font-normal leading-6">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials id="two" />

      <ScreenshortsSlider id="four" />

      <div className="bg-light-blue">
        <VideoSection
          videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
          title={
            <>
              Check out the <br /> PgMP Exam Simulator in action.
            </>
          }
          description="Our exam simulator provides the most authentic training experience in the industry. When the time comes for the actual test, you'll feel more confident and ready because you'll know exactly what to expect. We have over 1,700+ questions and answers that reflect the real-life testing environment, so you can be sure that the prep material is reliable."
        />
      </div>

      <Faq faqs={pgmpPracticeTestFaqs} />

      {/* <TopFooterSection /> */}
    </>
  );
};

export default PgMPExamPrepCourse;
