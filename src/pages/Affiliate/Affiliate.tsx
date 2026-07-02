import React from "react";
import { Link } from "react-router-dom";
import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import PMPLogo from "@/assets/pmp-logo.png";
import AffiiateImage from "@/assets/affiliate.jpg";
import AffiiateWork from "@/assets/inner-page.jpg";
import { Button } from "@/components/ui/button";
import AffiliateFaq from "@/components/Affiliate/AffiliateFaq";

const affiliateSubject = "pmi-authorized-training-partner";

const BecomeAffiliateCard = {
  card: [
    {
      id: 1,
      title: "Grow Your Profitability",
      description:
        "Receive commissions for every successful referral that enrolls in eligible vCare programs and services.",
    },
    {
      id: 2,
      title: "Bridge Training Gaps",
      description:
        "Offer your audience reliable certification prep and PDU solutions that complement your existing content or training services.",
    },
    {
      id: 3,
      title: "Promote Trusted Programs",
      description:
        "Recommend training solutions delivered by a PMI Authorized Training Partner with a strong reputation for professional development and certification success.",
    },
    {
      id: 4,
      title: "Add Value to Your Training",
      description:
        "Enhance your offerings with our wide range of programs, and PDUs without creating new content.",
    },
    {
      id: 5,
      title: "We Make It Easy",
      description:
        "We handle sales, enrollment, training delivery, learner support and certification preparation. You focus on making referrals.",
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
    title: "Existing vCare Alumni and Students",
  },
  {
    title: "Coaches, mentors, and Consultants",
  },
  {
    title: "Content creators, bloggers, and educators",
  },
  {
    title: "Professional Associations and Business Communities",
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
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Earn 10–20% Commission by Referring Professionals to vCare
                Project Management
              </h2>
              <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px]">
                Do you have a network of project managers, program managers,
                portfolio managers, PMO leaders, agile practitioners, business
                analysts, or organizations seeking professional development and
                certification training?
              </p>
              <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px]">
                Join the vCare Affiliate Program and earn 10–20% commission by
                referring individuals and organizations to our globally
                recognized training programs, certification preparation courses,
                mentoring services, exam simulators, and corporate learning
                solutions.
              </p>
              <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px]">
                Whether you're a trainer, consultant, coach, influencer,
                recruiter, or industry professional, our affiliate program
                provides a simple way to create additional income while helping
                professionals advance their careers.
              </p>
              <Button asChild className="mt-4 md:mt-6">
                <Link to={`/contact-us?subject=${affiliateSubject}`}>
                  Join Now
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={AffiiateImage}
                alt="Affiliate program"
                className="rounded-3xl w-full object-cover"
              />
              <div className="flex justify-center items-center mt-4 md:mt-7">
                <img
                  className="w-[70px] h-[70px] relative"
                  src={PMPLogo}
                  alt="PMI logo"
                />
                <div className="-ml-8 pl-[50px] pr-[30px] py-2.5 bg-[#f0f8ff] rounded-[30px] inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-[#0a4ba8] text-sm font-medium leading-[26px]">
                    Premier Authorized Training Partner (ATP) of the Project
                    Management Institute
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-3 md:gap-y-5">
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
            <div className="w-full">
              <img
                src={AffiiateWork}
                alt="Affiliate work"
                className="rounded-3xl w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="self-stretch justify-start text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                How the Affiliate Program Works
              </h2>
              <ul className="space-y-1 list-disc self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1">
                {AffiliateProgramFeatures.map((text, index) => (
                  <li key={index} className="gap-2 self-stretch">
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] text-center">
              Who Can Join the Affiliate Program?
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1 w-full leading-[26px]">
              The vCare Affiliate Program is open to:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {JoinAffiliateProgram.map((item, index) => {
              const colors = [
                {
                  bg: "bg-gradient-to-br from-blue-50 to-blue-100",
                  border: "border-l-4 border-blue-500",
                  icon: "bg-blue-500",
                },
                {
                  bg: "bg-gradient-to-br from-green-50 to-green-100",
                  border: "border-l-4 border-green-500",
                  icon: "bg-green-500",
                },
                {
                  bg: "bg-gradient-to-br from-purple-50 to-purple-100",
                  border: "border-l-4 border-purple-500",
                  icon: "bg-purple-500",
                },
                {
                  bg: "bg-gradient-to-br from-orange-50 to-orange-100",
                  border: "border-l-4 border-orange-500",
                  icon: "bg-orange-500",
                },
                {
                  bg: "bg-gradient-to-br from-pink-50 to-pink-100",
                  border: "border-l-4 border-pink-500",
                  icon: "bg-pink-500",
                },
                {
                  bg: "bg-gradient-to-br from-indigo-50 to-indigo-100",
                  border: "border-l-4 border-indigo-500",
                  icon: "bg-indigo-500",
                },
              ];
              const colorScheme = colors[index % colors.length];
              return (
                <div
                  key={index}
                  className={`${colorScheme.bg} ${colorScheme.border} p-5 md:p-7 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center relative overflow-hidden group`}
                >
                  <div className="absolute top-0 right-0 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div
                      className={`${colorScheme.icon} w-full h-full rounded-full`}
                    ></div>
                  </div>
                  <h4 className="text-center text-gray-800 text-base font-semibold capitalize leading-[30px] max-w-[270px] w-full relative z-10">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AffiliateFaq />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto text-center">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            Start Earning Today
          </h2>
          <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px] max-w-[850px] mx-auto">
            Partner with vCare Project Management and help professionals achieve
            their certification and career goals while creating an additional
            income stream for yourself.
          </p>
          <h3 className="text-primary_heading text-xl md:text-2xl font-bold mt-5">
            Become a vCare Affiliate
          </h3>
          <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px]">
            Apply Today and Start Referring with Confidence.
          </p>
          <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px]">
            Contact us to learn more about affiliate opportunities and
            commission structures.
          </p>
          <Button asChild className="mt-5 md:mt-7">
            <Link to={`/contact-us?subject=${affiliateSubject}`}>
              Become a vCare Affiliate
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Affiliate;
