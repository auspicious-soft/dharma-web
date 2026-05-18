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
      "Choose from private virtual classes, onsite workshops, or comprehensive self-paced learning packages tailored to your organization's goals and workforce development needs.",
  },
  {
    id: 2,
    title: "Customized Live Sessions",
    description:
      "Design instructor-led training programs aligned with your team's objectives, schedules, certification pathways, and business priorities.",
  },
  {
    id: 3,
    title: "Volume Discounts",
    description:
      "Benefit from discounted pricing for group enrollments, enterprise learning initiatives, and bulk purchases across certification courses and exam preparation programs.",
  },
  {
    id: 4,
    title: "Flexible Payment Options",
    description:
      "Select flexible billing and enrollment options, including annual subscriptions, phased learning plans, and scalable access for growing teams.",
  },
];

const portalFeatures = [
  "Access to practice exams and exam simulators",
  "Expert-led on-demand certification training programs",
  "Flexible pay-as-you-use courseware model",
  "Administrative dashboards to monitor learner engagement, performance, and certification readiness",
  "Continuously updated content aligned with the latest PMI exam changes and Exam Content Outlines (ECOs)",
  "Includes premium exam simulator features with detailed analytics and reporting",
  "Accessible anytime from any web browser, tablet, or mobile device",
  "Scalable solution designed for teams, departments, and enterprise-wide learning initiatives",
];

const CorporateTraining = () => {
  return (
    <>
      <FooterPageHeroSection
        title="Transform Learning into Organizational Success"
        description="Equip your employees with world-class training programs, expert mentoring, certification pathways, and flexible learning solutions designed to accelerate workforce readiness, strengthen delivery capability, and support strategic business growth."
      />

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col mb-5 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Professional Certification Training
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1 w-full leading-[26px]">
              Advance your career with expert-led certification training, exam preparation, and practical learning solutions designed for today's professionals.
            </p>
            <h3 className="text-Black_light text-xl md:text-2xl font-bold mt-5">
              Corporate Certification Training Programs
            </h3>
            <p className="text-paragraph text-sm font-normal mt-1 leading-[26px]">
              Empower your teams with globally recognized certification training programs delivered by industry experts through flexible live online, onsite, and self-paced learning formats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.43fr] gap-5 md:gap-5 items-center">
            <div>
              <img
                src={CorporateImage}
                alt="Corporate Training"
                className="w-full rounded-[20px] aspect-[1/1] object-cover"
              />
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4 md:gap-5 items-center mb-5 md:mb-7">
                {learningData.map((item) => (
                  <div
                    key={item.id}
                    className="md:p-[30px] py-6 px-4 bg-[#f0f8ff] rounded-[20px] inline-flex flex-col justify-start items-start gap-3"
                  >
                    <h3 className="self-stretch justify-start text-[#1f1f1f] text-lg md:text-[19px] font-bold">
                      {item.title}
                    </h3>
                    <p className="flex-1 justify-start text-[#556378] text-sm font-normal leading-[26px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => {
                  const section = document.getElementById("enquiry-form-scroll");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            A Branded Learning Portal for Your Organization
          </h2>
          <p className="text-paragraph text-sm font-normal mt-1 leading-[26px]">
            Empower your teams with a fully hosted and branded learning platform powered by vCare Project Management's professional certification training content, exam preparation systems, and learning solutions.
          </p>
          <p className="text-paragraph text-sm font-normal mt-3 leading-[26px]">
            Your learners can access training, practice exams, and learning resources through one secure portal, while your organization benefits from learner analytics, progress tracking, performance insights, and reporting visibility.
          </p>
          <h4 className="text-Black_light text-xl font-bold mt-5 mb-4">
            Platform Features
          </h4>
          <ul className="space-y-1 self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1">
            {portalFeatures.map((text) => (
              <li
                key={text}
                className="flex items-start gap-2 self-stretch justify-start"
              >
                <span className="text-[8px]">&bull;</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq limit={5} />

      <div
        id="enquiry-form-scroll"
        className="-mt-10 md:-mt-14 lg:-mt-20 relative"
      >
        <EnquiryForm
          formTitle="Request Corporate Training Information"
          formDescription="Share your training requirements with us, and one of our corporate learning specialists will get in touch with you shortly."
          showCorporateFields
          defaultSubject="request-a-quote"
        />
      </div>
      <TopFooterSection />
    </>
  );
};

export default CorporateTraining;
