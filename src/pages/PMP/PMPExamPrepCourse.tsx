import PageTopSection from "@/components/ReusableComponents/NavPageHeroSection/NavHeroSection";
import React from "react";
import InnerPage from "@/assets/inner-page.jpg";
import PageHeroSection from "@/components/ReusableComponents/AuthorizedTrainingPartnerSection/AuthorizedTrainingPartner";
import TrainingImage from "@/assets/training-image.png"; 
import ContentTabs from "@/components/NavPages/ContentTabs";

const PMPExamPrepCourse = () => {
  return (
    <>
      <PageTopSection
        title="Prepare for the PMP® Exam With Real-World Practice"
        description="Our PMP® Exam Prep Course is aligned with the latest PMI® PMP Exam Content Outline (ECO) and designed for professionals preparing for certification success. The course combines structured learning, realistic exam simulations, and in-depth explanations to help you understand concepts, apply best practices, and confidently handle situational PMP-style questions—exactly as they appear on exam day."
        sideImage={InnerPage}
      />
      <PageHeroSection
        title="PMP® Certification Training"
        subtitle="Get Certified for PMP®; world's most trusted Project Management Certification"
        bullets={[
          { text: "Step-by-Step Training Aligned with the Latest Exam Standards" },
          { text: "Expert Instructors with Real-World Project Experience" },
          { text: "100% Online, Flexible Learning" },
          { text: "PMI®-Approved PDUs" },
          { text: "Instant access to course materials" },
        ]}
        descriptionTop="Prepare with Confidence. Get PMP® Certified."
        descriptionBottom="Designed to help you prepare with confidence and pass the PMP® exam The PMP® certification isn't just another credential—it's the global gold standard for project management professionals seeking recognition, credibility, and career growth."
        image={TrainingImage}
      />
      <ContentTabs />
    </>
  );
};

export default PMPExamPrepCourse;