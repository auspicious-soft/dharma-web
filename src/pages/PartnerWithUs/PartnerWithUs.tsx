import EnquiryForm from "@/components/ReusableComponents/EnquiryForm/EnquiryForm";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import { Button } from "@/components/ui/button";
import { CircleArrowIcon } from "@/utils/svgicons";
import {
  Award,
  BookOpenCheck,
  Building2,
  GraduationCap,
  Handshake,
  Landmark,
  Layers,
  LifeBuoy,
  Megaphone,
  Network,
  ScrollText,
  TrendingUp,
  Users,
} from "lucide-react";

const partnerSubject = "collaboration-partnership";

const programBenefits = [
  {
    icon: TrendingUp,
    title: "Global Success Stories",
    description:
      "We have helped thousands of professionals achieve career growth through certification and professional development programs.",
  },
  {
    icon: Award,
    title: "Specialized Expertise",
    description:
      "Our expertise extends beyond project management into program management, portfolio management, PMO leadership, agile delivery, business analysis, risk management, and organizational transformation.",
  },
  {
    icon: Layers,
    title: "Proven Learning Ecosystem",
    description:
      "Partners gain access to our learning platform, certification preparation resources, practice exams, flash cards, progress tracking, reporting, and digital learning content.",
  },
  {
    icon: Network,
    title: "Scalable Solutions",
    description:
      "Whether supporting a small team or a global enterprise workforce, our solutions scale to meet your needs.",
  },
  {
    icon: LifeBuoy,
    title: "Fully Managed Delivery",
    description:
      "We handle delivery, support, and operations so you can focus on growing revenue with high margins and no added overhead.",
  },
];

const curriculumCards = [
  {
    icon: ScrollText,
    title: "PMI Authorized Training Partner",
    description:
      "As a PMI Authorized Training Partner, we provide access to PMI-authorized training materials, globally recognized certification preparation programs, and best-practice learning frameworks.",
  },
  {
    icon: BookOpenCheck,
    title: "Universities and Industry Certifications",
    description:
      "Offer universities and professional audiences access to leading industry certifications, practical curriculum, and career-aligned learning pathways.",
  },
];

