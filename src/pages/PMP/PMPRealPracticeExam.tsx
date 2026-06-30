import CertificationPracticeExamPage, {
  pmpRelatedResources,
} from "@/pages/PracticeExam/CertificationPracticeExamPage";

const PMPRealPracticeExam = () => (
  <CertificationPracticeExamPage
    courseKey="PMP"
    examName="PMP®"
    heroTitle="Project Management Professional (PMP®) Practice Exam"
    resourceLabel="PMP"
    relatedResources={pmpRelatedResources}
  />
);

export default PMPRealPracticeExam;
