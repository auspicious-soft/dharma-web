import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import InnerPage from "@/assets/inner-page.jpg";
import TrainingImage from "@/assets/ExamSimulators/PMPExamSimulatorPMIATP.png";
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
import { getSubscriptionUrl } from "@/utils/links";

const examFeatures = [
  "Based on the latest PMP® Exam Content Outline (ECO)",
  "Realistic exam prep questions",
  "Detailed Explanations for every question",
  "Simulated exam environment",
  "Personalized reports, exam dashboard and PMP exam tips included",
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
      title: "Smart Value Prep Practice Sets",
      description:
        "An on-demand, cost-effective way to prepare for your exam",
    },
    {
      id: 6,
      icon: HatIcon,
      title: "Access Across Devices ",
      description: "Practice seamlessly on desktop, tablet, or mobile.",
    },
  ],
};

const InsideSimulator = [
  "Full-length mock exams under real exam pressure",
  "Instant feedback and analysis",
  "Performance breakdown by domain",
  "Measure Your Performance",
  "Retake exams as many times you like",
];

const AdvancedSimulatorTools = [
  {
    title: "Mastery Builder",
    description:
      "Identify weak areas and focus on questions needing improvement.",
  },
  {
    title: "Review Grid",
    description: "Mark and revisit questions instantly during exams.",
  },
  {
    title: "Unanswered Mode",
    description:
      "Simulate real exam pressure by tracking unanswered questions.",
  },
  {
    title: "Save & Resume Session",
    description: "Pause exams and continue anytime across devices.",
  },
  {
    title: "Auto-Save Exam",
    description: "Progress saved automatically everyfew minutes.",
  },
  {
    title: "Comprehensive Score Report",
    description:
      "Detailed performance reports by process group and PMBOK® topics.",
  },
  {
    title: "Measure Your Knowledge",
    description: "Reports to review your performance by Exam Domain, scoring trends over time",
  },
  {
    title: "Student Feedback System",
    description: "Submit feedback to help improve questions and content.",
  },
];
const pmpExamSimulatorFaqs = [
  {
    question: "What is the PMP® Exam Simulator?",
    answer:
      "The vCare PMP® Exam Simulator is a comprehensive online exam preparation tool designed to replicate the real PMP® exam experience. It provides full-length practice exams with realistic, scenario-based questions aligned with the latest PMP® Exam Content Outline. The simulator helps you understand question patterns, exam structure, and timing before exam day.",
  },
  {
    question: "What are the benefits of using the PMP® Exam Simulator?",
    answer:
      "Practicing with a realistic exam simulator is essential for exam success. It allows you to experience the actual test format, question style, and time constraints in a controlled environment. Our simulator includes detailed explanations for both correct and incorrect answers, helping you understand the reasoning behind each option. Domain-wise performance analytics and progress tracking enable you to identify strengths, close knowledge gaps, and improve strategically before the real exam.",
  },
  {
    question: "How will I know when I’m ready to take the PMP® exam?",
    answer:
      "You’ll know you’re ready when you consistently achieve strong scores across domains and feel confident navigating scenario-based questions under timed conditions. Many candidates aim to score 75% or higher in multiple full-length simulations before scheduling their exam.",
  },
  {
    question: "How often should I use the PMP® Exam Simulator?",
    answer:
      "You can use the simulator as often as needed during your access period. Taking multiple practice exams allows you to track progress, strengthen weak areas, and refine your exam strategy over time.",
  },
  {
    question: "What if I have questions about the PMP® Exam Simulator?",
    answer:
      "If you have any questions or need assistance, our support team is ready to help. Simply reach out via our contact page or email us at team@vcareprojectmanagement.com.",
  },
];

const PMPExamSimulator = () => {
  return (
    <>
      <NavHeroSection
        title="PMP® Exam Simulator"
        description="Our PMP® Exam Simulator is aligned with the latest PMP® Exam Content Outline (ECO) and latest PMBOK and designed for professionals preparing for certification success. It provides realistic exam simulations, and in-depth explanations to help you understand concepts, apply best practices, and confidently handle situational PMP-style questions—exactly as they appear on exam day."
        descriptionsecond=""
        sideImage={InnerPage}
      />

      <AuthorizedTrainingPartner
        title="PMP® Exam Simulator"
        subtitle="Get Certified for PMP®, world's most trusted Project Management Certification
A realistic, full-length simulation exam designed to help you assess readiness and prepare for the PMP® certification."
        bullets={[
          {
            text: "Instant access from any web browser",
          },
          {
            text: "Aligned with the latest PMBOK and PMP® Exam Content Outline",
          },
          { text: "Full-length PMP exam simulations" },
          { text: "1,850+ realistic practice questions" },
          { text: "Detailed answer explanations" },
          { text: "Domain-wise performance analytics" },
          { text: "PMI® Approved 40 PDUs" },
        ]}
        descriptionTop="Prepare with Confidence. Get PMP® Certified."
        descriptionBottom="Designed to help you prepare with confidence and pass the PMP® exam. The PMP® certification isn't just another credential—it's the global gold standard for project management professionals seeking recognition, credibility, and career growth."
        image={TrainingImage}
      />

      <div className="md:lg:pt-10 lg:pt-20">
        <PremiumPacks
          showCourseSelect={false}
          courseKey="PMP"
          heading="Choose your plan"
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
                passing the PMP® exam on the first attempt.The PMP® Exam
                Simulator is designed to help candidates practice under real
                exam conditions before test day. It offers realistic, PMP®-style
                mock exams aligned with the latest PMBOK and PMI® Exam Content
                Outline, including People, Process, and Business Environment
                domains. With timed exams, detailed explanations, and
                performance analytics, learners can identify weak areas, build
                exam stamina, and develop the PMI® mindset required to succeed.
                This simulator ensures confident, focused preparation for
                passing the PMP® exam on the first attempt.
              </p>
            </div>
            <div>
              {/* <h4 className="text-Black_light  text-xl font-bold mb-4 md:mb-6">
                Key Value Bullets
              </h4> */}
              <ul className="space-y-3 md:space-y-4 lg:space-y-6  self-stretch justify-start text-paragraph text-sm font-normal leading-[26px]">
                {examFeatures.map((text, index) => (
                  <li
                    key={index}
                    className="flex gap-2 lg:gap-3 self-stretch justify-start items-center"
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
        <Faq limit={5} faqs={pmpExamSimulatorFaqs} />
      </div>
      <TopFooterSection
        content={{
          title: "Advance Your Career",
          description:"Global demand for project professionals continues to rise, with millions of new roles projected over the next decade. Industries such as IT, construction, manufacturing, and healthcare are expanding rapidly, while many mature economies face talent shortages.Organizations need project leaders who connect delivery to business value and long-term impact. Strengthening your credentials today positions you for tomorrow’s opportunities.",
          pointsIntro:
            "Earning your PMP® sets you apart:",
          points: [
            "Higher earning potential",
            "Greater competitiveness in PM roles",
            "Access to enterprise leadership opportunities",
            "Globally recognized executive credibility",
          ],
          buttonText: "Start PMP Preparation Today",
          buttonLink: getSubscriptionUrl("PMP"),
        }}
      />
    </>
  );
};

export default PMPExamSimulator;
