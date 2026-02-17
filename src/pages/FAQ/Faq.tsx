import FaqSection from "@/components/ReusableComponents/FAQSection/FaqSection";
import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import React from "react";

const Faq = () => {
  return (
    <>
      <FooterPageHeroSection 
        title="Frequently Asked Questions"
        description=""
      />
      <FaqSection hideButton />
    </>
  );
};

export default Faq;
