import React from "react";
import InnerPage from "@/assets/inner-page.jpg";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import CourseModulesFaq from "@/components/PMPPages/CourseModulesFaq";
import CertificateImage from "@/assets/certificate-image.png";
import SampleVideo from "@/components/ReusableComponents/SampleVideoSection/SampleVideo";
import PricingComparison from "@/components/ReusableComponents/PricingComparisonSection/PricingComparison";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";

const InsideSimulator = [
  "Meets PMP® training hour requirements for certification eligibility",
  "Full-length mock exams under real exam pressure",
  "Instant answer explanations focused on PMI® mindset",
  "Performance breakdown by topic and domain",
  "6-month access across all devices",
];

const PMPChallenging = [
  {
    title: "Before",
    description:
      "Studying the PMBOK® Guide and basic training was often enough.",
  },
  {
    title: "Today",
    description:
      "Questions are scenario-based, include Agile & Business Analysis concepts, and require judgment.",
  },
  {
    title: "Why This Matters",
    description:
      "You need structured training—not just reading—to succeed in today’s PMP exam.",
  },
];

const LearningResources = [
  {
    title: "Expert Email Course",
    description:
      "Receive proven PMP strategies, tips, and insights from certified experts.",
  },
  {
    title: "Study Checklist",
    description:
      "Track preparation tasks, revisions, and exam readiness in one place.",
  },
  {
    title: "Discussion Forum",
    description:
      "Ask questions, share experiences, and learn with fellow PMP aspirants.",
  },
  {
    title: "Exam Tips Newsletter",
    description:
      "Get regular PMP exam updates, tips, and preparation insights.",
  },
  {
    title: "Score Worksheet",
    description:
      "Analyze mock exam results to identify strengths and improvement areas.",
  },
  {
    title: "Contact Hours Tracker",
    description:
      "Track completed training hours required for PMP exam eligibility.",
  },
];

const PMOCPOnDemandCourse = () => {
  return (
    <>
      <NavHeroSection
        title="PMP On Demand Course"
        description="Our PMP® Exam Prep Course is aligned with the latest PMI® PMP Exam Content Outline (ECO) and designed for professionals preparing for certification success. The course combines structured learning, realistic exam simulations, and in-depth explanations to help you understand concepts, apply best practices, and confidently handle situational PMP-style questions—exactly as they appear on exam day."
        descriptionsecond=""
        sideImage={InnerPage}
      />

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

      <CourseModulesFaq />

      <section className="bg-light-blue py-10 md:py-14 lg:py-16">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-7 items-center">
            <div className="flex flex-col gap-3">
              <h2 className="self-stretch justify-start text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Receive Your 35 Contact Hours Certificate
              </h2>
              <p className="text-paragraph text-sm font-normal">
                Earn a personalized Contact Hours certificate from a trusted
                training provider—required for PMP® application submission.
              </p>
              <p className="text-paragraph text-sm font-normal">
                This certificate validates your formal project management
                education and supports your PMP® exam application with PMI®.
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

      <SampleVideo />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-center items-center mb-6">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] text-center">
              The PMP® Exam Has Become More Challenging
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {PMPChallenging.map((item, index) => (
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

      <PricingComparison />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-center items-center mb-6">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] text-center">
              Bonus Learning Resources Included
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {LearningResources.map((item, index) => (
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

      <StartFreeTrial />
      <Testimonials id="two" />
      <Faq limit={5} />
      <TopFooterSection />
    </>
  );
};

export default PMOCPOnDemandCourse;
