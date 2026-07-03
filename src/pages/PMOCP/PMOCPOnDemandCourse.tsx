import InnerPage from "@/assets/inner-page.jpg";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import CertificateImage from "@/assets/certificate-image.png";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import PmiAtpBadge from "@/components/ReusableComponents/PmiAtpBadge/PmiAtpBadge";
import { getSubscriptionUrl } from "@/utils/links";
import type { FaqItem } from "@/data/faqs";
import {
  DetailIcon,
  ComIcon,
  ChartIcon,
  HourGlassIcon,
  HatIcon,
  EmailIcon,
} from "@/utils/svgicons";

const includedWithPurchase = [
  "100% Self-Paced Learning - Study anytime, anywhere, on any device.",
  "Exam-Focused Content - Aligned with the latest PMI-PMOCP™ Examination Content Outline (ECO).",
  "10 PMI-Approved Training Hours - Meets the education requirement for PMI-PMOCP™ certification eligibility.",
  "Comprehensive Coverage - Covers all key PMO concepts, frameworks, and best practices.",
  "Expert-Led Video Lessons - Learn from an experienced PMI Authorized Training Partner instructor.",
  "Practice Questions - Reinforce your knowledge and assess exam readiness.",
  "Certificate of Completion - Earn a completion certificate after finishing the program.",
];

const courseModules = [
  {
    title: "Module 1 - PMO Foundations",
    subtitle: "Build a strong foundation in modern PMO principles.",
    description:
      "Learn the fundamentals of Project Management Offices (PMOs), their purpose, organizational value, leadership responsibilities, customer-centric practices, and the key success factors required to establish and sustain high-performing PMOs.",
  },
  {
    title: "Module 2 - Understanding Organizational Needs",
    subtitle: "Assess business needs and align PMO capabilities.",
    description:
      "Explore how to identify organizational challenges, understand stakeholder expectations, assess PMO maturity, and evaluate business capabilities to ensure the PMO delivers meaningful value and supports strategic objectives.",
  },
  {
    title: "Module 3 - Designing Strategic PMOs",
    subtitle: "Create a PMO that enables strategic success.",
    description:
      "Discover how to design PMO services, develop a compelling value proposition, establish governance frameworks, define the PMO mandate, and align the PMO with organizational strategy and business priorities.",
  },
  {
    title: "Module 4 - Delivering PMO Services",
    subtitle: "Implement and manage high-value PMO services.",
    description:
      "Learn how to successfully deploy PMO services, manage day-to-day operations, allocate resources effectively, and deliver consistent, customer-focused services that support organizational performance.",
  },
  {
    title: "Module 5 - Optimizing PMO Performance",
    subtitle: "Drive continuous improvement and maximize PMO value.",
    description:
      "Understand how to measure PMO performance, monitor service effectiveness, enhance team capabilities, and implement continuous improvement practices that increase PMO maturity and long-term organizational success.",
  },
  {
    title: "Module 6 - Exam Preparation & Practice",
    subtitle: "Build confidence and prepare for certification success.",
    description:
      "Reinforce key PMI-PMOCP™ concepts through exam-focused reviews, practical scenarios, and practice questions designed to strengthen your knowledge and maximize your confidence on exam day.",
  },
];

const comparisonRows = [
  { label: "Expert-led video lessons", basic: true, premium: true, complete: true },
  { label: "10 PMI-approved training hours", basic: true, premium: true, complete: true },
  { label: "Certificate of completion", basic: true, premium: true, complete: true },
  { label: "Practice questions", basic: true, premium: true, complete: true },
  { label: "Flashcards and revision tools", basic: false, premium: true, complete: true },
  { label: "Knowledge encyclopedia", basic: false, premium: true, complete: true },
  { label: "Progress tracker", basic: false, premium: true, complete: true },
  { label: "Practice exams", basic: false, premium: true, complete: true },
  { label: "Exam simulator", basic: false, premium: false, complete: true },
  { label: "Mentor access", basic: false, premium: false, complete: true },
];

