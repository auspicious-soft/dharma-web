import React from "react";
import InnerPage from "@/assets/PMPExamPrep/PMPExamPrepHeroBanner.png";
import TrainingImage from "@/assets/PMPExamPrep/PMPExamPrepPMIATP.png";
import ContentTabs from "@/components/NavPages/ContentTabs";
import { PremiumPacks } from "@/components/ReusableComponents/PlanSection/PremiumPacks";
import InnerImage from "@/assets/PMPExamPrep/PMPExamPrepHeroBanner.png";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import VideoSection from "@/components/ReusableComponents/VideoSection/VideoSection";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import AuthorizedTrainingPartner from "@/components/ReusableComponents/AuthorizedTrainingPartnerSection/AuthorizedTrainingPartner";
import ExamPrepTrainingOptions from "@/components/ReusableComponents/ExamPrepTrainingOptions/ExamPrepTrainingOptions";

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
  text: "The PMP® Exam Prep Course is a comprehensive, self-paced program designed to help project management professionals confidently pass the PMP® certification exam. Built in alignment with the latest PMI® Exam Content Outline, the course combines structured learning and guided lessons to ensure complete readiness. With flexible, 100% online access and expert-curated content, the course supports busy professionals in mastering PMP concepts, strengthening exam strategies, and achieving certification success on their first attempt and satisfy the 35 training hours required to apply.",
};

const access = {
  heading: "What You’ll Access",
  cards: [
    {
      id: 1,
      icon: MovieIcon,
      title: "Video lessons & concept breakdowns",
      description:
        "Learn complex PMP concepts through clear, instructor-led videos and practical concept walkthroughs.",
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
      icon: LineCahrtIcon,
      title: "Structured PMP study plan",
      description:
        "Follow a guided, step-by-step roadmap tailored for working professionals preparing for PMP certification.",
    },
    {
      id: 4,
      icon: FlashCardIcon,
      title: "Flashcards and revision tools",
      description:
        "Quickly revise key formulas, terminology, and high-impact PMP topics before exam day.",
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
      title: "Clear the PMP® Exam",
      description: "Walk into the exam with confidence",
    },
  ],
};

const slides = [
  {
    id: 1,
    image: InnerImage,
    title: "PMP® Exam Simulator",
    description:
      "Test your readiness with realistic mock exams, timed practice, and detailed answer explanations.",
  },
  {
    id: 2,
    image: InnerImage,
    title: "PMP® Application Support",
    description:
      "Get expert help to complete your application correctly and avoid delays or rework.",
  },
  {
    id: 3,
    image: InnerImage,
    title: "PMP® On-Demand Course",
    description:
      "Study anytime and anywhere with guided lessons, structured modules, and flexible self-paced learning.",
  },
  {
    id: 4,
    image: InnerImage,
    title: "PMP® Exam Prep Training",
    description:
      "Join expert-led online or in-person classes designed to build knowledge, confidence, and exam readiness.",
  },
  {
    id: 5,
    image: InnerImage,
    title: "Free PMP® Consultation",
    description:
      "Speak with an expert to discuss eligibility, study plans, and the best pathway to success.",
  },
  {
    id: 6,
    image: InnerImage,
    title: "PMP® Exam Voucher Bundle",
    description: "Get Official PMI® Exam Vouchers and Save on Your Exam Fees.",
    buttonText: "Buy Now",
  },
];


const courseCard = {
  heading: "Why Choose Our PMP® Exam Prep Course?",
  card: [
    {
      id: 1,
      title: "Beginner-friendly video lessons",
      description:
        "Easy-to-follow videos simplify complex PMP concepts for all experience levels.",
    },
    {
      id: 2,
      title: "PMI®-aligned PMP simulators",
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
      title: "Trusted by PMP aspirants worldwide",
      description:
        "Join thousands of professionals who rely on vCare for PMP exam success.",
    },
  ],
};

