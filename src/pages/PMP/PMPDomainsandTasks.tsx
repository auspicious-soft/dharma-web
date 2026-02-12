import React from "react";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import InnerPage from "@/assets/inner-page.jpg";
import { ComIcon, ExamsIcon } from "@/utils/svgicons";
import SampleVideo from "@/components/ReusableComponents/SampleVideoSection/SampleVideo";
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
const DomainsOverview = {
  cards: [
    {
      id: 1,
      icon: ExamsIcon,
      title: "People Domain",
      description:
        "Focuses on leadership, team collaboration, conflict management, and stakeholder engagement. This domain evaluates your ability to lead and support project teams effectively.",
    },
    {
      id: 2,
      icon: ComIcon,
      title: "Process Domain",
      description:
        "Covers technical project management skills including planning, execution, monitoring, risk management, and quality control across the project lifecycle.",
    },
    {
      id: 3,
      icon: ExamsIcon,
      title: "Business Environment Domain",
      description:
        "Examines how projects align with organizational strategy, compliance requirements, and value delivery.",
    },

  ],
};
const PMPDomainsandTasks = () => {
  return (
    <>
      <NavHeroSection
        title="PMP® Domains and Tasks"
        description="Our PMP® Exam Prep Course is aligned with the latest PMI® PMP Exam Content Outline (ECO) and designed for professionals preparing for certification success. The course combines structured learning, realistic exam simulations, and in-depth explanations to help you understand concepts, apply best practices, and confidently handle situational PMP-style questions—exactly as they appear on exam day."
        sideImage={InnerPage}
      />
      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-start items-start gap-2 text-left">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Understand What the PMP® Exam Really Tests
            </h2>
            <p className="text-paragraph text-sm font-normal leading-[26px]">
              The PMP® exam is structured around the PMI® Exam Content Outline
              (ECO), which defines the knowledge, skills, and behaviors project
              managers must demonstrate. A strong understanding of the PMP®
              Domains, Tasks, and Enablers is essential for success, as every
              exam question is mapped directly to this framework. This page
              helps you break down the ECO clearly—so you know what to study,
              why it matters, and how it appears in the exam.
            </p>
            <p className="text-paragraph text-sm font-normal leading-[26px] mt-1">
              This page helps you break down the ECO clearly—so you know what to
              study, why it matters, and how it appears in the exam.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-start items-start gap-2 text-left">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              What Is the PMP® Exam Content Outline (ECO)?
            </h2>
            <p className="text-paragraph text-sm font-normal leading-[26px]">
              The PMI® Exam Content Outline serves as the foundation of the PMP®
              exam. It organizes the exam into key Domains, each containing
              specific Tasks and supporting Enablers that reflect real-world
              project management responsibilities.
            </p>
            <p className="text-paragraph text-sm font-normal leading-[26px] mt-1">
              In this section, we explore each domain in detail, explain every
              task, and show how they translate into situational and
              scenario-based exam questions. You’ll also find practical examples
              and sample practice questions to help apply the concepts
              effectively.
            </p>
          </div>
        </div>
      </section>

            <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-center items-center mb-6 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Why Use PMP® Flash Cards?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3">
            {DomainsOverview.cards.map((card) => (
              <div
                key={card.id}
                className="p-5 bg-[#f0f7ff] rounded-[20px] text-center hover:shadow-sm transition"
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
      <div className="bg-light-blue">
      <SampleVideo />
      </div>
      <ScreenshortsSlider id="domain-screenshot" />
      <Testimonials id="domain-testimonials" />
    </>
  );
};

export default PMPDomainsandTasks;
