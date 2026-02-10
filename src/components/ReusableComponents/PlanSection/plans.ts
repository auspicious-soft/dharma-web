export interface Plan {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

// 1 Month Plans
export const oneMonthPlans: Plan[] = [
  {
    name: "Essentials",
    price: "$24.00/ Month",
    features: [
      "30 days of simulator access",
      "Standard mock exam set",
      "Basic result analytics",
      "Instant feedback",
      "Secure exam environment",
    ],
    popular: false,
  },
  {
    name: "Advanced",
    price: "$44.00/ Month",
    features: [
      "30 days of simulator access",
      "Standard mock exam set",
      "Basic result analytics",
      "Instant feedback",
      "Secure exam environment",
    ],
    popular: false,
  },
  {
    name: "Elite",
    price: "$60.00/ Month",
    features: [
      "30 days of simulator access",
      "Standard mock exam set",
      "Basic result analytics",
      "Instant feedback",
      "Secure exam environment",
    ],
    popular: true,
  },
];

// 3 Month Plans
export const threeMonthPlans: Plan[] = [
  {
    name: "Essentials",
    price: "$40.00/ 3 Months",
    features: [
      "90 days of simulator access",
      "Standard mock exam set",
      "Basic result analytics",
      "Instant feedback",
      "Secure exam environment",
    ],
    popular: false,
  },
  {
    name: "Advanced",
    price: "$59.00/ 3 Months",
    features: [
      "90 days of simulator access",
      "Standard mock exam set",
      "Basic result analytics",
      "Instant feedback",
      "Secure exam environment",
    ],
    popular: false,
  },
  {
    name: "Elite",
    price: "$100.00/ 3 Months",
    features: [
      "90 days of simulator access",
      "Standard mock exam set",
      "Basic result analytics",
      "Instant feedback",
      "Secure exam environment",
    ],
    popular: true,
  },
];
