import { useState } from "react";
import { Button } from "../ui/button";
import TabImage from "@/assets/tab-image.jpg";

type Tab =
  | "PMP"
  | "PgMP"
  | "PfMP"
  | "CAPM"
  | "PMI-RMP"
  | "PMI-PMOCP";

interface Course {
  id: number;
  title: string;
  subheading?: string;
  description: string;
  image: string;
  button:string;
}

const tabs: Tab[] = ["PMP", "PgMP", "PfMP","PMI-PMOCP", "PMI-RMP", "CAPM"];

/* ðŸ”µ Data per tab */
const tabCourses: Record<Tab, Course[]> = {
  PMP: [
    {
      id: 1,
      title: "PMPÂ® Exam Prep Training",
      subheading: "Premier Authorized Training Partner",
      description:
        "Join expert-led online or in-person classes designed to build knowledge, confidence, and exam readiness.",
      image: TabImage,
      button:"Find A Class"
    },
    {
      id: 2,
      title: "PMPÂ® Exam Simulator",
      description:
        "Test your readiness with realistic mock exams, timed practice, and detailed answer explanations.",
      image: TabImage,
      button:"Learn More"
    },
    {
      id: 3,
      title: "PMPÂ® Application Support",
      description:
        "Get expert help to complete your application correctly and avoid delays or rework.",
      image: TabImage,
      button:"Learn More"
    },
    {
      id: 4,
      title: "PMPÂ® On-Demand Course",
      description:
        "Study anytime and anywhere with guided lessons, structured modules, and flexible self-paced learning.",
      image: TabImage,
      button:"Learn More"
    },
    {
      id: 5,
      title: "Free PMPÂ® Consultation",
      description:
        "Speak with an expert to discuss eligibility, study plans, and the best pathway to success.",
      image: TabImage,
      button:"Learn More"
    },
    {
      id: 6,
      title: "PMPÂ® Online Exam Prep Course",
      description:
        "Prepare for the PMPÂ® exam with our all-in-one Exam Prep bundle with access to Online Course, Practice Exams and tools that build confidence",
      image: TabImage,
      button:"Learn More"
    },
    {
      id: 7,
      title: "PMPÂ® Exam Voucher Bundle",
      description:
        "Get Official PMIÂ® Exam Vouchers and Save on Your Exam Fees",
      image: TabImage,
      button:"Learn More"
    },
  ],
  PgMP: [
    {
      id: 1,
      title: "PgMPÂ® Exam Prep Training",
      subheading: "Premier Authorized Training Partner",
      description:
        "Join expert-led online or in-person classes designed to build knowledge, confidence, and exam readiness.",
      image: TabImage,
      button: "Find A Class"
    },
    {
      id: 2,
      title: "PgMPÂ® Exam Simulator",
      description:
        "Test your readiness with realistic mock exams, scenario-based practice, and detailed answer explanations.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 3,
      title: "PgMPÂ® Online Exam Prep Course",
      description:
        "Prepare for the PgMPÂ® exam with our all-in-one Exam Prep bundle with access to Online Course, Practice Exams and tools that build confidence",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 4,
      title: "Free PgMPÂ® Consultation",
      description:
        "Speak with an expert to discuss eligibility, application strategy, study plans, and the best pathway to success.",
      image: TabImage,
      button: "Talk to Advisor"
    },
    {
      id: 5,
      title: "PgMPÂ® On-Demand Course",
      description:
        "Study anytime with guided lessons, structured modules, and flexible self-paced learning aligned to the PgMPÂ® exam.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 6,
      title: "PgMPÂ® Application Support",
      description:
        "Get expert help to complete your PgMPÂ® application correctly, including audit guidance and full Panel Review support.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 7,
      title: "PgMPÂ® Exam Voucher",
      description:
        "Get Official PgMPÂ® Exam Vouchers and Save on Your Exam Fees",
      image: TabImage,
      button: "Buy Now"
    },
  ],
  PfMP: [
    {
      id: 1,
      title: "PfMPÂ® Exam Prep Training",
      subheading: "Premier Authorized Training Partner",
      description:
        "Join expert-led online or in-person classes designed to build knowledge, confidence, and exam readiness.",
      image: TabImage,
      button: "Find A Class"
    },
    {
      id: 2,
      title: "PfMPÂ® Exam Simulator",
      description:
        "Test your readiness with realistic mock exams, scenario-based practice, and detailed answer explanations.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 3,
      title: "PfMPÂ® Online Exam Prep Course",
      description:
        "Prepare for the PfMPÂ® exam with our all-in-one Exam Prep bundle with access to Online Course, Practice Exams and tools that build confidence",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 4,
      title: "Free PfMPÂ® Consultation",
      description:
        "Speak with an expert to discuss eligibility, application strategy, study plans, and the best pathway to success.",
      image: TabImage,
      button: "Talk to Advisor"
    },
    {
      id: 5,
      title: "PfMPÂ® Application Support",
      description:
        "Get expert help to complete your application correctly, including audit guidance and full Panel Review support.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 6,
      title: "PfMPÂ® On-Demand Course",
      description:
        "Study anytime with guided lessons, structured modules, and flexible self-paced learning aligned to the PgMPÂ® exam.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 7,
      title: "PfMPÂ® Exam Voucher",
      description:
        "Get Official PfMPÂ® Exam Vouchers and Save on Your Exam Fees",
      image: TabImage,
      button: "Buy Now"
    },
  ],
  "PMI-PMOCP": [
    {
      id: 1,
      title: "PMI-PMOCPâ„¢ Exam Prep Training",
      subheading: "Premier Authorized Training Partner",
      description:
        "Join expert-led online or in-person classes designed to build PMO leadership knowledge, confidence, and certification readiness.",
      image: TabImage,
      button: "Find A Class"
    },
    {
      id: 2,
      title: "PMI-PMOCPâ„¢ Exam Simulator",
      description:
        "Test your knowledge, track your progress, and feel confident walking into the exam.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 3,
      title: "PMI-PMOCPâ„¢ Online Exam Prep Bundle",
      description:
        "Get everything you need to apply and prepare for exam day with our all-in-one bundle, including online course access, practice exams, and tools that build confidence.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 4,
      title: "PMI-PMOCPâ„¢ Application Support",
      description:
        "Get expert guidance to complete your PMI-PMOCPâ„¢ application correctly, including audit support and eligibility assistance.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 5,
      title: "Free PMI-PMOCPâ„¢ Consultation",
      description:
        "Speak with an expert to discuss eligibility, career goals, study plans, and the best pathway to success.",
      image: TabImage,
      button: "Talk to Advisor"
    },
    {
      id: 6,
      title: "PMI-PMOCPâ„¢ On-Demand Course",
      description:
        "Study anytime with guided lessons, structured modules, and flexible self-paced learning aligned to the PMI-PMOCPâ„¢ exam.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 7,
      title: "PMI-PMI-PMOCPâ„¢ Exam Voucher",
      description:
        "Get Official PMI-PMOCPâ„¢ Exam Vouchers and Save on Your Exam Fees.",
      image: TabImage,
      button: "Buy Now"
    },
  ],
  CAPM: [
    {
      id: 1,
      title: "CAPM® Exam Prep Training",
      subheading: "Premier Authorized Training Partner",
      description:
        "Join expert-led online or in-person classes designed to build advanced risk management knowledge, confidence, and certification readiness.",
      image: TabImage,
      button: "Find A Class"
    },
    {
      id: 2,
      title: "CAPM® Exam Simulator",
      description:
        "Test your knowledge, track your progress, and feel confident walking into the exam.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 3,
      title: "CAPM® Online Exam Prep Bundle",
      description:
        "Get everything you need to apply and prepare for exam day with our all-in-one bundle, including online course access, practice exams, and tools that build confidence.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 4,
      title: "CAPM® Application Support",
      description:
        "Get expert guidance to complete your CAPM® application confidently, including audit support and eligibility assistance.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 5,
      title: "Free CAPM® Consultation",
      description:
        "Speak with an expert to discuss eligibility, career goals, study plans, and the best pathway to success.",
      image: TabImage,
      button: "Talk to Advisor"
    },
    {
      id: 6,
      title: "CAPM® On-Demand Course",
      description:
        "Study anytime with guided lessons, structured modules, and flexible self-paced learning designed to advance your risk management skills and prepare you for the CAPM® exam.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 7,
      title: "CAPM® Exam Voucher",
      description:
        "Get Official PMI® Exam Vouchers and Save on Your Exam Fees.",
      image: TabImage,
      button: "Buy Now"
    },
  ],
  "PMI-RMP": [
    {
      id: 1,
      title: "PMI-RMPÂ® Exam Prep Training",
      subheading: "Premier Authorized Training Partner",
      description:
        "Join expert-led online or in-person classes designed to build advanced risk management knowledge, confidence, and certification readiness.",
      image: TabImage,
      button: "Find A Class"
    },
    {
      id: 2,
      title: "PMI-RMPÂ® Exam Simulator",
      description:
        "Test your knowledge, track your progress, and feel confident walking into the exam.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 3,
      title: "PMI-RMPÂ® Online Exam Prep Bundle",
      description:
        "Get everything you need to apply and prepare for exam day with our all-in-one bundle, including online course access, practice exams, and tools that build confidence.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 4,
      title: "PMI-RMPÂ® Application Support",
      description:
        "Get expert guidance to complete your PMI-RMPÂ® application confidently, including audit support and eligibility assistance.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 5,
      title: "Free PMI-RMPÂ® Consultation",
      description:
        "Speak with an expert to discuss eligibility, career goals, study plans, and the best pathway to success.",
      image: TabImage,
      button: "Talk to Advisor"
    },
    {
      id: 6,
      title: "PMI-RMPÂ® On-Demand Course",
      description:
        "Study anytime with guided lessons, structured modules, and flexible self-paced learning designed to advance your risk management skills and prepare you for the PMI-RMPÂ® exam.",
      image: TabImage,
      button: "Learn More"
    },
    {
      id: 7,
      title: "PMI-RMPÂ® Exam Voucher",
      description:
        "Get Official PMIÂ® Exam Vouchers and Save on Your Exam Fees.",
      image: TabImage,
      button: "Buy Now"
    },
  ],
};

export default function CertificationTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("PMP");

  return (
    <section className="bg-light-blue py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        <div className="flex flex-col gap-2 justify-center">
        <h2 className="text-Black_light text-2xl md:text-3xl font-bold text-center ">
          Certification Path Selector
        </h2>

        <p className="text-center justify-start text-paragraph text-sm">
         Access our wide range of learning resources, exam prep materials, and practice tools designed to strengthen your preparation, boost confidence, and help you succeed on exam day.
        </p>
      </div>
        {/* Tabs */}
        <div className="flex justify-start md:justify-center gap-4 lg:gap-6 mt-6 md:mt-7 
                border-b border-[#dadada] 
                overflow-x-auto whitespace-nowrap lg:overflow-x-hidden lg:overflow-y-hidden 
                px-4 md:px-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-base md:text-lg relative transition px-2 md:px-3 ${
                activeTab === tab 
                  ? "text-Black_light after:absolute after:left-0 after:bottom-[0px] after:h-[1px] after:w-full after:bg-Black_light"
                  : "text-paragraph "
              }`}
            >
              {tab}
            </button>
          ))}
        </div> 

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {tabCourses[activeTab].map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="w-full aspect-[1/0.82] object-cover rounded-[20px]"
      />

      <div className="flex flex-col mt-2.5 gap-2">
        <h3 className="text-center justify-start font-semibold text-Black_light text-lg md:text-[22px]">{course.title}</h3>

        {course.subheading && (
          <p className="text-center text-Black_light text-sm md:text-base font-medium">
            {course.subheading}
          </p>
        )}

        <p className="text-center justify-start text-paragraph text-sm md:text-base leading-[26px] md:leading-[30px]">
          {course.description}
        </p>

        <Button>
          {course.button ? course.button:"Find Out More"}
        </Button>
      </div>
    </div>
  );
}





