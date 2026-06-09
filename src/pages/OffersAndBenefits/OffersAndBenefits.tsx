import EnquiryForm from "@/components/ReusableComponents/EnquiryForm/EnquiryForm";
import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import { CALENDLY_CONSULTATION_URL } from "@/utils/links";
import { Button } from "@/components/ui/button";
import { CircleArrowIcon } from "@/utils/svgicons";
import {
  BadgePercent,
  CalendarDays,
  Flag,
  Landmark,
  Medal,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const quoteSubject = "request-a-quote";

const armySteps = [
  {
    title: "Select Your Program",
    description: "Choose the training that supports your career goals.",
  },
  {
    title: "Request a Training Quote",
    description:
      "We'll provide an ArmyIgnitED-compliant quote and documentation, including exam voucher.",
  },
  {
    title: "Start Learning",
    description:
      "Once approved, access your training and begin immediately.",
  },
];

const discountEligibility = [
  "Active duty or veteran professionals from the Army, Marines, Navy, Air Force, Border, Coast Guard, or any other recognized military service branch",
  "Women professionals",
  "Participating PMI Chapter Members",
  "Differently-abled professionals",
];

const benefitCards = [
  {
    icon: ShieldCheck,
    title: "U.S. Military Credentialing Support",
    description:
      "vCare Project Management proudly supports military personnel seeking professional development and industry-recognized credentials through approved training and learning programs.",
    points: [
      "Support identifying available funding pathways",
      "Guidance on eligible training options",
      "Career-aligned certification preparation",
    ],
  },
  {
    icon: Landmark,
    title: "PMI Chapter Member Benefits",
    description:
      "Members of participating PMI Chapters qualify for exclusive discounts and special promotions on selected training and professional development programs.",
    points: [
      "Selected program discounts",
      "Special chapter promotions",
      "Professional development support",
    ],
  },
  {
    icon: Users,
    title: "Corporate Team Savings",
    description:
      "Organizations investing in workforce development may be eligible for group pricing and customized training packages.",
    points: [
      "Group pricing options",
      "Customized training packages",
      "Tailored learning and development solutions",
    ],
  },
  {
    icon: CalendarDays,
    title: "Early Registration Offers",
    description:
      "Plan ahead and take advantage of early registration pricing on upcoming programs and learning events.",
    points: [
      "Upcoming program savings",
      "Learning event offers",
      "Planning-friendly pricing",
    ],
  },
  {
    icon: Target,
    title: "Multi-Enrollment Savings",
    description:
      "Learners pursuing multiple training pathways or organizations enrolling multiple participants may qualify for additional discounts and bundled pricing options.",
    points: [
      "Bundle pricing options",
      "Loyalty discount discussions",
      "Savings for multiple participants",
    ],
  },
];

const OffersAndBenefits = () => {
  const scrollToForm = () => {
    document
      .getElementById("offers-enquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <FooterPageHeroSection
        title="Invest in Your Future and Save on Your Certification Journey"
        description="Explore exclusive discounts, military benefits, ArmyIgnitED opportunities, PMI Chapter offers, and special promotions designed to support your professional development journey."
      />

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-6 md:gap-10 items-center">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Offers and Benefits for Your Certification Path
              </h2>
              <div className="space-y-3 text-paragraph text-sm md:text-base leading-[26px] md:leading-[30px] mt-3">
                <p>
                  Whether you're pursuing PMP, PgMP, PfMP, PMI-PMOCP, PMI-RMP,
                  PMI-ACP, CAPM, or other professional certifications, now is
                  the perfect time to start your journey.
                </p>
                <p>
                  Our team can help you understand available benefits, request
                  training quotes, and explore programs aligned with your career
                  goals.
                </p>
              </div>
              <Button onClick={scrollToForm} className="mt-5 md:mt-7">
                Request a Quote
              </Button>
            </div>

            <div className="rounded-2xl bg-light-blue px-4 md:px-7 py-5 md:py-7">
              <div className="size-[60px] text-primary_heading flex items-center justify-center bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
                <BadgePercent size={28} strokeWidth={2} />
              </div>
              <h3 className="text-primary_heading text-xl md:text-2xl font-bold mt-4">
                Save 20% on Full-Priced Programs
              </h3>
              <p className="text-paragraph text-sm font-normal leading-[26px] mt-2">
                We are pleased to extend a 20% preferred discount to eligible
                participants following standard verification.
              </p>
              <h4 className="text-Black_light text-base font-bold mt-5 mb-3">
                Applicable to:
              </h4>
              <ul className="space-y-2">
                {discountEligibility.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-paragraph text-sm"
                  >
                    <span>
                      <CircleArrowIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-paragraph text-sm font-normal leading-[26px] mt-5">
                Offer applies to live online, mentoring, and bootcamp programs
                with a minimum order value of USD 1,000.
              </p>
              <Button onClick={scrollToForm} className="mt-5">
                Verify Eligibility
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-10 items-start">
            <div>
              <div className="size-[60px] text-primary_heading flex items-center justify-center bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
                <Flag size={28} strokeWidth={2} />
              </div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mt-4">
                Get Certified with ArmyIgnitED
              </h2>
              <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px]">
                Use your Army Credentialing Assistance benefits to access
                professional certification training and career development
                programs through vCare Project Management.
              </p>
              <Button onClick={scrollToForm} className="mt-5 md:mt-7">
                Get a Quote
              </Button>
            </div>

            <div>
              <h3 className="text-primary_heading text-xl md:text-2xl font-bold mb-4">
                How It Works
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {armySteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="p-5 bg-white rounded-[20px] text-left transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-[52px] h-[52px] min-w-[52px] text-lg font-bold text-primary_heading flex items-center justify-center bg-[#f0f8ff] rounded-[99px]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h4 className="text-primary_heading text-base md:text-xl font-bold mb-2">
                          {step.title}
                        </h4>
                        <p className="text-paragraph text-sm font-normal leading-[26px]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col mb-5 md:mb-7 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              More Ways to Save
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1 w-full leading-[26px]">
              Explore available military benefits, member offers, group
              pricing, and enrollment savings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {benefitCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="p-5 bg-light-blue rounded-[20px] text-left transition"
                >
                  <div className="size-[60px] text-primary_heading flex items-center justify-center bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <h4 className="text-primary_heading text-base md:text-xl font-bold mb-2 mt-4">
                    {card.title}
                  </h4>
                  <p className="text-paragraph text-xs font-normal leading-6">
                    {card.description}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-paragraph text-xs leading-5"
                      >
                        <span className="mt-0.5 scale-75 origin-top-left">
                          <CircleArrowIcon />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-5 md:gap-7 items-center">
            <div className="size-[74px] text-primary_heading flex items-center justify-center bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
              <Medal size={34} strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Ready to Learn More?
              </h2>
              <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px]">
                Contact our team to discuss available military benefits,
                ArmyIgnitED eligibility, training options, and current offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-5">
                <Button onClick={scrollToForm}>Contact Us Today</Button>
                <a href={CALENDLY_CONSULTATION_URL}>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Schedule a Free Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="offers-enquiry-form">
        <EnquiryForm
          formTitle="Request Offers and Benefits Information"
          formDescription="Share your program interests and eligibility details with us. Our team will help you review available benefits, ArmyIgnitED options, and current offers."
          defaultSubject={quoteSubject}
          showCorporateFields
        />
      </div>

      <TopFooterSection
        content={{
          title: <>Save on Your Next Certification Program</>,
          description:
            "Explore military benefits, PMI Chapter offers, group savings, and quote options tailored to your training goals.",
          points: [
            "ArmyIgnitED quote support",
            "Military and chapter member benefits",
            "Corporate team and multi-enrollment savings",
          ],
          buttonText: "Request a Quote",
          buttonLink: `/contact-us?subject=${quoteSubject}`,
          secondaryButtonText: "Book a Consultation",
          secondaryButtonLink: CALENDLY_CONSULTATION_URL,
        }}
      />
    </>
  );
};

export default OffersAndBenefits;
