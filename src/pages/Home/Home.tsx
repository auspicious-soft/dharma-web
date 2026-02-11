import React from "react";
import HomeBanner from "@/assets/home-banner.png";
import { Button } from "@/components/ui/button";
import OurStoreSection from "@/components/Home/OurStoreSection";
import { PremiumPacks } from "@/components/ReusableComponents/PlanSection/PremiumPacks";
import ThevCareExam from "@/components/Home/ThevCareExam";
import CertificationTabs from "@/components/Home/CertificationTabs";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import VideoSection from "@/components/ReusableComponents/VideoSection/VideoSection";
import DownloadvCare from "@/components/Home/DownloadvCare";
import Faq from "@/components/ReusableComponents/FAQSection/Faq";

const Home = () => {
  return (
    <>
      <section className="bg-light-blue lg:pt-[94px]">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 items-end ">
            <div className="inline-flex flex-col justify-center items-center gap-6 md:gap-[34px] py-6 md:py-10">
              <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-5">
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch justify-start">
                    <h2 className="text-Black text-2xl md:text-3xl font-bold leading-[42px] md:leading-[62px]">
                      Get Certified.
                    </h2>
                    <h1 className="text-primary_blue text-3xl md:text-[40px] font-bold leading-[45px] md:leading-[65px]">
                      Get Recognized. Get Ahead.
                    </h1>
                  </div>
                </div>
                <ul className="space-y-1  self-stretch justify-start text-paragraph text-sm md:text-base font-normal leading-[30px] ml-1">
                  <li className="flex items-start gap-2 self-stretch justify-start">
                    <span className="text-[8px]">•</span> <span> Step-by-step training aligned with the latest exam standards</span>
                  </li>
                   <li className="flex items-start gap-2 self-stretch justify-start">
                    <span className="text-[8px]">•</span> <span> Expert instructors with real-world project experience</span></li>
                    <li className="flex items-start gap-2 self-stretch justify-start">
                    <span className="text-[8px]">•</span> <span> PMI®-approved PDUs included</span> </li>
                </ul>
                <ul className="px-4 lg:px-6  py-[13px] bg-white rounded-xl shadow-[0px_4px_14px_0px_rgba(0,0,0,0.05)]  inline-flex items-center flex-wrap gap-y-1 gap-x-3 lg:gap-x-5">
                  <li className="flex items-start gap-2 self-stretch justify-start text-paragraph text-xs md:text-sm font-medium leading-[30px]">
                     <span className="text-[8px]">•</span> <span>Exam Prep Courses</span>
                  </li>
                  <li className="flex items-start gap-2 self-stretch justify-start text-paragraph text-xs md:text-sm font-medium leading-[30px]  ">
                     <span className="text-[8px]">•</span> <span>Exam Simulators</span>
                  </li>
                  <li className="flex items-start gap-2 self-stretch justify-start text-paragraph text-xs md:text-sm font-medium leading-[30px] ">
                    <span className="text-[8px]">•</span> <span> PDU Bundles</span>
                  </li>
                </ul>
              </div>
              <div className="inline-flex justify-start items-start gap-2.5 w-full">
                <Button>Get Started</Button>
                <Button
                  variant="outline"
                  className="bg-transparent min-w-[150px] lg:min-w-[218px]"
                >
                  Talk To Us
                </Button>
              </div>
            </div>
            <div>
              <img src={HomeBanner} alt="HomeBanner" className="-mt-7 block" />
            </div>
          </div>
        </div>
      </section> 

      <OurStoreSection id="one" />
      <PremiumPacks
        showCourseSelect={true}
        heading="Premium Packs"
        description="Update Money Back Guarantee copy"
      />
      <ThevCareExam />
      <CertificationTabs />
      <StartFreeTrial /> 
      <Testimonials id="two" />
      <VideoSection />
      <DownloadvCare />
      <Faq />
    </>
  );
};

export default Home;
