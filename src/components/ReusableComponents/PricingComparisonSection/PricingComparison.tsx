import React from "react";
import { GreenTickIcon } from "@/utils/svgicons";

type PlanKey =
  | "basic"
  | "elite"
  | "elitePlus"
  | "essentials"
  | "advanced"
  | "elite_tier";

export interface Plan {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

interface FeatureRow {
  label: string;
  values: Partial<Record<PlanKey, string | boolean>>;
}

const defaultPlans: { key: PlanKey; title: string }[] = [
  { key: "basic", title: "Basic" },
  { key: "elite", title: "Elite" },
  { key: "elitePlus", title: "Elite Plus" },
];

const defaultRows: FeatureRow[] = [
  {
    label: "Single PMP® Exam Voucher",
    values: {
      basic: "$229",
      elite: "Training + Practice Resources",
      elitePlus: "Complete PMP Solution",
    },
  },
  {
    label: "PMP® Exam Voucher + PMI® Membership Bundle",
    values: {
      basic: true,
      elite: true,
      elitePlus: true,
    },
  },
  {
    label: "PgMP® Exam Voucher",
    values: {
      basic: true,
      elite: true,
      elitePlus: true,
    },
  },
  {
    label: "PfMP® Exam Voucher",
    values: {
      basic: true,
      elite: true,
      elitePlus: true,
    },
  },
  {
    label: "PMI-RMP® Exam Voucher",
    values: {
      elite: true,
      elitePlus: true,
    },
  },
  {
    label: "PMI-PBA® Exam Voucher",
    values: {
      elitePlus: true,
    },
  },
  {
    label: "PMI-RMP® Exam Voucher",
    values: {
      elitePlus: true,
    },
  },
  {
    label: "PMI-SP® Exam Voucher",
    values: {
      elitePlus: true,
    },
  },
];

interface PricingComparisonProps {
  heading?: string;
  description?: string;
  plans?: Plan[];
}

const PricingComparison: React.FC<PricingComparisonProps> = ({
  heading = "Upgrade Your PMP Preparation",
  description = "Already enrolled? Go all-in by adding practice exams and simulators to your learning.",
  plans: customPlans,
}) => {
  const isCustomPlans = customPlans && customPlans.length > 0;

  let displayPlans: { key: PlanKey; title: string }[] = defaultPlans;
  let rows: FeatureRow[] = defaultRows;

  // If custom plans are provided, generate rows from plan features
  if (isCustomPlans) {
    displayPlans = customPlans.map((plan, idx) => ({
      key:
        (["essentials", "advanced", "elite_tier"] as PlanKey[])[idx] ||
        (`plan_${idx}` as PlanKey),
      title: plan.name,
    }));

    // Generate rows from unique features across all plans
    const allFeatures = new Set<string>();
    customPlans.forEach((plan) => {
      plan.features.forEach((feature) => {
        allFeatures.add(feature);
      });
    });

    rows = Array.from(allFeatures).map((feature) => ({
      label: feature,
      values: Object.fromEntries(
        customPlans.map((plan, idx) => [
          (["essentials", "advanced", "elite_tier"] as PlanKey[])[idx] ||
            `plan_${idx}`,
          plan.features.includes(feature),
        ]),
      ),
    }));
  }
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        <div className=" flex flex-col justify-center items-center mb-6 md:mb-10 text-center">
          <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
            {heading}
          </h2>
          <p className="text-paragraph text-sm font-normal mt-1">
            {description}
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#d5dddd] bg-white shadow-sm">
          <div className="grid grid-cols-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-[#d5dddd]">
            <div className="p-4 font-semibold text-gray-600" />

            {displayPlans.map((plan) => (
              <div
                key={plan.key}
                className="p-2.5 text-center font-semibold text-[#4d8eea] text-sm md:text-xl"
              >
                {plan.title}
              </div>
            ))}
          </div>

          {/* ROWS */}
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-[#d5dddd] last:border-b-0 min-h-16 items-center"
            >
              {/* Feature name */}
              <div className="px-2.5 md:px-4 py-3 text-[#28333e] text-sm">
                {row.label}
              </div>

              {/* Values */}
              {displayPlans.map((plan) => {
                const value = row.values[plan.key];

                return (
                  <div
                    key={plan.key}
                    className="px-2.5 md:px-4 py-3 flex justify-center items-center text-[#28333e] text-sm"
                  >
                    {value === true && <GreenTickIcon />}

                    {typeof value === "string" && (
                      <span className="font-medium">{value}</span>
                    )}

                    {!value && <span className="text-gray-300"></span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
