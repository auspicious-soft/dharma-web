import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FaqProps {
  limit?: number;
  hideButton?: boolean;
}

const faqs = [
  {
    question: "What Project Management Certifications Do You Offer?",
    answer:
      "We offer comprehensive training and mentoring programs for globally recognized PMI® certifications, including Project Management Professional (PMP®), Certified Associate in Project Management (CAPM®), Program Management Professional (PgMP®), Portfolio Management Professional (PfMP®), PMI Agile Certified Practitioner (PMI-ACP®), PMI Risk Management Professional (PMI-RMP®), PMI Scheduling Professional (PMI-SP®), PMI Professional in Business Analysis (PMI-PBA®), PMI PMO Certified Professional (PMI-PMOCP™), Disciplined Agile Foundations (DAF), and Disciplined Agile Senior Scrum Master (DASSM). All programs are delivered by PMI Authorized Trainers and include expert mentoring, practical insights, and hands-on learning to help you succeed on exam day and in your professional practice.",
  },
  {
    question: "Are Classes Conducted Online Or In-Person?",
    answer:
      "Classes are available both online and in-person depending on your location and schedule preferences.",
  },
  {
    question: "What Support Will I Receive During The Course?",
    answer:
      "You will receive instructor mentoring, study materials, mock exams...",
  },
  {
    question: "How Do I Enroll In A Class, And What Is The Process?",
    answer: "You can enroll through our website by selecting a course...",
  },
  {
    question: "Are There Any Discounts Or Special Offers Available?",
    answer: "Yes, we regularly offer seasonal discounts...",
  },
  {
    question: "How can I provide feedback about the course?",
    answer:
      "You can provide feedback through our online portal or by contacting our support team directly.",
  },
];

export default function FaqSection({ limit, hideButton }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayedFaqs = limit ? faqs.slice(0, limit) : faqs;
  const navigate = useNavigate();

  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-7">
          Frequently Asked Questions
        </h2>

        <div className="border-b border-gray-200 divide-y divide-gray-200">
          {displayedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-4 md:py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-black text-sm md:text-base lg:text-xl font-semibold">
                    {faq.question}
                  </span>

                  <svg
                    className={`w-4 h-4 transition-transform duration-300 text-paragraph ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <p className="mt-4 text-paragraph text-sm md:text-base leading-[26px] md:leading-[30px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ); 
          })}
        </div>

        {!hideButton && (
          <div className="flex justify-center mt-7">
            <Button onClick={() => navigate("/faq")}>View all FAQs</Button>
          </div>
        )}
      </div>
    </section>
  );
}
