import InnerPage from "@/assets/OtherCertifications/LeanSixSigmaHeroBanner.png";
import TrainingImage from "@/assets/OtherCertifications/LeanSixSigmaHeroBanner.png";
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

const overviewFeatures = [
  "Flexible learning options - Online, classroom, corporate, and self-paced delivery.",
  "Practical application - Real-world case studies, exercises, and templates.",
  "Industry-recognized methodology - Learn proven Lean and Six Sigma tools and techniques.",
  "Expert-led training - Delivered by experienced practitioners and certified instructors.",
  "Post-training support and learning resources.",
];

const platformFeatures = [
  "Expert-curated video lessons and learning modules",
  "Learn anytime, anywhere with 24/7 access",
  "Full-length simulation exams to assess your readiness",
  "Progress tracking and performance analytics",
  "Certificate of completion",
];

const leanCourses = [
  {
    title: "Lean Six Sigma White Belt",
    description:
      "Build a strong foundation in Lean Six Sigma principles, terminology, and continuous improvement. Learn the basics of process improvement, waste reduction, and quality management while supporting improvement initiatives across your organization.",
    idealFor:
      "All Professionals, Team Members, Project Participants, Administrative Staff, and Anyone New to Lean Six Sigma.",
  },
  {
    title: "Lean Six Sigma Yellow Belt",
    description:
      "Build a strong foundation in Lean and Six Sigma principles. Learn how to identify waste, improve processes, solve problems, and contribute to continuous improvement initiatives within your organization.",
    idealFor:
      "Professionals new to Lean Six Sigma and team members supporting improvement projects.",
  },
  {
    title: "Lean Six Sigma Green Belt",
    description:
      "Develop the skills to lead process improvement projects using the DMAIC methodology. Learn how to analyze data, identify root causes, implement solutions, and deliver measurable business benefits.",
    idealFor:
      "Project Managers, Team Leaders, Business Analysts, Operations Professionals, and Quality Practitioners.",
  },
  {
    title: "Lean Six Sigma Black Belt",
    description:
      "Master advanced Lean Six Sigma tools and techniques to lead complex process improvement initiatives and drive organizational transformation. Learn to solve critical business problems using statistical analysis, leadership, and the DMAIC methodology to deliver sustainable results.",
    idealFor:
      "Senior Project Managers, Process Improvement Leaders, Operations Managers, Quality Managers, Continuous Improvement Professionals, and Business Excellence Leaders.",
  },
];

const trainingOptions: TrainingOption[] = [
  {
    title: "Self-Paced Learning",
    subtitle: "Learn Anytime, Anywhere",
    recommended: true,
    features: [
      "Flexible, self-paced learning",
      "Expert-curated video lessons",
      "Study materials",
      "3 simulation test papers for self-assessment",
      "Learner assistance and support",
      "Certificate of completion",
    ],
  },
  {
    title: "Online Bootcamp",
    subtitle: "Interactive Live Learning",
    description: "Everything in Self-Paced Learning, plus:",
    features: [
      "Live instructor-led online training",
      "Interactive classroom discussions",
      "Flexible weekday and weekend schedules",
      "Real-world case studies and exercises",
      "Q&A and exam preparation sessions",
      "Post-training support",
    ],
  },
  {
    title: "In-Person Training",
    subtitle: "Immersive Classroom Experience",
    description: "Everything in Online Bootcamp, plus:",
    features: [
      "Instructor-led classroom training",
      "Hands-on practical exercises",
      "Interactive group discussions",
      "Networking with peers",
      "Personalized support and guidance",
    ],
  },
];

const whoThisIsFor = [
  "Project Managers and Program Managers",
  "Business Analysts and Process Owners",
  "Operations and Quality Professionals",
  "Team Leaders and Supervisors",
  "Continuous Improvement Practitioners",
  "Organizations seeking to improve performance and efficiency",
];

