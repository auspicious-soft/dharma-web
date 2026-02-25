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
      "1 full-length exam simulation",
      "Based on latest Exam Content Outline",
      "Access to highly realistic questions",
      "Explanations provided for every question",
      "Domain-wise performance analytics",
      "Personalized reports and exam dashboard access",
      "Earn Professional Development Units (PDUs)",
    ],
    popular: false,
  },
  {
    name: "Advanced",
    price: "$44.00/ Month",
    features: [
      "3 full-length exam simulations",
      "Based on latest Exam Content Outline",
      "Access to highly realistic questions",
      "Explanations provided for every question",
      "Domain-wise performance analytics",
      "Personalized reports and exam dashboard access",
      "Earn Professional Development Units (PDUs)",
    ],
    popular: false,
  },
  {
    name: "Elite",
    price: "$60.00/ Month",
    features: [
      "5 full-length exam simulations",
      " Based on latest Exam Content Outline",
      " Access to highly realistic questions",
      " Explanations provided for every question",
      "Domain-wise performance analytics",
      " Personalized reports and exam dashboard access",
      " Earn Professional Development Units (PDUs)",
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
     "1 full-length exam simulation",
      "Based on latest Exam Content Outline",
      "Access to highly realistic questions",
      "Explanations provided for every question",
      "Domain-wise performance analytics",
      "Personalized reports and exam dashboard access",
      "Earn Professional Development Units (PDUs)",
    ],
    popular: false,
  },
  {
    name: "Advanced",
    price: "$59.00/ 3 Months",
    features: [
     "3 full-length exam simulations",
      "Based on latest Exam Content Outline",
      "Access to highly realistic questions",
      "Explanations provided for every question",
      "Domain-wise performance analytics",
      "Personalized reports and exam dashboard access",
      "Earn Professional Development Units (PDUs)",
    ],
    popular: false,
  },
  {
    name: "Elite",
    price: "$100.00/ 3 Months",
    features: [
      "5 full-length exam simulations",
      " Based on latest Exam Content Outline",
      " Access to highly realistic questions",
      " Explanations provided for every question",
      "Domain-wise performance analytics",
      " Personalized reports and exam dashboard access",
      " Earn Professional Development Units (PDUs)",
    ],
    popular: true,
  },
];
