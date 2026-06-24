import InnerPage from "@/assets/inner-page.jpg";
import PmpLogo from "@/assets/pmp-logo.png";
import TrainingImage from "@/assets/training-image.png";
import CertificateImage from "@/assets/certificate-image.png";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import PricingComparison from "@/components/ReusableComponents/PricingComparisonSection/PricingComparison";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
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


const keyValueBullets = [
  "Fully aligned with the latest Risk Management Practice Guide",
  "Expert instructors with real-world project experience",
  "Earn 30 PMI® approved PDUs",
  "100% online, flexible learning",
  "Instant access to course materials",
];

const modules = [
  {
    title: "Module 00 - Overview",
    subtitle: "Begin your path to PMI-RMP® success.",
    description:
      "Review the course structure, study roadmap, preparation strategy, and key milestones. Learn how to navigate the program effectively and maximize your readiness for certification success.",
  },
  {
    title: "Module 01 - Introduction",
    subtitle: "Understand the credential, eligibility, and exam structure.",
    description:
      "Explore the global recognition of the PMI-RMP® certification, who it is designed for, eligibility criteria, application process, exam format, scoring approach, and preparation best practices.",
  },
  {
    title: "Module 02 - Risk Management Foundations",
    subtitle: "Build the core principles of project risk management.",
    description:
      "Understand uncertainty, threats, opportunities, risk appetite, tolerance, governance principles, and how proactive risk management improves project and business outcomes.",
  },
  {
    title: "Module 03 - Risk Strategy & Planning",
    subtitle: "Establish the framework for managing risk effectively.",
    description:
      "Learn how to create risk management plans, define methodologies, assign ownership, establish thresholds, allocate reserves, and integrate risk planning into project delivery.",
  },
  {
    title: "Module 04 - Risk Identification",
    subtitle: "Recognize threats and opportunities early.",
    description:
      "Explore structured techniques such as brainstorming, interviews, assumptions analysis, checklists, lessons learned, root cause analysis, and document reviews to identify risks comprehensively.",
  },
  {
    title: "Module 05 - Risk Analysis",
    subtitle: "Assess exposure and prioritize responses.",
    description:
      "Learn qualitative and quantitative risk analysis techniques including probability-impact matrices, urgency assessments, EMV, simulations, sensitivity analysis, and decision trees.",
  },
  {
    title: "Module 06 - Risk Response Planning",
    subtitle: "Develop practical actions for uncertainty.",
    description:
      "Understand response strategies for threats and opportunities such as avoid, mitigate, transfer, accept, exploit, enhance, share, escalate, and contingency planning.",
  },
  {
    title: "Module 07 - Risk Monitoring, Reporting & Governance",
    subtitle: "Track risks and maintain executive visibility.",
    description:
      "Learn how to monitor triggers, review residual risks, measure response effectiveness, update registers, escalate issues, and communicate through dashboards and reports.",
  },
  {
    title: "Module 08 - Stakeholder Engagement & Risk Culture",
    subtitle: "Create a proactive and transparent environment.",
    description:
      "Learn how to engage stakeholders, manage perceptions, reduce bias, improve collaboration, and build a culture where teams openly identify and manage risk.",
  },
  {
    title: "Module 09 - Conclusion",
    subtitle: "Tie together the concepts and techniques from the course.",
    description:
      "Review key domains, practice scenario-based questions, improve time management, avoid common traps, and apply success strategies.",
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

const pmiRmpOnDemandFaqs = [
  {
    question: "1. What is the PMI-RMP® Self-Paced Course?",
    answer:
      "A self-paced online training program designed to help you build risk management skills and prepare for the PMI-RMP® certification exam.",
  },
  {
    question: "2. Who is this course for?",
    answer:
      "It is ideal for project managers, risk managers, functional managers, and C-suite executives seeking career growth.",
  },
  {
    question: "3. Is the course fully online?",
    answer: "Yes. The course is 100% online and can be accessed anytime, anywhere.",
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
    question: "6. Does this course satisfy the training hours requirement for the PMI-RMP® exam?",
    answer:
      "Yes. The course is designed to provide the training hours required for PMI-RMP® application eligibility.",
  },
  {
    question: "7. Is the course aligned with the latest PMI-RMP® Exam Content Outline?",
    answer:
      "Yes. The training is aligned with the latest PMI-RMP® ECO and current exam trends.",
  },
  {
    question: "8. Will I receive a certificate after completion?",
    answer:
      "Yes. Learners receive a certificate of completion or training hours after completing the course.",
  },
  {
    question: "9. Does it include practice questions or mock exams?",
    answer:
      "Depending on the package selected, practice exams or simulators may be included.",
  },
  {
    question: "10. What learning materials are included?",
    answer: "Video lessons, structured modules, and exam preparation guidance.",
  },
  {
    question: "11. How quickly can I complete the course?",
    answer:
      "Many learners complete it within a few weeks, depending on study pace.",
  },
  {
    question: "12. Do you provide support if I have questions?",
    answer:
      "Yes. Support options depend on your plan and may include email or mentoring assistance.",
  },
  {
    question: "13. Is there a refund policy?",
    answer: "Refund terms depend on the package and purchase conditions.",
  },
  {
    question: "14. How do I enroll?",
    answer: "Simply purchase the course online and access it via our portal.",
  },
  {
    question: "15. Why choose this course over free resources?",
    answer:
      "It provides structured learning, updated content, expert guidance, and a faster path to exam readiness.",
  },
];

const examReadyBullets = [
  "36% increase in planned risk management investment by organizations",
  "Demonstrates advanced risk management expertise",
  "Opens doors to leadership roles across industries",
  "Builds credibility in complex project environments",
  "Strengthens your professional profile",
];

const PMIACPOnDemandCourse = () => {
  return (
    <>
      <NavHeroSection
        title="Risk Management Professional (PMI-RMP)® Self-Paced Learning Program"
        description="Our PMI-RMP® Self-Paced Learning Program is designed to strengthen your risk management capability and prepare you confidently for the PMI Risk Management Professional (PMI-RMP®) certification exam."
        descriptionsecond="This comprehensive self-paced online course includes engaging lessons, guided learning modules, and video content that allow you to study anytime, anywhere, at your own pace while building a strong understanding of project risk management concepts. Aligned with the latest PMI-RMP® Examination Content Outline (ECO), the course satisfies the 35 contact hours required to apply for the PMI-RMP® exam."
        sideImage={InnerPage}
      />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-7 items-start">
            <div className="flex flex-col gap-3">
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Build a strong foundation in project risk management
              </h2>
              <p className="text-paragraph text-sm md:text-base leading-[26px] md:leading-[30px]">
                Learn practical tools, techniques, and best practices through a
                flexible program structured across PMI-RMP® domains and designed
                for self-paced learning.
              </p>
              <h3 className="text-Black_light text-xl font-bold mt-3">
                Features
              </h3>
              <ul className="space-y-1 list-disc text-paragraph text-sm font-normal leading-[26px] ml-4">
                {keyValueBullets.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>

            <div>
              <img
                src={TrainingImage}
                alt="PMI-RMP self-paced learning"
                className="rounded-3xl w-full object-cover"
              />
              <div className="bg-white rounded-xl p-5 md:p-7 border border-[#d5dddd] mt-5">
                <div className="flex items-center gap-3">
                  <img
                    src={PmpLogo}
                    alt="Premier Authorized Training Partner"
                    className="w-14 h-14"
                  />
                  <p className="text-[#0a4ba8] text-sm font-medium leading-6">
                    Premier Authorized Training Partner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6 md:mb-10 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              PMI-RMP® Self-Paced Program
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1 max-w-[760px]">
              Self-paced training designed for busy professionals who want
              flexible, expert-led learning. Build a strong foundation in risk
              management principles, processes, and best practices at your own
              pace.
            </p>
            <p className="text-Black_light text-sm font-semibold mt-2">
              Included FREE when you enroll in ANY live class
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {modules.map((module) => (
              <div
                key={module.title}
                className="bg-light-blue rounded-[8px] p-4 md:p-5"
              >
                <h3 className="text-Black_light text-base md:text-lg font-semibold mb-2">
                  {module.title}
                </h3>
                <p className="text-primary_heading text-sm font-semibold leading-6 mb-1">
                  {module.subtitle}
                </p>
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
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Receive Your 30 Training Hours Certificate
              </h2>
              <p className="text-paragraph text-sm font-normal leading-[26px]">
                Earn a personalized certificate from a trusted PMI Premier
                Authorized Training Provider, required for PMI-RMP® application
                submission.
              </p>
              <p className="text-paragraph text-sm font-normal leading-[26px]">
                This certificate validates your formal risk management education
                and supports your PMI-RMP® exam application with PMI®. This
                online course also provides an opportunity to earn professional
                development units (PDUs) while building valuable skills and may
                be used toward maintaining eligible PMI certifications.
              </p>
            </div>
            <div className="w-full">
              <img
                src={CertificateImage}
                alt="PMI-RMP training hours certificate"
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
          <video
            className="w-full max-w-[900px] mx-auto object-cover rounded-2xl md:rounded-[28px]"
            controls
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

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

      <PricingComparison
        heading="Exam Prep Table"
        description="Compare available PMI-RMP® exam preparation options with the same tick-based layout used across our exam prep pages."
      />

      <StartFreeTrial
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
        courseKey="PMI-RMP"
      />

      <Faq
        faqs={pmiRmpOnDemandFaqs}
        hideButton
        heading="Frequently Asked Questions"
      />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-5 md:gap-8 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Certified Exam Ready
              </h2>
              <p className="text-paragraph text-sm font-normal mt-3 leading-[26px]">
                Start your PMI-RMP® journey with our Self-Paced Course and get
                what you need to study, prepare, and succeed. PMI-RMP® is a
                globally respected certification in risk management, recognized
                for validating your advanced knowledge and experience in
                managing risks across complex project environments. Learn the
                question format through sample scenarios and prepare with
                confidence.
              </p>
              <Button className="mt-6" asChild>
                <a href={getSubscriptionUrl("PMI-RMP")}>Get Access Now</a>
              </Button>
            </div>

            <ul className="space-y-2 list-disc text-paragraph text-sm font-normal leading-[26px] ml-4">
              {examReadyBullets.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Testimonials id="two" />
      <TopFooterSection />
    </>
  );
};

export default PMIACPOnDemandCourse;
