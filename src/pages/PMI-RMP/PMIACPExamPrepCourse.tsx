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
  CircleArrowIcon,
  ClockIcon,
  LineCahrtIcon,
  SimulatorsIcon,
  ImproveIcon,
  ComIcon,
  DetailIcon,
  ChartIcon,
  MovieIcon,
  PhoneIcon,
  FlashCardIcon,
} from "@/utils/svgicons";

const overview = {
  heading: "Overview",
  text: "The PMI-RMP® Exam Prep Course is a comprehensive, self-paced program designed to help professionals confidently pass the PMI-RMP® certification exam. Built in alignment with the latest PMI® Exam Content Outline, the course combines structured learning and guided lessons to ensure complete readiness. With flexible, 100% online access and expert-curated content, the course supports busy professionals in mastering risk management concepts, strengthening exam strategies, and achieving certification success on their first attempt.and satisfy the 35 training hours required to apply.",
};

const access = {
  heading: "What You’ll Access",
  cards: [
    {
      id: 1,
      icon: MovieIcon,
      title: "Video lessons & concept breakdowns",
      description:
        "Learn complex PMI-RMP concepts through clear, instructor-led videos and practical concept walkthroughs.",
    },
    {
      id: 2,
      icon: ComIcon,
      title: "Mini practice tests by domain",
      description:
        "Practice individual PMI-RMP domains to strengthen weak knowledge areas effectively.",
    },
    {
      id: 3,
      icon: LineCahrtIcon,
      title: "Structured PMI-RMP study plan",
      description:
        "Follow a guided, step-by-step roadmap tailored for working professionals preparing for PMI-RMP certification.",
    },
    {
      id: 4,
      icon: FlashCardIcon,
      title: "Flashcards and revision tools",
      description:
        "Quickly revise key formulas, terminology, and high-impact PMI-RMP topics before exam day.",
    },
    {
      id: 5,
      icon: DetailIcon,
      title: "Latest Curriculum",
      description:
        "Fully updated curriculum aligned with the latest exam content guideline and PMBOK standards.",
    },
    {
      id: 6,
      icon: ClockIcon,
      title: "Expert Instructor Support",
      description:
        "Personalized feedback and quick answers from our PMI-certified instructors.",
    },
    {
      id: 7,
      icon: ImproveIcon,
      title: "Interactive Learning Experience",
      description:
        "Engaging, real-world examples and practical scenarios for effective and enjoyable learning.",
    },
    {
      id: 8,
      icon: PhoneIcon,
      title: "Learn Anytime, Anywhere",
      description:
        "Self-paced, mobile-friendly modules let you study on your commute, at the gym, or during quiet work hours.",
    },
    {
      id: 9,
      icon: SimulatorsIcon,
      title: "Unlimited Access",
      description: "Unlimited access for the full access period.",
    },
    {
      id: 10,
      icon: ChartIcon,
      title: "Proven Results",
      description:
        "Our students achieve a high success rate, backed by thousands of successful certifications worldwide.",
    },
  ],
};

const work = {
  heading: "How It Works",
  dis: "Boost your confidence and exam readiness with vCare Project Management - your success partner for PMI certifications.",
  cards: [
    {
      id: 1,
      icon: DetailIcon,
      title: "Enroll in a Plan",
      description: "Choose the Exam Prep bundle that fits your goal",
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
      icon: ChartIcon,
      title: "Analyze & Improve",
      description: "Review results and strengthen weak areas",
    },
    {
      id: 5,
      icon: CircleArrowIcon,
      title: "Clear the PMI-RMP® Exam",
      description: "Walk into the exam with confidence",
    },
  ],
};

const slides = [
  {
    id: 1,
    image: InnerImage,
    title: "PMI-RMP® Exam Prep Training",
    description:
      "Join expert-led online or in-person classes designed to build advanced risk management knowledge, confidence, and certification readiness.",
  },
  {
    id: 2,
    image: InnerImage,
    title: "PMI-RMP® Exam Simulator",
    description:
      "Test your knowledge, track your progress, and feel confident walking into the exam.",
  },
  {
    id: 3,
    image: InnerImage,
    title: "PMI-RMP® Online Exam Prep Bundle",
    description:
      "Get everything you need to apply and prepare for exam day with our all-in-one bundle, including online course access, practice exams, and tools that build confidence.",
  },
  {
    id: 4,
    image: InnerImage,
    title: "PMI-RMP® Application Support",
    description:
      "Get expert guidance to complete your PMI-RMP® application confidently, including audit support and eligibility assistance.",
  },
  {
    id: 5,
    image: InnerImage,
    title: "Free PMI-RMP® Consultation",
    description:
      "Speak with an expert to discuss eligibility, career goals, study plans, and the best pathway to success.",
  },
  {
    id: 6,
    image: InnerImage,
    title: "PMI-RMP® On-Demand Course",
    description:
      "Study anytime with guided lessons, structured modules, and flexible self-paced learning designed to advance your risk management skills and prepare you for the PMI-RMP® exam.",
  },
  {
    id: 7,
    image: InnerImage,
    title: "PMI-RMP® Exam Voucher",
    description: "Get Official PMI® Exam Vouchers and Save on Your Exam Fees.",
    buttonText: "Buy Now",
  },
];

