import React from "react";
import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import PMPLogo from "@/assets/pmp-logo.png";
import AffiiateImage from "@/assets/affiliate.jpg";
import AffiiateWork from "@/assets/inner-page.jpg";
import { Button } from "@/components/ui/button";
import AffiliateFaq from "@/components/Affiliate/AffiliateFaq";
const BecomeAffiliateCard = {
  card: [
    {
      id: 1,
      title: "Bridge Training Gaps",
      description:
        "Offer your audience reliable certification prep and PDU solutions that complement your existing content or training services.",
    },
    {
      id: 2,
      title: "Add Value to Your Training",
      description:
        "Enhance your offerings with PMP®, PgMP®, PfMP®, CAPM®, PMI-ACP®, and PDU programs without creating new content.",
    },
    {
      id: 3,
      title: "Grow Your Profitability",
      description:
        "Earn commissions by simply referring professionals to vCare’s eLearning and certification platforms.",
    },
    {
      id: 4,
      title: "We Make It Easy",
      description:
        "Track clicks, enrollments, and commissions through a simple, transparent affiliate process.",
    },
  ],
};
const AffiliateProgramFeatures = [
  "Apply to become a vCare Affiliate",
  "Receive your unique affiliate tracking link",
  "Promote vCare programs to your audience",
  "Earn commissions for every successful enrollment",
];
const JoinAffiliateProgram = [
  {
    title: "Project, program, portfolio, and PMO professionals",
  },
  {
    title: "PMI® credential holders and Trainers",
  },
  {
    title: "Coaches, mentors, and Consultants",
  },
  {
    title: "Content creators, bloggers, and educators",
  },
  {
    title: "PMI chapter leaders and volunteers (where permitted)",
  },
  {
    title: "Training partners and professional service firms",
  },
];
const Affiliate = () => {
  return (
    <>
      <FooterPageHeroSection title="vCare Affiliate Program" description="" />
      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.45fr_1fr] gap-5 lg:gap-10 items-start">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Sign Up for the vCare Affiliate Program Today
              </h2>
              <p className="text-paragraph text-sm  md:text-base font-normal mt-2 md:leading-[30px]">
                The vCare Affiliate Program offers a wide range of PMI
                Certification Exam Prep and PDU Earning online training
                materials. If you have an established website that is catering
                to project, program and portfolio managers, then convert your
                traffic into income by promoting our products to your website
                visitors.
              </p>

              <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:mt-2 md:leading-[30px]">
                Earn commissions by referring professionals to trusted project,
                program, portfolio, and PMO training solutions
              </p>

              <p className="text-paragraph text-sm  md:text-base font-normal mt-2 md:mt-2 md:leading-[30px]">
                The vCare Affiliate Program enables partners to earn commissions
                by referring professionals and organizations to vCare’s globally
                delivered training, mentoring, and certification preparation
                programs. As a PMI Premier Authorized Training Partner (ATP
                #3998), vCare offers high-quality, PMI-aligned programs that are
                trusted by professionals worldwide.
              </p>
              <Button className=" mt-4 md:mt-6">Join Now</Button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative ">
              <img
                src={AffiiateImage}
                alt="Affiiate Image"
                className="rounded-3xl w-full object-cover"
              />
              <div className="flex justify-center items-center mt-4 md:mt-7">
                <img className="w-[70px] h-[70px] relative" src={PMPLogo} />
                <div className="-ml-8 pl-[50px] pr-[30px] py-2.5 bg-[#f0f8ff] rounded-[30px] inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-[#0a4ba8] text-sm font-medium leading-[26px]">
                    Authorized Training Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col mb-5 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Why Become a vCare Affiliate?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-3 md:gap-y-5">
            {BecomeAffiliateCard.card.map((card) => (
              <div
                key={card.id}
                className="p-5 bg-white rounded-[20px] text-left transition"
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
      </section>
      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-7 lg:gap-20 items-center">
            <div className="w-full ">
              <img
                src={AffiiateWork}
                alt="Affiiate Work"
                className="rounded-3xl w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="self-stretch justify-start text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                How the Affiliate Program Works
              </h2>
              <ul className="space-y-1  self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1">
                {AffiliateProgramFeatures.map((text, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 self-stretch justify-start"
                  >
                    <span className="text-[8px]">•</span> <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className=" flex flex-col justify-center items-center mb-6 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] text-center">
              Who Can Join the Affiliate Program?
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1 w-full leading-[26px]">
              The vCare Affiliate Program is open to:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {JoinAffiliateProgram.map((item, index) => (
              <div
                key={index}
                className="p-5 md:p-7 bg-white text-center transition flex items-center justify-center"
              >
                <h4 className="text-center justify-start text-[#556378] text-base font-normal capitalize leading-[30px] max-w-[270px] w-full">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AffiliateFaq />
    </>
  );
};

export default Affiliate;
