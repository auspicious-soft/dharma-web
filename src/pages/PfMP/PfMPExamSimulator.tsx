import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import InnerPage from "@/assets/inner-page.jpg";
import TrainingImage from "@/assets/training-image.png";
import { PremiumPacks } from "@/components/ReusableComponents/PlanSection/PremiumPacks";
import {
  ChartIcon,
  ComIcon,
  DetailIcon,
  ExamsIcon,
  HatIcon,
} from "@/utils/svgicons";
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import AuthorizedTrainingPartner from "@/components/ReusableComponents/AuthorizedTrainingPartnerSection/AuthorizedTrainingPartner";

const examFeatures = [
  "Realistic exam prep questions",
  "Detailed explanations for most answers",
  "Simulated exam environment",
  "Exam Mode, Timed Mode, and Learning Mode",
  "Mark for Review functionality",
  "Retake exams as many times as you like",
  "Fully updated to the latest PMI® policies",
];

const accessCard = {
  heading: "What You’ll Access",
  cards: [
    {
      id: 1,
      icon: ExamsIcon,
      title: "PMP®-Style Mock Exams",
      description:
        "Practice with realistic, exam-level questions matching PMP® format and difficulty.",
    },
    {
      id: 2,
      icon: ComIcon,
      title: "Smart Performance Breakdown",
      description:
        "Analyze scores by ECO domains to quickly identify weak areas.",
    },
    {
      id: 3,
      icon: ExamsIcon,
      title: "Detailed Explanations",
      description:
        "Understand why an answer is correct with PMI-aligned reasoning.",
    },
    {
      id: 4,
      icon: DetailIcon,
      title: "Exam-Paced Practice",
      description:
        "Train under real PMP® timing to build endurance and confidence.",
    },
    {
      id: 5,
      icon: ChartIcon,
      title: "Targeted Practice Sets",
      description:
        "Create focused quizzes for Agile, Hybrid, and Predictive topics.",
    },
    {
      id: 6,
      icon: HatIcon,
      title: "Access Across Devices (6 Months)",
      description: "Practice seamlessly on desktop, tablet, or mobile.",
    },
  ],
};

const InsideSimulator = [
  "Meets PMP® training hour requirements for certification eligibility",
  "Full-length mock exams under real exam pressure",
  "Instant answer explanations focused on PMI® mindset",
  "Performance breakdown by topic and domain",
  "6-month access across all devices",
];

const AdvancedSimulatorTools = [
  {
    title: "Mastery Builder",
    description:
      "Identify weak areas and focus on questions needing improvement.",
  },
  {
    title: "Review Grid",
    description:
      "Mark and revisit questions instantly during exams.",
  },
  {
    title: "Unanswered Mode",
    description:
      "Simulate real exam pressure by tracking unanswered questions.",
  },
  {
    title: "Save & Resume Session",
    description:
      "Pause exams and continue anytime across devices.",
  },
  {
    title: "Auto-Save Exam",
    description:
      "Progress saved automatically everyfew minutes.",
  },
  {
    title: "Comprehensive Score Report",
    description:
      "Detailed performance reports by process group and PMBOK® topics.",
  },
    {
    title: "Exam History",
    description:
      "Access past exams, scores, and performance trends.",
  },
  {
    title: "Email Report & History",
    description:
      "Receive detailed exam reports via email.",
  },
  {
    title: "Student Feedback System",
    description:
      "Submit feedback to help improve questions and content.",
  },
];

