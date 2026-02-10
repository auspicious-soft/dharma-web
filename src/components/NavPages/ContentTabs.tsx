import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Tab = "Overview" | "What You’ll Access" | "How It Works" | "You May Also Like";

const tabs: Tab[] = ["Overview", "What You’ll Access", "How It Works", "You May Also Like"];

// Tab 1 (Overview Content)
const overviewContent = {
  heading: "Overview",
  text: "The vCare PMP® Exam Prep Course is a comprehensive, self-paced program designed to help project management professionals confidently pass the PMP® certification exam. Built in alignment with the latest PMI® Exam Content Outline, the course combines structured learning, real-world scenarios, and exam-level practice to ensure complete readiness. Learners gain access to full-length mock exams, domain-based practice tests, detailed explanations, and smart performance analytics to track progress effectively. With flexible, 100% online access and expert-curated content, the course supports busy professionals in mastering PMP concepts, strengthening exam strategies, and achieving certification success on their first attempt."
};

// Tab 2 What You’ll Access
const accessCard = {
  heading: "What You’ll Access",
  cards: [
    {
      id: 1,
      icon: "📊",
      title: "Program Strategy",
      description: "Align program objectives with organizational strategy",
    },
    {
      id: 2,
      icon: "🎯",
      title: "Benefits Management",
      description: "Deliver sustained benefits and business value",
    },
    {
      id: 3,
      icon: "👥",
      title: "Stakeholder Engagement",
      description: "Manage complex stakeholder relationships",
    },
    {
      id: 4,
      icon: "⚙️",
      title: "Governance",
      description: "Establish program governance frameworks",
    },
  ],
};


// Tab 3 How It Works
const workCard = [
  {
    id: 1,
    icon: "🌟",
    title: "Portfolio Alignment",
    description: "Align portfolio with strategic objectives"
  },
  {
    id: 2,
    icon: "💼",
    title: "Portfolio Optimization",
    description: "Optimize resource allocation across initiatives"
  },
  {
    id: 3,
    icon: "📈",
    title: "Value Delivery",
    description: "Maximize organizational value delivery"
  },
  {
    id: 4,
    icon: "🔄",
    title: "Portfolio Governance",
    description: "Implement effective governance processes"
  }
];

// Tab 4 You May Also Like
const alsoLikeSlides = [
  {
    id: 1,
    image: "/path-to-image-1.jpg", // Replace with actual image
    title: "Foundation Course",
    description: "Build your project management foundation with comprehensive training"
  },
  {
    id: 2,
    image: "/path-to-image-2.jpg",
    title: "Exam Preparation",
    description: "Practice with real exam questions and scenarios"
  },
  {
    id: 3,
    image: "/path-to-image-3.jpg",
    title: "Study Materials",
    description: "Access extensive study guides and reference materials"
  },
  {
    id: 4,
    image: "/path-to-image-4.jpg",
    title: "Certification Support",
    description: "Get expert guidance throughout your certification journey"
  }
];
 

export default function ContentTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  return (
    <section className="bg-white py-10 lg:py-10">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        {/* Tabs */}
        <div className="flex justify-start md:justify-center gap-1 mt-6 md:mt-7 
                 border-b border-[#dadada] 
                overflow-x-auto whitespace-nowrap lg:overflow-x-hidden lg:overflow-y-hidden 
                px-1 md:px-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative top-[0px] py-2 text-base md:text-lg font-medium transition px-3 md:px-7 border-2 rounded-tl-[10px] rounded-tr-[10px]   ${
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {accessCard.cards.map((card) => (
                <div 
                  key={card.id} 
                  className="bg-light-blue p-6 rounded-lg text-center hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h4 className="text-lg font-semibold text-Black_light mb-2">
                    {card.title}
                  </h4>
                  <p className="text-paragraph text-sm">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
            </div>
          )}

          {/* Tab 3: PfMP - Same as tab 2 */}
          {activeTab === "How It Works" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workCard.map((card) => (
                <div 
                  key={card.id} 
                  className="bg-light-blue p-6 rounded-lg text-center hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h4 className="text-lg font-semibold text-Black_light mb-2">
                    {card.title}
                  </h4>
                  <p className="text-paragraph text-sm">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 4: CAPM - Swiper slider */}
          {activeTab === "You May Also Like" && (
            <div className="max-w-5xl mx-auto">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  }, 
                }}
                className="pb-12"
              >
                {alsoLikeSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-Black_light mb-2">
                          {slide.title}
                        </h4>
                        <p className="text-paragraph text-sm">
                          {slide.description}
                        </p>
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