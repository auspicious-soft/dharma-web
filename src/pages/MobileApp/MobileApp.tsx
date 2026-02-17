import React from "react";
import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import { Button } from "@/components/ui/button";
import MobileAppImage from "@/assets/mobile-app.png";
import CertificateImage from "@/assets/certificate-image.png";
import InfiniteScrollRows from "@/components/ReusableComponents/InfiniteScrollRowsSection/InfiniteScrollRows";
const MobileAppFeatures = [
  "Master PMI exam concepts with exam-oriented learning",
  "Practice realistic, high-difficulty exam questions",
  "Track readiness across domains, tasks, and ECOs",
  "Study efficiently alongside work and life commitments",
  "Enter the exam with confidence and clarity",
];
const MentorAppCard = {
  card: [
    {
      id: 1,
      title: "Exam-Focused Learning",
      points: [
        "Structured lessons aligned to PMI Exam Content Outlines",
        "Domain-wise and task-wise breakdown",
        "Clear explanations using real-world scenarios",
      ],
    },
    {
      id: 2,
      title: "High-Quality Practice Questions",
      points: [
        "Real PMP®-style questions aligned with the latest PMI exam pattern",
        "Scenario-based questions covering Agile, Hybrid, and Predictive approaches",
      ],
    },
    {
      id: 3,
      title: "Progress & Readiness Tracking",
      points: [
        "Track accuracy, strengths, and weak areas by domain and task",
        "Readiness insights to know when you’re exam-ready",
      ],
    },
    {
      id: 4,
      title: "Exam Tips & Strategy",
      points: [
        "PMI exam mindset guidance",
        "Time-management and elimination techniques",
        "Common traps and how to avoid them",
      ],
    },
    {
      id: 5,
      title: "Learn Anytime, Anywhere",
      points: [
        "Mobile-first design for quick study sessions",
        "Ideal for commute, breaks, or revision before the exam",
      ],
    },
  ],
};
const PMIAuthorizedExperts = {
  card: [
    {
      id: 1,
      title: "Short credibility block",
      points: [
        "Developed by PMI-certified instructors",
        "PMI Premier Authorized Training Partner (ATP #3998)",
        "Trusted by thousands of PMI aspirants globally",
        "Perfect Companion to vCare Training Programs",
      ],
    },
    {
      id: 2,
      title: "Short explanation",
      points: [
        "Complements Live Online Training",
        "Enhances Bootcamps & Mentoring Programs",
        "Supports self-paced revision and exam practice",
        "Ideal for post-class reinforcement and last-mile exam prep",
      ],
    },
  ],
};
const MobileApp = () => {
  return (
    <>
      <FooterPageHeroSection title="Mobile App" description="" />
      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 items-center ">
            <div className="inline-flex flex-col justify-center items-center gap-6 md:gap-[34px]">
              <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-5">
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch justify-start">
                    <h2 className="text-Black text-3xl md:text-[40px] font-bold leading-[45px] md:leading-[65px]">
                      Your All-in-One PMI® Exam
                    </h2>
                    <h1 className="text-primary_blue text-3xl md:text-[40px] font-bold leading-[45px] md:leading-[65px]">
                      Preparation Companion
                    </h1>
                  </div>
                  <div className="self-stretch justify-start text-[#556378] text-sm md:text-base font-normal leading-[26px] md:leading-[30px]">
                    Prepare smarter for PMP®, PgMP®, PfMP®, PMOCP®, PMI-RMP®,
                    PMI-ACP®, and more — anytime, anywhere.
                  </div>
                </div>
                <ul className="space-y-1  self-stretch justify-start text-paragraph text-sm md:text-base font-normal leading-[26px] md:leading-[30px] ml-1">
                  {MobileAppFeatures.map((text, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 self-stretch justify-start"
                    >
                      <span className="text-[8px]">•</span> <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="inline-flex justify-start items-start gap-2.5 w-full">
                <Button>Download on the App Store</Button>
                <Button
                  variant="outline"
                  className="bg-transparent min-w-[150px] lg:min-w-[218px]"
                >
                  Get it on Google Play
                </Button>
              </div>
            </div>
            <div>
              <img
                src={MobileAppImage}
                alt="Mobile App"
                className="md:max-w-[557px] ml-auto w-full block"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col mb-5 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              What’s Inside the vCare PM Exam Mentor App
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {MentorAppCard.card.map((card) => (
              <div
                key={card.id}
                className="p-5 bg-light-blue rounded-[20px] text-left transition"
              >
                <div className="w-[60px] h-[60px] text-xl font-bold text-primary_heading flex items-center justify-center relative bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
                  {String(card.id).padStart(2, "0")}
                </div>

                <h4 className="text-primary_heading text-base md:text-xl font-bold mb-2 mt-4">
                  {card.title}
                </h4>

                <ul className="space-y-0 self-stretch justify-start text-paragraph text-xs  font-normal leading-6 ml-1">
                  {card.points.map((text, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 self-stretch justify-start"
                    >
                      <span className="text-[8px]">•</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-light-blue py-10 md:py-14 lg:py-16">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-7 items-center">
            <div className="flex flex-col gap-3">
              <h2 className="self-stretch justify-start text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                One App. Multiple PMI Certifications.
              </h2>
              <p className="text-paragraph text-sm font-normal">
                Earn a personalized Contact Hours certificate from a trusted
                training provider—required for PMP® application submission.
              </p>
              <p className="text-paragraph text-sm font-normal">
                This certificate validates your formal project management
                education and supports your PMP® exam application with PMI®.
              </p>
            </div>
            <div className="w-full ">
              <img
                src={CertificateImage}
                alt="Certificate Image"
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col mb-5 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Designed by PMI-Authorized Experts
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-x-5 gap-y-3 md:gap-y-5">
            {PMIAuthorizedExperts.card.map((card) => (
              <div
                key={card.id}
                className="p-5 bg-light-blue rounded-[20px] text-left transition"
              >
                {" "}
                <h4 className="text-primary_heading text-base md:text-xl font-bold mb-2 mt-4">
                  {card.title}
                </h4>
                <ul className="space-y-0 self-stretch justify-start text-paragraph text-xs  font-normal leading-6 ml-1">
                  {card.points.map((text, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 self-stretch justify-start"
                    >
                      <span className="text-[8px]">•</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-10 md:pb-14 lg:pb-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col mb-5 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Start Your Exam Preparation Today
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1 w-full leading-[26px]">
              Join professionals worldwide using vCare PM Exam Mentor to prepare
              with confidence.
            </p>
            <div className="inline-flex justify-center items-center gap-2.5 w-full mt-3">
              <Button>Download on the App Store</Button>
              <Button
                variant="outline"
                className="bg-transparent min-w-[150px] lg:min-w-[218px]"
              >
                Get it on Google Play
              </Button>
            </div>
          </div>
        </div>
        <InfiniteScrollRows />
      </section>
    </>
  );
};

export default MobileApp;
