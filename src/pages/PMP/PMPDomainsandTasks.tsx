import React from "react";
import { useNavigate } from "react-router-dom";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import InnerPage from "@/assets/inner-page.jpg";
import { ChartIcon, ComIcon, DetailIcon } from "@/utils/svgicons";
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import { Button } from "@/components/ui/button";

const domainsOverview = {
  cards: [
    {
      id: 1,
      icon: ComIcon,
      title: "People",
      description:
        "Learn to lead teams, manage conflict, engage stakeholders, align expectations, communicate effectively, and build a shared vision for project success.",
    },
    {
      id: 2,
      icon: DetailIcon,
      title: "Process",
      description:
        "Master planning, execution, risk, quality, schedule, budget, and delivery management across projects.",
    },
    {
      id: 3,
      icon: ChartIcon,
      title: "Business Environment",
      description:
        "Learn to establish governance, manage compliance, control change, address risks and issues, support organizational change, and align projects with evolving business conditions.",
    },
  ],
};

const whyThisHelps = [
  "Simplifies the PMP ECO, making it easier to understand and interpret",
  "Presents the domains and tasks in a clear, structured format",
  "Clarifies the responsibilities and expectations within each domain",
  "Reinforces learning through targeted practice tests with explanations",
  "Supports focused preparation and builds confidence before the exam",
];

const PMPDomainsandTasks = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavHeroSection
        title="PMP® Domains and Tasks"
        description="PMP® Domains and Tasks - Your Roadmap to Exam Success"
        descriptionsecond="Prepare confidently for the Project Management Professional (PMP®) certification exam with structured learning focused on the domains and tasks outlined in the latest PMI Examination Content Outline (ECO). Strengthen your project management knowledge, reinforce key concepts, and improve exam readiness through a systematic approach to each domain. This course is designed to help you understand what PMI expects across every domain and task area for maximum success."
        sideImage={InnerPage}
      />

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-start items-start gap-3 text-left">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Understand What the PMP® Exam Really Tests
            </h2>

            <p className="text-paragraph text-sm font-normal leading-[26px]">
              This course focuses on domain and task based targeted learning,
              allowing you to master one knowledge area at a time before moving
              to full exam simulations. A strong understanding of the PMP®
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
              What Is the PMP® Exam Content Outline (ECO)?
            </h2>

            <p className="text-paragraph text-sm font-normal leading-[26px]">
              The PMP Examination Content Outline (ECO) is PMI's official
              blueprint for the PMP® exam. It defines the knowledge, skills, and
              responsibilities expected of today's project managers and outlines
              what is tested on the certification exam.
            </p>

            <h3 className="text-Black_light text-xl md:text-2xl font-bold mt-1">
              The ECO is structured into
            </h3>

            <ul className="space-y-2 list-disc pl-5 text-paragraph text-sm leading-[26px]">
              <li>
                Domains - High-level areas essential to project management
                practice (People, Process, Business Environment).
              </li>

              <li>
                Tasks - Key responsibilities project managers perform within
                each domain.
              </li>

              <li>
                Enablers - Activities related to each task, helping explain what
                the task includes.
              </li>
            </ul>

            <p className="text-paragraph text-sm font-normal leading-[26px]">
              Every PMP® exam is based on the ECO, with questions covering all
              domains according to PMI's prescribed weighting. Understanding the
              ECO helps candidates focus their study on what matters most for
              exam success.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              PMP® Exam Domains Overview
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
                PMP Domains and Tasks Breakdown: Your Roadmap to Exam Success
              </h3>
              <p className="text-paragraph text-sm font-normal leading-[26px]">
                Explore the People, Process, and Business Environment domains
                along with the critical tasks under each.
              </p>
              <p className="text-paragraph text-sm font-normal leading-[26px]">
                Discover how to turn the PMP ECO into a practical study roadmap.
                Master domain and tasks to focus your studies, strengthen core
                knowledge, and maximize exam readiness.
              </p>

              <Button
                className="w-fit mt-1"
                onClick={() => navigate("/pmp/pmp-exam-prep-course")}
              >
                Get Started
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

export default PMPDomainsandTasks;
