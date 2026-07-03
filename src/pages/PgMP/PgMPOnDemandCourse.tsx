import React from "react";
import InnerPage from "@/assets/inner-page.jpg";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import CertificateImage from "@/assets/certificate-image.png";
import TrainingImage from "@/assets/training-image.png";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import PmiAtpBadge from "@/components/ReusableComponents/PmiAtpBadge/PmiAtpBadge";
import { PremiumPacks } from "@/components/ReusableComponents/PlanSection/PremiumPacks";
import { Button } from "@/components/ui/button";
import { getSubscriptionUrl } from "@/utils/links";
import { pgmpLeadershipFooterContent } from "@/data/courseFooterContent";
import {
  BarChart3,
  BookOpen,
  HelpCircle,
  Layers,
  UserRoundCheck,
  Video,
} from "lucide-react";

const includedWithPurchase = [
  "Flexible Learning - 100% self-paced access to the complete PgMP® course. Study anytime, anywhere, on any device.",
  "Aligned to PMI Standards - Built in line with the latest PgMP® Examination Content Outline (ECO) and Standard for Program Management - Fifth Edition for focused exam preparation.",
  "Earn 24 PMI PDUs and Maintain Your PMI Certifications.",
  "Comprehensive Coverage - In-depth lessons across all key domains.",
  "Instant access to course materials.",
];

const modules = [
  {
    title: "Module 01 - PgMP Introduction",
    description:
      "Understand the PgMP credential and its professional value. Explore the global recognition of the PgMP certification, who it is designed for, career benefits, and how it validates advanced program leadership capabilities.",
  },
  {
    title: "Module 02 - PgMP Application",
    description:
      "Master the PgMP application and panel review process. Learn eligibility requirements, application components, experience documentation, common mistakes, and strategies to prepare a strong submission.",
  },
  {
    title: "Module 03 - Introduction to Program Management",
    description:
      "Understand the role of programs in delivering strategy and how program management differs from project and portfolio management.",
  },
  {
    title: "Module 04 - Program Management Principles",
    description:
      "Explore the principles that guide effective program management, including value delivery, stakeholder alignment, governance, leadership, adaptability, and strategic focus.",
  },
  {
    title: "Module 05 - Program Strategy Alignment",
    description:
      "Align programs with organizational goals and priorities by connecting objectives with strategy and measurable value.",
  },
  {
    title: "Module 06 - Program Benefits Management",
    description:
      "Identify, plan, track, transition, and optimize benefits across the program lifecycle to sustain business outcomes.",
  },
  {
    title: "Module 07 - Program Stakeholder Engagement",
    description:
      "Build support and manage expectations across sponsors, executives, teams, and customers with practical stakeholder engagement techniques.",
  },
  {
    title: "Module 08 - Program Governance",
    description:
      "Establish governance structures, approvals, reporting models, and escalation paths that enable disciplined execution.",
  },
  {
    title: "Module 09 - Collaboration",
    description:
      "Strengthen teamwork across projects and functions through communication, trust, alignment, and integrated decision-making.",
  },
  {
    title: "Module 10 - Program Life Cycle Management",
    description:
      "Manage the complete program lifecycle from initiation through closure to support strategic outcomes.",
  },
  {
    title: "Module 11 - Program Formulation",
    description:
      "Define program vision, scope, governance model, roadmap, business case, and success criteria for a strong start.",
  },
  {
    title: "Module 12 - Program Planning",
    description:
      "Create integrated schedules, budgets, resource plans, risk strategies, communication plans, and dependency maps.",
  },
  {
    title: "Module 13 - Program Delivery",
    description:
      "Execute and control delivery performance, benefits progress, issues, risks, interdependencies, and change during execution.",
  },
  {
    title: "Module 14 - Program Closing",
    description:
      "Complete transitions, confirm benefits ownership, release resources, document lessons learned, and ensure sustainable outcomes.",
  },
];

const learningExperience = [
  {
    title: "PgMP® On-Demand Learning",
    description:
      "See how our flexible self-paced course helps you build skills and prepare for PgMP® certification anytime, anywhere.",
  },
  {
    title: "PgMP® On-Demand Certification Fast Track",
    description:
      "Discover expert-led lessons and exam-focused content designed to help you pass with confidence.",
  },
];

const examChallenge = [
  {
    title: "Before",
    description: "Studying the Standard for Program Management was often enough.",
  },
  {
    title: "Today",
    description:
      "The PgMP exam is evolving to reflect the evolving profession, modern delivery methods, and stronger alignment with PMBOK®.",
  },
  {
    title: "Why This Matters",
    description:
      "Relying on outdated materials can leave major knowledge gaps. You need current, structured preparation that reflects how the exam is tested today.",
  },
];