const LeanSixSigmaCertification = () => {
  return (
    <>
      <NavHeroSection
        title="Lean Six Sigma Certification"
        description="Gain the skills to improve quality, reduce waste, optimize processes, and drive measurable business results through globally recognized Lean Six Sigma methodologies."
        descriptionsecond="Whether you're building foundational knowledge with Yellow Belt, leading improvement initiatives with Green Belt, or driving enterprise-wide transformation with Black Belt, our courses provide the practical tools and techniques needed to achieve operational excellence."
        sideImage={InnerPage}
      />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-5 md:gap-8 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Lean Six Sigma for Operational Excellence
              </h2>
              <p className="text-paragraph text-sm font-normal mt-2 leading-[26px]">
                Lean Six Sigma is a globally recognized methodology for
                improving quality, reducing waste, increasing efficiency, and
                delivering measurable business results. Our Lean Six Sigma
                courses combine practical tools, real-world examples, and proven
                improvement techniques to help professionals drive operational
                excellence across any industry.
              </p>
            </div>

            <div className="bg-white rounded-[12px] p-5 md:p-6 border border-[#d5dddd]">
              <h3 className="text-Black_light text-xl font-bold mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {overviewFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-paragraph text-sm leading-6"
                  >
                    <CheckCircle2
                      size={17}
                      className="text-primary_blue shrink-0 mt-1"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5 md:gap-8 items-center">
            <div className="bg-light-blue rounded-[12px] p-5 md:p-7">
              <div className="w-12 h-12 rounded-[10px] bg-white text-primary_blue flex items-center justify-center shadow-sm mb-4">
                <MonitorPlay size={23} />
              </div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Premium Self-Paced Learning
              </h2>
              <p className="text-paragraph text-sm font-normal mt-2 leading-[26px]">
                Access premium self-paced learning designed by industry experts
                and learn anytime, anywhere at your own pace. Whether you're
                preparing for certification or looking to enhance your
                professional skills, our interactive learning platform provides
                the flexibility and resources you need to succeed.
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
              <p className="text-paragraph text-sm font-normal mt-4 leading-[26px]">
                Build practical skills, gain confidence, and prepare for success
                with a learning experience designed around your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col items-center text-center mb-6 md:mb-10">
            <span className="text-primary_blue text-sm font-bold">
              Explore Courses
            </span>
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mt-1">
              Explore Our Lean Six Sigma Courses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {leanCourses.map((course) => (
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
                <p className="text-Black_light text-sm font-semibold mt-4 leading-6">
                  Ideal for:{" "}
                  <span className="text-paragraph font-normal">
                    {course.idealFor}
                  </span>
                </p>
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

      <section id="training-options" className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col items-center text-center mb-6">
            <span className="text-primary_blue text-sm font-bold">
              Training Options
            </span>
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mt-1">
              Choose the Learning Format That Fits You
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
                Who This Is For
              </h2>
              <p className="text-paragraph text-sm font-normal mt-2 leading-[26px]">
                Lean Six Sigma training is designed for professionals and teams
                who want to improve performance, reduce variation, and create
                measurable value through better processes.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whoThisIsFor.map((item) => (
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
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <article className="mx-auto max-w-[620px] overflow-hidden rounded-[16px] border border-[#4f93f8] bg-white p-5 shadow-sm">
            <img
              src={TrainingImage}
              alt="Lean Six Sigma course advisor"
              className="w-full aspect-[2.9/1] object-cover rounded-[12px]"
            />

            <div className="mt-5 text-center">
              <h3 className="text-Black_light text-xl md:text-2xl font-bold leading-snug">
                Not quite ready? We're here to help.
              </h3>
              <p className="text-paragraph text-sm leading-6 mt-2">
                Still deciding if this course is right for you?
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
          title: "Build Practical Process Improvement Skills",
          description:
            "Use Lean Six Sigma tools to improve quality, reduce waste, and deliver measurable results across teams, projects, and operations.",
          points: [
            "Strengthen continuous improvement capability",
            "Lead data-driven problem solving",
            "Support quality and efficiency initiatives",
            "Apply proven Lean and Six Sigma techniques",
          ],
          buttonText: "Talk to an Advisor",
          buttonLink: CALENDLY_CONSULTATION_URL,
          secondaryButtonText: "Contact Us",
          secondaryButtonLink: "/contact-us",
        }}
      />
    </>
  );
};

export default LeanSixSigmaCertification;
