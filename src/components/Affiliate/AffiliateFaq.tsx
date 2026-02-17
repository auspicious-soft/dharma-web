import { Button } from "@/components/ui/button";
import { useState } from "react";

const faqs = [
  {
    question: "What is an affiliate program?",
    answer:
      "An affiliate program allows you to earn commissions by promoting vCare products using a unique referral link.",
  },
  {
    question: "How much commission can I earn?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Is there any cost to join?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "What tools are provided to affiliates?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  { 
    question: "How do I apply?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function AffiliateFaq() { 
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
     <section className="py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
      <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px] mb-7">
       Frequently Asked Questions
      </h2>

      <div className="border-b border-gray-200 divide-y divide-gray-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="py-4 md:py-6">
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
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
      </div>
    </section> 
  );
}