const bonusLearningResources = [
  {
    icon: Layers,
    title: "Flash Cards",
    description: "Quick revision anywhere",
  },
  {
    icon: BookOpen,
    title: "Knowledge Encyclopedia",
    description: "Key concepts simplified",
  },
  {
    icon: HelpCircle,
    title: "Confusion Buster",
    description: "Clear difficult topics fast",
  },
  {
    icon: BarChart3,
    title: "Progress Tracker",
    description: "Monitor your study journey",
  },
  {
    icon: UserRoundCheck,
    title: "Mentor Access",
    description: "Guidance when you need it",
  },
  {
    icon: Video,
    title: "Webinars",
    description: "Access learning webinars with PDUs",
  },
];

const pgmpOnDemandFaqs = [
  {
    question: "1. What is the PgMP® On-Demand Course?",
    answer:
      "A self-paced online training program designed to help you build project management skills and prepare for the PgMP® certification exam.",
  },
  {
    question: "2. Who is this course for?",
    answer:
      "It is for professionals having the ability to manage multiple, related projects and navigate complex activities that span functions, organizations, regions or cultures.",
  },
  {
    question: "3. Is the course fully online?",
    answer:
      "Yes. The course is 100% online and can be accessed anytime, anywhere.",
  },
  {
    question: "4. Can I study at my own pace?",
    answer:
      "Yes. You can learn based on your schedule and progress through the content at your own speed.",
  },
  {
    question: "5. How long do I get access?",
    answer: "Access duration depends on your package or enrollment plan.",
  },
  {
    question:
      "6. Does this course satisfy the training hours requirement for the PgMP® exam?",
    answer:
      "Yes. The course is designed to provide the training hours required for PgMP® application eligibility.",
  },
  {
    question:
      "7. Is the course aligned with the latest PgMP® Exam Content Outline?",
    answer:
      "Yes. The training is aligned with the latest PgMP® ECO and current exam trends.",
  },
  {
    question: "8. Will I receive a certificate after completion?",
    answer:
      "Yes. Eligible learners receive a certificate of completion/training hours.",
  },
  {
    question: "9. Does it include practice questions or mock exams?",
    answer:
      "Depending on the package selected, practice exams or simulators may be included.",
  },
  {
    question: "10. What learning materials are included?",
    answer:
      "Video lessons, structured modules, downloadable resources, and exam preparation guidance.",
  },
  {
    question: "11. Can I access the course on mobile?",
    answer:
      "Yes, most on-demand platforms support mobile, tablet, and desktop access.",
  },
  {
    question: "12. Do I need prior program management experience?",
    answer: "Yes, please refer to the PMI website for eligibility requirements.",
  },
  {
    question: "13. How quickly can I complete the course?",
    answer:
      "Many learners complete it within a few weeks, depending on study pace.",
  },
  {
    question: "14. Do you provide support if I have questions?",
    answer:
      "Yes. Support options depend on your plan and may include email or mentoring assistance.",
  },
  {
    question: "15. Is there a refund policy?",
    answer:
      "Refund terms depend on the package and purchase conditions.",
  },
  {
    question: "16. How do I enroll?",
    answer:
      "Simply purchase the course online and access online via our portal.",
  },
  {
    question: "17. Why choose this course over free resources?",
    answer:
      "It provides structured learning, updated content, expert guidance, and a faster path to exam readiness.",
  },
];

const pgmpSuccessBullets = [
  "Deliver more successful programs through proven program management practices.",
  "Strengthens strategic thinking at enterprise level",
  "Builds global credibility as a strategic program leader.",
  "Higher earning potential for PgMP® holders",
  "Opens doors to Senior Program manager and executive leadership roles",
  "Strengthens your professional profile",
];