const PfMPExamSimulator = () => {
  return (
    <>
      <NavHeroSection
        title="PMP Exam Simulator"
        description="Our PMP® Exam Prep Course is aligned with the latest PMI® PMP Exam Content Outline (ECO) and designed for professionals preparing for certification success. The course combines structured learning, realistic exam simulations, and in-depth explanations to help you understand concepts, apply best practices, and confidently handle situational PMP-style questions—exactly as they appear on exam day."
        descriptionsecond=""
        sideImage={InnerPage}
      />

      <AuthorizedTrainingPartner
        title="PMP® Exam Simulator"
        subtitle="Get Certified for PMP®; world's most trusted Project Management Certification"
        bullets={[
          {
            text: "Step-by-Step Training Aligned with the Latest Exam Standards",
          },
          { text: "Expert Instructors with Real-World Project Experience" },
          { text: "100% Online, Flexible Learning" },
          { text: "PMI®-Approved PDUs" },
          { text: "Instant access to course materials" },
        ]}
        descriptionTop="Prepare with Confidence. Get PMP® Certified."
        descriptionBottom="Designed to help you prepare with confidence and pass the PMP® exam The PMP® certification isn't just another credential—it's the global gold standard for project management professionals seeking recognition, credibility, and career growth."
        image={TrainingImage}
      />

      <div className="md:lg:pt-10 lg:pt-20">
        <PremiumPacks
          showCourseSelect={false}
          heading="Choose your plans"
          description="Three flexible plans designed for different learning needs and timelines."
        />
      </div>

      <section className="bg-white pb-10 lg:pt-0 lg:pb-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-5 lg:gap-10 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Thorough Features for Maximum Value
              </h2>
              <p className="text-paragraph text-sm font-normal mt-1 w-full leading-[26px]">
                The PMP® Exam Simulator is designed to help candidates practice
                under real exam conditions before test day. It offers realistic,
                PMP®-style mock exams aligned with the latest PMI® Exam Content
                Outline, including People, Process, and Business Environment
                domains. With timed exams, detailed explanations, and
                performance analytics, learners can identify weak areas, build
                exam stamina, and develop the PMI® mindset required to succeed.
                This simulator ensures confident, focused preparation for
                passing the PMP® exam on the first attempt.
              </p>
            </div>
            <div>
              <h4 className="text-Black_light  text-xl font-bold mb-4 md:mb-6">
                Key Value Bullets
              </h4>
              <ul className="space-y-3 md:space-y-4 lg:space-y-6  self-stretch justify-start text-paragraph text-sm font-normal leading-[26px]">
                {examFeatures.map((text, index) => (
                  <li
                    key={index}
                    className="flex gap-2 lg:gap-6 self-stretch justify-start items-center"
                  >
                    <div className="w-10 h-10 flex items-center p-2.5 justify-center  relative bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
                      <ExamsIcon />
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-10 lg:pt-0 lg:pb-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-center items-center mb-6 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Why Choose Our PMP® Exam Simulator?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3">
            {accessCard.cards.map((card) => (
              <div
                key={card.id}
                className="p-5 bg-light-blue rounded-[20px] text-center transition"
              >
                <div className="w-[60px] h-[60px] flex items-center justify-center m-auto relative bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
                  {" "}
                  <card.icon />
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
      </section>
      
            <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-7 items-center">
            <div className="flex flex-col gap-3">
              <h2 className="self-stretch justify-start text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Inside the Simulator
              </h2>
              <ul className="space-y-1  self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1">
                {InsideSimulator.map((text, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 self-stretch justify-start"
                  >
                    <span className="text-[8px]">•</span> <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full ">
              <video
                className="w-full object-cover rounded-2xl md:rounded-[28.10px]"
                controls
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <ScreenshortsSlider id="four" />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-center items-center mb-6">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] text-center">
              Advanced Simulator Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {AdvancedSimulatorTools.map((item, index) => (
              <div
                key={index}
                className="p-5 md:p-7 bg-white text-center transition"
              >
                <h4 className="text-Black_light text-base md:text-xl font-bold mb-2">
                  {item.title}
                </h4>
                <p className="text-paragraph text-sm font-normal leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials id="two" /> 
      <StartFreeTrial />
        <div className="-mt-10 md:-mt-20 relative">
      <Faq limit={5} />
      </div>
      <TopFooterSection />

    </>
  );
};

export default PfMPExamSimulator;
