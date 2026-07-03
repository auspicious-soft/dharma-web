import React from "react";
import InnerPage from "@/assets/inner-page.jpg";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import CertificateImage from "@/assets/certificate-image.png";
import TrainingImage from "@/assets/training-image.png";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import PmiAtpBadge from "@/components/ReusableComponents/PmiAtpBadge/PmiAtpBadge";
import { PremiumPacks } from "@/components/ReusableComponents/PlanSection/PremiumPacks";
import { Button } from "@/components/ui/button";
import { getSubscriptionUrl } from "@/utils/links";
import {
  BarChart3,
  BookOpen,
  HelpCircle,
  Layers,
  UserRoundCheck,
  Video,
} from "lucide-react";

const includedWithPurchase = [
  "Flexible Learning - 100% self-paced access to the complete PfMP® course. Study anytime, anywhere, on any device.",
  "Aligned to PMI Standards - Built in line with the latest PfMP® Examination Content Outline (ECO) and The Standard for Portfolio Management.",
  "24 Professional Development Units (PDUs) required to maintain your existing PMI certificates.",
  "Comprehensive Coverage - In-depth lessons across all key domains.",
  "Instant access to course materials.",
];

const modules = [
  {
    title: "Module 00 - PfMP Kick-off",
    description:
      "Welcome to your PfMP certification journey. Begin with a clear course structure, study roadmap, preparation strategy, and key milestones to maximize your certification success.",
  },
  {
    title: "Module 01 - Introduction to PfMP",
    description:
      "Understand the PfMP credential, its global recognition, and the value it brings to senior leaders managing strategic portfolios.",
  },
  {
    title: "Module 02 - PfMP Application Process",
    description:
      "Learn eligibility criteria, experience requirements, application submission steps, panel review expectations, and common mistakes to avoid.",
  },
  {
    title:
      "Module 03 - Introduction to Portfolio, Program & Project Management",
    description:
      "Explore how portfolios align with strategy, how programs coordinate related initiatives, and how projects deliver specific outputs.",
  },
  {
    title: "Module 04 - Portfolio Management Overview & Organization",
    description:
      "Understand portfolio structures, governance models, leadership roles, PMOs, and decision frameworks that enable strategic execution.",
  },
  {
    title: "Module 05 - Portfolio Management Process Groups",
    description:
      "Learn initiation, planning, execution, optimization, monitoring, and control processes used to select, prioritize, and oversee portfolio components.",
  },
  {
    title: "Module 06 - Portfolio Strategic Management",
    description:
      "Align investments with business strategy by evaluating objectives, prioritizing initiatives, allocating funding, and balancing investments.",
  },
  {
    title: "Module 07 - Portfolio Governance Management",
    description:
      "Establish governance that supports accountability, transparency, risk oversight, approvals, escalation paths, and policy compliance.",
  },
  {
    title: "Module 08 - Portfolio Performance Management",
    description:
      "Measure portfolio health using KPIs, dashboards, benefits realization, capacity planning, optimization, and corrective actions.",
  },
  {
    title: "Module 09 - Portfolio Communication Management",
    description:
      "Build communication strategies, manage stakeholder expectations, present executive reports, and maintain alignment across leadership teams.",
  },
  {
    title: "Module 10 - Portfolio Risk Management",
    description:
      "Identify, assess, prioritize, and respond to portfolio-level risks with risk governance, scenario analysis, contingency planning, and ongoing monitoring.",
  },
];

const learningExperience = [
  {
    title: "PfMP® On-Demand Learning",
    description:
      "See how our flexible self-paced course helps you build skills and prepare for PfMP® certification anytime, anywhere.",
  },
  {
    title: "PfMP® On-Demand Certification Fast Track",
    description:
      "Discover expert-led lessons and exam-focused content designed to help you pass with confidence.",
  },
];

