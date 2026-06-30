import CertificationPracticeExamPage, {
  pmocpRelatedResources,
} from "@/pages/PracticeExam/CertificationPracticeExamPage";

const PMOCPRealPracticeExam = () => (
  <CertificationPracticeExamPage
    courseKey="PMOCP"
    examName="PMOCP"
    heroTitle="PMOCP Practice Exam"
    resourceLabel="PMOCP"
    relatedResources={pmocpRelatedResources}
  />
);

export default PMOCPRealPracticeExam;
