import React from "react";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import InnerPage from "@/assets/inner-page.jpg";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import TraningImage from "@/assets/training-image.png";
import {
  ChartIcon,
  ComIcon,
  DetailIcon,
  ExamsIcon,
  GreenTickIcon,
  HatIcon,
} from "@/utils/svgicons";

const flashCard = {
  cards: [
    {
      id: 1,
      icon: ExamsIcon,
      title: "Organized by Categories",
      description:
        "Review cards grouped by topics, process groups, knowledge areas, and difficulty levels for focused preparation.",
    },
    {
      id: 2,
      icon: ComIcon,
      title: "Bookmark for Review",
      description:
        "Save important flashcards and revisit them anytime with one-click access from your dashboard.",
    },
    {
      id: 3,
      icon: ExamsIcon,
      title: "Top-Rated Cards",
      description:
        "Study the most bookmarked cards by other learners to focus on high-impact PMP® topics.",
    },
    {
      id: 4,
      icon: DetailIcon,
      title: "Search Cards",
      description:
        "Quickly find cards using keyword search across thousands of PMP® concepts and terms.",
    },
    {
      id: 5,
      icon: ChartIcon,
      title: "Self-Assessment",
      description:
        "Mark cards as correct or incorrect to test your understanding and reinforce weak areas.",
    },
    {
      id: 6,
      icon: HatIcon,
      title: "Progress Tracking",
      description:
        "Track learning progress with visual indicators and detailed reports by topic.",
    },
  ],
};

const SampleFlashCard = [
  {
    title: "Front Side",
    description:
      "A question or key PMP® concept prompts you to think and respond before revealing the answer—training your exam mindset.",
  },
  {
    title: "Back Side",
    description:
      "A concise, easy-to-understand explanation helps reinforce concepts and eliminate confusion.",
  },
];

const Knowledge = [
  "Covers key PMP® terms, formulas, and concepts",
  "Includes Agile, Predictive, and Hybrid approaches",
  "Simple explanations for complex topics",
  "Designed for quick review and long-term retention",
];

const WhatIncluded = [
  "Formulas & key calculations",
  "Acronyms & glossary terms",
  "Exam tips & confusion busters",
  "High-impact PMP® screenshots and visuals",
];

const PMPFlashCards = () => {
  return (
    <>
      <NavHeroSection
        title="Flashcards That Make PMP® Concepts Stick"
        description="Our PMP® Exam Prep Course is aligned with the latest PMI® PMP Exam Content Outline (ECO) and designed for professionals preparing for certification success. The course combines structured learning, realistic exam simulations, and in-depth explanations to help you understand concepts, apply best practices, and confidently handle situational PMP-style questions—exactly as they appear on exam day."
        sideImage={InnerPage}
      />

      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-center items-center mb-6 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Why Use PMP® Flash Cards?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3">
            {flashCard.cards.map((card) => (
              <div
                key={card.id}
                className="p-5 bg-light-blue rounded-[20px] text-center  transition"
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

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-start items-start gap-2 text-left">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Why Use PMP® Flash Cards?
            </h2>
            <p className="text-paragraph text-sm font-normal leading-[26px]">
              PMP® exam flash cards are two-sided study cards designed to
              improve recall and exam readiness. One side presents a PMP®
              concept, term, formula, or question, while the other provides a
              clear explanation or answer. They’re ideal for quick
              revision—during commutes, short breaks, or last-minute exam
              preparation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-center items-center mb-6">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] text-center">
              Sample PMP® Flash Cards
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 md:gap-y-5">
            {SampleFlashCard.map((item, index) => (
              <div
                key={index}
                className="p-5 md:p-7 bg-light-blue text-center  transition"
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
      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 lg:gap-10 items-center">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-3">
                Expand Your Recall with Digestible Knowledge
              </h2>
              <ul className="space-y-1  self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1">
                {Knowledge.map((text, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 self-stretch justify-start"
                  >
                    <span className="text-[8px]">•</span> <span>{text}</span>
                  </li>
                ))}
              </ul>
              <h4 className="text-Black_light  text-xl font-bold mt-6 mb-5">
                What’s Included
              </h4>
              <div className="mt-3 space-y-3">
                {WhatIncluded.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-paragraph text-sm"
                  >
                    <span>
                      <GreenTickIcon />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={TraningImage}
                alt="Traning Image"
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ScreenshortsSlider id="four" />
      <Testimonials id="two" />
      <StartFreeTrial />
      <div className="-mt-10 md:-mt-20 relative">
        <Faq limit={5} />
      </div>
      <TopFooterSection />
    </>
  );
};

export default PMPFlashCards;
