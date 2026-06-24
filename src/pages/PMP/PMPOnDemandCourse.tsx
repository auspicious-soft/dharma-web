import InnerPage from "@/assets/inner-page.jpg";
import PmpLogo from "@/assets/pmp-logo.png";
import TrainingImage from "@/assets/training-image.png";
import NavHeroSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import StartFreeTrial from "@/components/ReusableComponents/StartFreeTrial/StartFreeTrial";
import Faq from "@/components/ReusableComponents/FAQSection/FaqSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import Testimonials from "@/components/ReusableComponents/TestimonialsSection/Testimonials";
import { Button } from "@/components/ui/button";
import { getSubscriptionUrl } from "@/utils/links";
import {
  BarChart3,
  BookOpen,
  HelpCircle,
  Layers,
  UserRoundCheck,
  Video,
} from "lucide-react";



const keyValueBullets = [
  "Fully aligned with PMBOK® 8th Edition",
  "Expert instructors with real-world project experience",
  "Earn 35 PMI® approved PDUs",
  "100% online, flexible learning",
  "Instant access to course materials",
];

const modules = [
  {
    title: "Module 00 - Program Orientation",
    subtitle: "Start your project management learning journey.",
    description:
      "Get an overview of the program structure, learning objectives, key resources, and how to maximize your success throughout the course.",
  },
  {
    title: "Module 01 - Introduction to Project Management",
    subtitle: "Understand the fundamentals of successful project delivery.",
    description:
      "Learn what projects are, the role of a project manager, project life cycles, organizational structures, and how projects create value for organizations.",
  },
  {
    title: "Module 02 - Project Initiation & Stakeholder Management",
    subtitle: "Lay the groundwork for project success.",
    description:
      "Learn how to define project objectives, identify stakeholders, develop a business case, and establish governance and decision-making structures.",
  },
  {
    title: "Module 03 - Scope, Requirements & Success Criteria",
    subtitle: "Define what needs to be delivered.",
    description:
      "Learn how to gather requirements, define scope, establish deliverables, manage expectations, and measure project success.",
  },
  {
    title: "Module 04 - Project Planning Fundamentals",
    subtitle: "Build a roadmap for successful delivery.",
    description:
      "Explore planning techniques for schedules, resources, budgets, estimates, and project integration.",
  },
  {
    title: "Module 05 - Schedule, Quality & Procurement Management",
    subtitle: "Plan and control project execution.",
    description:
      "Learn scheduling fundamentals, quality management principles, procurement processes, vendor management, and performance monitoring.",
  },
  {
    title: "Module 06 - Communication & Project Closure",
    subtitle: "Keep stakeholders informed and projects on track.",
    description:
      "Develop communication plans, stakeholder engagement strategies, status reporting practices, lessons learned, and project closure activities.",
  },
  {
    title: "Module 07 - Agile & Hybrid Project Management",
    subtitle: "Explore modern delivery approaches.",
    description:
      "Understand Agile principles, Scrum, Kanban, iterative delivery, and how organizations use hybrid approaches to manage projects.",
  },
  {
    title: "Module 08 - Risk, Issue & Change Management",
    subtitle: "Manage project uncertainty effectively.",
    description:
      "Learn how to identify risks, manage issues, evaluate changes, and implement appropriate response strategies.",
  },
  {
    title: "Module 09 - Leadership & Team Collaboration",
    subtitle: "Develop essential project leadership skills.",
    description:
      "Explore motivation, communication, conflict resolution, emotional intelligence, teamwork, and stakeholder influence.",
  },
  {
    title: "Module 10 - Practical Project Management Applications",
    subtitle: "Apply project management concepts with confidence.",
    description:
      "Review real-world case studies, practical tools, templates, best practices, and key takeaways to support workplace success.",
  },
];


