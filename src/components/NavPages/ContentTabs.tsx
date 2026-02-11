import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "iconoir-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import InnerImage from "@/assets/inner-page.jpg";
import {
  ChartIcon,
  ClockIcon,
  ComIcon,
  DetailIcon,
  ExamsIcon,
  FlashCardIcon,
  HatIcon,
  ImproveIcon,
  LineCahrtIcon,
  MovieIcon,
  PhoneIcon,
  SimulatorsIcon,
} from "@/utils/svgicons";
import { Button } from "../ui/button";

type Tab =
  | "Overview"
  | "What You’ll Access"
  | "How It Works"
  | "You May Also Like";

const tabs: Tab[] = [
  "Overview",
  "What You’ll Access",
  "How It Works",
  "You May Also Like",
];

// Tab 1 (Overview Content)
const overviewContent = {
  heading: "Overview",
  text: "The vCare PMP® Exam Prep Course is a comprehensive, self-paced program designed to help project management professionals confidently pass the PMP® certification exam. Built in alignment with the latest PMI® Exam Content Outline, the course combines structured learning, real-world scenarios, and exam-level practice to ensure complete readiness. Learners gain access to full-length mock exams, domain-based practice tests, detailed explanations, and smart performance analytics to track progress effectively. With flexible, 100% online access and expert-curated content, the course supports busy professionals in mastering PMP concepts, strengthening exam strategies, and achieving certification success on their first attempt.",
};

// Tab 2 What You’ll Access
const accessCard = {
  heading: "What You’ll Access",
  cards: [
    {
      id: 1,
      icon: ExamsIcon,
      title: "Full-length PMP® mock exams",
      description:
        "Simulate real PMP exam conditions with timed, full-length practice tests.",
    },
    {
      id: 2,
      icon: ComIcon,
      title: "Mini practice tests by domain",
      description:
        "Practice individual PMP domains to strengthen weak knowledge areas effectively.",
    },
    {
      id: 3,
      icon: ExamsIcon,
      title: "2,000+ PMP-style practice questions",
      description:
        "Large question bank aligned with real PMP exam difficulty and structure.",
    },
    {
      id: 4,
      icon: DetailIcon,
      title: "Detailed answer explanations",
      description:
        "Understand correct answers with clear logic, references, and concept explanations.",
    },
    {
      id: 5,
      icon: ChartIcon,
      title: "Smart performance analytics",
      description:
        "Track progress, accuracy, and improvement areas with detailed performance insights.",
    },
    {
      id: 6,
      icon: HatIcon,
      title: "Structured PMP study plan",
      description:
        "Follow a guided study roadmap designed for busy working professionals.",
    },
    {
      id: 7,
      icon: MovieIcon,
      title: "Video lessons & concept breakdowns",
      description:
        "Learn complex PMP concepts through concise, instructor-led video lessons.",
    },
    {
      id: 8,
      icon: PhoneIcon,
      title: "Downloadable study resources",
      description:
        "Access printable notes and guides for offline PMP exam preparation.",
    },
    {
      id: 9,
      icon: FlashCardIcon,
      title: "Flashcards and revision tools",
      description:
        "Quickly revise key formulas, processes, and PMP terminology.",
    },
  ],
};

// Tab 3 How It Works
const workCard = {
  heading: "How It Works",
  dis: "Boost your confidence and exam readiness with vCare Exam Simulators—your success partner for PMI certifications.",
  card: [
    {
      id: 1,
      icon: ClockIcon,
      title: "Enroll in a Plan",
      description: "Choose the PMP bundle that fits your goal",
    },
    {
      id: 2,
      icon: LineCahrtIcon,
      title: "Follow the Study Plan",
      description: "Learn domain-wise with guided lessons",
    },
    {
      id: 3,
      icon: SimulatorsIcon,
      title: "Practice with Simulators",
      description: "Attempt real exam-style mock tests",
    },
    {
      id: 4,
      icon: ImproveIcon,
      title: "Analyze & Improve",
      description: "Review results and strengthen weak areas",
    },
    {
      id: 5,
      icon: PhoneIcon,
      title: "Clear the PMP® Exam",
      description: "Walk into the exam with confidence",
    },
  ],
};

