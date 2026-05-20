import React from "react";
import { useNavigate } from "react-router-dom";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import InnerPage from "@/assets/inner-page.jpg";
import {
  ChartIcon,
  ComIcon,
  HatIcon,
  ImproveIcon,
  LineCahrtIcon,
} from "@/utils/svgicons";
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import { Button } from "@/components/ui/button";

const domainsOverview = {
  cards: [
    {
      id: 1,
      icon: ChartIcon,
      title: "Strategic Alignment",
      description:
        "Align portfolio components with organizational strategy, objectives, priorities, and desired outcomes.",
    },
    {
      id: 2,
      icon: HatIcon,
      title: "Governance",
      description:
        "Establish governance frameworks, approvals, and portfolio management structures for effective oversight.",
    },
    {
      id: 3,
      icon: LineCahrtIcon,
      title: "Portfolio Performance",
      description:
        "Monitor portfolio performance, track progress, and optimize delivery of strategic outcomes.",
    },
    {
      id: 4,
      icon: ImproveIcon,
      title: "Portfolio Risk Management",
      description:
        "Balance portfolio risks within organizational risk appetite and enable informed decision-making.",
    },
    {
      id: 5,
      icon: ComIcon,
      title: "Communications Management",
      description:
        "Engage stakeholders, manage expectations, resolve issues, and support effective portfolio decisions.",
    },
  ],
};

const whyThisHelps = [
  "Simplifies the PfMP ECO, making it easier to understand and interpret",
  "Presents the domains and tasks in a clear, structured format",
  "Clarifies the responsibilities and expectations within each domain",
  "Reinforces learning through targeted practice tests with explanations",
  "Supports focused preparation and builds confidence before the exam",
];

const PfMPDomainsandTasks = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavHeroSection
        title="PfMP® Domains and Tasks - Your Path to Exam Success"
        description="Our PfMP® Domains and Tasks course is aligned with the latest PMI PfMP® Exam Content Outline (ECO) and designed for professionals preparing for certification success. The course provides detailed explanations of every domain task, including key words, practical examples, and real-world program management scenarios to build deep understanding."
        descriptionsecond="Each task is reinforced with five carefully designed practice questions to help you apply concepts, strengthen decision-making skills, and prepare confidently for situational exam questions similar to those seen on the real exam."
        sideImage={InnerPage}
      />

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-start items-start gap-3 text-left">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Understand What the PfMP® Exam Really Tests
            </h2>
            <p className="text-paragraph text-sm font-normal leading-[26px]">
              The PfMP exam is structured around the PfMP Exam Content Outline
              (ECO), which defines the knowledge, skills, and behaviors program
              managers must demonstrate. A strong understanding of the PfMP
              Domains, Tasks, and Enablers is essential for success, as every
              exam question is aligned to this framework.
            </p>
            <p className="text-paragraph text-sm font-normal leading-[26px]">
              This page breaks down the ECO in a clear and practical way,
              helping you understand what to study, why it matters, and how
              these concepts are tested on the exam.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-start items-start gap-3 text-left">
            <p className="text-paragraph text-sm font-normal leading-[26px]">
              This course focuses on domain and task based targeted learning,
              allowing you to master one knowledge area at a time before moving
              to full exam simulations. A strong understanding of the PfMP
              Domains, Tasks, and Enablers is essential for success, as every
              exam question is mapped directly to this framework. This page
              helps you break down the ECO clearly so you know what to study,
              why it matters, and how it appears in the exam.
            </p>

            <h3 className="text-Black_light text-xl md:text-2xl font-bold mt-1">
              Why this helps
            </h3>

            <ul className="space-y-2 text-paragraph text-sm leading-[26px]">
              {whyThisHelps.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="text-[8px] mt-2">&bull;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-start items-start gap-3 text-left">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              What Is the PfMP® Exam Content Outline (ECO)?
            </h2>
            <p className="text-paragraph text-sm font-normal leading-[26px]">
              The PMI\u00AE Exam Content Outline (ECO) is the official framework
              behind the PfMP® exam. It defines the core Domains, Tasks,
              and responsibilities that experienced program managers are
              expected to demonstrate in real-world environments. Every exam
              question is built around this framework, making the ECO essential
              for focused and effective preparation.
            </p>
            <p className="text-paragraph text-sm font-normal leading-[26px]">
              In this section, you will explore each domain in detail,
              understand every task clearly, and learn how these areas are
              tested through situational and scenario-based questions. You'll
              also gain practical examples, key insights, and targeted practice
              questions to strengthen your knowledge and boost exam confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              PfMP® Exam Domains Overview
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
                PfMP Domains and Tasks: Your Roadmap to Exam Success
              </h3>
              <p className="text-paragraph text-sm font-normal leading-[26px]">
                Explore the key domains and tasks essential for exam success.
              </p>
              <p className="text-paragraph text-sm font-normal leading-[26px]">
                Discover how to turn the PfMP ECO into a practical study roadmap.
                Master domains and tasks to focus your studies, strengthen core
                knowledge, and maximize exam readiness.
              </p>

              <Button
                className="w-fit mt-1"
                onClick={() => navigate("/pfmp/pfmp-exam-prep-course")}
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

export default PfMPDomainsandTasks;