const bonusLearningResources = [
  {
    icon: Layers,
    title: "Flash Cards",
    description: "Quick revision anywhere",
  },
  {
    icon: BookOpen,
    title: "Knowledge Encyclopedia",
    description: "Key concepts simplified",
  },
  {
    icon: HelpCircle,
    title: "Confusion Buster",
    description: "Clear difficult topics fast",
  },
  {
    icon: BarChart3,
    title: "Progress Tracker",
    description: "Monitor your study journey",
  },
  {
    icon: UserRoundCheck,
    title: "Mentor Access",
    description: "Guidance when you need it",
  },
  {
    icon: Video,
    title: "Webinars",
    description: "Access learning webinars with PDUs",
  },
];

const pmpOnDemandFaqs = [
  {
    question: "1. What is the PMP Self-Paced Learning Program?",
    answer:
      "A self-paced online training program designed to build foundational project management knowledge and practical workplace skills.",
  },
  {
    question: "2. Who is this course for?",
    answer:
      "It is ideal for aspiring project managers, project coordinators, team leaders, business professionals, students, and anyone interested in learning project management fundamentals.",
  },
  {
    question: "3. Is the course fully online?",
    answer: "Yes. The course is 100% online and can be accessed anytime, anywhere.",
  },
  {
    question: "4. Can I study at my own pace?",
    answer:
      "Yes. You can learn based on your schedule and progress through the content at your own speed.",
  },
  {
    question: "5. How long do I get access?",
    answer: "Access duration depends on your package or enrollment plan.",
  },
  {
    question: "6. Do I need prior project management experience?",
    answer:
      "No. The course is designed for beginners and those new to project management.",
  },
  {
    question: "7. Is the course aligned with industry best practices?",
    answer:
      "Yes. The course is based on globally recognized project management principles, frameworks, and best practices.",
  },
  {
    question: "8. Does it cover Agile and Hybrid approaches?",
    answer:
      "Yes. The course provides an introduction to Predictive, Agile, and Hybrid project delivery approaches.",
  },
  {
    question: "9. Will I receive a certificate after completion?",
    answer: "Yes. Learners who complete the course will receive a Certificate of Completion.",
  },
  {
    question: "10. Are practical examples included?",
    answer:
      "Yes. The course includes real-world examples, case studies, and practical applications.",
  },
  {
    question: "11. What learning materials are included?",
    answer:
      "Video lessons, structured modules, downloadable resources, and practical templates.",
  },
  {
    question: "12. How long does it take to complete the course?",
    answer:
      "Most learners complete the course within a few weeks, depending on their schedule and learning pace.",
  },
  {
    question: "13. Do you provide support if I have questions?",
    answer:
      "Yes. Support options may include email assistance and instructor guidance, depending on your enrollment package.",
  },
  {
    question: "14. Is there a refund policy?",
    answer: "Refund terms depend on the package and purchase conditions.",
  },
  {
    question: "15. How do I enroll?",
    answer:
      "Simply register online and access the course through our learning portal.",
  },
  {
    question: "16. Is this course suitable for future PMP® aspirants?",
    answer:
      "Yes. The course provides a strong project management foundation that can support future PMP® studies and career growth.",
  },
  {
    question: "17. Why choose this course over free resources?",
    answer:
      "It offers structured learning, expert instruction, practical examples, and a comprehensive roadmap for building project management knowledge.",
  },
];

const successBullets = [
  "30M+ project professionals needed globally by 2035",
  "Higher earning potential for PMP® holders",
  "Valued by employers across industries",
  "Opens doors to senior project roles",
  "Strengthens your professional profile",
];

