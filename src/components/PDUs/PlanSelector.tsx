import React, { useState } from "react";
import { Button } from "../ui/button";

type Plan = {
  id: number;
  title: string;
  subtitle: string;
  points: string[];
};

const plans: Plan[] = [
  {
    id: 1,
    title: "15 PDUs",
    subtitle: "Performance Measurement for Projects",
    points: [
      "Ways of Working: 4 PDUs",
      "Power Skills: 6 PDUs",
      "Business Acumen: 5 PDUs",
    ],
  },
  {
    id: 2,
    title: "30 PDUs",
    subtitle: "Agile Project Management",
    points: [
      "Ways of Working: 18 PDUs",
      "Power Skills: 8 PDUs",
      "Business Acumen: 4 PDUs",
    ],
  },
  {
    id: 3,
    title: "60 PDUs",
    subtitle: "Artificial Intelligence for Project Management Professionals",
    points: [
      "Ways of Working: 20 PDUs",
      "Power Skills: 16 PDUs",
      "Business Acumen: 24 PDUs",
    ],
  },
];

const PlanSelector: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<number>(1);

  return (
    <section className="bg-light-blue py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-9 m-auto">
        <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-4 md:mb-6">
          Choose Your PDU Course Package
        </h2>

        <p className="text-paragraph text-sm md:text-base mb-6 md:mb-8">
          Pick a package that matches your renewal needs and learn at your own
          pace with PMI-approved, talent-triangle aligned content.
        </p>

        <div className="space-y-4 md:space-y-7">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`cursor-pointer p-3 md:p-4 bg-light_blue rounded-2xl border transition-all duration-200 ${
                  isSelected ? "border-primary_blue" : "border-[#556378]/30"
                }`}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div
                    className={`mt-1 min-h-5 min-w-5 rounded-full border flex items-center justify-center ${
                      isSelected ? "border-primary_blue" : "border-[#556378]/30"
                    }`}
                  >
                    <div
                      className={`min-h-2.5 min-w-2.5 rounded-full transition ${
                        isSelected ? "bg-primary_blue" : "bg-[#556378]/30"
                      }`}
                    />
                  </div>

                  <div className="w-full">
                    <h3 className="font-semibold text-base md:text-xl text-paragraph">
                      {plan.title}
                    </h3>
                    <p className="font-normal text-sm md:text-lg text-paragraph mt-1">
                      {plan.subtitle}
                    </p>

                    <ul className="mt-3 space-y-1">
                      {plan.points.map((point) => (
                        <li key={point} className="text-sm text-paragraph">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Button className="w-full mt-7">Buy Now</Button>
      </div>
    </section>
  );
};

export default PlanSelector;