const PrepCourse = [
  "Aligned to the Latest Exam Standards",
  "Structured study materials, practice tests, and case studies.",
  "Prepared by expert instructors with real-world project experience",
  "100% online, flexible learning",
  "Earn 30 PMI®-Approved PDUs",
];

const courseCard = {
  heading: "Why Choose Our PMI-RMP® Exam Prep Course?",
  card: [
    {
      id: 1,
      title: "Beginner-friendly video lessons",
      description:
        "Easy-to-follow videos simplify complex PMI-RMP concepts for all experience levels.",
    },
    {
      id: 2,
      title: "PMI®-aligned PMI-RMP simulators",
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
      title: "Trusted by PMI-RMP aspirants worldwide",
      description:
        "Join thousands of professionals who rely on vCare for PMI-RMP exam success.",
    },
  ],
};

const PMIACPExamPrepCourse = () => {
  return (
    <>
      <NavHeroSection
        title="Risk Management Professional (PMI-RMP)® Exam Prep Course"
        description="Designed for professionals preparing for certification success, our PMI-RMP® Exam Prep Course is your all-in-one study solution, combining structured learning, guided lessons, case studies, practice exams, full-length mock exams, and powerful study tools in one complete package."
        descriptionsecond="Prepare for the PMI-RMP® exam with content that helps you understand key concepts, apply best practices, and build the skills and confidence needed to succeed in risk management and excel on exam day."
        sideImage={InnerPage}
      />

      <AuthorizedTrainingPartner
        title="Everything You Need for PMI-RMP® Exam Success."
        subtitle="The PMI-RMP® Exam Prep Course is built to help professionals prepare for real PMI-RMP® exam conditions before exam day. Learn through structured lessons, guided study paths, practice questions, and full-length mock exams. Become familiar with exam patterns, measure your readiness through detailed performance insights, build confidence, identify knowledge gaps, and approach the exam fully prepared."
        bullets={[
          {
            text: "Aligned to the Latest Exam Standards",
          },
          { text: "Structured study materials, practice tests, and case studies." },
          {
            text: "Prepared by expert instructors with real-world project experience",
          },
          { text: "100% Online, Flexible Learning" },
          { text: "Earn 30 PMI®-Approved PDUs" },
        ]}
        descriptionTop="Prepare with Confidence. Get PMI-RMP® Certified."
        descriptionBottom="Our suite of flexible online learning is designed to help you prepare for the PMI-RMP® exam on your terms and stay motivated throughout your certification journey. Study on your schedule with our PMI-RMP® Exam Prep Course."
        image={TrainingImage}
      />

      <ContentTabs
        id="PMI-RMP"
        overview={overview}
        access={access}
        work={work}
        alsoLike={{
          heading: "You May Also Like",
          subheading:
            "Explore multiple study aids designed to get you exam-day ready.",
          slides: slides,
        }}
      />

      <PremiumPacks
        showCourseSelect={false}
        courseKey="PMI-RMP"
        heading="Exam Prep Table"
        description="Three flexible plans designed for different learning needs and timelines."
      />

      <section className="bg-white pb-10 lg:pt-0 lg:pb-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.38fr_1fr] gap-5 lg:gap-10 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                PMI-RMP Exam Prep Course - Enroll Today
              </h2>
              <p className="text-paragraph text-sm font-normal mt-1 max-w-[520px] w-full leading-[26px]">
                The vCare PMI-RMP Exam Prep Course helps you build real-world
                project management skills while preparing you to confidently
                clear the PMI-RMP® certification exam on your first attempt.
              </p>
              <h4 className="text-Black_light text-xl font-bold mt-5 mb-4">
                Key Features
              </h4>
              <ul className="space-y-1 list-disc self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1 mb-5">
                {PrepCourse.map((text, index) => (
                  <li
                    key={index}
                    className="gap-2 self-stretch"
                  >
                     <span>{text}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="max-w-[280px] w-full">
                Learn More
              </Button>
            </div>
            <div>
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
              Check out the <br /> PMI-RMP Exam Simulator in action.
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

export default PMIACPExamPrepCourse;
