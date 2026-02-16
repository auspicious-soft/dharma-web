import AuthorizedTrainingPartner from "@/components/ReusableComponents/AuthorizedTrainingPartnerSection/AuthorizedTrainingPartner";
import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import React from "react";
import TrainingImage from "@/assets/training-image.png";
import PlanSelector from "@/components/PDUs/PlanSelector";
import CreditsPDUSection from "@/components/PDUs/CreditsPDUSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import Faq from "@/components/ReusableComponents/FAQSection/Faq";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import { CircleArrowIcon, GreenTickIcon } from "@/utils/svgicons";
import { Button } from "@/components/ui/button";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import VideoSection from "@/components/ReusableComponents/VideoSection/VideoSection";
import CertificateImage from "@/assets/certificate-image.png";
import OnDemandImage1 from "@/assets/demand-1.jpg";
import OnDemandImage2 from "@/assets/demand-2.jpg";
import OnDemandImage3 from "@/assets/demand-3.jpg";
import OnDemandImage4 from "@/assets/demand-4.jpg";

const storeData = [
  {
    id: 1,
    title: "60 PDUs Package",
    points: [
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
    ],
  },
  {
    id: 2,
    title: "30 PDUs Package",
    points: [
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
    ],
  },
  {
    id: 3,
    title: "15 PDUs Package ",
    points: [
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
      "Live, online, mentor-led sessions.",
    ],
  },
];
const expertsChoose = [
  {
    id: 1,
    title: "Why Experts Choose This Bundle",
    points: [
      "Earn PMI-approved PDUs without attending live classes",
      "No assessments or exams after lessons",
      "Learn at your own pace, anytime, anywhere",
      "Ideal for certification renewal and continuous learning",
    ],
  },
  {
    id: 2,
    title: "What These Courses Cover",
    points: [
      "The concepts aligned with PMI Talent Triangle",
      "Emerging practices and real-world applications",
      "Professional development and leadership topics",
      "Practical insights to stay current as a PMI credential holder",
    ],
  },
];
const onDemand = [
  {
    id: 1,
    img: OnDemandImage1,
    title: "Project Management Foundations",
    count: "25 PDUs",
    points: [
      "Learn how to manage real-world projects across industries",
      "Understand essential tools, processes, and frameworks used by PMs",
      "Apply structured project management techniques by practical scenarios",
    ],
  },
  {
    id: 2,
    img: OnDemandImage2,
    title: "SCRUM Immersion for the Agile PM",
    count: "14 PDUs",
    points: [
      "Learn Agile principles and SCRUM practices used in modern teams",
      "Identify real-world business needs and Agile use cases",
      "Implement SCRUM effectively within your projects and organizations",
    ],
  },
  {
    id: 3,
    img: OnDemandImage3,
    title: "Modern Leadership Techniques",
    count: "14 PDUs",
    points: [
      "Different leadership styles and how to apply them in practice",
      "Benefits of transformational, transactional, and ethical leadership",
      "Identify and address leadership challenges and dysfunctions",
    ],
  },
  {
    id: 4,
    img: OnDemandImage4,
    title: "How to Measure Project Performance",
    count: "7 PDUs",
    points: [
      "Use Earned Value Management (EVM) to measure project performance",
      "Identify cost overruns and schedule delays early",
      "Apply forecasting, charting, and reporting techniques effectively",
    ],
  },
];

const keyBenefits = {
  heading: "Key Benefits Grid",
  card: [
    {
      id: 1,
      title: "Earn PDUs Online",
      description:
        "Complete courses on your schedule and earn PMI-approved PDUs effortlessly.",
    },
    {
      id: 2,
      title: "Completion Certificate",
      description:
        "Receive a certificate and PDU claim code after each course.",
    },
    {
      id: 3,
      title: "PMI Talent Triangle Aligned",
      description:
        "Courses mapped to Education, Giving Back, and Professional Development.",
    },
    {
      id: 4,
      title: "Flexible Learning",
      description: "Pause, resume, and rewatch lessons anytime across devices.",
    },
    {
      id: 5,
      title: "Easy PDU Submission",
      description: "Simple CCRS self-submission with instant PMI approval.",
    },
  ],
};

