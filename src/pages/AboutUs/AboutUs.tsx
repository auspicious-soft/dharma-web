import React from "react";
import EnquiryForm from "@/components/ReusableComponents/EnquiryForm/EnquiryForm";
import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
const WhatWeDoCard = {
  card: [
    {
      id: 1,
      title: "PMP® Exam Prep Courses",
      description:
        "Easy-to-follow videos simplify complex PMP concepts for all experience levels.",
    },
    {
      id: 2,
      title: "Realistic Exam Simulators",
      description:
        "Practice with simulators designed to match the latest PMI® exam format.",
    },
    {
      id: 3,
      title: "Practice Exams & Flash Cards",
      description:
        "Apply project management concepts through realistic, exam-style scenarios.",
    },
    {
      id: 4,
      title: "On-Demand Learning Programs",
      description:
        "Understand mistakes and track progress with clear insights and performance data.",
    },
    {
      id: 5,
      title: "PDUs for Certification Renewal",
      description:
        "Study seamlessly across devices with flexible, on-demand course access.",
    },
    {
      id: 6,
      title: "Corporate & Group Training Solutions",
      description:
        "Join thousands of professionals who rely on vCare for PMP exam success.",
    },
  ],
};
const WhyChooseUsCard = {
  card: [
    {
      id: 1,
      title: "PMI®-aligned curriculum and exam structure",
      description:
        "Easy-to-follow videos simplify complex PMP concepts for all experience levels.",
    },
    {
      id: 2,
      title: "Real-world, scenario-based learning approach",
      description:
        "Practice with simulators designed to match the latest PMI® exam format.",
    },
    {
      id: 3,
      title: "Flexible, self-paced and instructor-led options",
      description:
        "Apply project management concepts through realistic, exam-style scenarios.",
    },
    {
      id: 4,
      title: "Trusted by professionals across industries",
      description:
        "Understand mistakes and track progress with clear insights and performance data.",
    },
    {
      id: 5,
      title: "Designed to build both exam confidence and practical skills",
      description:
        "Study seamlessly across devices with flexible, on-demand course access.",
    },
  ],
};
const AboutUs = () => { 
  return (
    <>
      <FooterPageHeroSection
        title="About Us"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-start items-center gap-2 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Who We Are
            </h2>
            <p className="text-paragraph text-sm md:text-base font-normal leading-[26px] md:leading-[30px]">
              We are a professional certification training and exam preparation
              platform dedicated to helping project management professionals
              succeed. Our goal is to simplify certification journeys by
              providing structured learning, realistic practice, and
              exam-focused resources aligned with PMI® standards.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-start items-center gap-2 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Our Mission
            </h2>
            <p className="text-paragraph text-sm md:text-base font-normal leading-[26px] md:leading-[30px]">
              To empower professionals worldwide with practical, accessible, and
              exam-ready learning solutions that build confidence and accelerate
              career growth.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col mb-5 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              What We Do
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1  w-full leading-[26px]">
              We offer end-to-end preparation solutions for PMI® certifications,
              including:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {WhatWeDoCard.card.map((card) => (
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
      </section>
      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col mb-5 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {WhyChooseUsCard.card.map((card) => (
              <div
                key={card.id}
                className="p-5 bg-white rounded-[20px] text-left transition"
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
      </section>
      <section className="pt-10 md:pt-14 lg:pt-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-start items-center gap-2 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Our Approach
            </h2>
            <p className="text-paragraph text-sm md:text-base font-normal leading-[26px] md:leading-[30px]">
              We believe certification success comes from practice, clarity, and
              confidence. Our learning model focuses on understanding concepts
              deeply, applying them in real-world situations, and practicing
              under exam-like conditions.
            </p>
          </div>
        </div>
      </section>
      <EnquiryForm />
      <TopFooterSection />
    </>
  );
};

export default AboutUs;