const bonusResources = [
  {
    title: "Flash Cards",
    description: "Quick revision anywhere.",
    icon: DetailIcon,
  },
  {
    title: "Knowledge Encyclopedia",
    description: "Key concepts simplified.",
    icon: ComIcon,
  },
  {
    title: "Confusion Buster",
    description: "Clear difficult topics fast.",
    icon: HatIcon,
  },
  {
    title: "Progress Tracker",
    description: "Monitor your study journey.",
    icon: ChartIcon,
  },
  {
    title: "Mentor Access",
    description: "Guidance when you need it.",
    icon: EmailIcon,
  },
  {
    title: "Webinars",
    description: "Access learning webinars with PDUs.",
    icon: HourGlassIcon,
  },
];

const pmocpOnDemandFaqs: FaqItem[] = [
  {
    question: "What is the PMI-PMOCP™ Self-Paced Program?",
    answer:
      "A self-paced learning program designed to help professionals build PMO knowledge and confidently prepare for the PMI-PMOCP™ certification exam.",
  },
  {
    question: "Who is this program for?",
    answer:
      "It is ideal for PMO leaders, PMO team members, project managers, program managers, consultants, and professionals involved in establishing, transforming, or leading PMOs.",
  },
  {
    question: "Is the program fully online?",
    answer: "Yes. The program is 100% online and accessible anytime, anywhere.",
  },
  {
    question: "Can I study at my own pace?",
    answer:
      "Yes. Learn whenever it suits you and progress through the modules at your own speed.",
  },
  {
    question: "How long will I have access?",
    answer: "Access duration depends on the package you purchase.",
  },
  {
    question: "Does this program meet the PMI-PMOCP™ training hours requirement?",
    answer:
      "Yes. Upon successful completion, you will earn the required training hours to support your PMI-PMOCP™ certification application.",
  },
  {
    question:
      "Is the content aligned with the latest PMI-PMOCP™ Examination Content Outline (ECO)?",
    answer:
      "Yes. The program is aligned with the latest PMI-PMOCP™ ECO to help you prepare effectively for the certification exam.",
  },
  {
    question: "Will I receive a certificate after completing the program?",
    answer:
      "Yes. You will receive a certificate of completion showing your approved training hours.",
  },
  {
    question: "Does the program include practice questions?",
    answer:
      "Yes. The program includes exam-style practice questions to reinforce your learning and improve exam readiness.",
  },
  {
    question: "What learning materials are included?",
    answer:
      "The program includes expert-led video lessons, structured learning modules, practice questions, and downloadable study resources.",
  },
  {
    question: "What are the eligibility requirements for PMI-PMOCP™ certification?",
    answer:
      "Candidates typically require three years of project-related experience within the last eight years, or they may qualify by holding a PMP® certification in good standing. Please refer to PMI's latest eligibility requirements before applying.",
  },
  {
    question: "How long does it take to complete the program?",
    answer:
      "Most learners complete the program within a few weeks, depending on their study schedule.",
  },
  {
    question: "Can I ask questions during the program?",
    answer:
      "Yes. Support options vary by package and may include email support or mentoring.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. Refunds are subject to our published Refund Policy and the terms of your selected package.",
  },
  {
    question: "How do I enroll?",
    answer:
      "Simply purchase the program online and start learning immediately through the vCare learning portal.",
  },
  {
    question: "Why choose the vCare PMI-PMOCP™ Self-Paced Program?",
    answer:
      "Our program combines expert-led instruction, practical PMO insights, structured learning, and exam-focused preparation to help you build confidence and maximize your chances of PMI-PMOCP™ certification success.",
  },
];

const CheckCell = ({ checked }: { checked: boolean }) => (
  <td className="border border-gray-300 px-4 py-3 text-center">
    {checked ? "✓" : "-"}
  </td>
);

