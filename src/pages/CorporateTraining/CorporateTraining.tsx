import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import React from "react";
import CorporateImage from "@/assets/tab-image.jpg";
import { Button } from "@/components/ui/button";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import EnquiryForm from "@/components/ReusableComponents/EnquiryForm/EnquiryForm";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
const learningData = [
  {
    id: 1,
    title: "Customizable Learning",
    description:
      "Choose between private virtual classes or comprehensive self-paced packages tailored to your team’s learning needs.",
  },
  {
    id: 2,
    title: "Customized Live Sessions",
    description:
      "Design live instructor-led training programs aligned with your group’s goals, schedule, and certification targets.",
  },
  {
    id: 3,
    title: "Volume Discounts",
    description:
      "Unlock significant savings on bulk purchases for teams of five or more across exams and courses.",
  },
  {
    id: 4,
    title: "Flexible Payment Options",
    description:
      "Opt for monthly billing, student swaps as needed, or a one-time annual payment for complete access.",
  },
];

const PrepCourse = [
  "Access to industry-leading practice exam systems for PMP®, PgMP®, PfMP®, PMOCP®, CAPM®, and PMI-ACP®",
  "Fully accredited On-Demand certification courses",
  "Pay only for the courseware you use",
  "Instructor tools to monitor performance and create custom tests",
  "Content continuously updated to match the latest exam changes",
  "Includes all features from our premium exam simulator products",
  "Accessible from any web browser or mobile device",
];
const CorporateTraining = () => {
  return (
    <>
      <FooterPageHeroSection
        title="Corporate Training"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
            <div className="flex flex-col mb-5 md:mb-7 text-center">
                <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">PMP® Certification Training</h2>
                <p className="text-paragraph text-sm font-normal mt-1  w-full leading-[26px]">
                    Get Certified for PMP®; world’s most trusted Project Management Certification</p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.43fr] gap-5 md:gap-5 items-center">
            <div className="">
              <img
                src={CorporateImage}
                alt="Corporate Training"
                className="w-full rounded-[20px]  aspect-[1/1] object-cover"
              />
            </div>
            <div className="">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4 md:gap-5 items-center mb-5 md:mb-7">
                {learningData.map((item) => (
                  <div
                   key={item.id}
                  className="md:p-[30px] py-6 px-4 bg-[#f0f8ff] rounded-[20px] inline-flex flex-col justify-start items-start gap-3">
                    <h3 className="self-stretch justify-start text-[#1f1f1f] text-lg md:text-[19px] font-bold">
                      {item.title}
                    </h3>
                    <p className="flex-1 justify-start text-[#556378] text-sm font-normal leading-[26px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <Button>Request a Quote</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            A Branded Learning Portal for Your Organization
          </h2>
          <p className="text-paragraph text-sm font-normal mt-1 max-w-[520px] w-full leading-[26px]">
            Get a hosted, branded version of our exam prep platform—powered by
            our industry-leading certification content and fully supported by
            our team.
            <br />
            Your learners access everything from one secure portal, while you
            maintain visibility and control.
          </p>
          <h4 className="text-Black_light  text-xl font-bold mt-5 mb-4">
            Platform Features Include
          </h4>
          <ul className="space-y-1  self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1">
            {PrepCourse.map((text, index) => (
              <li
                key={index}
                className="flex items-start gap-2 self-stretch justify-start"
              >
                <span className="text-[8px]">•</span> <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Faq limit={5} />
      <div className="-mt-10 md:-mt-14 lg:-mt-20 relative">
        <EnquiryForm />
      </div>
      <TopFooterSection />
    </>
  );
};

export default CorporateTraining;