const partnershipOpportunities = [
  {
    icon: Handshake,
    title: "Training Delivery Partner",
    description:
      "Expand your service offerings by delivering vCare Project Management's training programs to your clients and members, without the burden of content creation or delivery.",
    benefits: [
      "Established course content",
      "Instructor support",
      "Revenue-sharing opportunities",
      "Access to learning resources",
    ],
  },
  {
    icon: Users,
    title: "PMI Chapter Partnership",
    description:
      "Provide additional value to your chapter members through certification preparation programs, webinars, workshops, and professional development initiatives.",
    benefits: [
      "Exclusive member discounts",
      "Joint webinars and events",
      "Certification awareness sessions",
      "PDU opportunities",
      "Member engagement programs",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Learning Partner",
    description:
      "Develop workforce capability through customized learning pathways aligned to your business objectives.",
    benefits: [
      "Tailored training programs",
      "Competency-based learning paths",
      "Leadership development",
      "Certification preparation",
      "Reporting and analytics",
    ],
  },
  {
    icon: GraduationCap,
    title: "Academic and University Partner",
    description:
      "Enhance student employability and industry readiness through globally recognized project management education and certification pathways.",
    benefits: [
      "Industry-aligned curriculum",
      "Certification preparation programs",
      "Student mentoring",
      "Career-focused learning pathways",
      "Lectures and workshops",
    ],
  },
  {
    icon: Landmark,
    title: "Tuition Reimbursement",
    description:
      "Enhance learning with high-impact, career-aligned programs including industry-recognized certifications. Help employees upskill in today's most in-demand roles.",
    benefits: [
      "Career-aligned certification programs",
      "Employee upskilling support",
      "Flexible learning pathways",
    ],
  },
  {
    icon: Megaphone,
    title: "Referral Partner Program",
    description:
      "Earn referral commissions by introducing professionals and organizations to vCare Project Management's training programs and services.",
    benefits: [
      "Attractive commission structure",
      "Dedicated partner support",
      "Flexible engagement model",
    ],
  },
];

const partnerFaqs = [
  {
    question: "What is the vCare Global Partner Program?",
    answer:
      "The vCare Global Partner Program enables training organizations, consultants, educational institutions, and business service providers to offer our industry-leading training and certification programs to their customers. We manage course delivery, learner support, platform operations, assessments, and instructor services, allowing partners to expand their offerings and generate additional revenue without increasing operational complexity.",
  },
  {
    question: "Who can join the Partner Program?",
    answer:
      "We welcome training and learning providers, educational institutions and universities, PMI Chapters and professional associations, consulting and advisory firms, corporate learning and development teams, and technology or solution providers. If your organization supports professional development, workforce capability building, or certification training, we would love to explore partnership opportunities with you.",
  },
  {
    question: "What advantages do partners receive?",
    answer:
      "Partners benefit from access to a comprehensive portfolio of globally recognized training programs, experienced instructors, flexible commercial models, and a proven learning ecosystem. By leveraging vCare's expertise and delivery capabilities, partners can accelerate time-to-market, enhance customer value, and create scalable revenue opportunities while maintaining a strong focus on client relationships.",
  },
  {
    question: "Do partners need to deliver the training themselves?",
    answer:
      "No. vCare Project Management can manage the full learning experience on your behalf, including instructor-led delivery, learner administration, assessments, mentoring, certification preparation resources, and technical support. Partners can choose a fully managed delivery model or participate in selected aspects of delivery based on their capabilities and objectives.",
  },
  {
    question: "What training programs can partners offer?",
    answer:
      "Partners can provide access to a broad range of professional development and certification programs, including PMI certifications, Lean Six Sigma, leadership and management programs, and customized corporate training solutions.",
  },
  {
    question: "Can training programs be customized for our customers?",
    answer:
      "Yes. We can tailor course content, learning pathways, case studies, workshops, assessments, and delivery models to align with specific industry requirements, organizational goals, and workforce development objectives.",
  },
  {
    question: "Is there a minimum commitment to become a partner?",
    answer:
      "We offer flexible partnership arrangements designed to support organizations of different sizes and business models. Whether you are introducing a small number of learners or delivering large-scale enterprise programs, we can develop a partnership structure that aligns with your goals.",
  },
  {
    question: "How does learner support work?",
    answer:
      "vCare provides comprehensive learner support throughout the training journey, including enrollment assistance, learning platform access, instructor guidance, mentoring support, certification preparation resources, and ongoing assistance to help participants complete their learning objectives.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact our partnership team to discuss your business objectives, customer base, and preferred partnership model. We will work with you to identify the best opportunities and create a partnership approach designed for long-term success.",
  },
];

const PartnerWithUs = () => {
  return (
    <>
      <FooterPageHeroSection
        title="Offer In-Demand Professional Training to Your Customers"
        description="Join our Partner Network and expand your portfolio with globally recognized certification and professional development programs. We manage the content, instructors, delivery, and learner support, allowing you to generate new revenue streams while delivering exceptional value to your customers."
      />

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-10 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Why Join Our Global Partner Program
              </h2>
              <p className="text-primary_heading text-sm md:text-base font-semibold mt-2 leading-[26px]">
                Together, We Empower Professionals and Transform Organizations
              </p>
            </div>
            <div className="space-y-3 text-paragraph text-sm md:text-base leading-[26px] md:leading-[30px]">
              <p>
                At vCare Project Management, we believe that great partnerships
                create greater impact. We work with PMI Chapters, training
                providers, universities, consulting firms, corporate learning
                teams, professional associations, and independent trainers
                worldwide to deliver world-class project, program, portfolio,
                PMO, agile, risk management, and leadership training solutions.
              </p>
              <p>
                Whether you are looking to expand your training portfolio,
                provide certification programs to your members, or create new
                revenue opportunities, we offer flexible partnership models
                designed for mutual success.
              </p>
              <Button
                onClick={() => {
                  document
                    .getElementById("partner-enquiry-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-2"
              >
                Discuss Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col mb-5 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Partner Program Benefits
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1 w-full leading-[26px]">
              Drive more business value for you and your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {programBenefits.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="p-5 md:p-6 bg-white rounded-[20px] text-left transition"
                >
                  <div className="size-[60px] text-primary_heading flex items-center justify-center bg-[#f0f8ff] rounded-[99px]">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <h4 className="text-primary_heading text-base md:text-xl font-bold mb-2 mt-4">
                    {card.title}
                  </h4>
                  <p className="text-paragraph text-xs font-normal leading-6">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col mb-5 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Industry Recognized Curriculum And Training
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {curriculumCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-2xl px-4 md:px-7 py-5 md:py-7 bg-light-blue h-full"
                >
                  <div className="size-[60px] text-primary_heading flex items-center justify-center bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-primary_heading text-lg md:text-xl font-bold mt-4 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-paragraph text-sm font-normal leading-[26px]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col mb-5 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Flexible Partnership Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {partnershipOpportunities.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="p-5 bg-white rounded-[20px] text-left transition flex flex-col"
                >
                  <div className="size-[60px] text-primary_heading flex items-center justify-center bg-[#f0f8ff] rounded-[99px]">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <h4 className="text-primary_heading text-base md:text-xl font-bold mb-2 mt-4">
                    {card.title}
                  </h4>
                  <p className="text-paragraph text-xs font-normal leading-6">
                    {card.description}
                  </p>
                  <h5 className="text-Black_light text-sm font-bold mt-4 mb-2">
                    Benefits
                  </h5>
                  <ul className="space-y-2">
                    {card.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-paragraph text-xs leading-5"
                      >
                        <span className="mt-0.5 scale-75 origin-top-left">
                          <CircleArrowIcon />
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto text-center">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            Let's Grow Together
          </h2>
          <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px] max-w-[940px] mx-auto">
            We are always looking to collaborate with organizations and
            professionals who share our passion for developing exceptional
            project, program, portfolio, and PMO leaders.
          </p>
          <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px] max-w-[940px] mx-auto">
            Whether you represent a PMI Chapter, training company, consulting
            firm, university, government agency, or enterprise organization, we
            would love to explore partnership opportunities with you.
          </p>
          <h3 className="text-primary_heading text-xl md:text-2xl font-bold mt-5">
            Interested In A Partnership?
          </h3>
          <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px]">
            Let's connect and explore how you can benefit from our programs.
          </p>
          <Button
            onClick={() => {
              document
                .getElementById("partner-enquiry-form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-5 md:mt-7"
          >
            Contact Partnership Team
          </Button>
        </div>
      </section>

      <div id="partner-enquiry-form" className="bg-light-blue">
        <EnquiryForm
          formTitle="Contact Us Form"
          formDescription="Discuss partnership opportunities, delivery models, and commercial arrangements tailored to your organization. Together, we can help professionals succeed, organizations thrive, and careers flourish."
          defaultSubject={partnerSubject}
          showCorporateFields
        />
      </div>

      <Faq
        heading="Frequently Asked Questions"
        faqs={partnerFaqs}
        hideButton
      />

      <TopFooterSection
        content={{
          title: <>Build a Partnership That Creates Measurable Value</>,
          description:
            "Expand your portfolio with trusted training programs, managed delivery, and a partner model designed around your goals.",
          points: [],
          buttonText: "Discuss Partnership",
          buttonLink: `/contact-us?subject=${partnerSubject}`,
          secondaryButtonText: "Explore Corporate Training",
          secondaryButtonLink: "/corporate-training",
        }}
      />
    </>
  );
};

export default PartnerWithUs;
