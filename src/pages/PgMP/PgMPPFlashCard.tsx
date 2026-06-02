import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import InnerPage from "@/assets/inner-page.jpg";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import TraningImage from "@/assets/training-image.png";
import {
  ChartIcon,
  ComIcon,
  DetailIcon,
  ExamsIcon,
  GreenTickIcon,
} from "@/utils/svgicons";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";

const flashCard = {
  cards: [
    {
      id: 1,
      icon: ExamsIcon,
      title: "Organized by Categories",
      description: "Review cards grouped by categories for focused preparation",
    },
    {
      id: 2,
      icon: ComIcon,
      title: "Formulas & Key Concepts Included",
      description:
        "Core formulas, essential frameworks and high-impact concepts aligned with your exam",
    },
    {
      id: 3,
      icon: ExamsIcon,
      title: "Scenario-Based Prompts",
      description: "Practice thinking in PMI-style question formats",
    },
    {
      id: 4,
      icon: DetailIcon,
      title: "Mobile-Friendly Access",
      description: "Review anytime, anywhere",
    },
    {
      id: 5,
      icon: ChartIcon,
      title: "Top-Rated Cards",
      description:
        "Study the highest-rated cards to focus on high-impact topics",
    },
  ],
};

const SampleFlashCard = [
  {
    title: "Front Side",
    description:
      "A question or key PgMP® concept prompts you to think and respond before revealing the answer—training your exam mindset.",
  },
  {
    title: "Back Side",
    description:
      "A concise, easy-to-understand explanation helps reinforce concepts and eliminate confusion.",
  },
];

const Knowledge = [
  "Reinforce key PMBOK® concepts and terminology",
  "Improve recall speed for scenario-based questions",
  "Strengthen formula and process knowledge",
  "Support spaced repetition for long-term retention",
  "Ideal for quick daily revision sessions",
];

const WhatIncluded = [
  "Formulas & key calculations",
  "Acronyms & glossary terms",
  "Exam tips & confusion busters",
  "High-impact PgMP® screenshots and visuals",
];
const PgMPFlashCard = () => {
  return (
    <>
      <NavHeroSection
        title="PgMP® Flash Cards for Accelerated Exam Success"
        description="Supercharge your PgMP® preparation with focused flash cards designed to accelerate recall and fast-track your certification success. Designed for focused revision and rapid knowledge reinforcement, these flash cards help you strengthen retention and recall critical formulas."
        descriptionsecond="Whether you're in the early stages of preparation or doing final-week revision, our flash cards help you review smarter and retain more."
        sideImage={InnerPage}
      />

      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-center items-center mb-6 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Why Use PgMP® Flash Cards?
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
              Flashcards Designed for PgMP® Success
            </h2>
            <p className="text-paragraph text-sm font-normal leading-[26px]">
              PgMP® flashcards are an effective and convenient tool to support
              your preparation for the Program Management Professional
              certification. Designed for focused learning, they present
              essential concepts and terminology in a concise, easy-to-remember
              format. PgMP® exam flash cards are two-sided study cards designed
              to improve recall and exam readiness. One side presents a PgMP®
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
              How It Works
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
      <StartFreeTrial />
      <TopFooterSection
        content={{
          title: (
            <>
              Flash Cards <br /> That Build Exam Confidence
            </>
          ),
          description:
            " Reinforce critical PgMP® concepts with structured, category-based flash cards designed for focused revision and lasting retention.",
          points: [
            "Quick review, anytime access",
            "Key formulas and definitions included",
            "Target high-impact exam topics",
            "Designed to support smarter preparation",
          ],
          buttonText: "Explore PgMP® Flashcards",
          buttonLink: "#",
        }}
      />
    </>
  );
};

export default PgMPFlashCard;