// Tab 4 You May Also Like
const alsoLikeSlides = [
  {
    id: 1,
    image: InnerImage, // Replace with actual image
    title: "PMP® Full-Length Exam Simulator",
    description:
      "Experience real PMP exam conditions with timed, scenario-based full mock tests.",
  },
  {
    id: 2,
    image: InnerImage,
    title: "PMP® Practice Question Bank",
    description:
      "Strengthen your concepts with a large collection of PMP-aligned practice questions.",
  },
  {
    id: 3,
    image: InnerImage,
    title: "PMP® Exam Strategy Workshops",
    description:
      "Learn proven exam strategies, time management, and question-solving techniques from experts.",
  },
  {
    id: 4,
    image: InnerImage,
    title: "PMP® Exam Strategy Workshops",
    description:
      "Learn proven exam strategies, time management, and question-solving techniques from experts.",
  },
];

interface AlsoLikeSlidesProps {
  id: string;
}

export default function ContentTabs({ id }: AlsoLikeSlidesProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  return (
    <section className="pb-10 lg:pt-10 lg:pb-20">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        {/* Tabs */}
        <div
          className="flex justify-start md:justify-center gap-1
                 border-b border-[#dadada] 
                overflow-x-auto whitespace-nowrap lg:overflow-x-hidden lg:overflow-y-hidden 
                px-1 md:px-0"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative top-[0px] py-2 text-base md:text-lg transition px-3 md:px-7 border-2 rounded-tl-[10px] rounded-tr-[10px]   ${
                activeTab === tab
                  ? "text-primary_heading after:bg-primary_heading border-primary_heading "
                  : "text-paragraph border-transparent hover:text-primary_heading"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {/* Tab 1: Overview */}
          {activeTab === "Overview" && (
            <div className="text-center">
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-4">
                {overviewContent.heading}
              </h2>
              <p className="text-center justify-start text-paragraph text-sm font-normal leading-[26px]">
                {overviewContent.text}
              </p>
            </div>
          )}

          {/* Tab 2: What You’ll Access  */}
          {activeTab === "What You’ll Access" && (
            <div className="text-center">
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-4">
                {accessCard.heading}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3">
                {accessCard.cards.map((card) => (
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
          )}

          {/* Tab 3: PfMP - Same as tab 2 */}
          {activeTab === "How It Works" && (
            <div className="text-center">
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-4">
                {workCard.heading}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3">
                {workCard.card.map((card) => (
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
              <p className="text-paragraph text-sm font-normal leading-6 mt-4 md:mt-7">
                {workCard.dis}
              </p>
            </div>
          )}

          {/* Tab 4: CAPM - Swiper slider */}
          {activeTab === "You May Also Like" && (
            <div className="">
              <div className="flex gap-3 items-center justify-between mb-7">
                <div>
                  <h2 className="text-Black_light text-2xl md:text-3xl font-bold">
                    You May Also Like
                  </h2>
                  <p className="text-paragraph text-sm font-normal leading-6 mt-1">
                    Related PMP Learning Resources
                  </p>
                </div>

                {/* ARROWS */}
                <div className="flex gap-2 md:gap-5">
                  <button
                    className={`store-prev-${id} w-8 h-8 md:w-10 md:h-10 p-2 md:p-3 rounded-full bg-[#4c8dea] text-white flex items-center justify-center`}
                  >
                    <ArrowLeft />
                  </button>

                  <button
                    className={`store-next-${id} w-8 h-8 md:w-10 md:h-10 p-2 md:p-3 rounded-full bg-[#4c8dea] text-white flex items-center justify-center`}
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: `.store-prev-${id}`,
                  nextEl: `.store-next-${id}`,
                }}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 12 },
                  768: { slidesPerView: 2, spaceBetween: 16 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
              >
                {alsoLikeSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full aspect-[1/0.72] object-cover rounded-[20px]"
                      />
                      <div className="pt-3 flex flex-col gap-3">
                        <h4 className="text-primary_heading text-base font-semibold">
                          {slide.title}
                        </h4>
                        <p className=" text-paragraph text-sm font-normal leading-6">
                          {slide.description}
                        </p>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