const examChallenge = [
  {
    title: "Before",
    description:
      "Studying The Standard for Portfolio Management and doing mock exams was often enough.",
  },
  {
    title: "Today",
    description:
      "The PfMP exam is evolving to reflect the evolving profession, modern delivery methods, and scenario-based questions testing strategic judgment.",
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

const pfmpOnDemandFaqs = [
  {
    question: "1. What is the PfMP® On-Demand Course?",
    answer:
      "A self-paced online training program designed to help you build portfolio management skills and prepare for the PfMP® certification exam.",
  },
  {
    question: "2. Who is this course for?",
    answer:
      "If you're an executive or senior-level practitioner managing a portfolio of projects, programs and operations aligned with organizational strategy and focused on doing the right work, then this is the right choice for you.",
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
      "6. Does this course satisfy the training hours requirement for the PfMP® exam?",
    answer:
      "Yes. The course is designed to provide the training hours required for PfMP® application eligibility.",
  },
  {
    question:
      "7. Is the course aligned with the latest PfMP® Exam Content Outline?",
    answer:
      "Yes. The training is aligned with the latest PfMP® ECO and current exam trends.",
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
    question: "12. Do I need prior portfolio management experience?",
    answer:
      "Yes, please refer to the PMI website for eligibility requirements.",
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
    answer: "Refund terms depend on the package and purchase conditions.",
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

const pfmpSuccessBullets = [
  "35% more successful programs with mature portfolio practices",
  "Strengthens strategic thinking at enterprise level",
  "Builds global credibility in strategic decision-making",
  "Higher earning potential for PfMP® holders",
  "Opens doors to executive portfolio leadership roles",
  "Strengthens your professional profile",
];

const PfMPOnDemandCourse = () => {
  return (
    <>
      <NavHeroSection
        title="Portfolio Management Professional (PfMP)® On Demand Course"
        description="Our PfMP® On-Demand Course is designed to strengthen your portfolio management capability and prepare you confidently for the Portfolio Management Professional (PfMP®) certification exam."
        descriptionsecond="This comprehensive self-paced online course includes engaging lessons, guided learning modules, and video content that allow you to study anytime, anywhere, at your own pace while building a strong understanding of advanced portfolio management concepts. Aligned with the latest PfMP® Exam Content Outline (ECO), and the latest Standard for Portfolio Management. The course offers 24 Professional Development Units (PDUs) required to maintain your existing PMI certificates."
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
                  <li key={index} className=" gap-2 self-stretch justify-start">
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img
                src={TrainingImage}
                alt="PfMP on-demand learning"
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
              PfMP® On-Demand Course
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1">
              Self-paced PfMP® certification training designed for busy
              professionals who want flexible, expert-led learning.
            </p>
            <p className="text-Black_light text-sm font-semibold mt-2">
              Included FREE when you enroll in ANY live class
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-light-blue rounded-[8px] p-4 md:p-5"
              >
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
                Receive Your 24 Professional Development Units (PDUs)
              </h2>
              <p className="text-paragraph text-sm font-normal">
                Earn a personalized certificate from a trusted PMI Premier
                Authorized Training Provider required for PfMP® application
                submission.
              </p>
              <p className="text-paragraph text-sm font-normal">
                This certificate validates your formal portfolio management
                education. This online course provides an opportunity to earn 24
                professional development units (PDUs) while building valuable
                skills and may be used towards maintaining eligible PMI
                certifications.
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
              The PfMP® Exam Has Become More Challenging
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
        courseKey="PfMP"
        heading="Upgrade Your PfMP Preparation"
        description="Go all-in by adding practice exams and simulators to your learning."
      />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Bonus Learning Resources Included
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1">
              Enhance your PfMP® preparation with valuable extras designed to
              boost success.
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
        courseKey="PfMP"
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
        faqs={pfmpOnDemandFaqs}
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
                Start your PfMP® journey with our Exam Prep Course and get what
                you need to study, prepare, and succeed. PfMP® is a globally
                respected certification in portfolio management, recognized for
                validating your ability to align investments with strategy,
                optimize resources, and maximize enterprise value. Learn the
                question format through sample scenarios and prepare with
                confidence.
              </p>
              <Button className="mt-6" asChild>
                <a href={getSubscriptionUrl("PfMP")}>Get Access Now</a>
              </Button>
            </div>

            <ul className="space-y-2 list-disc self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1">
              {pfmpSuccessBullets.map((text, index) => (
                <li key={index} className=" gap-2 self-stretch">
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Testimonials id="two" />
    </>
  );
};

export default PfMPOnDemandCourse;
