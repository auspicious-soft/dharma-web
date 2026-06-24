import AuthorizedTrainingPartner from "@/components/ReusableComponents/AuthorizedTrainingPartnerSection/AuthorizedTrainingPartner";
import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import React from "react";
import TrainingImage from "@/assets/training-image.png";
import PlanSelector from "@/components/PDUs/PlanSelector";
import CreditsPDUSection from "@/components/PDUs/CreditsPDUSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import { CircleArrowIcon, GreenTickIcon } from "@/utils/svgicons";
import { Button } from "@/components/ui/button";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import VideoSection from "@/components/ReusableComponents/VideoSection/VideoSection";
import CertificateImage from "@/assets/certificate-image.png";
import OnDemandImage1 from "@/assets/demand-1.jpg";
import OnDemandImage2 from "@/assets/demand-2.jpg";
import OnDemandImage3 from "@/assets/demand-3.jpg";
import OnDemandImage4 from "@/assets/demand-4.jpg";

const storeData = [
  {
    id: 1,
    title: "60 PDUs Package",
    points: [
      "Earn up to 60 PMI-approved PDUs for certification renewal.",
      "Flexible self-paced and instructor-led learning options.",
      "Includes completion certificate and PMI CCRS claim guidance.",
      "Courses aligned with the PMI Talent Triangle and current industry practices.",
    ],
  },
  {
    id: 2,
    title: "30 PDUs Package",
    points: [
      "Earn up to 30 PMI-approved PDUs for certification renewal.",
      "Flexible self-paced and instructor-led learning options.",
      "Includes completion certificate and PMI CCRS claim guidance.",
      "Courses aligned with the PMI Talent Triangle and current industry practices.",
    ],
  },
  {
    id: 3,
    title: "15 PDUs Package",
    points: [
      "Earn up to 15 PMI-approved PDUs for certification renewal.",
      "Flexible self-paced and instructor-led learning options.",
      "Includes completion certificate and PMI CCRS claim guidance.",
      "Courses aligned with the PMI Talent Triangle and current industry practices.",
    ],
  },
];

const expertsChoose = [
  {
    id: 1,
    title: "Why Professionals Choose This Bundle",
    points: [
      "Earn PMI®-approved PDUs without attending live classes",
      "No quizzes, assessments, or exams required after completion",
      "Learn at your own pace - anytime, anywhere",
      "Flexible and convenient for busy professionals",
      "Ideal for PMI certification renewal and continuous professional development",
      "Access practical, industry-relevant learning from experienced instructors",
    ],
  },
  {
    id: 2,
    title: "What These Courses Cover",
    points: [
      "Concepts aligned with the PMI Talent Triangle®",
      "Emerging practices, trends, and real-world applications",
      "Professional development, leadership, and strategic thinking topics",
      "Practical insights to help you stay current as a PMI credential holder",
      "Industry-relevant knowledge designed to support continuous learning and career growth",
    ],
  },
];

const onDemand = [
  {
    id: 1,
    img: OnDemandImage1,
    title: "Project Management Foundations",
    count: "24 PDUs",
    points: [
      "Learn how to manage real-world projects across various industries",
      "Build a strong foundation in planning, execution, monitoring, and delivery",
      "Understand project management fundamentals, methodologies, and core terminology",
      "Apply practical skills to plan, organize, execute, and deliver projects effectively",
      "Strengthen collaboration, problem-solving, and execution in real-world project environments",
    ],
  },
  {
    id: 2,
    img: OnDemandImage2,
    title: "Agile Project Management",
    count: "30 PDUs",
    points: [
      "Understand Agile principles, frameworks, and ways of working",
      "Apply Agile approaches, frameworks, and Scrum practices for effective delivery",
      "Lead and collaborate effectively within Agile teams",
    ],
  },
  {
    id: 3,
    img: OnDemandImage3,
    title: "Artificial Intelligence for Project Management Professionals",
    count: "60 PDUs",
    points: [
      "Build foundational knowledge of AI and its evolving role in modern organizations",
      "Learn strategies to integrate AI into project management practices",
      "Acquire tools, techniques, and best practices for applying AI in project environments",
    ],
  },
  {
    id: 4,
    img: OnDemandImage4,
    title: "Performance Measurement for Projects",
    count: "15 PDUs",
    points: [
      "Understand key project performance metrics and KPIs",
      "Learn Earned Value Management and analysis techniques",
      "Monitor project cost, schedule, forecasting, and overall performance",
    ],
  },
];

