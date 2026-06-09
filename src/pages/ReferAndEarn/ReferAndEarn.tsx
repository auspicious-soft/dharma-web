import EnquiryForm from "@/components/ReusableComponents/EnquiryForm/EnquiryForm";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import { Button } from "@/components/ui/button";
import TrainingImage from "@/assets/training-image.png";
import { Gift, HandCoins, Share2, UsersRound } from "lucide-react";

const referSubject = "refer-a-friend";

const benefitCards = [
  {
    icon: Share2,
    title: "Share the Opportunity",
    description:
      "Know someone looking to advance their project management career? Refer them using the form below and help them take the next step toward professional success.",
  },
  {
    icon: UsersRound,
    title: "Support Fellow Learners",
    description:
      "Help aspiring professionals discover trusted training, mentoring, exam preparation, and certification support.",
  },
  {
    icon: Gift,
    title: "Earn Rewards",
    description:
      "Receive an Amazon Gift Card worth 10% of the purchase value for every successful referral.",
  },
];

const rewardSteps = [
  "Provide your friend's name, email, and contact number in the Message field on the form.",
  "Our team will contact your referral and guide them through the right training options.",
  "Once they enroll and complete payment, your reward is processed.",
  "Amazon Gift Cards are delivered directly to your email.",
];

const referFaqs = [
  {
    question: "How does the Refer & Earn Program work?",
    answer:
      "Simply refer a colleague, friend, or professional contact to any eligible vCare Project Management training program or online resource. If they enroll using your referral, you become eligible for a referral reward.",
  },
  {
    question: "Who can participate in the program?",
    answer:
      "Anyone can participate, including current students, alumni, clients, partners, trainers, and members of the vCare Project Management community.",
  },
  {
    question: "What reward will I receive?",
    answer:
      "You can earn an Amazon Gift Card worth 10% of the purchase value for every successful referral.",
  },
  {
    question: "How do I submit a referral?",
    answer:
      "Complete the referral form on our website with your details and the prospective learner's information. Please include your friend's name, email, and contact number in the Message field.",
  },
  {
    question: "When will I receive my reward?",
    answer:
      "Rewards are typically processed within 10 days after the referred learner has completed payment and their enrollment has been confirmed.",
  },
  {
    question: "Is there a limit to how many people I can refer?",
    answer:
      "No. There is no limit. The more successful referrals you make, the more rewards you can earn.",
  },
  {
    question: "Can I refer someone who has already contacted vCare Project Management?",
    answer:
      "Referral rewards are generally applicable only to new leads who are not already enrolled or actively engaged with vCare.",
  },
  {
    question: "What programs qualify for referral rewards?",
    answer:
      "Most public training programs, mentoring programs, bootcamps, self-paced courses, exam simulators, and digital products qualify. Specific promotions may have separate terms and conditions. PMI Membership and Exam Vouchers are not eligible.",
  },
  {
    question: "How will I know if my referral has enrolled?",
    answer:
      "Our team will notify you when your referral successfully enrolls and qualifies for a reward.",
  },
  {
    question: "Can I refer colleagues from my organization?",
    answer: "Absolutely. Individual and corporate referrals are welcome.",
  },
  {
    question: "Can I refer learners from any country?",
    answer:
      "Yes. vCare Project Management serves professionals globally, and referrals are accepted from all countries.",
  },
  {
    question: "Where can I get more information?",
    answer:
      "For questions about the Refer & Earn Program, please contact the vCare Project Management team or submit an inquiry through our website.",
  },
];

const ReferAndEarn = () => {
  return (
    <>
      <FooterPageHeroSection
        title="Unlock Exclusive Benefits Through Referrals"
        description="Refer a friend, help them take the next step in their career, and earn rewards when they enroll."
      />

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-center">
            <div>
              <p className="text-primary_heading text-sm md:text-base font-semibold leading-[26px]">
                Referral program
              </p>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mt-2">
                Enjoy fantastic benefits for helping others grow
              </h2>
              <div className="space-y-3 mt-3 text-paragraph text-sm md:text-base leading-[26px] md:leading-[30px]">
                <p>
                  Earn discounts on future courses, cash rewards, or even free
                  courses by connecting professionals with vCare Project
                  Management programs.
                </p>
                <p>
                  Know someone who could benefit from our training program? Send
                  them our way. If they enroll, we'll thank you with an Amazon
                  Gift Card as our appreciation for helping others take the next
                  step in their career.
                </p>
              </div>
              <Button
                className="mt-5 md:mt-7"
                onClick={() => {
                  document
                    .getElementById("refer-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Refer a Friend
              </Button>
            </div>
            <div>
              <img
                src={TrainingImage}
                alt="Referral rewards"
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-10 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                How It Works
              </h2>
            </div>
            <p className="text-paragraph text-sm md:text-base leading-[26px] md:leading-[30px]">
              As a valued member of the vCare Project Management community,
              whether you're a current student or an esteemed alumni, you are
              part of a global network of project management professionals. Your
              recommendations help aspiring professionals find the right
              guidance and support to achieve their career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-7 md:mt-10">
            {benefitCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="p-5 md:p-6 bg-white rounded-[20px] text-left"
                >
                  <div className="size-[60px] text-primary_heading flex items-center justify-center bg-[#f0f8ff] rounded-[99px]">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-primary_heading text-base md:text-xl font-bold mb-2 mt-4">
                    {card.title}
                  </h3>
                  <p className="text-paragraph text-xs md:text-sm leading-6">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-10 items-start">
            <div>
              <div className="size-[70px] text-primary_heading flex items-center justify-center bg-light-blue rounded-[99px]">
                <HandCoins size={34} strokeWidth={2} />
              </div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mt-5">
                How You'll Receive Your Reward
              </h2>
              <p className="text-paragraph text-sm md:text-base leading-[26px] md:leading-[30px] mt-2">
                We keep the reward process simple. Share the referral details
                through the form, and we'll take care of the rest.
              </p>
            </div>
            <div className="space-y-3">
              {rewardSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 bg-light-blue rounded-[20px] p-4 md:p-5"
                >
                  <div className="size-10 min-w-10 rounded-full bg-white text-primary_heading flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-paragraph text-sm leading-[26px]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="refer-form" className="bg-light-blue">
        <EnquiryForm
          formTitle="Refer a Friend"
          formDescription="Please include your friend's name, email, and contact number in the Message field. Our team will follow up with them directly."
          defaultSubject={referSubject}
        />
      </div>

      <Faq
        heading="Frequently Asked Questions"
        faqs={referFaqs}
        hideButton
      />

      <TopFooterSection
        content={{
          title: <>Help Someone Move Their Career Forward</>,
          description:
            "Refer a colleague, friend, or professional contact and earn rewards when they enroll in an eligible vCare program.",
          points: [
            "Open to students, alumni, partners, and professional contacts",
            "No limit on successful referrals",
            "Rewards processed after confirmed enrollment",
            "Amazon Gift Cards delivered directly to your email",
          ],
          buttonText: "Submit a Referral",
          buttonLink: "/contact-us?subject=refer-a-friend",
          secondaryButtonText: "View Training Programs",
          secondaryButtonLink: "https://www.vcareprojectmanagement.com/collections/pmp-certification-training",
        }}
      />
    </>
  );
};

export default ReferAndEarn;
