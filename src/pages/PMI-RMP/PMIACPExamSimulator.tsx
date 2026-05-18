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
  "Based on the latest PMI-RMP® Practice Guide and Exam Content Outline (ECO)",
  "Realistic exam prep questions",
  "Detailed Explanations for every question",
  "Simulated exam environment",
  "Personalized reports, exam dashboard and RMP exam tips included",
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
        "An on-demand, cost-effective way to prepare for your exam.",
    },
    {
      id: 6,
      icon: HatIcon,
      title: "Access Across Devices",
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
    description: "Reports to review your performance by Exam Domain, scoring trends over time.",
  },
  {
    title: "Student Feedback System",
    description: "Submit feedback to help improve questions and content.",
  },
];
const pmiacpExamSimulatorFaqs = [
  {
    question: "What is the PMI-RMP® Exam Simulator?",
    answer:
      "Our PMI-RMP® Exam Simulator is a comprehensive online exam preparation tool designed to replicate the real RMP® exam experience. It provides full-length practice exams with realistic, scenario-based questions aligned with the latest Exam Content Outline. The simulator helps you understand question patterns, exam structure, and timing before exam day.",
  },
  {
    question: "What are the benefits of using the PMI-RMP® Exam Simulator?",
    answer:
      "Practicing with a realistic exam simulator is essential for exam success. It allows you to experience the actual test format, question style, and time constraints in a controlled environment.Our simulator includes detailed explanations for both correct and incorrect answers, helping you understand the reasoning behind each option. Domain-wise performance analytics and progress tracking enable you to identify strengths, close knowledge gaps, and improve strategically before the real exam.",
  },
  {
    question: "How will I know when I’m ready to take the PMI-RMP® exam?",
    answer:
      "You’ll know you’re ready when you consistently achieve strong scores across domains and feel confident navigating scenario-based questions under timed conditions. Many candidates aim to score 75% or higher in multiple full-length simulations before scheduling their exam.",
  },
  {
    question: "How often should I use the PMI-RMP® Exam Simulator?",
    answer:
      "You can use the simulator as often as needed during your access period. Taking multiple practice exams allows you to track progress, strengthen weak areas, and refine your exam strategy over time.",
  },
  {
    question: "What if I have questions about the PMI-RMP® Exam Simulator?",
    answer:
      "If you have any questions or need assistance, our support team is ready to help. Simply reach out via our contact page or email us at team@vcareprojectmanagement.com.",
  },
];

const PMIACPExamSimulator = () => {
  return (
    <>
      <NavHeroSection
        title="PMI-RMP® Exam Simulator"
        description="Our PMI-RMP® Exam Simulator is aligned with the latest Examination Content Outline and RMP Practice Guide. These questions are designed for professionals preparing to achieve certification success. It includes realistic full-length mock exams, scenario-based questions, domain-focused practice, and detailed explanations to help you master risk management concepts, apply proven practices, and confidently answer situational PMI-RMP® exam questions."
        descriptionsecond=""
        sideImage={InnerPage}
      />

      <AuthorizedTrainingPartner
        title="PMI-RMP® Exam Simulator"
        subtitle="Earn the PMI-RMP®, the globally recognized certification for project risk management professionals.Realistic, full-length simulation exams designed to measure your readiness, strengthen your knowledge, and help you prepare confidently for the certification exam."
        bullets={[
          {
            text: "Instant access from any web browser",
          },
          { text: "Aligned with the latest Exam Content Outline" },
          { text: "Full-length RMP exam simulations" },
          { text: "850+ realistic practice questions" },
          { text: "Detailed answer explanations" },
          { text: "Domain-wise performance analytics" },
          { text: "PMI® Approved PDUs" },
        ]}
        descriptionTop="Prepare with Confidence. Get PMI-RMP® Certified."
        descriptionBottom="Designed to help you prepare with confidence and pass the PMI-RMP® exam. The PMI-RMP® certification is not just another credential—it is the global benchmark for risk management professionals seeking recognition, credibility, and career growth in identifying, assessing, and managing project risks effectively."
        image={TrainingImage}
      />

      <div className="md:lg:pt-10 lg:pt-20">
        <PremiumPacks
          showCourseSelect={false}
          courseKey="PMI-RMP"
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
                The PMI-RMP® Exam Simulator is designed to help candidates
                practice under real exam conditions before test day. It offers
                realistic, PMI-RMP®-style mock exams aligned with the latest
                Examination Content Outline. With timed exams, detailed
                explanations, and performance analytics, learners can identify
                weak areas, build exam stamina, and develop the mindset required
                to succeed. This simulator supports confident, focused
                preparation to maximize success on exam day.
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
              Why Choose Our PMI-RMP® Exam Simulator?
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
        <Faq faqs={pmiacpExamSimulatorFaqs} />
      </div>
      <TopFooterSection
        content={{
          title: "Advance Your Risk Management Career",
          description: (
            <>
             Global demand for professionals who can identify risks, improve decision-making, and protect project outcomes continues to grow. Organizations need leaders who can build effective risk frameworks and strengthen delivery confidence.
              <br />
              <br />
              The PMI-RMP® certification is designed for project professionals and risk practitioners responsible for managing risks aligned with business objectives. Earning this credential helps you stand out and grow into higher-value opportunities.
            </>
          ),
          pointsIntro:
            "Build advanced risk management capability while preparing for the PMI-RMP® certification.",
          pointsHeading: "Achieving your PMI-RMP® strengthens your professional profile:",
          points: [
            "Stronger influence in risk-based decision-making",
            "Recognition as a trusted risk management professional",
            "Enhanced credibility in project governance and controls",
            "Greater opportunities to lead complex, high-risk initiatives",
            "Globally recognized professional credibility",
          ],
          buttonText: "Start PMI-RMP® Preparation Today",
          buttonLink: "/pmi-rmp/pmi-rmp-exam-prep-course",
        }}
      />
    </>
  );
};

export default PMIACPExamSimulator;
