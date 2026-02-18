import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import React from "react";
import { Link } from "react-router-dom";

type TextItem =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "link"; value: string; href: string }
  | { type: "br" }
  | { type: "ul"; items: TextItem[][] };

type SectionType = {
  title?: string;
  subTitle?: string;
  paragraphs: TextItem[][];
};

const termsData: SectionType[] = [
  {
    paragraphs: [
      [
        {
          type: "text",
          value:
            "Thank you for buying our courses. We ensure that our users have a rewarding experience while they discover, assess, and purchase our courses, whether it is an instructor-led or self-paced training. As with any online purchase experience, there are terms and conditions that govern the Refund Policy. When you buy a training course on vCare Project Management website, you agree to our Privacy Policy, Terms of Use and refund policy.",
        },
      ],
    ],
  },
  {
    title: "Cancellations And Refunds",
    paragraphs: [
      [
        {
          type: "text",
          value: "For ",
        },
        {
          type: "bold",
          value: "Self-Paced Learning",
        },
        {
          type: "text",
          value:
            ", refund requests must be raised within seven days of course purchase. The refund will be void if the participant has accessed class materials.",
        },
      ],
      [
        {
          type: "text",
          value: "For ",
        },
        {
          type: "bold",
          value: "Instructor-Led Mentoring Programs",
        },
        {
          type: "text",
          value:
            ", refund requests must be raised within seven days of course purchase. The refund will be void after the start of the original class date or if the participant has accessed class materials or received recordings. ",
        },
      ],
      [
        {
          type: "bold",
          value: "Classroom Training",
        },
      ],
      [
        {
          type: "text",
          value:
            "vCare Project Management reserves the right to postpone or change the location of an event due to insufficient enrollments, instructor unavailability, or force majeure events such as natural disasters, political instability, or other unforeseen circumstances.",
        },
        { type: "br" },
        {
          type: "text",
          value:
            "If a participant cancels their registration 14 days or more prior to the event, 25% of the total paid fee will be deducted, and the remaining amount will be refunded. If a cancellation request is made within 14 days of the event, no refunds will be issued.",
        },
      ],
      [
        {
          type: "bold",
          value: "Other Products",
        },
      ],
      [
        {
          type: "text",
          value:
            "For other products available on this website such as Books and Exam Simulators, refund requests can be made within 24 hours of purchase, provided that the content has not been accessed or used.",
        },
      ],
    ],
  },
  {
    subTitle: "Refunds",
    paragraphs: [
      [
        {
          type: "text",
          value:
            "All refunds will be processed within ten working days from the date of notification after the request is approved by vCare Project Management. For any refund-related queries, participants can reach out to ",
        },
        {
          type: "link",
          href: "mailto:team@vcareprojectmanagement.com",
          value: "team@vcareprojectmanagement.com",
        },
      ],
      [
        {
          type: "bold",
          value: "Refunds: Duplicate payment",
        },
      ],
      [
        {
          type: "text",
          value:
            "Refund of the duplicate payment made by the delegate will be processed via the same source (original method of payment) in 10 working days post intimation by the customer.",
        },
      ],
      [
        {
          type: "bold",
          value: "Corporate Programs",
        },
      ],
      [
        {
          type: "text",
          value:
            "vCare Project Management, reserves the right to postpone/cancel an event, or change the location of an event because of insufficient enrollments, instructor illness or force majeure events (like floods, earthquakes, political instability, etc)",
        },
      ],
      [
        {
          type: "ul",
          items: [
            [
              {
                type: "text",
                value:
                  "In case vCare Project Management cancels an event, 100% refund will be paid to the delegate.",
              },
            ],
            [
              {
                type: "text",
                value:
                  "If a cancellation is done by a delegate 14 days (or more) prior to the event, 25% of the total paid fee will be deducted and the remaining amount will be refunded to the delegate.",
              },
            ],
            [
              {
                type: "text",
                value:
                  "If a cancellation is done by a delegate within 14 days (or less) of the event, no refunds will be made.",
              },
            ],
            [
              {
                type: "text",
                value:
                  "Note: Travel, logistics or any personal expense incurred by learners/participants will not be refunded.",
              },
            ],
          ],
        },
      ],
    ],
  },

  {
    title: "Our Money Back Guarantee",
    paragraphs: [
      [
        {
          type: "text",
          value:
            "At vCare Project Management, we are committed to your success and offer a 100% money-back guarantee for our select programs under the following conditions:",
        },
      ],
      [
        {
          type: "text",
          value:
            "If you do not pass your certification exam within three attempts, we will refund your full class enrollment fee, provided that all attempts are completed within six months from the conclusion of your training program.",
        },
      ],
      [
        {
          type: "text",
          value:
            "To qualify for the refund, you must attend the entire training course and obtain your Certificate of Completion (COC) before attempting the exam for the first time.",
        },
      ],
      [
        {
          type: "text",
          value:
            "This guarantee applies only to programs explicitly stated to include the money-back guarantee as part of their offering. Please check the course details to confirm eligibility.",
        },
      ],
      [
        {
          type: "text",
          value:
            "Please note that exam fees are the responsibility of the student and are not covered under this refund policy. Refund requests must be submitted within six months from the conclusion of your class.",
        },
      ],
    ],
  },
];

export default function RefundPolicy() {
  const renderItems = (items: TextItem[]) =>
    items.map((item, index) => {
      if (item.type === "text") {
        return <span key={index}>{item.value}</span>;
      }

      if (item.type === "link") {
        const isExternal = item.href.startsWith("http");

        if (isExternal) {
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary_blue underline hover:text-primary_heading mx-1"
            >
              {item.value}
            </a>
          );
        }

        return (
          <Link
            key={index}
            to={item.href}
            className="text-primary_blue underline hover:text-primary_heading"
          >
            {item.value}
          </Link>
        );
      }

      if (item.type === "br") {
        return <br key={index} />;
      }

      if (item.type === "ul") {
        return (
          <ul className="space-y-1  self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1 mb-5">
            {item.items.map((li, liIndex) => (
              <li
                key={liIndex}
                className="flex items-start gap-2 self-stretch justify-start"
              >
                {" "}
                <span className="text-[8px]">•</span>
                <span>{renderItems(li)}</span>
              </li>
            ))}
          </ul>
        );
      }

      if (item.type === "bold") {
        return (
          <strong key={index} className="text-[#1f1f1f] font-normal">
            {item.value}
          </strong>
        );
      }

      return null;
    });

  return (
    <>
      <FooterPageHeroSection title="Refund Policy" description="" />

      <section className="overflow-hidden py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          {termsData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              {section.title && (
                <h4 className="text-base font-semibold text-Black_light mb-2 leading-6">
                  {section.title}
                </h4>
              )}
              {section.subTitle && (
                <h4 className="text-sm font-semibold text-Black_light mb-1 leading-6">
                  {section.subTitle}
                </h4>
              )}

              <div className="space-y-2 text-paragraph leading-[26px] text-sm">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <div key={pIndex}>{renderItems(paragraph)}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
