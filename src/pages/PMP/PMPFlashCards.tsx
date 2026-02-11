import React from "react";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import InnerPage from "@/assets/inner-page.jpg";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import Faq from "@/components/ReusableComponents/FAQSection/Faq";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import {
  ChartIcon,
  ComIcon,
  DetailIcon,
  ExamsIcon,
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
      description: "Track learning progress with visual indicators and detailed reports by topic.",
    },
  ],
};
const PMPFlashCards = () => {
  return (
    <>
      <NavHeroSection
        title="Flashcards That Make PMP® Concepts Stick"
        description="Our PMP® Exam Prep Course is aligned with the latest PMI® PMP Exam Content Outline (ECO) and designed for professionals preparing for certification success. The course combines structured learning, realistic exam simulations, and in-depth explanations to help you understand concepts, apply best practices, and confidently handle situational PMP-style questions—exactly as they appear on exam day."
        sideImage={InnerPage}
      />
 
            <section className="bg-white p-10 lg:py-20">
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
                className="p-5 bg-[#f0f7ff] rounded-[20px] text-center hover:shadow-sm transition"
              >
                <div className="w-[60px] h-[60px] flex items-center justify-center m-auto relative bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
                  {" "}
                  <card.icon />
                </div>
                <h4 className="text-primary_heading text-base md:text-xl font-bold mb-2 mt-4">
                  {card.title}
                </h4>
                <p className="text-paragraph text-xs font-normal leading-6]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScreenshortsSlider id="four" />
      <Testimonials id="two" />
      <StartFreeTrial />
      <Faq />
      <TopFooterSection />
    </>
  );
};

export default PMPFlashCards;
