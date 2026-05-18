import { HourGlassIcon } from "@/utils/svgicons";
import { Check } from "iconoir-react";
import React from "react";

type PDU = {
  waysOfWorking: number;
  powerSkills: number;
  businessAcumen: number;
};

type Credits = {
  id: number;
  title: string;
  pdu: PDU;
  totalHours: number;
  outcomes: string[];
};

const credits: Credits[] = [
  {
    id: 1,
    title: "Project Management Foundations",
    pdu: {
      waysOfWorking: 14,
      powerSkills: 4,
      businessAcumen: 6,
    },
    totalHours: 24,
    outcomes: [
      "Understand project management fundamentals, methodologies, and core terminology",
      "Apply practical skills to plan, organize, execute, and deliver projects effectively",
      "Strengthen collaboration, problem-solving, and execution in real-world project environments",
    ],
  },
  {
    id: 2,
    title: "Agile Project Management",
    pdu: {
      waysOfWorking: 18,
      powerSkills: 8,
      businessAcumen: 4,
    },
    totalHours: 30,
    outcomes: [
      "Understand Agile principles, frameworks, and ways of working",
      "Apply Agile approaches, frameworks, and Scrum practices for effective delivery",
      "Lead and collaborate effectively within Agile teams",
    ],
  },
  {
    id: 3,
    title: "Artificial Intelligence for Project Management Professionals",
    pdu: {
      waysOfWorking: 20,
      powerSkills: 16,
      businessAcumen: 24,
    },
    totalHours: 60,
    outcomes: [
      "Build foundational knowledge of AI and its evolving role in modern organizations",
      "Learn strategies to integrate AI into project management practices",
      "Acquire tools, techniques, and best practices for applying AI in project environments",
    ],
  },
  {
    id: 4,
    title: "Performance Measurement for Projects",
    pdu: {
      waysOfWorking: 4,
      powerSkills: 6,
      businessAcumen: 5,
    },
    totalHours: 15,
    outcomes: [
      "Understand key project performance metrics and KPIs",
      "Learn Earned Value Management and analysis techniques",
      "Monitor project cost, schedule, forecasting, and overall performance",
    ],
  },
];

const CreditsPDUSection: React.FC = () => {
  return (
    <section className="bg-primary_blue py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-9 m-auto">
        <h2 className="text-white text-center text-2xl md:text-3xl font-bold md:leading-[46px] mb-4 md:mb-6">
          Credits and PDUs Earned
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-7">
          {credits.map((credit) => (
            <div key={credit.id} className="px-4 py-5 bg-light-blue rounded-2xl">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="min-h-6 min-w-6 rounded-full bg-primary_heading flex items-center justify-center text-white text-sm mt-1">
                  <Check />
                </div>
                <h3 className="text-lg md:text-xl lg:text-[22px] font-bold text-Black_light border-b border-black/20 flex-1 pb-4">
                  {credit.title}
                </h3>
              </div>

              <h4 className="text-Black_light text-base md:text-lg font-medium mb-3 mt-6">
                What You Will Learn
              </h4>
              <ul className="space-y-2 mb-6">
                {credit.outcomes.map((outcome) => (
                  <li key={outcome} className="text-sm text-paragraph leading-6">
                    {outcome}
                  </li>
                ))}
              </ul>

              <h4 className="text-Black_light text-xl font-medium mb-4 mt-6">
                PDU Allocation
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex flex-col gap-2 md:gap-3">
                  <p className="text-Black_light text-sm font-normal">
                    Ways of
                    <br /> Working
                  </p>
                  <p className="text-paragraph text-sm">
                    {credit.pdu.waysOfWorking.toFixed(2)} hrs
                  </p>
                </div>

                <div className="flex flex-col gap-2 md:gap-3">
                  <p className="text-Black_light text-sm font-normal">
                    Power
                    <br /> Skills
                  </p>
                  <p className="text-paragraph text-sm">
                    {credit.pdu.powerSkills.toFixed(2)} hrs
                  </p>
                </div>

                <div className="flex flex-col gap-2 md:gap-3">
                  <p className="text-Black_light text-sm font-normal">
                    Business
                    <br /> Acumen
                  </p>
                  <p className="text-paragraph text-sm">
                    {credit.pdu.businessAcumen.toFixed(2)} hrs
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xl">
                    <HourGlassIcon />
                  </span>
                  <div className="flex flex-col gap-2 md:gap-3">
                    <p className="text-Black_light text-sm font-normal">Total Hours</p>
                    <p className="text-paragraph text-sm">
                      {credit.totalHours.toFixed(2)} hrs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditsPDUSection;