const pmpPracticeTestFaqs = [
  {
    question: "Who is the PMP® Exam Prep Course designed for?",
    answer:
      "The course is ideal for project managers, team leaders, aspiring PMP® candidates, and professionals preparing for the PMP® certification exam who want a flexible, self-paced learning experience.",
  },
  {
    question: "Does this course satisfy the 35 contact hours required for the PMP® application?",
    answer:
      "Yes. The complete PMP® Exam Prep Course includes the required 35 PMI®-approved training hours (PDUs/contact hours) needed to apply for the PMP® certification exam.",
  },
  {
    question: "Is the course aligned with the latest PMP® exam?",
    answer:
      "Yes. All course content, mock exams, and study materials are aligned with the latest PMI® Exam Content Outline and PMBOK® Guide – 8th Edition.",
  },
  {
    question: "What is included in the course?",
    answer:
      "Depending on your selected plan, you'll receive access to realistic mock exams, detailed answer explanations, video lessons, exam preparation guides, performance analytics, practice questions, and personalized dashboards.",
  },
  {
    question: "What is the difference between the Essentials, Advanced, and Elite plans?",
    answer:
      "The plans differ primarily in the amount of learning content provided.",
  },
  {
    question: "How long will I have access to the course?",
    answer:
      "Access duration depends on the plan you purchase. The current plans provide 30 days to 365 days of online access, with the option to select different durations where available.",
  },
  {
    question: "Can I take the mock exams multiple times?",
    answer:
      "Yes. You can retake the mock exams as many times as you like during your active subscription period to improve your knowledge and exam readiness.",
  },
  {
    question: "Are the mock exams similar to the real PMP® exam?",
    answer:
      "Yes. The practice exams are designed to closely simulate the actual PMP® exam, including question style, difficulty level, timing, and domain distribution.",
  },
  {
    question: "Will I receive explanations for every question?",
    answer:
      "Yes. Every practice question includes detailed explanations to help you understand why the correct answer is right and why the other options are less appropriate.",
  },
  {
    question: "Can I track my performance?",
    answer:
      "Yes. The platform provides detailed dashboards and analytics that help identify strengths, knowledge gaps, domain performance, and overall exam readiness.",
  },
  {
    question: "Can I study on my mobile device?",
    answer:
      "Yes. The course is fully online and can be accessed from desktops, laptops, tablets, and mobile devices, allowing you to study anytime and anywhere.",
  },
  {
    question: "Is instructor support included?",
    answer:
      "The self-paced Exam Prep Course is designed for independent learning. If you prefer live instructor guidance, mentoring, or coaching, you can enroll in our Live Online Bootcamp, In-Person Training, or Personal Mentoring programs.",
  },
  {
    question: "Can you help me with my PMP® application?",
    answer:
      "Yes. Application support is included with selected plans and is also available through our live training and mentoring programs.",
  },
  {
    question: "What if I need more than self-paced learning?",
    answer:
      "You can upgrade to one of our instructor-led training options, including Live Online Bootcamps, In-Person Training, Corporate Training, or Personal Mentoring for additional coaching and support.",
  },
  {
    question: "Who develops the course content?",
    answer:
      "The course is developed by experienced project management professionals and PMI Authorized Trainers, combining practical project experience with the latest PMI standards and best practices.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Yes. The structured learning path, beginner-friendly video lessons, real-world examples, and guided study approach make the course suitable for both new and experienced project management professionals.",
  },
  {
    question: "Do I receive a certificate after completing the course?",
    answer:
      "Yes. Upon successful completion of the training, you will receive a certificate that can be used to demonstrate completion of the required PMP® training hours, where applicable.",
  },
  {
    question: "Is this the same as attending a PMP® Bootcamp?",
    answer:
      "No. This is a self-paced online course designed for flexible learning. If you prefer live interaction with instructors, scheduled classes, and real-time coaching, consider our Live Online or In-Person PMP® Bootcamp.",
  },
  {
    question: "Can organizations purchase this course for their teams?",
    answer:
      "Yes. We offer corporate learning solutions with customized learning paths, enterprise reporting, dedicated support, and flexible delivery options for organizations of all sizes.",
  },
  {
    question: "Why should I choose vCare Project Management?",
    answer:
      "As a Premier Authorized Training Partner (ATP) of PMI®, vCare Project Management provides PMI-aligned learning, experienced instructors, realistic exam simulators, comprehensive study resources, flexible learning options, and ongoing support to help professionals prepare confidently for PMP® certification.",
  },
];

const PMPExamPrepCourse = () => {
  return (
    <>
      <NavHeroSection
        title="Project Management Professional (PMP)® Exam Prep Course"
        description="Designed for professionals pursuing certification success, our PMP® Exam Prep Course is a complete all-in-one study solution that combines structured learning based on professionally created study materials, video learning, practice tests, case studies and powerful study tools in one comprehensive package."
        descriptionsecond="Prepare for the PMP® exam with content designed to help you understand key concepts, apply proven best practices, and build the skills, confidence, and exam readiness needed to succeed in modern project management and perform at your best on exam day."
        sideImage={InnerPage}
      />

      <AuthorizedTrainingPartner
        title="Everything You Need for PMP® Exam Success."
        subtitle="The PMP® Exam Prep Course is built to help professionals prepare for real PMP® exam conditions before exam day. Learn through structured lessons, guided study paths, practice questions, and full-length mock exams. Become familiar with exam patterns, measure your readiness through detailed performance insights, build confidence, identify knowledge gaps, and approach the exam fully prepared."
        bullets={[
          {
            text: "Aligned to the Latest Exam Standards & PMBOK® 8th Edition",
          },
          {
            text: "Supplemental deep dive video lessons and practice tests",
          },
          { text: "Created by expert instructors with real-world project experience" },
          { text: "100% online, flexible learning" },
          { text: "Earn 35 PMI®-Approved PDUs" },
        ]}
        descriptionTop="Prepare with Confidence. Get PMP® Certified."
        descriptionBottom="Our suite of flexible online learning is designed to help you prepare for the PMP® exam on your terms and stay motivated throughout your certification journey. Study on your schedule with our PMP® Exam Prep Course."
        image={TrainingImage}
      />

      <ContentTabs
        id="pmp"
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
        courseKey="PMP"
        heading="WHAT’S INCLUDED"
        description="Three flexible plans designed for different learning needs and timelines."
      />

      <section className="bg-white pb-10 lg:pt-0 lg:pb-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            Training Options
          </h2>
          <p className="text-paragraph text-sm font-normal mt-1 max-w-[760px] w-full leading-[26px]">
            Our training Programs helps you build real-world project management skills while preparing you to confidently clear the PMP® certification exam on your first attempt.
          </p>
          <ExamPrepTrainingOptions
            courseKey="PMP"
            bootcampDays="4-day"
                bootcampAuthorized
            bootcampResource="Access to exclusive digital learning resources"
            classroomFeatures={[
                  "In-person training at selected locations",
                  "PMI Authorized Trainers",
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
              Check out the <br /> PMP Exam Simulator in action.
            </>
          }
          description="Our exam simulator provides the most authentic training experience in the industry. When the time comes for the actual test, you'll feel more confident and ready because you'll know exactly what to expect. We have over 1,700+ questions and answers that reflect the real-life testing environment, so you can be sure that the prep material is reliable."
        />
      </div>

      <Faq faqs={pmpPracticeTestFaqs} />
    </>
  );
};

export default PMPExamPrepCourse;
