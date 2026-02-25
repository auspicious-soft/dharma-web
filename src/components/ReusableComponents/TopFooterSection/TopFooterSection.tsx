import { Button } from "@/components/ui/button";
import React from "react";

interface FooterContent {
  title: React.ReactNode;
  description: string;
  points: string[];
  buttonText: string;
  buttonLink?: string; // optional
}

interface TopFooterSectionProps {
  content?: FooterContent;
}

const TopFooterSection: React.FC<TopFooterSectionProps> = ({
  content,
}) => {
  const defaultContent: FooterContent = {
    title: (
      <>
        Unlock Better
        <br />
        Project Management Roles
      </>
    ),
    description:
      "The vCare PMP Exam Prep Course helps you build real-world project management skills while preparing you to confidently clear the PMP® certification exam on your first attempt.",
    points: [
      "PMP-certified professionals earn higher salaries",
      "Stand out in competitive PM roles",
      "Qualify for senior project leadership positions",
      "Prove your project management expertise globally",
    ],
    buttonText: "Start PMP Preparation Today",
    buttonLink: "/pmp-course",
  };

  const sectionContent = content || defaultContent;

  return (
    <section className="bg-light-blue py-10 md:py-14 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.38fr_1fr] gap-5 lg:gap-10 items-center">
          <div>
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              {sectionContent.title}
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1 max-w-[480px] w-full leading-[26px]">
              {sectionContent.description}
            </p>
          </div>

          <div>
            <ul className="space-y-1 text-paragraph text-sm font-normal leading-[26px] ml-1 mb-5">
              {sectionContent.points.map(
                (point: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[8px]">•</span>
                    <span>{point}</span>
                  </li>
                )
              )}
            </ul>

            {sectionContent.buttonLink ? (
              <a href={sectionContent.buttonLink}>
                <Button
                  variant="outline"
                  className="max-w-[280px] w-full"
                >
                  {sectionContent.buttonText}
                </Button>
              </a>
            ) : (
              <Button
                variant="outline"
                className="max-w-[280px] w-full"
              >
                {sectionContent.buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFooterSection;