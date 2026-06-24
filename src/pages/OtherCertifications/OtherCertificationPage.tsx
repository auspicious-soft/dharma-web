import type { ReactNode } from "react";
import InnerPage from "@/assets/inner-page.jpg";
import PmpLogo from "@/assets/pmp-logo.png";
import TrainingImage from "@/assets/training-image.png";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import { Button } from "@/components/ui/button";
import { CALENDLY_CONSULTATION_URL } from "@/utils/links";
import {
  ArrowUpRight,
  CheckCircle2,
  Info,
  MonitorPlay,
  Trophy,
} from "lucide-react";

type TrainingOption = {
  title: string;
  subtitle: string;
  description?: string;
  features: string[];
  recommended?: boolean;
};

type CourseOption = {
  title: string;
  description: string;
  idealFor?: string;
};

type OtherCertificationPageProps = {
  heroTitle: string;
  heroDescription: string;
  heroDescriptionSecond: string;
  introTitle: string;
  introParagraphs: string[];
  includedTitle?: string;
  includedItems: string[];
  showPmiAtp?: boolean;
  platformTitle?: string;
  platformDescription?: string;
  platformFeatures?: string[];
  platformClosing?: string;
  coursesHeading?: string;
  courses?: CourseOption[];
  trainingOptions: TrainingOption[];
  whyTitle: string;
  whyItems: string[];
  whyClosing: string;
  audienceIntro: string;
  audienceItems: string[];
  advisorQuestion: string;
  footerTitle: ReactNode;
  footerDescription: string;
  footerPoints: string[];
};

