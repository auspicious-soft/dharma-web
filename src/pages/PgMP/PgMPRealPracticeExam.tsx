import CertificationPracticeExamPage, {
  pgmpRelatedResources,
} from "@/pages/PracticeExam/CertificationPracticeExamPage";

const PgMPRealPracticeExam = () => (
  <CertificationPracticeExamPage
    courseKey="PgMP"
    examName="PgMP®"
    heroTitle="Program Management Professional (PgMP®) Practice Exam"
    resourceLabel="PgMP"
    relatedResources={pgmpRelatedResources}
  />
);

export default PgMPRealPracticeExam;
