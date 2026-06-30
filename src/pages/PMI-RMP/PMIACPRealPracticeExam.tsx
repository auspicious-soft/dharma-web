import CertificationPracticeExamPage, {
  pmiRmpRelatedResources,
} from "@/pages/PracticeExam/CertificationPracticeExamPage";

const PMIACPRealPracticeExam = () => (
  <CertificationPracticeExamPage
    courseKey="PMI-RMP"
    examName="RMP"
    heroTitle="RMP Practice Exam"
    resourceLabel="RMP"
    relatedResources={pmiRmpRelatedResources}
  />
);

export default PMIACPRealPracticeExam;
