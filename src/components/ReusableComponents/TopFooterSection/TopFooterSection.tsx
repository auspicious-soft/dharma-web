import { Button } from "@/components/ui/button";
import React from "react";

const TopFooterSection = () => {
  return (
    <section className="bg-light-blue py-10 lg:py-20">
      <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.38fr_1fr] gap-5 lg:gap-10 items-center">
          <div>
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Unlock Better
              <br />
              Project Management Roles
            </h2>
            <p className="text-paragraph text-sm font-normal mt-1 max-w-[480px] w-full leading-[26px]">
              The vCare PMP Exam Prep Course helps you build real-world project
              management skills while preparing you to confidently clear the
              PMP® certification exam on your first attempt.
            </p>
          </div>
          <div>
            <ul className="space-y-1  self-stretch justify-start text-paragraph text-sm font-normal leading-[26px] ml-1 mb-5">
              <li className="flex items-start gap-2 self-stretch justify-start">
                <span className="text-[8px]">•</span>{" "}
                <span> PMP-certified professionals earn higher salaries</span>
              </li>
              <li className="flex items-start gap-2 self-stretch justify-start">
                <span className="text-[8px]">•</span>{" "}
                <span> Stand out in competitive PM roles</span>
              </li>
              <li className="flex items-start gap-2 self-stretch justify-start">
                <span className="text-[8px]">•</span>{" "}
                <span>
                  Qualify for senior project leadership positions
                </span>{" "}
              </li>
              <li className="flex items-start gap-2 self-stretch justify-start">
                <span className="text-[8px]">•</span>{" "}
                <span>
                  Prove your project management expertise globally
                </span>{" "}
              </li>
            </ul>
            <Button variant="outline" className="max-w-[280px] w-full">
              Start PMP Preparation Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFooterSection;
