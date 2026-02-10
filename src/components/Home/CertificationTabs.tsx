import { useState } from "react";
import { Button } from "../ui/button";
import TabImage from "@/assets/tab-image.jpg";

type Tab =
  | "PMP"
  | "PgMP"
  | "PfMP"
  | "CAPM"
  | "PMI-ACP"
  | "PMOCP";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
}

const tabs: Tab[] = ["PMP", "PgMP", "PfMP", "CAPM", "PMI-ACP", "PMOCP"];

/* 🔵 Data per tab */
const tabCourses: Record<Tab, Course[]> = {
  PMP: [
    {
      id: 1,
      title: "PMP Prep Lessons and Interviews",
      description:
        "A PMP Exam Prep Video Workshop for your phone, tablet or PC. Study anytime and anywhere. Just press “Play”",
      image:TabImage,
    },
    {
      id: 2,
      title: "PMP Prep Lessons and Interviews",
      description:
        "A PMP Exam Prep Video Workshop for your phone, tablet or PC. Study anytime and anywhere. Just press “Play”",
      image:TabImage,
    },
    {
      id: 3,
     title: "PMP Prep Lessons and Interviews",
      description:
        "A PMP Exam Prep Video Workshop for your phone, tablet or PC. Study anytime and anywhere. Just press “Play”",
      image:TabImage,
    },
        {
      id: 4,
     title: "PMP Prep Lessons and Interviews",
      description:
        "A PMP Exam Prep Video Workshop for your phone, tablet or PC. Study anytime and anywhere. Just press “Play”",
      image:TabImage,
    },
        {
      id: 5,
     title: "PMP Prep Lessons and Interviews",
      description:
        "A PMP Exam Prep Video Workshop for your phone, tablet or PC. Study anytime and anywhere. Just press “Play”",
      image:TabImage,
    },
        {
      id: 6,
     title: "PMP Prep Lessons and Interviews",
      description:
        "A PMP Exam Prep Video Workshop for your phone, tablet or PC. Study anytime and anywhere. Just press “Play”",
      image:TabImage,
    },
  ],

  PgMP: [
    {
      id: 1,
     title: "PMP Prep Lessons and Interviews",
      description:
        "A PMP Exam Prep Video Workshop for your phone, tablet or PC. Study anytime and anywhere. Just press “Play”",
     image:TabImage,
    },
  ],

  PfMP: [
    {
      id: 1,
     title: "PMP Prep Lessons and Interviews",
      description:
        "A PMP Exam Prep Video Workshop for your phone, tablet or PC. Study anytime and anywhere. Just press “Play”",
       image:TabImage,
    },
    {
      id: 2,
      title: "PfMP Exam Simulator",
      description: "Real exam-style mock tests.",
      image:TabImage,
    },
  ],

  CAPM: [
    {
      id: 1,
     title: "PMP Prep Lessons and Interviews",
      description:
        "A PMP Exam Prep Video Workshop for your phone, tablet or PC. Study anytime and anywhere. Just press “Play”",
       image:TabImage,
    },
    {
      id: 2,
     title: "PMP Prep Lessons and Interviews",
      description:
        "A PMP Exam Prep Video Workshop for your phone, tablet or PC. Study anytime and anywhere. Just press “Play”",
       image:TabImage,
    },
  ],

  "PMI-ACP": [
    {
      id: 1,
      title: "Agile Practitioner Bootcamp",
      description: "Master agile frameworks quickly.",
       image:TabImage,
    },
  ],

  PMOCP: [
    {
      id: 1,
      title: "PMO Setup Workshop",
      description: "Build enterprise PMOs from scratch.",
     image:TabImage,
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
          Access our wide range of learning resources and PMP exam prep
          materials to help enhance your review and improve exam confidence.
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
                  ? "text-Black_light after:absolute after:left-0 after:bottom-[-1px] after:h-[1px] after:w-full after:bg-Black_light"
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

        <p className="text-center justify-start text-paragraph text-sm md:text-base leading-[26px] md:leading-[30px]">
          {course.description}
        </p>

        <Button>
          Find Out More
        </Button>
      </div>
    </div>
  );
}
