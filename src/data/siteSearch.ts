import { getCoursePagePath } from "@/utils/links";
import type { CourseKey } from "@/components/ReusableComponents/PlanSection/plans";

export type SearchResult = {
  title: string;
  description: string;
  path: string;
  category: string;
  keywords: string[];
};

const courses: CourseKey[] = ["PMP", "PgMP", "PfMP", "PMOCP", "PMI-RMP"];

const courseSearchEntries = courses.flatMap((course) => [
  {
    title: `${course} Exam Prep Course`,
    description: `Instructor-led ${course} certification training and exam preparation.`,
    path: getCoursePagePath(course, "exam-prep"),
    category: "Exam Prep Courses",
    keywords: [course, "training", "bootcamp", "certification", "classroom"],
  },
  {
    title: `${course} On-Demand Course`,
    description: `Self-paced ${course} exam preparation course and learning resources.`,
    path: getCoursePagePath(course, "on-demand-course"),
    category: "On-Demand Courses",
    keywords: [course, "online", "self paced", "course", "videos"],
  },
  {
    title: `${course} Exam Simulator`,
    description: `Practice realistic ${course} exam questions with simulator-style preparation.`,
    path: getCoursePagePath(course, "exam-simulator"),
    category: "Exam Simulators",
    keywords: [course, "mock exam", "questions", "practice", "simulator"],
  },
  {
    title: `${course} Practice Exam`,
    description: `Real practice exams for ${course} certification readiness.`,
    path: getCoursePagePath(course, "practice-exam"),
    category: "Practice Exams",
    keywords: [course, "practice test", "real practice exam", "questions"],
  },
  {
    title: `${course} Flashcards`,
    description: `Flashcards to review important ${course} concepts before exam day.`,
    path: getCoursePagePath(course, "flash-cards"),
    category: "Flashcards",
    keywords: [course, "flash cards", "revision", "study"],
  },
  {
    title: `${course} Domains and Tasks`,
    description: `Explore ${course} exam domains, tasks, and certification expectations.`,
    path: getCoursePagePath(course, "domains-and-tasks"),
    category: "Resources",
    keywords: [course, "domains", "tasks", "exam content outline"],
  },
  {
    title: `${course} Application Support`,
    description: `Get guidance for your ${course} application and certification process.`,
    path: getCoursePagePath(course, "application-support"),
    category: "Application Support",
    keywords: [course, "application", "panel review", "support"],
  },
]);