export default function OtherCertificationPage({
  heroTitle,
  heroDescription,
  heroDescriptionSecond,
  introTitle,
  introParagraphs,
  includedTitle = "What's Included",
  includedItems,
  showPmiAtp,
  platformTitle,
  platformDescription,
  platformFeatures,
  platformClosing,
  coursesHeading,
  courses,
  trainingOptions,
  whyTitle,
  whyItems,
  whyClosing,
  audienceIntro,
  audienceItems,
  advisorQuestion,
  footerTitle,
  footerDescription,
  footerPoints,
}: OtherCertificationPageProps) {
  return (
    <>
      <NavHeroSection
        title={heroTitle}
        description={heroDescription}
        descriptionsecond={heroDescriptionSecond}
        sideImage={InnerPage}
      />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-5 md:gap-8 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                {introTitle}
              </h2>
              <div className="space-y-3 mt-2">
                {introParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-paragraph text-sm font-normal leading-[26px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[12px] p-5 md:p-6 border border-[#d5dddd]">
              {showPmiAtp && (
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src={PmpLogo}
                    alt="Premier Authorized Training Partner"
                    className="w-14 h-14"
                  />
                  <p className="text-[#0a4ba8] text-sm font-medium leading-6">
                    Premier Authorized Training Partner
                  </p>
                </div>
              )}
              <h3 className="text-Black_light text-xl font-bold mb-4">
                {includedTitle}
              </h3>
              <ul className="space-y-3">
                {includedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-paragraph text-sm leading-6"
                  >
                    <CheckCircle2
                      size={17}
                      className="text-primary_blue shrink-0 mt-1"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {platformTitle && platformDescription && platformFeatures && (
        <section className="py-10 md:py-14 lg:py-20">
          <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
            <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 md:gap-8 items-center">
              <div className="bg-light-blue rounded-[12px] p-5 md:p-7">
                <div className="w-12 h-12 rounded-[10px] bg-white text-primary_blue flex items-center justify-center shadow-sm mb-4">
                  <MonitorPlay size={23} />
                </div>
                <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                  {platformTitle}
                </h2>
                <p className="text-paragraph text-sm font-normal mt-2 leading-[26px]">
                  {platformDescription}
                </p>
              </div>

              <div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {platformFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-[8px] border border-[#d9e8ff] bg-white p-4 text-Black_light text-sm font-semibold leading-6"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                {platformClosing && (
                  <p className="text-paragraph text-sm font-normal mt-4 leading-[26px]">
                    {platformClosing}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {coursesHeading && courses && (
        <section className="bg-light-blue py-10 md:py-14 lg:py-20">
          <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
            <div className="flex flex-col items-center text-center mb-6 md:mb-10">
              <span className="text-primary_blue text-sm font-bold">
                Explore Courses
              </span>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mt-1">
                {coursesHeading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {courses.map((course) => (
                <article
                  key={course.title}
                  className="bg-white rounded-[12px] p-5 md:p-7 border border-[#d5dddd] flex flex-col"
                >
                  <div className="w-12 h-12 rounded-[10px] bg-light-blue text-primary_blue flex items-center justify-center mb-4">
                    <Trophy size={23} />
                  </div>
                  <h3 className="text-Black_light text-xl md:text-2xl font-bold">
                    {course.title}
                  </h3>
                  <p className="text-paragraph text-sm font-normal mt-3 leading-[26px]">
                    {course.description}
                  </p>
                  {course.idealFor && (
                    <p className="text-Black_light text-sm font-semibold mt-4 leading-6">
                      Ideal for:{" "}
                      <span className="text-paragraph font-normal">
                        {course.idealFor}
                      </span>
                    </p>
                  )}
                  <Button asChild className="mt-auto rounded-[8px]">
                    <a href="/contact-us">
                      Enroll Now
                      <ArrowUpRight size={15} />
                    </a>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="training-options" className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col items-center text-center mb-6">
            <span className="text-primary_blue text-sm font-bold">
              Training Options
            </span>
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mt-1">
              Explore Our Training Options
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
            {trainingOptions.map((option) => (
              <article
                key={option.title}
                className="overflow-hidden rounded-[16px] border-2 border-[#4f93f8] bg-white shadow-sm"
              >
                {option.recommended ? (
                  <div className="min-h-8 bg-gradient-to-r from-[#8dbefa] to-[#317ff4] text-white text-xs font-bold flex items-center justify-center gap-2">
                    <span>Flexible Option</span>
                    <Info size={13} />
                  </div>
                ) : (
                  <div aria-hidden className="hidden lg:block min-h-8" />
                )}

                <div className="p-5">
                  <h3 className="text-Black_light text-xl font-bold mb-2">
                    {option.title}
                  </h3>
                  <p className="text-primary_blue text-sm font-bold">
                    {option.subtitle}
                  </p>
                  <div className="min-h-[72px] mt-4">
                    {option.description && (
                      <p className="text-paragraph text-sm leading-6">
                        {option.description}
                      </p>
                    )}
                  </div>

                  <Button asChild className="w-full mt-5 rounded-[8px]">
                    <a href="/contact-us">
                      Enroll now
                      <ArrowUpRight size={15} />
                    </a>
                  </Button>

                  <div className="border-t border-[#e5eefb] my-5" />

                  <ul className="space-y-4">
                    {option.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-Black_light text-xs font-bold leading-5"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[#3d8bff] shrink-0 mt-0.5"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 md:gap-8 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                {whyTitle}
              </h2>
              <ul className="space-y-2 list-disc text-paragraph text-sm font-normal leading-[26px] ml-4 mt-3">
                {whyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-Black_light text-base font-bold mt-4 leading-7">
                {whyClosing}
              </p>
            </div>

            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Who This Is For
              </h2>
              <p className="text-paragraph text-sm font-normal mt-2 leading-[26px]">
                {audienceIntro}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                {audienceItems.map((item) => (
                  <li
                    key={item}
                    className="bg-white rounded-[8px] border border-[#d9e8ff] p-4 text-Black_light text-sm font-semibold leading-6"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <article className="mx-auto max-w-[620px] overflow-hidden rounded-[16px] border border-[#4f93f8] bg-white p-5 shadow-sm">
            <img
              src={TrainingImage}
              alt="Certification course advisor"
              className="w-full aspect-[2.9/1] object-cover rounded-[12px]"
            />

            <div className="mt-5 text-center">
              <h3 className="text-Black_light text-xl md:text-2xl font-bold leading-snug">
                Not quite ready? We're here to help.
              </h3>
              <p className="text-paragraph text-sm leading-6 mt-2">
                {advisorQuestion}
              </p>
            </div>

            <Button asChild variant="outline" className="w-full rounded-[10px] mt-7">
              <a href={CALENDLY_CONSULTATION_URL}>Talk to an Advisor</a>
            </Button>
          </article>
        </div>
      </section>

      <TopFooterSection
        content={{
          title: footerTitle,
          description: footerDescription,
          points: footerPoints,
          buttonText: "Talk to an Advisor",
          buttonLink: CALENDLY_CONSULTATION_URL,
          secondaryButtonText: "Contact Us",
          secondaryButtonLink: "/contact-us",
        }}
      />
    </>
  );
}