const keyBenefits = {
  heading: "Key Benefits",
  card: [
    {
      id: 1,
      title: "Earn PDUs Online",
      description:
        "Complete courses at your convenience and earn PMI®-approved PDUs with ease.",
    },
    {
      id: 2,
      title: "Completion Certificate",
      description:
        "Receive a certificate of completion and PDU claim details after each course.",
    },
    {
      id: 3,
      title: "PMI Talent Triangle® Aligned",
      description:
        "Courses aligned with PMI Talent Triangle® skill areas and professional development requirements.",
    },
    {
      id: 4,
      title: "Flexible Learning",
      description:
        "Pause, resume, and revisit lessons anytime across multiple devices.",
    },
    {
      id: 5,
      title: "Easy PDU Submission",
      description:
        "Simple CCRS submission process with fast PMI approval support.",
    },
  ],
};

const pduFaqs = [
  {
    question: "How do I earn PDUs through these programs?",
    answer:
      "You can earn PMI® Professional Development Units (PDUs) by completing our approved on-demand or instructor-led learning programs. Once completed, you can claim eligible PDUs through the PMI CCRS system.",
  },
  {
    question: "Are these PDU courses PMI approved?",
    answer:
      "Yes. vCare Project Management is a PMI Premier Authorized Training Partner (ATP #3998), and the programs are aligned with PMI standards and requirements.",
  },
  {
    question: "Do I need to attend live classes to earn PDUs?",
    answer:
      "No. Many of our PDU programs are fully self-paced and on-demand, allowing you to learn anytime and from anywhere without attending live sessions.",
  },
  {
    question: "Are there any exams or assessments required?",
    answer:
      "No. Most PDU programs do not require formal exams or assessments after completing the lessons, making the learning process simple and convenient.",
  },
  {
    question: "Can these PDUs be used to renew PMI certifications?",
    answer:
      "Yes. The PDUs earned through eligible programs can be used toward renewing PMI certifications such as PMP®, PgMP®, PfMP®, PMI-ACP®, PMI-RMP®, PMI-SP®, PMI-PBA®, and PMOCP™.",
  },
];

