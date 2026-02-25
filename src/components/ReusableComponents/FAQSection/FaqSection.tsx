import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FaqProps {
  limit?: number;
  hideButton?: boolean;
}

const faqs = [
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
      "Yes. The flash cards are fully mobile-friendly for convenient revision on the go.",
  },
  {
    question: "Are formulas and key definitions included?",
    answer: "Yes. Important formulas, definitions, frameworks, and core concepts are included for quick recall and reinforcement.",
  },
  {
    question: "Are these enough to pass the certification exam?",
    answer: "Flash cards are an excellent revision tool. For full preparation, they work best alongside structured training and mock exams.",
  },
  {
    question: "How long do I get access?",
    answer:
      "Access details depend on your purchase plan.",
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
