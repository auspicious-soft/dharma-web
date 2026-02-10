import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Tab = "PMP" | "PgMP" | "PfMP" | "CAPM" | "PMI-ACP" | "PMOCP";

const tabs: Tab[] = ["PMP", "PgMP", "PfMP", "CAPM", "PMI-ACP", "PMOCP"];

// Tab 1 (PMP) - Simple heading and text
const pmpContent = {
  heading: "Project Management Professional Certification",
  text: "The PMP certification is the most important industry-recognized certification for project managers. It demonstrates your experience, education and competency to lead and direct projects."
};

// Tab 2 (PgMP) - Text cards with icons
const pgmpCards = [
  {
    id: 1,
    icon: "📊", // Replace with actual icon component
    title: "Program Strategy",
    description: "Align program objectives with organizational strategy"
  },
  {
    id: 2,
    icon: "🎯",
    title: "Benefits Management",
    description: "Deliver sustained benefits and business value"
  },
  {
    id: 3,
    icon: "👥",
    title: "Stakeholder Engagement",
    description: "Manage complex stakeholder relationships"
  },
  {
    id: 4,
    icon: "⚙️",
    title: "Governance",
    description: "Establish program governance frameworks"
  }
];

// Tab 3 (PfMP) - Same as tab 2
const pfmpCards = [
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

// Tab 4 (CAPM) - Swiper slider with image and text
const capmSlides = [
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

// Tabs 5 & 6 - You can add similar content
const pmiAcpCards = pgmpCards; // Reusing for example
const pmocpSlides = capmSlides; // Reusing for example

export default function ContentTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("PMP");

  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        <div className="flex flex-col gap-2 justify-center mb-8">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold text-center">
            Learning Resources
          </h2>
          <p className="text-center text-paragraph text-sm">
            Explore certification-specific content and materials
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-start md:justify-center gap-4 lg:gap-6 mt-6 md:mt-7 
                border-b border-[#dadada] 
                overflow-x-auto whitespace-nowrap lg:overflow-x-hidden 
                px-4 md:px-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-base md:text-lg relative transition px-2 md:px-3 ${
                activeTab === tab 
                  ? "text-Black_light after:absolute after:left-0 after:bottom-[-1px] after:h-[1px] after:w-full after:bg-Black_light"
                  : "text-paragraph"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {/* Tab 1: PMP - Simple heading and text */}
          {activeTab === "PMP" && (
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-Black_light mb-4">
                {pmpContent.heading}
              </h3>
              <p className="text-paragraph text-base md:text-lg leading-relaxed">
                {pmpContent.text}
              </p>
            </div>
          )}

          {/* Tab 2: PgMP - Text cards with icons */}
          {activeTab === "PgMP" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pgmpCards.map((card) => (
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

          {/* Tab 3: PfMP - Same as tab 2 */}
          {activeTab === "PfMP" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pfmpCards.map((card) => (
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
          {activeTab === "CAPM" && (
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
                {capmSlides.map((slide) => (
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

          {/* Tab 5: PMI-ACP - Reusing card layout */}
          {activeTab === "PMI-ACP" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pmiAcpCards.map((card) => (
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

          {/* Tab 6: PMOCP - Reusing slider layout */}
          {activeTab === "PMOCP" && (
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
                {pmocpSlides.map((slide) => (
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