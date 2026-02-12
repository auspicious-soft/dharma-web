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
};

const credits: Credits[] = [
  {
    id: 1,
    title: "How to Measure Project Performance",
    pdu: {
      waysOfWorking: 3,
      powerSkills: 3,
      businessAcumen: 1,
    }, 
    totalHours: 7,
  },
  {
    id: 2,
    title: "SCRUM Immersion for the Agile PM",
    pdu: {
      waysOfWorking: 5,
      powerSkills: 5,
      businessAcumen: 4,
    },
    totalHours: 14,
  },
  {
    id: 3,
    title: "Modern Leadership Techniques",
    pdu: {
      waysOfWorking: 5,
      powerSkills: 5,
      businessAcumen: 4,
    },
    totalHours: 14,
  },
  {
    id: 4,
    title: "SCRUM Immersion for the Agile PM",
    pdu: {
      waysOfWorking: 9,
      powerSkills: 9,
      businessAcumen: 7,
    },
    totalHours: 14,
  },
];

const CreditsPDUSection: React.FC = () => {
  return (
    <section className="bg-primary_blue py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-9 m-auto">
        <h2 className="text-white text-center text-2xl md:text-3xl font-bold md:leading-[46px] mb-4 md:mb-6">
          Choose Your PDU Course Package
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-7"> 
        {credits.map((credit) => (
          <div
            key={credit.id}
            className="px-4 py-5 bg-light-blue rounded-2xl"
          >
            {/* Header */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="min-h-6 min-w-6 rounded-full bg-primary_heading flex items-center justify-center text-white text-sm mt-1">
                <Check />
              </div>
              <h3 className="text-lg md:text-xl lg:text-[22px] font-bold text-Black_light border-b border-black/20 flex-1 pb-4">
                {credit.title}
              </h3>
            </div>

            {/* PDU Allocation */}
            <h4 className="text-Black_light text-xl font-medium mb-4 mt-6">
              PDU Allocation
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex flex-col gap-2 md:gap-3">
                <p className="text-Black_light text-sm font-normal ">Ways of<br/> Working</p>
                <p className="text-paragraph text-sm">
                  {credit.pdu.waysOfWorking.toFixed(2)} hrs
                </p>
              </div>

             <div className="flex flex-col gap-2 md:gap-3">
                <p className="text-Black_light text-sm font-normal">Power<br/>Skills</p>
                <p className="text-paragraph text-sm">
                  {credit.pdu.powerSkills.toFixed(2)} hrs
                </p>
              </div>

             <div className="flex flex-col gap-2 md:gap-3">
                <p className="text-Black_light text-sm font-normal">Business<br/> Acumen</p>
                <p className="text-paragraph text-sm">
                  {credit.pdu.businessAcumen.toFixed(2)} hrs
                </p>
              </div>

              <div className="flex items-center gap-2">
                 <span className="text-xl">⏳</span>
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
