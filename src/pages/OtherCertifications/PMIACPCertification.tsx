import OtherCertificationPage from "./OtherCertificationPage";

const PMIACPCertification = () => (
  <OtherCertificationPage
    heroTitle="PMI-ACP® Certification"
    heroDescription="Master Agile. Deliver Value Faster."
    heroDescriptionSecond="Study your way and get exam ready. From on-demand course to an online practice exam, explore all the ways to get ready for the big day."
    introTitle="Study Your Way and Get Exam Ready"
    introParagraphs={[
      "The PMI Agile Certified Practitioner (PMI-ACP®) certification validates your knowledge of Agile principles, practices, and techniques across Scrum, Kanban, Lean, XP, and hybrid approaches.",
      "Designed for professionals working in Agile environments, this certification helps you lead Agile teams, improve collaboration, and deliver successful outcomes in today's fast-changing business landscape.",
    ]}
    includedItems={[
      "PMI-ACP® on demand course",
      "Aligned to the latest PMI Exam Content Outline",
      "Practice questions and simulation exams",
      "Exam strategy and preparation guidance",
      "PMI application support",
      "Certificate of completion",
    ]}
    showPmiAtp
    trainingOptions={[
      {
        title: "Self-Paced Learning",
        subtitle: "Learn Anytime, Anywhere",
        recommended: true,
        features: [
          "Flexible self-paced learning",
          "Expert-curated video lessons",
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
          "Flexible weekday and weekend sessions",
          "Interactive exercises and case studies",
          "Q&A and exam preparation support",
        ],
      },
      {
        title: "In-Person Training",
        subtitle: "Classroom-Based Learning",
        description: "Everything in Online Bootcamp, plus:",
        features: [
          "Face-to-face instructor-led training",
          "Hands-on workshops and activities",
          "Interactive group discussions",
          "Networking with fellow professionals",
        ],
      },
    ]}
    whyTitle="Why PMI-ACP®?"
    whyItems={[
      "Globally recognized Agile certification from PMI",
      "Covers multiple Agile approaches and frameworks",
      "Demonstrates Agile leadership and delivery skills",
      "Enhances career opportunities and earning potential",
      "Supports Agile transformation and continuous improvement",
    ]}
    whyClosing="Lead Agile Teams. Deliver Value Faster. Advance Your Career."
    audienceIntro="PMI-ACP® training is designed for professionals working in Agile or hybrid environments who want to strengthen Agile delivery capability."
    audienceItems={[
      "Product Owner",
      "Scrum Master",
      "Agile Team Lead",
      "Developer",
      "Project Manager",
      "Agile Coach",
      "Product Manager",
      "Professionals working in Agile or Hybrid environments",
    ]}
    advisorQuestion="Still deciding if the PMI-ACP is right for you?"
    footerTitle="Master Agile Delivery with PMI-ACP®"
    footerDescription="Build Agile leadership capability, improve collaboration, and prepare for the PMI-ACP® exam with flexible learning options."
    footerPoints={[
      "Learn Agile principles and frameworks",
      "Practice exam-style questions",
      "Strengthen Agile team leadership",
      "Prepare with expert-guided resources",
    ]}
  />
);

export default PMIACPCertification;