export const siteSearchEntries: SearchResult[] = [
  {
    title: "Home",
    description: "vCare Project Management certification training, exam prep, and support.",
    path: "/",
    category: "Main",
    keywords: ["vcare", "dharam", "project management", "certifications"],
  },
  ...courseSearchEntries,
  {
    title: "Exam Simulators",
    description: "Browse exam simulator options for PMI certification preparation.",
    path: "/exam-simulators",
    category: "Exam Simulators",
    keywords: ["mock exams", "practice questions", "simulator"],
  },
  {
    title: "Practice Exams",
    description: "Real practice exams for certification preparation.",
    path: "/real-practice-exam",
    category: "Practice Exams",
    keywords: ["practice test", "mock exam", "questions"],
  },
  {
    title: "Flashcards",
    description: "Certification flashcards for fast review and exam readiness.",
    path: "/flash-cards",
    category: "Resources",
    keywords: ["flash cards", "study", "revision"],
  },
  {
    title: "PDUs",
    description: "Professional development units and continuing certification options.",
    path: "/pdus",
    category: "Resources",
    keywords: ["professional development units", "renewal", "credits"],
  },
  {
    title: "Corporate Training",
    description: "Project management training programs for organizations and teams.",
    path: "/corporate-training",
    category: "Training",
    keywords: ["team training", "company", "enterprise", "organization"],
  },
  {
    title: "About Us",
    description: "Learn about vCare Project Management and our training approach.",
    path: "/about-us",
    category: "Company",
    keywords: ["about", "vcare", "dharam"],
  },
  {
    title: "Contact Us",
    description: "Contact the vCare Project Management team.",
    path: "/contact-us",
    category: "Company",
    keywords: ["talk to us", "support", "message", "enquiry"],
  },
  {
    title: "Book an Appointment",
    description: "Schedule a consultation or appointment with vCare Project Management.",
    path: "/book-an-appointment",
    category: "Company",
    keywords: ["appointment", "consultation", "calendar", "call"],
  },
  {
    title: "Affiliate",
    description: "Affiliate information and opportunities.",
    path: "/affiliate",
    category: "Company",
    keywords: ["affiliate", "partner", "earn"],
  },
  {
    title: "Partner With Us",
    description: "Partnership opportunities with vCare Project Management.",
    path: "/partner-with-us",
    category: "Company",
    keywords: ["partner", "collaboration", "business"],
  },
  {
    title: "Offers and Benefits",
    description: "Current offers, benefits, and special programs.",
    path: "/offers-and-benefits",
    category: "Company",
    keywords: ["offers", "discounts", "benefits", "military"],
  },
  {
    title: "Webinars",
    description: "Project management webinars and learning sessions.",
    path: "/webinars",
    category: "Resources",
    keywords: ["webinar", "video", "session", "youtube"],
  },
  {
    title: "Podcasts",
    description: "Project management podcast episodes and conversations.",
    path: "/podcasts",
    category: "Resources",
    keywords: ["podcast", "audio", "episodes", "youtube"],
  },
  {
    title: "Refer and Earn",
    description: "Referral program details for vCare Project Management.",
    path: "/refer-and-earn",
    category: "Company",
    keywords: ["referral", "refer", "earn"],
  },
  {
    title: "Reviews",
    description: "Learner reviews, testimonials, and success stories.",
    path: "/reviews",
    category: "Company",
    keywords: ["testimonials", "reviews", "success stories"],
  },
  {
    title: "Lean Six Sigma Certification",
    description: "Lean Six Sigma certification training information.",
    path: "/lean-six-sigma-certification",
    category: "Other Certifications",
    keywords: ["six sigma", "lean", "certification"],
  },
  {
    title: "PMI-ACP Certification",
    description: "PMI-ACP certification preparation and training.",
    path: "/pmi-acp-certification",
    category: "Other Certifications",
    keywords: ["agile", "pmi acp", "certification"],
  },
  {
    title: "CAPM Certification",
    description: "CAPM certification training and preparation.",
    path: "/capm-certification",
    category: "Other Certifications",
    keywords: ["capm", "certification", "associate"],
  },
  {
    title: "AI Project Management Certification",
    description: "AI project management certification training information.",
    path: "/ai-project-management-certification",
    category: "Other Certifications",
    keywords: ["ai", "artificial intelligence", "project management"],
  },
  {
    title: "FAQ",
    description: "Frequently asked questions about courses, exams, and support.",
    path: "/faq",
    category: "Support",
    keywords: ["questions", "answers", "help"],
  },
  {
    title: "Mobile App",
    description: "vCare mobile app information and downloads.",
    path: "/mobile-app",
    category: "Resources",
    keywords: ["app", "mobile", "ios", "android"],
  },
  {
    title: "Terms of Service",
    description: "Terms and conditions for using vCare Project Management services.",
    path: "/terms-of-service",
    category: "Legal",
    keywords: ["terms", "conditions", "service"],
  },
  {
    title: "Privacy Policy",
    description: "Privacy practices and personal information policy.",
    path: "/privacy-policy",
    category: "Legal",
    keywords: ["privacy", "personal information", "data"],
  },
  {
    title: "Refund Policy",
    description: "Refund policy and eligibility information.",
    path: "/refund-policy",
    category: "Legal",
    keywords: ["refund", "return", "cancellation"],
  },
];

const normalize = (value: string) => value.toLowerCase().replace(/[-_/]/g, " ");

export const getSiteSearchResults = (query: string) => {
  const normalizedQuery = normalize(query).trim();

  if (!normalizedQuery) {
    return [];
  }

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  return siteSearchEntries
    .map((entry) => {
      const haystack = normalize(
        [
          entry.title,
          entry.description,
          entry.path,
          entry.category,
          ...entry.keywords,
        ].join(" ")
      );

      const title = normalize(entry.title);
      const category = normalize(entry.category);
      const exactTitleMatch = title.includes(normalizedQuery) ? 30 : 0;
      const exactCategoryMatch = category.includes(normalizedQuery) ? 12 : 0;
      const termScore = terms.reduce((score, term) => {
        if (title.includes(term)) return score + 8;
        if (category.includes(term)) return score + 5;
        if (haystack.includes(term)) return score + 2;
        return score;
      }, 0);

      return {
        ...entry,
        score: exactTitleMatch + exactCategoryMatch + termScore,
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
};
