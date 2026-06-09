import React from "react";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import InnerPage from "@/assets/inner-page.jpg";
import {
  ChartIcon,
  ComIcon,
  DetailIcon,
  HatIcon,
  ImproveIcon,
  LineCahrtIcon,
} from "@/utils/svgicons";
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import { Button } from "@/components/ui/button";
import { getSubscriptionUrl } from "@/utils/links";

const domainsOverview = {
  cards: [
    {
      id: 1,
      icon: ChartIcon,
      title: "Organizational Development and Alignment",
      description:
        "Align PMO capabilities with organizational strategy, culture, and business priorities.",
    },
    {
      id: 2,
      icon: DetailIcon,
      title: "PMO Strategic Elements",
      description:
        "Define PMO vision, value proposition, services, and strategic direction.",
    },
    {
      id: 3,
      icon: HatIcon,
      title: "PMO Design and Structuring",
      description:
        "Build the right PMO model, governance framework, roles, and operating structure.",
    },
    {
      id: 4,
      icon: LineCahrtIcon,
      title: "PMO Operation and Performance",
      description:
        "Manage PMO services, performance metrics, reporting, and delivery effectiveness.",
    },
    {
      id: 5,
      icon: ImproveIcon,
      title: "PMO Enhancement and Effectiveness",
      description:
        "Improve PMO maturity, optimize processes, and drive continuous value delivery.",
    },
    {
      id: 6,
      icon: ComIcon,
      title: "People",
      description:
        "Lead teams, engage stakeholders, influence change, and strengthen PMO leadership capability.",
    },
  ],
};

const whyThisHelps = [
  "Simplifies the PMI-PMOCP ECO, making it easier to understand and interpret",
  "Presents the domains and tasks in a clear, structured format",
  "Clarifies the responsibilities and expectations within each domain",
  "Reinforces learning through targeted practice tests with explanations",
  "Supports focused preparation and builds confidence before the exam",
];

const PMOCPDomainsandTasks = () => {
  return (
    <>
      <NavHeroSection
        title="PMI-PMOCP™  Domains and Tasks"
        description="PMI-PMOCP™  Domains and Tasks - Master PMO Leadership by Domains"
        descriptionsecond="Prepare confidently for the PMI-PMOCP™  certification exam with structured learning focused on the domains and tasks outlined in the latest PMI Examination Content Outline (ECO). Strengthen your PMO knowledge, reinforce key concepts, and improve exam readiness through a systematic approach to each domain. This course is designed to help you understand what PMI expects across every domain and task area for maximum success."
        sideImage={InnerPage}
      />

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-start items-start gap-3 text-left">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Understand What the PMI-PMOCP™ Exam Really Tests
            </h2>

            <p className="text-paragraph text-sm font-normal leading-[26px]">
              This course focuses on domain and task based targeted learning,
              allowing you to master one knowledge area at a time before moving
              to full exam simulations. A strong understanding of the PMI-PMOCP™
              Domains, Tasks, and Enablers is essential for success, as every
              exam question is mapped directly to this framework. This page
              helps you break down the ECO clearly so you know what to study,
              why it matters, and how it appears in the exam.
            </p>

            <h3 className="text-Black_light text-xl md:text-2xl font-bold mt-1">
              Why this helps
            </h3>

            <ul className="space-y-2 list-disc pl-5 text-paragraph text-sm leading-[26px]">
              {whyThisHelps.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-start items-start gap-3 text-left">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              What Is the PMI-PMOCP™ Exam Content Outline (ECO)?
            </h2>

            <p className="text-paragraph text-sm font-normal leading-[26px]">
              The PMI® Exam Content Outline serves as the foundation of the
              PMI-PMOCP™ exam. It organizes the exam into key Domains, each
              containing specific Tasks and supporting Enablers that reflect
              real-world PMO responsibilities.
            </p>

            <p className="text-paragraph text-sm font-normal leading-[26px]">
              In this section, we explore each domain in detail, explain every
              task, and show how they translate into situational and
              scenario-based exam questions. You'll also find examples and
              sample practice questions to help apply the concepts effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              PMI-PMOCP™ Exam Domains Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3">
            {domainsOverview.cards.map((card) => (
              <div
                key={card.id}
                className="p-5 bg-light-blue rounded-[20px] text-center transition"
              >
                <div className="w-[60px] h-[60px] flex items-center justify-center m-auto relative bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
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
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-5 md:gap-7 items-center">
            <div className="w-full">
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

            <div className="flex flex-col gap-3">
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                See Learning in Action
              </h2>
              <h3 className="text-primary_heading text-lg md:text-2xl font-bold">
                PMI-PMOCP™ Domains and Tasks: Your Roadmap to Exam Success
              </h3>
              <p className="text-paragraph text-sm font-normal leading-[26px]">
                Explore the key domains and tasks essential for exam success.
              </p>
              <p className="text-paragraph text-sm font-normal leading-[26px]">
                Discover how to turn the PMI-PMOCP™ ECO into a practical study
                roadmap. Master domain and tasks to focus your studies,
                strengthen core knowledge, and maximize exam readiness.
              </p>

              <Button className="w-fit mt-1" asChild>
                <a href={getSubscriptionUrl("PMOCP")}>Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ScreenshortsSlider id="domain-screenshot" />
      <Testimonials id="domain-testimonials" />
    </>
  );
};

export default PMOCPDomainsandTasks;