const PMOCPOnDemandCourse = () => {
  return (
    <>
      <NavHeroSection
        title="PMI-PMOCP™ Self-Paced Program"
        description="Prepare for the PMI-PMOCP™ certification at your own pace with comprehensive on-demand learning, practice questions, and exam-focused resources. Aligned with the latest PMI-PMOCP™ Examination Content Outline (ECO), this program provides the required 10 contact hours and equips you with the knowledge and confidence to succeed on the exam."
        descriptionsecond=""
        sideImage={InnerPage}
      />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-7 items-center">
            <div className="flex flex-col gap-3">
              <h2 className="self-stretch justify-start text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                What's Included with Your Purchase
              </h2>
              <ul className="space-y-1  self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1">
                {includedWithPurchase.map((text) => (
                  <li
                    key={text}
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
              <PmiAtpBadge />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6 md:mb-10 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              PMI-PMOCP™ Self-Paced Program
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1 max-w-2xl">
              Self-paced, expert-led training designed to help busy
              professionals prepare confidently for the PMI-PMOCP™ certification
              exam.
            </p>
            <p className="text-primary_heading text-sm md:text-base font-bold mt-3">
              Included FREE when you enroll in ANY live class
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courseModules.map((module) => (
              <div key={module.title} className="bg-light-blue rounded-[8px] p-5">
                <h3 className="text-Black_light text-base md:text-lg font-bold mb-2">
                  {module.title}
                </h3>
                <p className="text-primary_heading text-sm font-semibold mb-2">
                  {module.subtitle}
                </p>
                <p className="text-paragraph text-sm leading-6">
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
                Earn Your 10 Training Hours Certificate
              </h2>
              <p className="text-paragraph text-sm font-normal">
                Receive a personalized certificate from a PMI Premier Authorized
                Training Partner upon successful completion of the program. This
                certificate satisfies the 10 training hours requirement for the
                PMI-PMOCP™ certification application.
              </p>
              <p className="text-paragraph text-sm font-normal">
                You can also earn up to 10 PDUs to maintain eligible PMI
                certifications while strengthening your PMO knowledge and
                leadership skills.
              </p>
            </div>
            <div className="w-full ">
              <img
                src={CertificateImage}
                alt="Certificate Image"
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Upgrade Your PMI-PMOCP™ Preparation
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1">
              Go all-in by adding practice exams and simulators to your learning.
            </p>
          </div>
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
                {comparisonRows.map((row, index) => (
                  <tr key={row.label} className={index % 2 ? "bg-gray-50" : ""}>
                    <td className="border border-gray-300 px-4 py-3">
                      {row.label}
                    </td>
                    <CheckCell checked={row.basic} />
                    <CheckCell checked={row.premium} />
                    <CheckCell checked={row.complete} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-center items-center mb-6">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] text-center">
              Bonus Learning Resources Included
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1 text-center">
              Enhance your preparation with valuable extras designed to boost
              success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {bonusResources.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-5 md:p-6 rounded-[12px] min-h-[150px]"
                >
                  <div className="w-12 h-12 rounded-[10px] bg-light-blue text-primary_blue flex items-center justify-center mb-4">
                    <IconComponent />
                  </div>
                  <h4 className="text-Black_light text-base md:text-lg font-bold mb-2">
                    {item.title}
                  </h4>
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
        courseKey="PMOCP"
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
      <Testimonials id="two" />
      <Faq faqs={pmocpOnDemandFaqs} hideButton />
      <TopFooterSection
        content={{
          title: <>Where PMO-CP Holders Drive Success</>,
          description:
            "Start your PMI-PMOCP™ journey with our Exam Prep Course and prepare with confidence. Develop the knowledge and practical skills needed to establish, lead, and continuously improve PMOs that deliver measurable business value.",
          points: [
            "Accelerate your PMO leadership career",
            "Lead strategic PMO transformation initiatives",
            "Improve organizational performance and governance",
            "Gain a globally recognized PMI credential",
            "Demonstrate your expertise in modern PMO leadership",
          ],
          buttonText: "Get Access Now",
          buttonLink: getSubscriptionUrl("PMOCP"),
        }}
      />
    </>
  );
};

export default PMOCPOnDemandCourse;
