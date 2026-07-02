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
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const homeFaqs = [
    {
      question: "What does vCare Project Management offer?",
      answer:
        "We provide PMI® certification training, mentoring, exam simulators, application support, and self-paced learning for certifications such as PMP®, PgMP®, PfMP®, PMI-RMP®, PMI-RMP®, PMOCP™, CAPM®, PMI-PBA®, PMI-SP® and more.",
    },
    {
      question: "Are you an official PMI partner?",
      answer:
        "Yes. We are a PMI Premier Authorized Training Partner, since 2013, delivering trusted training aligned with PMI standards.",
    },
    {
      question: "Do you offer live online classes?",
      answer:
        "Yes. We offer live instructor-led online classes, in-person bootcamps, and flexible self-paced programs.",
    },
    {
      question: "Which certification is right for me?",
      answer:
        "It depends on your experience and career goals. We offer free consultations to help you choose the best certification pathway.",
    },
    {
      question: "Do you provide exam simulators?",
      answer:
        "Yes. Our exam simulators include realistic mock exams, scenario-based questions, detailed explanations, and progress tracking.",
    },
    {
      question: "Can you help with PMI applications?",
      answer:
        "Yes. We provide expert application support, draft reviews, audit guidance, and submission assistance.",
    },
    {
      question: "Do your courses include PDUs or contact hours?",
      answer:
        "Many of our courses provide the required contact hours for certification applications and may also help earn PDUs where applicable.",
    },
    {
      question: "Can I study on mobile devices?",
      answer:
        "Yes. Many of our learning resources and simulators are accessible on phone, tablet, and desktop devices.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Selected products may include satisfaction guarantees or refund policies. Please check individual course details.",
    },
    {
      question: "How do I get started?",
      answer:
        "Choose your certification path, enroll online, or contact us for a free consultation.",
    },
  ];

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
                <ul className="space-y-1  self-stretch justify-start text-paragraph text-sm md:text-base font-normal leading-[26px] md:leading-[30px] ml-1">
                  <li className="flex items-start gap-2 self-stretch justify-start">
                    <span className="text-[8px]">•</span>{" "}
                    <span>
                      {" "}
                      Step-by-step training aligned with the latest exam
                      standards
                    </span>
                  </li>
                  <li className="flex items-start gap-2 self-stretch justify-start">
                    <span className="text-[8px]">•</span>{" "}
                    <span>
                      {" "}
                      Expert instructors with real-world project experience
                    </span>
                  </li>
                  <li className="flex items-start gap-2 self-stretch justify-start">
                    <span className="text-[8px]">•</span>{" "}
                    <span> PMI®-approved PDUs included</span>{" "}
                  </li>
                </ul>
                <ul className="px-4 lg:px-6  py-[13px] bg-white rounded-xl shadow-[0px_4px_14px_0px_rgba(0,0,0,0.05)]  inline-flex items-center flex-wrap gap-y-1 gap-x-3 lg:gap-x-5">
                  <li className="flex items-start gap-2 self-stretch justify-start text-paragraph text-xs md:text-sm font-medium leading-[30px]">
                    <span className="text-[8px]">•</span>{" "}
                    <a href="#premium-packs-scroll" className="underline">
                      Exam Prep Courses
                    </a>
                  </li>
                  <li className="flex items-start gap-2 self-stretch justify-start text-paragraph text-xs md:text-sm font-medium leading-[30px]  ">
                    <span className="text-[8px]">•</span>{" "}
                    <a href="/exam-simulators" className="underline">
                      Exam Simulators
                    </a>
                  </li>
                  <li className="flex items-start gap-2 self-stretch justify-start text-paragraph text-xs md:text-sm font-medium leading-[30px] ">
                    <span className="text-[8px]">•</span>{" "}
                    <a href="/pdus" className="underline">
                      {" "}
                      PDU Bundles
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inline-flex justify-start items-start gap-2.5 w-full">
                <Button
                  onClick={() => {
                    const section = document.getElementById(
                      "premium-packs-scroll",
                    );
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started
                </Button>
                <Button
                  onClick={() => navigate("/contact-us")}
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
      <div id="premium-packs-scroll" className="pt-5 md:pt-7 lg:pt-10">
        <PremiumPacks
          showCourseSelect={true}
          heading="Find the Right Plan for Your Success"
          description="Choose the plan that matches your learning style, study schedule, and certification goals."
        />
      </div>
      <ThevCareExam />
      <CertificationTabs />
      <StartFreeTrial />
      <Testimonials id="two" />

      <VideoSection
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        title={<>Watch the Exam Simulator in Action</>}
        description="Our Exam Simulator provides one of the most authentic preparation experiences in the industry. When it’s time for the real exam, you’ll feel more confident and prepared because you’ll know what to expect. With 1,500+ scenario-based questions and detailed explanations designed to reflect the real exam environment, you can trust that your preparation is practical, relevant, and reliable."
      />

      <DownloadvCare />
      <Faq faqs={homeFaqs} />
    </>
  );
};

export default Home;
