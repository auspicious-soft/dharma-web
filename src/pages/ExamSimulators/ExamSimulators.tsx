import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import { PremiumPacks } from "@/components/ReusableComponents/PlanSection/PremiumPacks";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import React from "react";

const ExamSimulators = () => {
  return (
    <>
      <FooterPageHeroSection title="Exam Simulators" description="" />
      <div className="pt-10 md:pt-14 lg:pt-20">
        <PremiumPacks 
          showCourseSelect={true}
          heading="Premium Packs"
          description="Update Money Back Guarantee copy"
        />
      </div>
      <TopFooterSection />
    </>
  );
};

export default ExamSimulators;
