import React from "react";
import InnerPage from "@/assets/inner-page.jpg";
import TrainingImage from "@/assets/training-image.png";
import ContentTabs from "@/components/NavPages/ContentTabs";
import { PremiumPacks } from "@/components/ReusableComponents/PlanSection/PremiumPacks";
import InnerImage from "@/assets/inner-page.jpg";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import VideoSection from "@/components/ReusableComponents/VideoSection/VideoSection";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import AuthorizedTrainingPartner from "@/components/ReusableComponents/AuthorizedTrainingPartnerSection/AuthorizedTrainingPartner";
import ExamPrepTrainingOptions from "@/components/ReusableComponents/ExamPrepTrainingOptions/ExamPrepTrainingOptions";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  text: "The PgMP® Exam Prep Course is a comprehensive, self-paced program designed to help professionals confidently pass the PgMP® certification exam. Built in alignment with the latest PMI® Exam Content Outline, the course combines structured learning and guided lessons to ensure complete readiness. With flexible, 100% online access and expert-curated content, the course supports busy professionals in mastering PgMP concepts, strengthening exam strategies, and achieving certification success on their first attempt and satisfy the 35 training hours required to apply.",
};

const access = {
  heading: "What You’ll Access",
  cards: [
    {
      id: 1,
      icon: MovieIcon,
      title: "Video lessons & concept breakdowns",
      description:
        "Learn complex PgMP concepts through clear, instructor-led videos and practical concept walkthroughs.",
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
      icon: LineCahrtIcon,
      title: "Structured PgMP study plan",
      description:
        "Follow a guided, step-by-step roadmap tailored for working professionals preparing for PgMP certification.",
    },
    {
      id: 4,
      icon: FlashCardIcon,
      title: "Flashcards and revision tools",
      description:
        "Quickly revise key formulas, terminology, and high-impact PgMP topics before exam day.",
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
      title: "Clear the PgMP® Exam",
      description: "Walk into the exam with confidence",
    },
  ],
};

const slides = [
  {
    id: 1,
    image: InnerImage,
    title: "PgMP® Exam Prep Training",
    description:
      "Join expert-led online or in-person classes designed to build knowledge, confidence, and exam readiness.",
  },
  {
    id: 2,
    image: InnerImage,
    title: "PgMP® Exam Simulator",
    description:
      "Test your readiness with realistic mock exams, scenario-based practice, and detailed answer explanations.",
  },
  {
    id: 3,
    image: InnerImage,
    title: "PgMP® Online Exam Prep Course",
    description:
      "Prepare for the PgMP® exam with our all-in-one Exam Prep bundle with access to Online Course, Practice Exams and tools that build confidence.",
  },
  {
    id: 4,
    image: InnerImage,
    title: "Free PgMP® Consultation",
    description:
      "Speak with an expert to discuss eligibility, application strategy, study plans, and the best pathway to success.",
  },
  {
    id: 5,
    image: InnerImage,
    title: "PgMP® On-Demand Course",
    description:
      "Study anytime with guided lessons, structured modules, and flexible self-paced learning aligned to the PgMP® exam.",
  },
  {
    id: 6,
    image: InnerImage,
    title: "PgMP® Application Support",
    description:
      "Get expert help to complete your PgMP® application correctly, including audit guidance and full Panel Review support.",
  },
  {
    id: 7,
    image: InnerImage,
    title: "PgMP® Exam Voucher",
    description: "Get Official PgMP® Exam Vouchers and Save on Your Exam Fees.",
    buttonText: "Buy Now",
  },
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


const PgMPExamPrepCourse = () => {
  return (
    <>
      <NavHeroSection
        title="Program Management Professional (PgMP)® Exam Prep Course"
        description="Designed for professionals preparing for certification success, our PgMP® Exam Prep Course is your all-in-one study solution, combining structured learning, guided lessons, practice exams, full-length mock exams, and powerful study tools in one complete package."
        descriptionsecond="Prepare for the PgMP® exam with content that helps you understand key concepts, apply best practices, and build the skills and confidence needed to succeed in modern program management and excel on exam day."
        sideImage={InnerPage}
      />

      <AuthorizedTrainingPartner
        title="Everything You Need for PgMP® Exam Success."
        subtitle="The PgMP® Exam Prep Course is built to help professionals prepare for real PgMP® exam conditions before exam day. Learn through structured lessons, guided study paths, practice questions, and full-length mock exams. Become familiar with exam patterns, measure your readiness through detailed performance insights, build confidence, identify knowledge gaps, and approach the exam fully prepared."
        bullets={[
          {
            text: "Aligned to the Latest Exam Standards",
          },
          { text: "Expert Instructors with Real-World Program Experience" },
          { text: "100% Online, Flexible Learning" },
          { text: "Earn 24 PMI®-Approved PDUs" },
          { text: "Instant access to course materials" },
        ]}
        descriptionTop="Prepare with Confidence. Get PgMP® Certified."
        descriptionBottom="Our suite of flexible online learning is designed to help you prepare for the PgMP® exam on your terms and stay motivated throughout your certification journey. Study on your schedule with our PgMP® Exam Prep Course."
        image={TrainingImage}
      />

      <ContentTabs
        id="PgMP"
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
        courseKey="PgMP"
        heading="WHAT’S INCLUDED"
        description="Three flexible plans designed for different learning needs and timelines."
      />

      <section className="bg-white pb-10 lg:pt-0 lg:pb-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            Training Options
          </h2>
          <p className="text-paragraph text-sm font-normal mt-1 max-w-[760px] w-full leading-[26px]">
            Our training Programs helps you build real-world program
            management skills while preparing you to confidently clear the PgMP®
            certification exam on your first attempt.
          </p>
          <ExamPrepTrainingOptions
            courseKey="PgMP"
            bootcampDays="3-day"
            bootcampResource="Access to exclusive learning resources"
            classroomFeatures={[
              "In-person training at selected locations",
              "Access to exclusive learning resources",
              "1:1 mentoring and application support",
              "Full-length mock exams and practice questions",
              "Post-training support",
            ]}
            corporateMaterial="Get study materials"
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
              Check out the <br /> PgMP Exam Simulator in action.
            </>
          }
          description="Our exam simulator provides the most authentic training experience in the industry. When the time comes for the actual test, you'll feel more confident and ready because you'll know exactly what to expect. We have over 1,700+ questions and answers that reflect the real-life testing environment, so you can be sure that the prep material is reliable."
        />
      </div>

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
    </>
  );
};

export default PgMPExamPrepCourse;