const PDUs = () => {
  return (
    <>
      <FooterPageHeroSection
        title="PDUs"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <AuthorizedTrainingPartner
        title="Claim PDUs in just a few clicks with Instant PMI Approval"
        subtitle="Maintain your PMI® certification without stress. Earn PMI-approved PDUs through on-demand, instructor-led courses designed for busy professionals. No exams. No delays. Just simple, compliant PDU earning."
        bullets={[
          {
            text: "PMI Premier Authorized Training Partner (ATP #3998)",
          },
          { text: "Pre-approved by PMI®" },
          { text: "Instant approval via CCRS" },
        ]}
        descriptionTop=""
        descriptionBottom=""
        image={TrainingImage}
      />
      <PlanSelector />
      <CreditsPDUSection />

      <section className="overflow-hidden py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {expertsChoose.map((item) => (
             
              <div 
               key={item.id}
              className="rounded-2xl px-3 md:px-7 py-4 md:py-7 bg-light-blue h-full flex flex-col justify-between gap-4 md:gap-7">
                {/* TOP */}
                <div>
                  <h3 className="text-Black_light text-xl md:text-3xl font-bold mb-4 md:mb-7">
                    {item.title}
                  </h3>

                  <ul className="space-y-2">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-paragraph text-sm"
                      >
                        <span>
                          <CircleArrowIcon />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-blue overflow-hidden py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-5 text-center">
            On-Demand PDU Courses Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {onDemand.map((item) => (
              <div 
              key={item.id}
              className="p-4 md:p-5 bg-white rounded-[20px] flex flex-col justify-between gap-4 md:gap-7">
                <div>
                  <img src={item.img} alt={item.img} className="rounded-2xl" />
                  <h3 className="text-primary_heading text-base md:text-xl font-bold mt-4 mb-2">
                    {item.title}
                  </h3>
                  <h5 className="self-stretch justify-start text-Black_light text-base md:text-xl font-bold">
                    25 PDUs
                  </h5>
                  <ul className="space-y-2 md:space-y-3 mt-5">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-paragraph text-sm"
                      >
                        <span>
                          <GreenTickIcon />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="text-left">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-5 text-center">
              {keyBenefits.heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
              {keyBenefits.card.map((card) => (
                <div
                  key={card.id}
                  className="p-5 bg-light-blue rounded-[20px] text-left hover:shadow-sm transition"
                >
                  <div className="w-[60px] h-[60px] text-xl font-bold text-primary_heading flex items-center justify-center relative bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
                    {String(card.id).padStart(2, "0")}
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
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-16">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-7 items-center">
            <div className="flex flex-col gap-3">
              <h2 className="self-stretch justify-start text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Receive Your 35 Contact Hours Certificate
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

      <VideoSection
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        title={
          <>
            Preview How You’ll Learn
          </>
        }
        description="Explore how our on-demand PDU courses fit seamlessly into your workday."
      />

      <Testimonials id="pdus-testimonials" />
      <section className="overflow-hidden py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <h2 className="text-Black_light text-center text-2xl md:text-3xl font-bold md:leading-[46px] mb-4 md:mb-6 ">
            Choose Your PDU Package
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {storeData.map((item) => (
              <div 
               key={item.id}
              className="border border-primary_blue  rounded-2xl px-3 md:px-5 py-6 md:py-10 bg-light-blue h-full flex flex-col justify-between">
                {/* TOP */}
                <div>
                  <h3 className="text-primary_heading font-semibold text-lg mb-3">
                    {item.title}
                  </h3>

                  <div className="border-t border-[#cde2ff] mb-6" />

                  <ul className="space-y-2">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-paragraph text-sm"
                      >
                        <span>
                          <CircleArrowIcon />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-[#cde2ff] mt-6" />
                </div>

                <Button className="mt-6 md:mt-10 w-full ">Enroll Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-light-blue">
        <StartFreeTrial />
      </div>
      <Faq />
      <TopFooterSection />
    </>
  );
};

export default PDUs;
