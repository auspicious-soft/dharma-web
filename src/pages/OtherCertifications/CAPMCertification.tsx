import OtherCertificationPage from "./OtherCertificationPage";

const CAPMCertification = () => (
  <OtherCertificationPage
    heroTitle="CAPM® Certification"
    heroDescription="Start Your Project Management Career with Confidence."
    heroDescriptionSecond="Prepare for your CAPM® exam with flexible learning options, comprehensive study materials, and realistic practice exams designed to help you build confidence and succeed on exam day."
    introTitle="Study Your Way. Pass with Confidence."
    introParagraphs={[
      "The Certified Associate in Project Management (CAPM®) certification from PMI is the perfect starting point for aspiring project professionals.",
      "Whether you're new to project management or looking to formalize your knowledge, CAPM® demonstrates your understanding of project management principles, processes, and best practices used by organizations worldwide.",
      "Gain the skills and confidence to contribute effectively to projects and take the first step toward a successful project management career.",
    ]}
    includedItems={[
      "Comprehensive study materials and learning resources",
      "Practice questions and simulation exams",
      "Exam preparation and test-taking strategies",
      "PMI application and exam scheduling support",
      "Certificate of completion",
    ]}
    trainingOptions={[
      {
        title: "Self-Paced Learning",
        subtitle: "Learn Anytime, Anywhere",
        recommended: true,
        features: [
          "Flexible self-paced learning",
          "Expert-curated video lessons",
          "Downloadable study materials",
          "3 simulation test papers",
          "Learner assistance and support",
        ],
      },
      {
        title: "Online Bootcamp",
        subtitle: "Interactive Live Learning",
        description: "Everything in Self-Paced Learning, plus:",
        features: [
          "Live instructor-led online training",
          "Interactive discussions and activities",
          "Flexible weekday and weekend sessions",
          "Exam preparation and Q&A support",
        ],
      },
      {
        title: "In-Person Training",
        subtitle: "Classroom-Based Learning",
        description: "Everything in Online Bootcamp, plus:",
        features: [
          "Face-to-face instructor-led training",
          "Hands-on workshops and exercises",
          "Collaborative classroom learning",
          "Networking opportunities with peers",
        ],
      },
    ]}
    whyTitle="Why CAPM®?"
    whyItems={[
      "Globally recognized entry-level project management certification",
      "Demonstrates commitment to the profession",
      "Builds a strong foundation in project management",
      "Enhances career opportunities and employability",
      "Provides a pathway to PMP® and advanced certifications",
    ]}
    whyClosing="Build Your Project Management Foundation. Launch Your Career with CAPM®."
    audienceIntro="CAPM® training is designed for aspiring project professionals and early-career team members who want a strong project management foundation."
    audienceItems={[
      "Aspiring Project Managers",
      "Project Coordinators",
      "Project Administrators",
      "Team Members",
      "Business Analysts",
      "Recent Graduates and Students",
      "Professionals seeking a career in project management",
    ]}
    advisorQuestion="Still deciding if CAPM is right for you?"
    footerTitle="Launch Your Project Management Career"
    footerDescription="Build a strong foundation in project management and prepare for CAPM® certification with flexible learning options."
    footerPoints={[
      "Understand project management fundamentals",
      "Practice with simulation exams",
      "Prepare for entry-level project roles",
      "Create a pathway toward advanced certifications",
    ]}
  />
);

export default CAPMCertification;
