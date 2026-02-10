import { useState } from "react";

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
      title: "PMP Prep Lessons And Interviews",
      description:
        "A PMP Exam Prep Video Workshop for your phone, tablet or PC.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      id: 2,
      title: "PMP Full Practice Tests",
      description:
        "Simulated PMP exams with real-world questions.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      id: 3,
      title: "PMP Flash Cards",
      description:
        "Quick revision modules for PMP concepts.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
  ],

  PgMP: [
    {
      id: 1,
      title: "PgMP Leadership Mastery",
      description:
        "Advanced program leadership strategies.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
  ],

  PfMP: [
    {
      id: 1,
      title: "PfMP Portfolio Governance",
      description: "Manage enterprise portfolios effectively.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      id: 2,
      title: "PfMP Exam Simulator",
      description: "Real exam-style mock tests.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
  ],

  CAPM: [
    {
      id: 1,
      title: "CAPM Starter Course",
      description: "Perfect for beginners in project management.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      id: 2,
      title: "CAPM Question Bank",
      description: "1000+ practice questions.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
  ],

  "PMI-ACP": [
    {
      id: 1,
      title: "Agile Practitioner Bootcamp",
      description: "Master agile frameworks quickly.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
  ],

  PMOCP: [
    {
      id: 1,
      title: "PMO Setup Workshop",
      description: "Build enterprise PMOs from scratch.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
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
        <div className="flex justify-center gap-6 mt-6 md:mt-7 border-b border-[#dadada]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-lg relative transition px-3 ${
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

      <div className="p-6">
        <h3 className="font-semibold text-lg">{course.title}</h3>

        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          {course.description}
        </p>

        <button className="mt-6 w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-full text-sm font-medium transition">
          Find Out More
        </button>
      </div>
    </div>
  );
}
