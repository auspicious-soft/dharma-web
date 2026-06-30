export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  faqs: FaqItem[];
}

export const practiceExamFaqs: FaqItem[] = [
  {
    question: "What is included in the practice exams?",
    answer:
      "The practice exams include practice questions, mock exam style preparation, and tools designed to help you assess readiness and improve exam confidence.",
  },
  {
    question: "Are practice exam questions similar to the real exam?",
    answer:
      "The questions are designed to reflect exam-style thinking, scenario-based reasoning, and the structure of current certification exams.",
  },
  {
    question: "Can I use practice exams for final exam review?",
    answer:
      "Yes. Practice exams are useful for both ongoing preparation and final readiness checks before exam day.",
  },
  {
    question: "Will I be able to identify weak areas?",
    answer:
      "Yes. Practice results help you identify knowledge gaps so you can focus your review on the areas that need more attention.",
  },
];

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    title: "General",
    faqs: [
      {
        question: "What does vCare Project Management offer?",
        answer:
          "vCare Project Management provides certification training, exam simulators, on-demand learning, application support, practice resources, flashcards, and PDUs for project management professionals.",
      },
      {
        question: "Which certifications do you support?",
        answer:
          "We support multiple project management certifications, including PMP, PgMP, PfMP, PMI-RMP, and PMOCP, along with related learning and renewal resources.",
      },
      {
        question: "How do I know which course is right for me?",
        answer:
          "You can compare course pages or book a free consultation. Our team can help you choose the right learning path based on your certification goal, experience, timeline, and current preparation level.",
      },
      {
        question: "Can I contact support if my question is not listed here?",
        answer:
          "Yes. If you do not find the answer you need, please contact us and our support team will help you.",
      },
    ],
  },
  {
    id: "exam-prep",
    title: "Exam Prep Course",
    faqs: [
      {
        question: "Who is this Exam Prep Course designed for?",
        answer:
          "This course is designed for professionals preparing for certification who want a structured, flexible, and self-paced learning experience. It is suitable for both first-time candidates and experienced professionals looking to refresh their knowledge.",
      },
      {
        question: "Is the course aligned with the latest certification exam?",
        answer:
          "Yes. The course content is regularly reviewed and updated to align with the latest exam content outline, standards, and industry best practices.",
      },
      {
        question: "What is included in the course?",
        answer:
          "Depending on your selected plan, you may receive access to video lessons, study guides, practice questions, full-length mock exams, performance analytics, exam strategies, and additional learning resources.",
      },
      {
        question: "How do I access the course?",
        answer:
          "The course is delivered entirely online through our learning platform. Once enrolled, you can access your learning materials from any supported device with an internet connection.",
      },
      {
        question: "Can I study at my own pace?",
        answer:
          "Yes. Our Exam Prep Courses are self-paced, allowing you to study whenever and wherever it suits your schedule.",
      },
      {
        question: "How long will I have access to the course?",
        answer:
          "Access depends on the plan you purchase. Available access durations are displayed on the course page before enrollment.",
      },
      {
        question: "Can I retake the mock exams?",
        answer:
          "Yes. You can take the mock exams multiple times during your active subscription period to reinforce learning and improve your exam readiness.",
      },
      {
        question: "Are the practice questions similar to the real exam?",
        answer:
          "Yes. Our practice questions are designed to closely reflect the style, complexity, and format of the actual certification exam.",
      },
      {
        question: "Will I receive explanations for each question?",
        answer:
          "Yes. Every practice question includes detailed explanations to help you understand the correct answer and reinforce key concepts.",
      },
      {
        question: "Can I track my progress?",
        answer:
          "Yes. Your dashboard provides performance insights, identifies strengths and improvement areas, and helps you monitor your overall exam readiness.",
      },
      {
        question: "Is the course mobile-friendly?",
        answer:
          "Yes. You can access the course from your desktop, laptop, tablet, or mobile device, making it easy to study on the go.",
      },
      {
        question: "Do I receive a certificate after completing the course?",
        answer:
          "Where applicable, a course completion certificate is provided after successfully completing the learning requirements.",
      },
      {
        question: "Does this course include instructor support?",
        answer:
          "The Exam Prep Course is primarily self-paced. If you require live instruction, mentoring, or coaching, you may wish to explore our instructor-led training or mentoring programs.",
      },
      {
        question: "Can I upgrade to instructor-led training later?",
        answer:
          "Yes. If you decide you would benefit from live instruction, you can enroll in one of our instructor-led training programs or mentoring options.",
      },
      {
        question: "Is technical support available?",
        answer:
          "Yes. Our support team is available to assist with platform access, technical issues, and general course-related enquiries.",
      },
      {
        question: "Can my employer purchase this course for multiple learners?",
        answer:
          "Yes. We offer corporate learning solutions, enterprise licensing, learner management, and customized training programs for organizations.",
      },
      {
        question: "Will I receive updates if the exam changes?",
        answer:
          "Where applicable, course content is updated to reflect significant changes to the certification exam, ensuring learners have access to current study materials.",
      },
      {
        question: "What happens after I purchase the course?",
        answer:
          "Once your enrollment is confirmed, you'll receive access instructions by email so you can begin learning immediately.",
      },
      {
        question: "Is this course suitable for beginners?",
        answer:
          "Yes. The structured learning path and step-by-step content make the course suitable for both beginners and experienced professionals preparing for certification.",
      },
      {
        question: "Why choose vCare Project Management?",
        answer:
          "Our Exam Prep Courses are developed by experienced practitioners, aligned with the latest certification standards, and designed to provide a flexible, practical, and effective learning experience that helps professionals prepare with confidence.",
      },
    ],
  },
  {
    id: "on-demand",
    title: "On-Demand Courses",
    faqs: [
      {
        question: "Are the on-demand courses self-paced?",
        answer:
          "Yes. On-demand courses are designed for flexible self-paced learning so you can study at a time that works for you.",
      },
      {
        question: "Can I access on-demand courses from different devices?",
        answer:
          "Yes. On-demand learning is built for convenient access across supported devices.",
      },
      {
        question: "Do on-demand courses help with exam preparation?",
        answer:
          "Yes. They are structured to build certification knowledge, reinforce exam concepts, and support your preparation journey.",
      },
    ],
  },
  {
    id: "application-support",
    title: "Application Support",
    faqs: [
      {
        question: "What is application support?",
        answer:
          "Application support helps you prepare, review, and strengthen your certification application before submission.",
      },
      {
        question: "Can you help if my application is selected for audit?",
        answer:
          "Yes. We provide guidance to help you understand audit requirements and prepare the necessary supporting information.",
      },
      {
        question: "Do you write the application for me?",
        answer:
          "We guide, review, and support your application, but the information submitted must accurately reflect your own professional experience.",
      },
    ],
  },
  {
    id: "flashcards",
    title: "Flashcards",
    faqs: [
      {
        question: "Are these flash cards aligned with the latest exam?",
        answer:
          "Yes. The content is aligned with the current Exam Content Outline and reflects updated industry practices.",
      },
      {
        question: "How many flash cards are included?",
        answer:
          "You receive access to a comprehensive collection of structured flash cards across all exam domains, with content continuously updated.",
      },
      {
        question: "Can I access the flash cards on mobile?",
        answer:
          "Yes. The flash cards are mobile-friendly for convenient revision on the go.",
      },
      {
        question: "Are formulas and key definitions included?",
        answer:
          "Yes. Important formulas, definitions, frameworks, and core concepts are included for quick recall and reinforcement.",
      },
      {
        question: "Are these enough to pass the certification exam?",
        answer:
          "Flash cards are an excellent revision tool. For full preparation, they work best alongside structured training and mock exams.",
      },
      {
        question: "How long do I get access?",
        answer: "Access details depend on your purchase plan.",
      },
      {
        question: "Are the flash cards suitable for last-minute revision?",
        answer:
          "Absolutely. They are ideal for quick review sessions, helping reinforce high-impact concepts before exam day.",
      },
      {
        question: "Are the flash cards updated regularly?",
        answer:
          "Yes. Content is periodically reviewed and updated to reflect evolving exam requirements.",
      },
    ],
  },
  {
    id: "pdus",
    title: "PDUs",
    faqs: [
      {
        question: "What are PDUs?",
        answer:
          "PDUs are Professional Development Units used by credential holders to maintain eligible PMI certifications.",
      },
      {
        question: "Can PDUs be used for certification renewal?",
        answer:
          "Yes. Eligible PDUs can support certification renewal requirements based on the rules for your credential.",
      },
      {
        question: "Do I receive proof of completion?",
        answer:
          "Completion and access details depend on the selected program. Please review the specific PDU page or contact support for details.",
      },
    ],
  },
  {
    id: "account-access",
    title: "Account & Access",
    faqs: [
      {
        question: "How do I access my purchased resources?",
        answer:
          "After purchase or enrollment, you can access eligible resources through your account or the designated learning portal.",
      },
      {
        question: "What should I do if I forget my password?",
        answer:
          "Use the forgot password option on the login page to reset your password. If you still need help, contact support.",
      },
      {
        question: "Who should I contact for billing or access issues?",
        answer:
          "Please contact our support team with your account details and the issue you are facing so we can assist you.",
      },
    ],
  },
];

export const allFaqs: FaqItem[] = faqCategories.flatMap(
  (category) => category.faqs,
);
