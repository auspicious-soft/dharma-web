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
  text: "Prepare with realistic PMI-PMOCP™ practice tests designed to reflect the latest exam style and question patterns. Our domain-wise practice tests help build confidence through focused preparation aligned with current PMI-PMOCP™ exam expectations. Focus on each domain individually, strengthen your knowledge step by step, and enhance overall readiness for your for your certification exam.",
};
// Tab 2 What You’ll Access
const access = {
  heading: "What You’ll Access",
  cards: [
    {
      id: 1,
      icon: ExamsIcon,
      title: "Full-length PMI-PMOCP® mock exams",
      description:
        "Simulate real PMI-PMOCP exam conditions with timed, full-length practice tests.",
    },
    {
      id: 2,
      icon: ComIcon,
      title: "Mini practice tests by domain",
      description:
        "Practice individual PMI-PMOCP domains to strengthen weak knowledge areas effectively.",
    },
    {
      id: 3,
      icon: ExamsIcon,
      title: "2,000+ PMI-PMOCP-style practice questions",
      description:
        "Large question bank aligned with real PMI-PMOCP exam difficulty and structure.",
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
      title: "Structured PMI-PMOCP study plan",
      description:
        "Follow a guided study roadmap designed for busy working professionals.",
    },
    {
      id: 7,
      icon: MovieIcon,
      title: "Video lessons & concept breakdowns",
      description:
        "Learn complex PMI-PMOCP concepts through concise, instructor-led video lessons.",
    },
    {
      id: 8,
      icon: PhoneIcon,
      title: "Downloadable study resources",
      description:
        "Access printable notes and guides for offline PMI-PMOCP exam preparation.",
    },
    {
      id: 9,
      icon: FlashCardIcon,
      title: "Flashcards and revision tools",
      description:
        "Quickly revise key formulas, processes, and PMI-PMOCP terminology.",
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
      description: "Choose the PMI-PMOCP bundle that fits your goal",
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
      title: "Clear the PMI-PMOCP® Exam",
      description: "Walk into the exam with confidence",
    },
  ],
};
// Tab 4 You May Also Like
const slides = [
  {
    id: 1,
    image: InnerImage, // Replace with actual image
    title: "PMI-PMOCP® Full-Length Exam Simulator",
    description:
      "Experience real PMI-PMOCP exam conditions with timed, scenario-based full mock tests.",
  },
  {
    id: 2,
    image: InnerImage,
    title: "PMI-PMOCP® Practice Question Bank",
    description:
      "Strengthen your concepts with a large collection of PMI-PMOCP-aligned practice questions.",
  },
  {
    id: 3,
    image: InnerImage,
    title: "PMI-PMOCP® Exam Strategy Workshops",
    description:
      "Learn proven exam strategies, time management, and question-solving techniques from experts.",
  },
  {
    id: 4,
    image: InnerImage,
    title: "PMI-PMOCP® Exam Strategy Workshops",
    description:
      "Learn proven exam strategies, time management, and question-solving techniques from experts.",
  },
];

const PrepCourse = [
  "Meets PMI-PMOCP® training hour requirements for certification eligibility",
  "Fully aligned with the latest PMI® PMI-PMOCP Exam Content Outline (ECO)",
  "Real exam-style questions and full-length PMI-PMOCP mock tests",
  "Structured study plan designed for working professionals",
];
const courseCard = {
  heading: "Why Choose Our PMI-PMOCP® Exam Prep Course?",
  card: [
    {
      id: 1,
      title: "Beginner-friendly video lessons",
      description:
        "Easy-to-follow videos simplify complex PMI-PMOCP concepts for all experience levels.",
    },
    {
      id: 2,
      title: "PMI®-aligned PMI-PMOCP simulators",
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
      title: "Trusted by PMI-PMOCP aspirants worldwide",
      description:
        "Join thousands of professionals who rely on vCare for PMI-PMOCP exam success.",
    },
  ],
};

const PMOCPExamPrepCourse = () => {
  return (
    <>
      <NavHeroSection
        title="PMI-PMOCP™ Practice Exam"
        description="Our PMI-PMOCP™ Practice Exam is aligned with the latest PMI® PMOCP Exam Content Outline and the current PMOCP Practice Guide. Designed for certification success, it delivers focused domain-wise practice through realistic PMI-PMOCP™ scenario questions that strengthen knowledge using the PMO Value Ring® framework, while building confidence for exam day."
       descriptionsecond=""
        sideImage={InnerPage}
      />

      <AuthorizedTrainingPartner
        title="PMI-PMOCP® Exam Simulator"
        subtitle="The PMI-PMOCP™ Practice Exam helps professionals simulate real PMI-PMOCP™ exam conditions before test day. Work through high-quality PMI-PMOCP™-style questions, understand exam trends, and track your readiness with detailed performance feedback. Improve confidence, uncover weak areas, and enter the exam better prepared."
        bullets={[
          {
            text: "Step-by-Step Training Aligned with the Latest Exam Standards",
          },
          { text: "Expert Instructors with Real-World Project Experience" },
          { text: "100% Online, Flexible Learning" },
          { text: "PMI®-Approved PDUs" },
          { text: "Instant access to course materials" },
        ]}
        descriptionTop="Prepare with Confidence. Get PMI-PMOCP® Certified."
        descriptionBottom="Designed to help you prepare with confidence and pass the PMI-PMOCP® exam The PMI-PMOCP® certification isn't just another credential—it's the global gold standard for project management professionals seeking recognition, credibility, and career growth."
        image={TrainingImage}
      />

      <ContentTabs
        id="PMI-PMOCP"
        overview={overview}
        access={access}
        work={work}
        alsoLike={{
          heading: "You May Also Like",
          subheading: "Related PMI-PMOCP Learning Resources",
          slides: slides,
        }}
      />

      <PremiumPacks
        showCourseSelect={false}
        heading="Choose the PMI-PMOCP Exam Prep Plan That Fits You"
        description="Three flexible plans designed for different learning needs and timelines."
      />

      <section className="bg-white pb-10 lg:pt-0 lg:pb-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.38fr_1fr] gap-5 lg:gap-10 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                PMI-PMOCP Exam Prep Course – Enroll Today
              </h2>
              <p className="text-paragraph text-sm font-normal mt-1 max-w-[520px] w-full leading-[26px]">
                The vCare PMI-PMOCP Exam Prep Course helps you build real-world
                project management skills while preparing you to confidently
                clear the PMI-PMOCP® certification exam on your first attempt.
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
              Check out the <br /> PMI-PMOCP Exam Simulator in action.
            </>
          }
          description="Our exam simulator provides the most authentic training experience in the industry. When the time comes for the actual test, you'll feel more confident and ready because you'll know exactly what to expect. We have over 1,700+ questions and answers that reflect the real-life testing environment, so you can be sure that the prep material is reliable."
        />
      </div>

      <Faq limit={5} />

      <TopFooterSection />
    </>
  );
};

export default PMOCPExamPrepCourse;