const PgMPOnDemandCourse = () => {
  return (
    <>
      <NavHeroSection
        title="Program Management Professional (PgMP)® On Demand Course"
        description="Our PgMP® On-Demand Course is designed to strengthen your program management capability and prepare you confidently for the Program Management Professional (PgMP®) certification exam."
        descriptionsecond="This comprehensive self-paced online course includes engaging lessons, guided learning modules, and video content that allow you to study anytime, anywhere, at your own pace while building a strong understanding of advanced program management concepts. Aligned with the latest PgMP® Exam Content Outline (ECO), and the latest Standard for Program Management. The course offers 24 Professional Development Units (PDUs) required to maintain your existing PMI certificates."
        sideImage={InnerPage}
      />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-7 items-start">
            <div className="flex flex-col gap-3">
              <h2 className="self-stretch justify-start text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                What&apos;s Included with Your Purchase
              </h2>
              <ul className="space-y-1 list-disc self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1">
                {includedWithPurchase.map((text, index) => (
                  <li
                    key={index}
                    className=" gap-2 self-stretch"
                  >
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img
                src={TrainingImage}
                alt="PgMP on-demand learning"
                className="rounded-3xl w-full object-cover"
              />
              <PmiAtpBadge />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6 md:mb-10 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              PgMP® On-Demand Course
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1">
              Self-paced PgMP® certification training designed for busy
              professionals who want flexible, expert-led learning.
            </p>
            <p className="text-Black_light text-sm font-semibold mt-2">
              Included FREE when you enroll in ANY live class
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {modules.map((module, index) => (
              <div key={index} className="bg-light-blue rounded-[8px] p-4 md:p-5">
                <h3 className="text-Black_light text-base md:text-lg font-semibold mb-2">
                  {module.title}
                </h3>
                <p className="text-paragraph text-sm font-normal leading-6">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-16">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-7 items-center">
            <div className="flex flex-col gap-3">
              <h2 className="self-stretch justify-start text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Receive Your 24 Training Hours Certificate
              </h2>
              <p className="text-paragraph text-sm font-normal">
                Earn a personalized certificate from a trusted PMI Premier
                Authorized Training Provider. This can be used to maintain your
                already earned PMI certifications.
              </p>
              <p className="text-paragraph text-sm font-normal">
                This certificate validates your formal program management
                education and supports your PgMP® exam application with PMI®.
                This online course provides an opportunity to earn PDUs while
                building valuable skills.
              </p>
            </div>
            <div className="w-full">
              <img
                src={CertificateImage}
                alt="Certificate Image"
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] text-center">
              See the Learning Experience in Action
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-7 items-center text-center">
            {learningExperience.map((item, index) => (
              <div key={index} className="w-full">
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
                <h3 className="self-stretch justify-start text-Black_light text-xl md:text-3xl font-bold md:leading-[46px] mt-3 md:mt-5 mb-2">
                  {item.title}
                </h3>
                <p className="text-paragraph text-sm font-normal leading-[26px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] text-center">
              The PgMP® Exam Has Become More Challenging
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {examChallenge.map((item, index) => (
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

      <PremiumPacks
        showCourseSelect={false}
        courseKey="PgMP"
        heading="Upgrade Your PgMP Preparation"
        description="Go all-in by adding practice exams and simulators to your learning."
      />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Bonus Learning Resources Included
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1">
              Enhance your preparation with valuable extras designed to boost
              success.
            </p>
          </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {bonusLearningResources.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white p-5 md:p-6 rounded-[12px] min-h-[150px]"
                >
                  <div className="w-12 h-12 rounded-[10px] bg-light-blue text-primary_blue flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-Black_light text-base md:text-lg font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-paragraph text-sm font-medium leading-6">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <StartFreeTrial
        courseKey="PgMP"
        headings="Start Your Free Trial"
        description="Test-drive our exam simulators, practice exams, study bundles, and self-paced learning resources before you buy."
        features={[
          "Explore on-demand lessons, exam prep tools, and practice tests.",
          "Real exam-style simulation with performance insights",
          "Detailed explanations and domain-wise analytics",
          "Study anytime, anywhere",
          "No credit card required for trial access",
        ]}
        buttonText="Start a Free Trial"
      />

      <Faq
        faqs={pgmpOnDemandFaqs}
        hideButton
        heading="Frequently Asked Questions"
        subheading="General FAQs"
      />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-5 md:gap-8 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Certified Exam Ready
              </h2>
              <p className="text-paragraph text-sm font-normal mt-3 leading-[26px]">
                Start your PgMP® journey with our Exam Prep Course and gain the
                knowledge, skills, and confidence to pass your exam. Learn
                through realistic scenarios and prepare with confidence.
              </p>
              <Button className="mt-6" asChild>
                <a href={getSubscriptionUrl("PgMP")}>Get Access Now</a>
              </Button>
            </div>

            <ul className="space-y-2 list-disc self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1">
              {pgmpSuccessBullets.map((text, index) => (
                <li
                  key={index}
                  className="gap-2 self-stretch"
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Testimonials id="two" />
      <TopFooterSection content={pgmpLeadershipFooterContent} />
    </>
  );
};

export default PgMPOnDemandCourse;
