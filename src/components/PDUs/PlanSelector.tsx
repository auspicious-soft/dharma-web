import React, { useState } from "react";
import { Button } from "../ui/button";

interface Plan {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  oldPrice: string;
  discountText: string;
  offText: string;
}

const plans: Plan[] = [
  {
    id: 1,
    title: "15 PDUs",
    subtitle: "Measuring Project Performance",
    price: "$36.00",
    oldPrice: "$50.00",
    discountText: "Save $34 instantly",
    offText: "29% off",
  },
  {
    id: 2,
    title: "30 PDUs",
    subtitle: "Measuring Project Performance",
    price: "$36.00",
    oldPrice: "$50.00",
    discountText: "Save $34 instantly",
    offText: "29% off",
  },
  {
    id: 3,
    title: "30 PDUs",
    subtitle: "Measuring Project Performance",
    price: "$36.00",
    oldPrice: "$50.00",
    discountText: "Save $34 instantly",
    offText: "29% off",
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
        <div className="space-y-4 md:space-y-7">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`cursor-pointer p-3 md:p-4 bg-light_blue rounded-2xl border transition-all duration-200 
                ${isSelected ? "border-primary_blue" : "border-[#556378]/30"}`}
              >
                <div className="flex justify-between">
                  {/* Left Section */}
                  <div className="flex items-start gap-3 md:gap-4">
                    {/* Radio Circle */}
                    <div
                      className={`mt-1 min-h-5 min-w-5 rounded-full border flex items-center justify-center
                      ${
                        isSelected
                          ? "border-primary_blue"
                          : "border-[#556378]/30"
                      }`}
                    >
                      <div
                        className={`min-h-2.5 min-w-2.5 rounded-full transition
      ${isSelected ? "bg-primary_blue" : "bg-[#556378]/30"}`}
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-base md:text-xl text-paragraph flex gap-y-0 gap-x-2 flex-wrap">
                        {plan.title}{" "}
                        <span className="font-normal text-sm md:text-lg text-paragraph">
                          {plan.subtitle}
                        </span>
                      </h3>

                      <div className="mt-2 md:mt-3 flex items-center gap-3">
                        <span className="text-primary_blue font-semibold text-base md:text-xl !leading-5">
                          {plan.price}
                        </span>
                        <span className="line-through text-paragraph text-sm md:text-base !leading-5">
                          {plan.oldPrice}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="text-right flex flex-col items-end justify-between">
                    <p className="text-green-600 font-semibold text-sm md:text-lg">
                      {plan.discountText}
                    </p>
                    <p className="text-paragraph text-sm md:text-lg !leading-5 mt-2 md:mt-3">{plan.offText}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Buy Button */}
        <Button className="w-full mt-7">Buy Now</Button>
      </div>
    </section>
  );
};

export default PlanSelector;
