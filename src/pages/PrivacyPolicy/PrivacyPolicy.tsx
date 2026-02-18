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
            "This Privacy Policy describes how we collect, use, and disclose your Personal Information when you visit or make a purchase from vcareprojectmanagement.com (the 'Site').",
        },
      ],
    ],
  },
  {
    title: "1. Collecting Personal Information",
    paragraphs: [
      [
        {
          type: "text",
          value:
            "When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information about an identifiable individual (including the information below) as “Personal Information”. See the list below for more information about what Personal Information we collect and why.",
        },
      ],
    ],
  },
  {
    subTitle: "1.1 Device information",
    paragraphs: [
      [
        {
          type: "ul",
          items: [
            [
              {
                type: "text",
                value:
                  "Purpose of collection: to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.",
              },
            ],
            [
              {
                type: "text",
                value:
                  "Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels",
              },
            ],
            [
              {
                type: "text",
                value:
                  "Personal Information collected: version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site",
              },
            ],
          ],
        },
      ],
    ],
  },
  {
    subTitle: "1.2 Order information",
    paragraphs: [
      [
        {
          type: "ul",
          items: [
            [
              {
                type: "text",
                value:
                  "Purpose of collection: to provide products or services to you to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.",
              },
            ],
            [
              {
                type: "text",
                value: "Source of collection: collected from you.",
              },
            ],
            [
              {
                type: "text",
                value:
                  "Personal Information collected: name, billing address, shipping address, payment information, email address, and phone number. We will not store your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy.",
              },
            ],
          ],
        },
      ],
    ],
  },
  {
    subTitle: "1.3 Customer support information",
    paragraphs: [
      [
        {
          type: "ul",
          items: [
            [
              {
                type: "text",
                value: "Purpose of collection: to provide customer support.",
              },
            ],
          ],
        },
      ],
    ],
  },
  {
    title: "2. Sharing Personal Information",
    paragraphs: [
      [
        {
          type: "text",
          value:
            "We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:",
        },
      ],
      [
        {
          type: "text",
          value:
            "We use Shopify to power our online store. You can read more about how Shopify uses your Personal Information here: ",
        },
        {
          type: "link",
          value: "https://www.shopify.com/legal/privacy.",
          href: "https://www.shopify.com/in/legal/privacy",
        },
      ],
      [
        {
          type: "text",
          value:
            "We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.",
        },
        { type: "br" },
        {
          type: "text",
          value:
            "We do not share, sell, or disclose your SMS consent to third parties. Your information is used solely for communication purposes directly related to our services.",
        },
      ],
    ],
  },
  {
    title: "3. Behavioural Advertising",
    paragraphs: [
      [
        {
          type: "text",
          value:
            "As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For example:",
        },
      ],
      [
        {
          type: "text",
          value:
            "- We use Google Analytics to help us understand how our customers use the Site. You can read more about how Google uses your Personal Information here: ",
        },
        {
          type: "link",
          href: "https://www.google.com/intl/en/policies/privacy/",
          value: "https://www.google.com/intl/en/policies/privacy/",
        },
        {
          type: "text", 
          value: ". You can also opt-out of Google Analytics here: ",
        },
        {
          type: "link",
          href: "https://tools.google.com/dlpage/gaoptout",
          value: "https://tools.google.com/dlpage/gaoptout",
        },
        {
          type: "text",
          value: ".",
        },
      ],
      [
        {
          type: "text",
          value:
            "For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at ",
        },
        {
          type: "link",
          href: "https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work",
          value:
            "https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work",
        },
        {
          type: "text",
          value: ".",
        },
      ],
      [
        {
          type: "text",
          value: "You can opt out of targeted advertising by:",
        },
      ],
      [
        {
          type: "text",
          value: "FACEBOOK - ",
        },
        {
          type: "link",
          href: "https://www.facebook.com/settings/?tab=ads",
          value: "https://www.facebook.com/settings/?tab=ads",
        },
      ],
      [
        {
          type: "text",
          value: "GOOGLE - ",
        },
        {
          type: "link",
          href: "https://www.google.com/settings/ads/anonymous",
          value: "https://www.google.com/settings/ads/anonymous",
        },
      ],
      [
        {
          type: "text",
          value: "BING - ",
        },
        {
          type: "link",
          href: "https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads",
          value:
            "https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads",
        },
      ],
      [
        {
          type: "text",
          value:
            "Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: ",
        },
        {
          type: "link",
          href: "https://optout.aboutads.info/",
          value: "https://optout.aboutads.info/",
        },
      ],
    ],
  },
  {
    title: "4. Using Personal Information",
    paragraphs: [
      [
        {
          type: "text",
          value:
            "We use your personal Information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers. By providing your mobile number, you consent to receive SMS messages related to your inquiries, appointment reminders, booking appointments, registration requests, program updates, and other relevant services. Message and data rates may apply. You may opt out at any time by replying “STOP.” We value your privacy. Your mobile number and SMS consent will never be shared, sold, or disclosed to third parties and will be used solely for communications directly related to your interaction with us.",
        },
      ],
    ],
  },
  {
    title: "5. Data Retention",
    paragraphs: [
      [
        {
          type: "text",
          value:
            "When you place an order through the Site, we will retain your Personal Information for our records unless and until you ask us to erase this information. For more information on your right of erasure, please see the ‘Your rights’ section below.",
        },
      ],
    ],
  },
  {
    title: "6. Your rights",
    paragraphs: [
      [
        {
          type: "bold",
          value: "General Data Protection Regulation (GDPR)",
        },
        { type: "br" },
        {
          type: "text",
          value:
            "If you are a resident of the EEA, you have the right to access the Personal Information we hold about you, to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information below.",
        },
      ],
    ],
  },
  {
    title: "7. Changes",
    paragraphs: [
      [
        {
          type: "text",
          value:
            "We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.",
        },
      ],
    ],
  },
  {
    title: "8. Contact",
    paragraphs: [
      [
        {
          type: "text",
          value:
            "After reviewing this policy, if you have additional questions, want more information about our privacy practices, or would like to make a complaint, please contact us by e-mail at ",
        },
        {
            type: "link",
            href: "mailto:info@vcareprojectmanagement.com",
            value: "info@vcareprojectmanagement.com",
        },
           {
          type: "text",
          value:
            ".",
        },
      ],
    ],
  },
];

export default function PrivacyPolicy() {
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
              className="text-primary_blue underline hover:text-primary_heading"
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
      <FooterPageHeroSection title="Privacy Policy" description="" />

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
