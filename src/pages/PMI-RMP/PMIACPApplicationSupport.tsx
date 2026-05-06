import React from "react";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import InnerPage from "@/assets/inner-page.jpg";
import TrainingImage from "@/assets/training-image.png";
import ScreenshortsSlider from "@/components/ReusableComponents/ScreenshortsSlider/ScreenshortsSlider";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";

const PMIACPApplicationSupport = () => {
  return (
    <>
      <NavHeroSection
        title="PMP Application Support"
        description="Our PMP® Exam Prep Course is aligned with the latest PMI® PMP Exam Content Outline (ECO) and designed for professionals preparing for certification success. The course combines structured learning, realistic exam simulations, and in-depth explanations to help you understand concepts, apply best practices, and confidently handle situational PMP-style questions—exactly as they appear on exam day."
       descriptionsecond=""
        sideImage={InnerPage}
      />
      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 lg:gap-10 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">Best Step-by-Step Guide with Examples and Tips</h2>
              <p className="text-paragraph text-sm font-normal leading-[26px] mt-2">
                Completing the PMP® application can be confusing and
                time-consuming, especially if you are applying for the first
                time. Many experienced professionals struggle not with
                eligibility, but with clearly presenting their project
                experience in line with PMI’s expectations. Our PMP® Application
                Support Package is designed to simplify the process and help you
                submit a strong, compliant application with confidence.
              </p>
              <p className="text-paragraph text-sm font-normal leading-[26px] mt-2">
                This support guides you step by step through the PMP®
                application process, explaining what PMI looks for in each
                section and how to describe your experience using the right
                structure and terminology. You’ll receive practical tips and
                real-world guidance to help you avoid common mistakes that can
                lead to delays, audits, or rework.
              </p>
              <p className="text-paragraph text-sm font-normal leading-[26px] mt-2">
                The package includes two real-life examples of successful PMP®
                applications, giving you a clear benchmark for the level of
                detail and wording expected by PMI. You’ll also receive a
                writable sample application template that helps you organize
                your project experience before entering it into the PMI system,
                making the process smoother and more efficient.
              </p>
              <p className="text-paragraph text-sm font-normal leading-[26px] mt-2">
                Once your draft is ready, your application is reviewed by a
                PMP®-certified Subject Matter Expert, who provides personalized
                feedback and recommendations to strengthen clarity, alignment,
                and compliance. To give you peace of mind, the package includes
                an application submission guarantee, ensuring your application
                meets PMI standards before submission.
              </p>
              <p className="text-paragraph text-sm font-normal leading-[26px] mt-2">
                With expert guidance, proven examples, and professional review,
                this package removes uncertainty and helps you move forward with
                confidence toward your PMP® certification.
              </p>
            </div>
            <div>
              <img
                src={TrainingImage}
                alt="Training Image"
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="-mt-10 md:-mt-20 relative">
      <ScreenshortsSlider id="application-screenshot" /></div>
      <div className="-mt-10 md:-mt-20 relative">
      <Faq limit={5} /></div>
      <TopFooterSection />
    </>
  );
};

export default PMIACPApplicationSupport;