const PMPOnDemandCourse = () => {
  return (
    <>
      <NavHeroSection
        title="PMP® Self-Paced Learning Program"
        description="Our PMP® Self-Paced Learning Program is designed for professionals who want to build a strong understanding of project management principles, frameworks, and best practices. This comprehensive self-paced online course includes engaging lessons, guided learning modules, and video content that allow you to study anytime, anywhere, at your own pace while building a strong understanding of PMP concepts."
        descriptionsecond="Advance your project management skills with a structured, self-paced course covering the PMBOK® Guide and Agile frameworks."
        sideImage={InnerPage}
      />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 md:gap-7 items-start">
            <div className="flex flex-col gap-3">
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Build essential project management knowledge
              </h2>
              <p className="text-paragraph text-sm md:text-base leading-[26px] md:leading-[30px]">
                Our PMP foundation course provides essential project management
                knowledge, covering PMBOK® Guide principles, the project
                lifecycle, process groups, and preparation for future PMP®
                certification study. It is structured across PMP domains and
                designed for flexible on-demand learning.
              </p>
              <h3 className="text-Black_light text-xl font-bold mt-3">
                Features
              </h3>
              <ul className="space-y-1 list-disc self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-4">
                {keyValueBullets.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>

            <div>
              <img
                src={TrainingImage}
                alt="PMP self-paced learning"
                className="rounded-3xl w-full object-cover"
              />
              <div className="bg-white rounded-xl p-5 md:p-7 border border-[#d5dddd] mt-5">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={PmpLogo}
                    alt="Premier Authorized Training Partner"
                    className="w-14 h-14"
                  />
                  <p className="text-[#0a4ba8] text-sm font-medium leading-6">
                    Premier Authorized Training Partner
                  </p>
                </div>               
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6 md:mb-10 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              PMP® Self-Paced Learning Program
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1 max-w-[760px]">
              Self-paced training designed for busy professionals who want
              flexible, expert-led learning.
            </p>
            <p className="text-Black_light text-sm font-semibold mt-2">
              Included FREE when you enroll in ANY live class
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {modules.map((module) => (
              <div
                key={module.title}
                className="bg-light-blue rounded-[8px] p-4 md:p-5"
              >
                <h3 className="text-Black_light text-base md:text-lg font-semibold mb-2">
                  {module.title}
                </h3>
                <p className="text-primary_heading text-sm font-semibold leading-6 mb-1">
                  {module.subtitle}
                </p>
                <p className="text-paragraph text-sm font-normal leading-6">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] text-center">
              See the Learning Experience in Action
            </h2>
          </div>
          <video
            className="w-full max-w-[900px] mx-auto object-cover rounded-2xl md:rounded-[28px]"
            controls
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="flex flex-col justify-center items-center mb-6 text-center">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Bonus Learning Resources Included
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1">
              Enhance your PMP® preparation with valuable extras designed to
              boost success.
            </p>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
            {bonusLearningResources.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white p-5 md:p-6 rounded-[12px] min-h-[150px]"
                >
                  <div className="w-12 h-12 rounded-[10px] bg-light-blue text-primary_blue flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-Black_light text-base md:text-lg font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-paragraph text-sm font-medium leading-6">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <StartFreeTrial
        headings="Start Your Free Trial"
        description="Test-drive our exam simulators, practice exams, study bundles, and self-paced learning resources before you buy."
        features={[
          "Explore on-demand lessons, exam prep tools, and practice tests.",
          "Real exam-style simulation with performance insights",
          "Detailed explanations and domain-wise analytics",
          "Study anytime, anywhere",
          "No credit card required for trial access",
        ]}
        buttonText="Start a Free Trial"
      />

      <Faq
        faqs={pmpOnDemandFaqs}
        hideButton
        heading="Frequently Asked Questions"
        subheading="General FAQs"
      />

      <section className="bg-light-blue py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-5 md:gap-8 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Build a strong PMP® foundation
              </h2>
              <p className="text-paragraph text-sm font-normal mt-3 leading-[26px]">
                Start your journey with our PMP® Self-Paced Learning Program and
                advance your project management skills. PMP® is the global gold
                standard in project management, recognized worldwide for
                validating your knowledge, experience, and ability to lead
                projects successfully.
              </p>
              <Button className="mt-6" asChild>
                <a href={getSubscriptionUrl("PMP")}>Get Access Now</a>
              </Button>
            </div>

            <ul className="space-y-2 list-disc self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-4">
              {successBullets.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Testimonials id="two" />
      <TopFooterSection />
    </>
  );
};

export default PMPOnDemandCourse;
