import React from "react";
import InnerPage from "@/assets/inner-page.jpg";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import TrainingImage from "@/assets/training-image.png";
import AuthorizedTrainingPartner from "@/components/ReusableComponents/AuthorizedTrainingPartnerSection/AuthorizedTrainingPartner";
import ContentTabs from "@/components/NavPages/ContentTabs";
import InnerImage from "@/assets/inner-page.jpg";

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
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
// Tab 1 (Overview Content)
const overview = {
  heading: "Overview",
  text: "The vCare PMP® Exam Prep Course is a comprehensive, self-paced program designed to help project management professionals confidently pass the PMP® certification exam. Built in alignment with the latest PMI® Exam Content Outline, the course combines structured learning, real-world scenarios, and exam-level practice to ensure complete readiness. Learners gain access to full-length mock exams, domain-based practice tests, detailed explanations, and smart performance analytics to track progress effectively. With flexible, 100% online access and expert-curated content, the course supports busy professionals in mastering PMP concepts, strengthening exam strategies, and achieving certification success on their first attempt.",
};
// Tab 2 What You’ll Access
const access = {
  heading: "What You’ll Access",
  cards: [
    {
      id: 1,
      icon: ExamsIcon,
      title: "Full-length PMP® mock exams",
      description:
        "Simulate real PMP exam conditions with timed, full-length practice tests.",
    },
    {
      id: 2,
      icon: ComIcon,
      title: "Mini practice tests by domain",
      description:
        "Practice individual PMP domains to strengthen weak knowledge areas effectively.",
    },
    {
      id: 3,
      icon: ExamsIcon,
      title: "2,000+ PMP-style practice questions",
      description:
        "Large question bank aligned with real PMP exam difficulty and structure.",
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
      title: "Structured PMP study plan",
      description:
        "Follow a guided study roadmap designed for busy working professionals.",
    },
    {
      id: 7,
      icon: MovieIcon,
      title: "Video lessons & concept breakdowns",
      description:
        "Learn complex PMP concepts through concise, instructor-led video lessons.",
    },
    {
      id: 8,
      icon: PhoneIcon,
      title: "Downloadable study resources",
      description:
        "Access printable notes and guides for offline PMP exam preparation.",
    },
    {
      id: 9,
      icon: FlashCardIcon,
      title: "Flashcards and revision tools",
      description:
        "Quickly revise key formulas, processes, and PMP terminology.",
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
      description: "Choose the PMP bundle that fits your goal",
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
      title: "Clear the PMP® Exam",
      description: "Walk into the exam with confidence",
    },
  ],
};
// Tab 4 You May Also Like
const slides = [
  {
    id: 1,
    image: InnerImage, // Replace with actual image
    title: "PMP® Full-Length Exam Simulator",
    description:
      "Experience real PMP exam conditions with timed, scenario-based full mock tests.",
  },
  {
    id: 2,
    image: InnerImage,
    title: "PMP® Practice Question Bank",
    description:
      "Strengthen your concepts with a large collection of PMP-aligned practice questions.",
  },
  {
    id: 3,
    image: InnerImage,
    title: "PMP® Exam Strategy Workshops",
    description:
      "Learn proven exam strategies, time management, and question-solving techniques from experts.",
  },
  {
    id: 4,
    image: InnerImage,
    title: "PMP® Exam Strategy Workshops",
    description:
      "Learn proven exam strategies, time management, and question-solving techniques from experts.",
  },
];

const PfMPRealPracticeExam = () => {
  return (
    <>
      <NavHeroSection
        title="Project Management Professional (PMP®) Practice Exam"
        description="Our PMP® Exam Prep Course is aligned with the latest PMI® PMP Exam Content Outline (ECO) and designed for professionals preparing for certification success. The course combines structured learning, realistic exam simulations, and in-depth explanations to help you understand concepts, apply best practices, and confidently handle situational PMP-style questions—exactly as they appear on exam day."
        descriptionsecond=""
        sideImage={InnerPage}
      />
      <AuthorizedTrainingPartner
        title="Test Your Readiness. Build Confidence. Get Exam-Day Ready."
        subtitle="The PMP® Practice Exam is designed to help candidates experience real PMP® exam conditions before test day. Practice with high-quality, PMP®-style questions, understand exam patterns, and evaluate your readiness with detailed performance insights.The PMP® Practice Exam is designed to help candidates experience real PMP® exam conditions before test day. Practice with high-quality, PMP®-style questions, understand exam patterns, and evaluate your readiness with detailed performance insights."
        bullets={[
          {
            text: "Step-by-Step Training Aligned with the Latest Exam Standards",
          },
          { text: "Expert Instructors with Real-World Project Experience" },
          { text: "100% Online, Flexible Learning" },
          { text: "PMI®-Approved PDUs" },
          { text: "Instant access to course materials" },
        ]}
        descriptionTop=""
        descriptionBottom=""
        image={TrainingImage}
      />

      <ContentTabs
        id="pmpexam"
        overview={overview}
        access={access}
        work={work}
        alsoLike={{
          heading: "You May Also Like",
          subheading: "Related PMP Learning Resources",
          slides: slides,
        }}
      />
      <div className="-mt-10 md:-mt-20 relative">
        <ScreenshortsSlider id="exam-screenshorts" />
      </div>
      <div className="-mt-10 md:-mt-20 relative">
        <Faq limit={5} />
      </div>
      <TopFooterSection />
    </>
  );
};

export default PfMPRealPracticeExam;
