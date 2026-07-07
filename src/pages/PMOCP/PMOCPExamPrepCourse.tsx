import React from "react";
import InnerPage from "@/assets/PMOCPExamPrep/PMOCPExamPrepHeroBanner.png";
import TrainingImage from "@/assets/PMOCPExamPrep/PMOCPExamPrepPMIATP.png";
import ContentTabs from "@/components/NavPages/ContentTabs";
import { PremiumPacks } from "@/components/ReusableComponents/PlanSection/PremiumPacks";
import InnerImage from "@/assets/PMOCPExamPrep/PMOCPExamPrepHeroBanner.png";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import VideoSection from "@/components/ReusableComponents/VideoSection/VideoSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import AuthorizedTrainingPartner from "@/components/ReusableComponents/AuthorizedTrainingPartnerSection/AuthorizedTrainingPartner";
import ExamPrepTrainingOptions from "@/components/ReusableComponents/ExamPrepTrainingOptions/ExamPrepTrainingOptions";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { pmocpLeadershipFooterContent } from "@/data/courseFooterContent";

import {
  ExamsIcon,
  ClockIcon,
  LineCahrtIcon,
  SimulatorsIcon,
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
  text: "The PMI-PMOCP™ Exam Prep Course is a comprehensive, self-paced program designed to help professionals confidently pass the PMI-PMOCP™ certification exam. Built in alignment with the latest PMI-PMOCP Exam Content Outline, the course combines structured learning and guided lessons to ensure complete readiness. With flexible, 100% online access and expert-curated content, the course supports busy professionals in mastering PMOCP concepts, strengthening exam strategies, and achieving certification success on their first attempt and satisfy the 10 training hours required to apply.",
};
// Tab 2 What You’ll Access
const access = {
  heading: "What You’ll Access",
  cards: [
    {
      id: 1,
      icon: MovieIcon,
      title: "Video lessons & concept breakdowns",
      description:
        "Learn complex PMI-PMOCP concepts through concise, instructor-led video lessons.",
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
      icon: HatIcon,
      title: "Structured study plan",
      description:
        "Follow a guided study roadmap designed for busy working professionals.",
    },
    {
      id: 4,
      icon: FlashCardIcon,
      title: "Flashcards and revision tools",
      description:
        "Quickly revise key formulas, processes, and PMI-PMOCP terminology.",
    },
    {
      id: 5,
      icon: ExamsIcon,
      title: "Latest Curriculum",
      description:
        "Fully updated curriculum aligned with the latest exam content guideline and PMBOK standards.",
    },
    {
      id: 6,
      icon: DetailIcon,
      title: "Expert Instructor Support",
      description:
        "Personalized feedback and quick answers from our PMI-certified instructors.",
    },
    {
      id: 7,
      icon: ChartIcon,
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
      icon: ExamsIcon,
      title: "Unlimited Access",
      description: "Unlimited Access for the full access period.",
    },
    {
      id: 10,
      icon: DetailIcon,
      title: "Proven Results",
      description:
        "Our students achieve a high success rate, backed by thousands of successful certifications worldwide.",
    },
  ],
};
// Tab 3 How It Works
const work = {
  heading: "How It Works",
  dis: "Boost your confidence and exam readiness with vCare Project Management —your success partner for PMI certifications.",
  cards: [
    {
      id: 1,
      icon: ClockIcon,
      title: "Choose the Exam Prep bundle",
      description: "Choose the Exam Prep bundle that fits your goal",
    },
    {
      id: 2,
      icon: LineCahrtIcon,
      title: "Clear the PMI-PMOCP™ Exam",
      description: "Clear the PMI-PMOCP™ Exam",
    },
    {
      id: 3,
      icon: SimulatorsIcon,
      title: "Boost your confidence",
      description:
        "Boost your confidence and exam readiness with vCare Project Management —your success partner for PMI certifications.",
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
    title: "PMI-PMOCP® Exam Prep Training",
    description:
      "Learn proven exam strategies, time management, and question-solving techniques from experts.",
    buttonText: "Book appointment",
  },
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
        title="Everything You Need for PMI-PMOCP™ Exam Success."
        description="Designed for professionals preparing for certification success, our PMI-PMOCP™ Exam Prep Course is your all-in-one study solution, combining structured learning, guided lessons, case studies, practice exams, full-length mock exams, and powerful study tools in one complete package."
        descriptionsecond="Prepare for the PMI-PMOCP™ exam with content that helps you understand key concepts, apply best practices, and build the skills and confidence needed to succeed in risk management and excel on exam day."
        sideImage={InnerPage}
      />

      <AuthorizedTrainingPartner
        title="Premier Authorized Training Partner"
        subtitle="The PMI-PMOCP™ Exam Prep Course is built to help professionals prepare for real PMI-PMOCP™ exam conditions before exam day. Learn through structured lessons, guided study paths, practice questions, and full-length mock exams. Become familiar with exam patterns, measure your readiness through detailed performance insights, build confidence, identify knowledge gaps, and approach the exam fully prepared."
        bullets={[
          {
            text: "Key Features",
          },
          { text: "Aligned to the Latest Exam Standards" },
          {
            text: "Prepared by expert Instructors with Real-World PMO Experience",
          },
          { text: "100% Online, Flexible Learning" },
          { text: "Earn 20 PMI®-Approved PDUs" },
        ]}
        descriptionTop="Prepare with Confidence. Get PMI-PMOCP® Certified."
        descriptionBottom="Our suite of flexible online learning is designed to help you prepare for the PMI-PMOCP™ exam on your terms and stay motivated throughout your certification journey. Study on your schedule with our PMI-PMOCP® Exam Prep Course,"
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
        courseKey="PMOCP"
        heading="Choose the PMI-PMOCP Exam Prep Plan That Fits You"
        description="Three flexible plans designed for different learning needs and timelines."
      />

      <section className="bg-white pb-10 lg:pt-0 lg:pb-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            Training Options
          </h2>
          <p className="text-paragraph text-sm font-normal mt-1 max-w-[760px] w-full leading-[26px]">
            Enhance your PMO leadership and prepare for the PMI-PMOCP Exam with this expert-developed prep course.
          </p>
          <ExamPrepTrainingOptions
            courseKey="PMOCP"
            bootcampDays="2-day"
                bootcampAuthorized
            bootcampResource="Access to exclusive digital learning resources"
            classroomFeatures={[
                  "In-person training at selected locations",
                  "Access to Digital Materials from PMI",
                  "1:1 mentoring and application support",
                  "Full-length mock exams and practice questions",
                  "Post-training support",
            ]}
            corporateMaterial="Get digital materials"
          />
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

      <section className="bg-white pb-10 lg:pt-5 lg:pb-16">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="text-left">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-5">
              PMI-PMOCP Exam Prep Course Plans
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-light-blue">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                      Features
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                      Basic
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                      Premium
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-bold">
                      Complete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Video lessons & concept breakdowns
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      Mini practice tests by domain
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Structured study plan
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      Flashcards and revision tools
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Latest Curriculum
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      Expert Instructor Support
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      -
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Interactive Learning Experience
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      -
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      Learn Anytime, Anywhere
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      Unlimited Access
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      -
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">
                      Proven Results
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      -
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      ✓
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[760px] w-full px-3 md:px-4 m-auto text-center">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            Frequently Asked Questions
          </h2>
          <p className="text-paragraph text-sm md:text-base leading-[28px] mt-2 mb-5">
            Have questions about our Exam Prep Courses? Browse our most commonly
            asked questions covering course access, study materials, exam
            preparation, pricing, and technical support.
          </p>
          <Button asChild>
            <Link to="/faq#exam-prep">View All FAQs &rarr;</Link>
          </Button>
        </div>
      </section>

      <TopFooterSection content={pmocpLeadershipFooterContent} />
    </>
  );
};

export default PMOCPExamPrepCourse;
