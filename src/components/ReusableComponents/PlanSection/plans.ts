export interface Plan {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

export type CourseKey = "PMP" | "PgMP" | "PfMP" | "PMOCP" | "PMI-RMP";
export type PlanDuration = "1" | "3";

interface CoursePlanByDuration {
  oneMonth: Plan[];
  threeMonth: Plan[];
}

const commonFeatures = [
  "Personalized reports and exam dashboard access",
  "Unlimited retakes within your access period",
];

const createPlan = (
  name: string,
  price: string,
  mockExamFeature: string,
  popular = false,
  additionalFeatures: string[] = [],
): Plan => ({
  name,
  price,
  popular,
  features: [mockExamFeature, ...additionalFeatures, ...commonFeatures],
});

export const coursePlans: Record<CourseKey, CoursePlanByDuration> = {
  PMP: {
    oneMonth: [
      createPlan(
        "Essentials",
        "",
        "1 Full-Length Mock Exam (180 Questions)",
        false,
        ["Exam Prep Strategy Guide", "Flashcards - Tips, Glossary and more"],
      ),
      createPlan(
        "Advanced",
        "",
        "5 Full-Length Mock Exams (900 Questions)",
        false,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
        ],
      ),
      createPlan(
        "Elite",
        "",
        "11 Full-Length Mock Exams (1,980 Questions)",
        true,
        [
          "5 Practice Exams (250 Questions)",
          "Comprehensive Lessons & Videos",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
        ],
      ),
    ],
    threeMonth: [
      createPlan(
        "Essentials",
        "",
        "1 Full-Length Mock Exam (180 Questions)",
        false,
        ["Exam Prep Strategy Guide", "Flashcards - Tips, Glossary and more", "Earn PDUs"],
      ),
      createPlan(
        "Advanced",
        "",
        "5 Full-Length Mock Exams (900 Questions)",
        false,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
          "Earn PDUs",
        ],
      ),
      createPlan(
        "Elite",
        "",
        "11 Full-Length Mock Exams (1,980 Questions)",
        true,
        [
          "5 Practice Exams (250 Questions)",
          "Comprehensive Lessons & Videos",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
          "Earn PDUs",
        ],
      ),
    ],
  },
  PgMP: {
    oneMonth: [
      createPlan(
        "Essentials",
        "",
        "1 Full-Length Mock Exam (170 Questions)",
        false,
        ["PgMP® Exam Prep Strategy Guide", "Flashcards - Tips, Glossary and more"],
      ),
      createPlan(
        "Advanced",
        "",
        "5 Full-Length Mock Exams (850 Questions)",
        false,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "PgMP® Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
        ],
      ),
      createPlan(
        "Elite",
        "",
        "9 Full-Length Mock Exams (1,980 Questions)",
        true,
        [
          "5 Practice Exams (250 Questions)",
          "Comprehensive Lessons & Videos",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "PgMP® Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
        ],
      ),
    ],
    threeMonth: [
      createPlan(
        "Essentials",
        "",
        "1 Full-Length Mock Exam (170 Questions)",
        false,
        ["PgMP® Exam Prep Strategy Guide", "Flashcards - Tips, Glossary and more", "Earn PDUs"],
      ),
      createPlan(
        "Advanced",
        "",
        "5 Full-Length Mock Exams (850 Questions)",
        false,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "PgMP® Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
          "Earn PDUs",
        ],
      ),
      createPlan(
        "Elite",
        "",
        "9 Full-Length Mock Exams (1,980 Questions)",
        true,
        [
          "5 Practice Exams (250 Questions)",
          "Comprehensive Lessons & Videos",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "PgMP® Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
          "Earn PDUs",
        ],
      ),
    ],
  },
  PfMP: {
    oneMonth: [
      createPlan(
        "Essentials",
        "",
        "1 Full-Length Mock Exam (170 Questions)",
        false,
        ["PfMP® Exam Prep Strategy Guide", "Flashcards - Tips, Glossary and more"],
      ),
      createPlan(
        "Advanced",
        "",
        "5 Full-Length Mock Exams (850 Questions)",
        false,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "PfMP® Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
        ],
      ),
      createPlan(
        "Elite",
        "",
        "9 Full-Length Mock Exams (1,980 Questions)",
        true,
        [
          "5 Practice Exams (250 Questions)",
          "Comprehensive Lessons & Videos",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "PfMP® Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
        ],
      ),
    ],
    threeMonth: [
      createPlan(
        "Essentials",
        "",
        "1 Full-Length Mock Exam (170 Questions)",
        false,
        ["PfMP® Exam Prep Strategy Guide", "Flashcards - Tips, Glossary and more", "Earn PDUs"],
      ),
      createPlan(
        "Advanced",
        "",
        "5 Full-Length Mock Exams (850 Questions)",
        false,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "PfMP® Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
          "Earn PDUs",
        ],
      ),
      createPlan(
        "Elite",
        "",
        "9 Full-Length Mock Exams (1,980 Questions)",
        true,
        [
          "5 Practice Exams (250 Questions)",
          "Comprehensive Lessons & Videos",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
          "Earn PDUs",
        ],
      ),
    ],
  },
  PMOCP: {
    oneMonth: [
      createPlan(
        "Essentials",
        "",
        "1 Full-Length Mock Exam (120 Questions)",
        false,
        ["PMOCP Exam Prep Strategy Guide", "Flashcards - Tips, Glossary and more"],
      ),
      createPlan(
        "Advanced",
        "",
        "5 Full-Length Mock Exams (600 Questions)",
        false,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
        ],
      ),
      createPlan(
        "Elite",
        "",
        "9 Full-Length Mock Exams (1,080 Questions)",
        true,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
        ],
      ),
    ],
    threeMonth: [
      createPlan(
        "Essentials",
        "",
        "1 Full-Length Mock Exam (120 Questions)",
        false,
        ["Exam Prep Strategy Guide", "Flashcards - Tips, Glossary and more", "Earn PDUs"],
      ),
      createPlan(
        "Advanced",
        "",
        "5 Full-Length Mock Exams (600 Questions)",
        false,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
          "Earn PDUs",
        ],
      ),
      createPlan(
        "Elite",
        "",
        "9 Full-Length Mock Exams (1,080 Questions)",
        true,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
          "Earn PDUs",
        ],
      ),
    ],
  },
  "PMI-RMP": {
    oneMonth: [
      createPlan(
        "Essentials",
        "",
        "1 Full-Length Mock Exam (115 Questions)",
        false,
        ["RMP® Exam Prep Strategy Guide", "Flashcards - Tips, Glossary and more"],
      ),
      createPlan(
        "Advanced",
        "",
        "5 Full-Length Mock Exams (575 Questions)",
        false,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "RMP® Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
        ],
      ),
      createPlan(
        "Elite",
        "",
        "9 Full-Length Mock Exams (1,035 Questions)",
        true,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "RMP® Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
        ],
      ),
    ],
    threeMonth: [
      createPlan(
        "Essentials",
        "",
        "1 Full-Length Mock Exam (115 Questions)",
        false,
        ["RMP® Exam Prep Strategy Guide", "Flashcards - Tips, Glossary and more", "Earn PDUs"],
      ),
      createPlan(
        "Advanced",
        "",
        "5 Full-Length Mock Exams (575 Questions)",
        false,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "Flashcards - Tips, Glossary and more",
          "Earn PDUs",
        ],
      ),
      createPlan(
        "Elite",
        "",
        "9 Full-Length Mock Exams (1,035 Questions)",
        true,
        [
          "5 Practice Exams (250 Questions)",
          "Application Support Package",
          "Comprehensive Domain & Task Explanations",
          "RMP® Exam Prep Strategy Guide",
          "Flashcards - Tips, Glossary and more",
          "Earn PDUs",
        ],
      ),
    ],
  },
};

export const getPlansForCourse = (
  course: CourseKey,
  duration: PlanDuration,
): Plan[] =>
  duration === "1"
    ? coursePlans[course].oneMonth
    : coursePlans[course].threeMonth;

// Backward-compatible default exports for pages that still expect generic plans.
export const oneMonthPlans: Plan[] = coursePlans.PMP.oneMonth;
export const threeMonthPlans: Plan[] = coursePlans.PMP.threeMonth;
