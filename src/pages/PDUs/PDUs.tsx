import AuthorizedTrainingPartner from "@/components/ReusableComponents/AuthorizedTrainingPartnerSection/AuthorizedTrainingPartner";
import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import React from "react";
import TrainingImage from "@/assets/training-image.png";
import PlanSelector from "@/components/PDUs/PlanSelector";
import CreditsPDUSection from "@/components/PDUs/CreditsPDUSection";
const PDUs = () => {
  return (
    <>
      <FooterPageHeroSection
        title="PDUs"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
            <AuthorizedTrainingPartner
        title="Claim PDUs in just a few clicks with Instant PMI Approval"
        subtitle="Maintain your PMI® certification without stress. Earn PMI-approved PDUs through on-demand, instructor-led courses designed for busy professionals. No exams. No delays. Just simple, compliant PDU earning."
        bullets={[
          {
            text: "PMI Premier Authorized Training Partner (ATP #3998)",
          },
          { text: "Pre-approved by PMI®" },
          { text: "Instant approval via CCRS" },
        ]}
        descriptionTop=""
        descriptionBottom=""
        image={TrainingImage}
      />
      <PlanSelector />
      <CreditsPDUSection />
    </>
  );
};

export default PDUs;
