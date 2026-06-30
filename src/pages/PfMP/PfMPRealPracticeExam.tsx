import CertificationPracticeExamPage, {
  pfmpRelatedResources,
} from "@/pages/PracticeExam/CertificationPracticeExamPage";

const PfMPRealPracticeExam = () => (
  <CertificationPracticeExamPage
    courseKey="PfMP"
    examName="PfMP®"
    heroTitle="Portfolio Management Professional (PfMP®) Practice Exam"
    resourceLabel="PfMP"
    relatedResources={pfmpRelatedResources}
  />
);

export default PfMPRealPracticeExam;