const PDUs = () => {
  return (
    <>
      <FooterPageHeroSection
        title="Earn PDUs"
        description="Advance your career while earning PDUs through flexible and practical learning programs designed to help you maintain PMI certifications and strengthen real-world leadership capabilities."
      />
      <AuthorizedTrainingPartner
        title="Claim PDUs in Just a Few Clicks with Instant PMI Approval"
        subtitle="Maintain your PMI certification with confidence and ease. Earn PMI-approved PDUs through flexible on-demand and instructor-led learning programs designed for busy professionals. No complicated process, no unnecessary delays - just a simple and compliant way to earn your PDUs."
        bullets={[
          {
            text: "PMI Premier Authorized Training Partner (ATP #3998)",
          },
          { text: "PMI-approved learning programs" },
          { text: "Instant PDU claim support through PMI CCRS" },
          { text: "Flexible on-demand and live instructor-led options" },
          { text: "High-quality learning from globally recognized experts" },
          { text: "Fast, simple, and hassle-free certification maintenance" },
        ]}
        descriptionTop=""
        descriptionBottom=""
        image={TrainingImage}
      />
      <PlanSelector />
      <CreditsPDUSection />

      <section className="overflow-hidden py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {expertsChoose.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl px-3 md:px-7 py-4 md:py-7 bg-light-blue h-full flex flex-col justify-between gap-4 md:gap-7"
              >
                <div>
                  <h3 className="text-Black_light text-xl md:text-3xl font-bold mb-4 md:mb-7">
                    {item.title}
                  </h3>

                  <ul className="space-y-2">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-paragraph text-sm"
                      >
                        <span>
                          <CircleArrowIcon />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-blue overflow-hidden py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-5 text-center">
            On-Demand PDU Courses Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {onDemand.map((item) => (
              <div
                key={item.id}
                className="p-4 md:p-5 bg-white rounded-[20px] flex flex-col justify-between gap-4 md:gap-7"
              >
                <div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-2xl"
                  />
                  <h3 className="text-primary_heading text-base md:text-xl font-bold mt-4 mb-2">
                    {item.title}
                  </h3>
                  <h5 className="self-stretch justify-start text-Black_light text-base md:text-xl font-bold">
                    {item.count}
                  </h5>
                  <ul className="space-y-2 md:space-y-3 mt-5">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-paragraph text-sm"
                      >
                        <span>
                          <GreenTickIcon />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="text-left">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-5 text-center">
              {keyBenefits.heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
              {keyBenefits.card.map((card) => (
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

      <section className="bg-light-blue py-10 md:py-14 lg:py-16">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-7 items-center">
            <div className="flex flex-col gap-3">
              <h2 className="self-stretch justify-start text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Receive Your PDU Certificate & Claim Code
              </h2>
              <p className="text-paragraph text-sm font-normal">
                Earn a personalized Contact Hours certificate from a trusted PMI
                Premier Authorized Training Partner (ATP #3998).
              </p>
              <p className="text-paragraph text-sm font-normal">
                These certificates can be used to support PMI® certification
                applications, including PMP, PMP®, PMI-RMP®, PMI-ACP®, PMI-PBA®,
                CAPM®, and other eligible PMI certifications requiring formal
                education hours.
              </p>
              <p className="text-paragraph text-sm font-normal">
                Receive your completion certificate and claim details after
                successfully completing each course.
              </p>
            </div>
            <div className="w-full">
              <img
                src={CertificateImage}
                alt="Certificate"
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <VideoSection
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        title={<>Preview How You'll Learn</>}
        description="Discover how our flexible on-demand PDU courses fit seamlessly into your professional schedule and support continuous learning anytime, anywhere."
      />

      <Testimonials id="pdus-testimonials" />
      <section className="overflow-hidden py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <h2 className="text-Black_light text-center text-2xl md:text-3xl font-bold md:leading-[46px] mb-4 md:mb-6">
            Choose Your PDU Package
          </h2>
          <p className="text-center text-paragraph text-sm md:text-base max-w-[900px] mx-auto mb-6 md:mb-10">
            Earn up to 60 PMI®-approved PDUs for certification renewal. Flexible
            self-paced and instructor-led learning options. Includes completion
            certificate and PMI CCRS claim guidance. Courses aligned with the
            PMI Talent Triangle® and current industry practices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {storeData.map((item) => (
              <div
                key={item.id}
                className="border border-primary_blue rounded-2xl px-3 md:px-5 py-6 md:py-10 bg-light-blue h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-primary_heading font-semibold text-lg mb-3">
                    {item.title}
                  </h3>

                  <div className="border-t border-[#cde2ff] mb-6" />

                  <ul className="space-y-2">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-paragraph text-sm"
                      >
                        <span>
                          <CircleArrowIcon />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-[#cde2ff] mt-6" />
                </div>

                <Button asChild className="mt-6 md:mt-10 w-full">
                  <a
                    href="https://dharam-user-portal.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll Now
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-light-blue">
        <StartFreeTrial
          headings="Start Your Free Trial"
          description="Explore our on-demand PDU courses, learning resources, and professional development programs before enrolling."
          features={[
            "Access flexible self-paced learning designed for busy professionals",
            "Explore PMI Talent Triangle® aligned professional development topics",
            "Learn through practical, real-world insights and industry best practices",
            "No credit card required to start your free trial",
          ]}
          buttonText="Get Started with PDU Learning"
          buttonLink="/dashboard"
        />
      </div>
      <Faq faqs={pduFaqs} />
      <TopFooterSection />
    </>
  );
};

export default PDUs;
