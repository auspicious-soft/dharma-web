import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layouts from "@/layouts";
import PMPExamPrepCourse from "@/pages/PMP/PMPExamPrepCourse";
import PMPOnDemandCourse from "@/pages/PMP/PMPOnDemandCourse";
import PMPExamSimulator from "@/pages/PMP/PMPExamSimulator";
import PMPFlashCards from "@/pages/PMP/PMPFlashCards";
import PMPRealPracticeExam from "@/pages/PMP/PMPRealPracticeExam";
import PMPDomainsandTasks from "@/pages/PMP/PMPDomainsandTasks";
import PMPApplicationSupport from "@/pages/PMP/PMPApplicationSupport";
import ExamSimulators from "@/pages/ExamSimulators/ExamSimulators";
import PDUs from "@/pages/PDUs/PDUs";
import CorporateTraining from "@/pages/CorporateTraining/CorporateTraining";
import AboutUs from "@/pages/AboutUs/AboutUs";
import ContactUs from "@/pages/ContactUs/ContactUs";
import BookAppointment from "@/pages/BookAppointment/BookAppointment";
import Affiliate from "@/pages/Affiliate/Affiliate";
import Faq from "@/pages/FAQ/Faq";
import MobileApp from "@/pages/MobileApp/MobileApp";
import Login from "@/pages/auth/Login";
import AuthLayout from "@/layouts/AuthLayout";
import CreateAccount from "@/pages/auth/CreateAccount";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import EnterOtp from "@/pages/auth/EnterOtp";
import CreateNewPassword from "@/pages/auth/CreateNewPassword";
import TermsofService from "@/pages/TermsofService/TermsofService";
import PrivacyPolicy from "@/pages/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "@/pages/RefundPolicy/RefundPolicy";
import PgMPFlashCard from "@/pages/PgMP/PgMPPFlashCard";
import PfMPFlashCard from "@/pages/PfMP/PfMPFlashCard";
import PMOCPFlashCard from "@/pages/PMOCP/PMOCPFlashCard";
import PMIACPFlashCard from "@/pages/PMI-RMP/PMIACPFlashCard";
import PfMPApplicationSupport from "@/pages/PfMP/PfMPApplicationSupport";
import PfMPDomainsandTasks from "@/pages/PfMP/PfMPDomainsandTasks";
import PfMPRealPracticeExam from "@/pages/PfMP/PfMPRealPracticeExam";
import PfMPExamSimulator from "@/pages/PfMP/PfMPExamSimulator";
import PfMPOnDemandCourse from "@/pages/PfMP/PfMPOnDemandCourse";
import PfMPExamPrepCourse from "@/pages/PfMP/PfMPExamPrepCourse";
import PgMPExamPrepCourse from "@/pages/PgMP/PgMPExamPrepCourse";
import PgMPOnDemandCourse from "@/pages/PgMP/PgMPOnDemandCourse";
import PgMPExamSimulator from "@/pages/PgMP/PgMPExamSimulator";
import PgMPRealPracticeExam from "@/pages/PgMP/PgMPRealPracticeExam";
import PgMPDomainsandTasks from "@/pages/PgMP/PgMPDomainsandTasks";
import PgMPApplicationSupport from "@/pages/PgMP/PgMPApplicationSupport";
import PMOCPExamPrepCourse from "@/pages/PMOCP/PMOCPExamPrepCourse";
import PMOCPOnDemandCourse from "@/pages/PMOCP/PMOCPOnDemandCourse";
import PMOCPExamSimulator from "@/pages/PMOCP/PMOCPExamSimulator";
import PMOCPRealPracticeExam from "@/pages/PMOCP/PMOCPRealPracticeExam";
import PMOCPDomainsandTasks from "@/pages/PMOCP/PMOCPDomainsandTasks";
import PMOCPApplicationSupport from "@/pages/PMOCP/PMOCPApplicationSupport";
import PMIACPExamPrepCourse from "@/pages/PMI-RMP/PMIACPExamPrepCourse";
import PMIACPOnDemandCourse from "@/pages/PMI-RMP/PMIACPOnDemandCourse";
import PMIACPExamSimulator from "@/pages/PMI-RMP/PMIACPExamSimulator";
import PMIACPRealPracticeExam from "@/pages/PMI-RMP/PMIACPRealPracticeExam";
import PMIACPDomainsandTasks from "@/pages/PMI-RMP/PMIACPDomainsandTasks";
import PMIACPApplicationSupport from "@/pages/PMI-RMP/PMIACPApplicationSupport";
import FlashCards from "@/pages/FlashCards/FlashCards";
import PracticeExams from "@/pages/PracticeExams/PracticeExams";
import DomainsAndTasks from "@/pages/DomainsAndTasks/DomainsAndTasks";
import PMIApplicationSupport from "@/pages/ApplicationSupport/PMIApplicationSupport";
import PartnerWithUs from "@/pages/PartnerWithUs/PartnerWithUs";
import OffersAndBenefits from "@/pages/OffersAndBenefits/OffersAndBenefits";
import Webinars from "@/pages/Webinars/Webinars";
import Podcasts from "@/pages/Podcasts/Podcasts";
import ReferAndEarn from "@/pages/ReferAndEarn/ReferAndEarn";
import Reviews from "@/pages/Reviews/Reviews";
import LeanSixSigmaCertification from "@/pages/LeanSixSigma/LeanSixSigmaCertification";
import PMIACPCertification from "@/pages/OtherCertifications/PMIACPCertification";
import CAPMCertification from "@/pages/OtherCertifications/CAPMCertification";
import AIProjectManagementCertification from "@/pages/OtherCertifications/AIProjectManagementCertification";
import SearchResults from "@/pages/Search/SearchResults";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        {/* Auth Pages */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/enter-otp" element={<EnterOtp />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />
        </Route>

        <Route index element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/pmi" element={<Navigate to="/search?q=pmi" replace />} />
        <Route path="/pmp" element={<Navigate to="/search?q=pmp" replace />} />
        <Route path="/pgmp" element={<Navigate to="/search?q=pgmp" replace />} />
        <Route path="/pfmp" element={<Navigate to="/search?q=pfmp" replace />} />
        <Route path="/pmocp" element={<Navigate to="/search?q=pmocp" replace />} />
        <Route path="/pmi-rmp" element={<Navigate to="/search?q=pmi-rmp" replace />} />

        {/* PMP Pages */}
        <Route path="pmp">
          <Route path="exam-prep" element={<PMPExamPrepCourse />} />
          <Route path="pmp-exam-prep-course" element={<PMPExamPrepCourse />} />
          <Route path="on-demand-course" element={<PMPOnDemandCourse />} />
          <Route path="pmp-on-demand-course" element={<PMPOnDemandCourse />} />
          <Route path="exam-simulator" element={<PMPExamSimulator />} />
          <Route path="pmp-exam-simulator" element={<PMPExamSimulator />} />
          <Route path="flash-cards" element={<PMPFlashCards />} />
          <Route path="pmp-flash-cards" element={<PMPFlashCards />} />
          <Route path="practice-exam" element={<PMPRealPracticeExam />} />
          <Route
            path="pmp-real-practice-exam"
            element={<PMPRealPracticeExam />}
          />
          <Route path="domains-and-tasks" element={<PMPDomainsandTasks />} />
          <Route
            path="pmp-domains-and-tasks"
            element={<PMPDomainsandTasks />}
          />
          <Route path="application-support" element={<PMPApplicationSupport />} />
          <Route
            path="pmp-application-support"
            element={<PMPApplicationSupport />}
          />
        </Route>

        {/* PgMP Pages */}
        <Route path="pgmp">
          <Route path="exam-prep" element={<PgMPExamPrepCourse />} />
          <Route
            path="pgmp-exam-prep-course"
            element={<PgMPExamPrepCourse />}
          />
          <Route path="on-demand-course" element={<PgMPOnDemandCourse />} />
          <Route
            path="pgmp-on-demand-course"
            element={<PgMPOnDemandCourse />}
          />
          <Route path="exam-simulator" element={<PgMPExamSimulator />} />
          <Route path="pgmp-exam-simulator" element={<PgMPExamSimulator />} />
          <Route path="practice-exam" element={<PgMPRealPracticeExam />} />
          <Route
            path="pgmp-real-practice-exam"
            element={<PgMPRealPracticeExam />}
          />
          <Route path="domains-and-tasks" element={<PgMPDomainsandTasks />} />
          <Route
            path="pgmp-domains-and-tasks"
            element={<PgMPDomainsandTasks />}
          />
          <Route path="application-support" element={<PgMPApplicationSupport />} />
          <Route
            path="pgmp-application-support"
            element={<PgMPApplicationSupport />}
          />
          <Route path="flash-cards" element={<PgMPFlashCard />} />
          <Route path="pgmp-flash-cards" element={<PgMPFlashCard />} />
        </Route>

        {/* PfMP Pages */}
        <Route path="pfmp">
          <Route path="exam-prep" element={<PfMPExamPrepCourse />} />
          <Route
            path="pfmp-exam-prep-course"
            element={<PfMPExamPrepCourse />}
          />
          <Route path="on-demand-course" element={<PfMPOnDemandCourse />} />
          <Route
            path="pfmp-on-demand-course"
            element={<PfMPOnDemandCourse />}
          />
          <Route path="exam-simulator" element={<PfMPExamSimulator />} />
          <Route path="pfmp-exam-simulator" element={<PfMPExamSimulator />} />
          <Route path="practice-exam" element={<PfMPRealPracticeExam />} />
          <Route
            path="pfmp-real-practice-exam"
            element={<PfMPRealPracticeExam />}
          />
          <Route path="domains-and-tasks" element={<PfMPDomainsandTasks />} />
          <Route
            path="pfmp-domains-and-tasks"
            element={<PfMPDomainsandTasks />}
          />
          <Route path="application-support" element={<PfMPApplicationSupport />} />
          <Route
            path="pfmp-application-support"
            element={<PfMPApplicationSupport />}
          />
          <Route path="flash-cards" element={<PfMPFlashCard />} />
          <Route path="pfmp-flash-cards" element={<PfMPFlashCard />} />
        </Route>

        {/* PMOCP Pages */}
        <Route path="pmocp">
          <Route path="exam-prep" element={<PMOCPExamPrepCourse />} />
          <Route
            path="pmocp-exam-prep-course"
            element={<PMOCPExamPrepCourse />}
          />
          <Route path="on-demand-course" element={<PMOCPOnDemandCourse />} />
          <Route
            path="pmocp-on-demand-course"
            element={<PMOCPOnDemandCourse />}
          />
          <Route path="exam-simulator" element={<PMOCPExamSimulator />} />
          <Route path="pmocp-exam-simulator" element={<PMOCPExamSimulator />} />
          <Route path="practice-exam" element={<PMOCPRealPracticeExam />} />
          <Route
            path="pmocp-real-practice-exam"
            element={<PMOCPRealPracticeExam />}
          />
          <Route path="domains-and-tasks" element={<PMOCPDomainsandTasks />} />
          <Route
            path="pmocp-domains-and-tasks"
            element={<PMOCPDomainsandTasks />}
          />
          <Route path="application-support" element={<PMOCPApplicationSupport />} />
          <Route
            path="pmocp-application-support"
            element={<PMOCPApplicationSupport />}
          />
          <Route path="flash-cards" element={<PMOCPFlashCard />} />
          <Route path="pmocp-flash-cards" element={<PMOCPFlashCard />} />
        </Route>

        {/* PMI-RMP Pages */}
        <Route path="pmi-rmp">
          <Route path="exam-prep" element={<PMIACPExamPrepCourse />} />
          <Route
            path="PMI-RMP-exam-prep-course"
            element={<PMIACPExamPrepCourse />}
          />
          <Route path="on-demand-course" element={<PMIACPOnDemandCourse />} />
          <Route
            path="PMI-RMP-on-demand-course"
            element={<PMIACPOnDemandCourse />}
          />
          <Route path="exam-simulator" element={<PMIACPExamSimulator />} />
          <Route
            path="PMI-RMP-exam-simulator"
            element={<PMIACPExamSimulator />}
          />
          <Route path="practice-exam" element={<PMIACPRealPracticeExam />} />
          <Route
            path="PMI-RMP-real-practice-exam"
            element={<PMIACPRealPracticeExam />}
          />
          <Route path="domains-and-tasks" element={<PMIACPDomainsandTasks />} />
          <Route
            path="PMI-RMP-domains-and-tasks"
            element={<PMIACPDomainsandTasks />}
          />
          <Route path="application-support" element={<PMIACPApplicationSupport />} />
          <Route
            path="PMI-RMP-application-support"
            element={<PMIACPApplicationSupport />}
          />
          <Route path="flash-cards" element={<PMIACPFlashCard />} />
          <Route path="PMI-RMP-flash-cards" element={<PMIACPFlashCard />} />
        </Route>

        {/* Exam Simulators Page */}
        <Route path="/exam-simulators" element={<ExamSimulators />} />
        {/* PMI Application Support Page */}
        <Route path="/application-support" element={<PMIApplicationSupport />} />
        {/* Practice Exams Page */}
        <Route path="/real-practice-exam" element={<PracticeExams />} />
        {/* Domains and Tasks Page */}
        <Route path="/domains-and-tasks" element={<DomainsAndTasks />} />
        {/* Flashcards Page */}
        <Route path="/flash-cards" element={<FlashCards />} />
        <Route path="/flashcards" element={<FlashCards />} />
        {/*PDUs Page */}
        <Route path="/pdus" element={<PDUs />} />
        {/*Corporate Training Page */}
        <Route path="/corporate-training" element={<CorporateTraining />} />
        {/*About Us */}
        <Route path="/about-us" element={<AboutUs />} />
        {/*Contact Us */}
        <Route path="/contact-us" element={<ContactUs />} />
        {/*Book Appointment */}
        <Route path="/book-an-appointment" element={<BookAppointment />} />
        {/*Book Affiliate */}
        <Route path="/affiliate" element={<Affiliate />} />
        {/*Partner With Us */}
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        {/*Offers and Benefits */}
        <Route path="/offers-and-benefits" element={<OffersAndBenefits />} />
        {/*Webinars */}
        <Route path="/webinars" element={<Webinars />} />
        {/*Podcasts */}
        <Route path="/podcasts" element={<Podcasts />} />
        {/*Refer and Earn */}
        <Route path="/refer-and-earn" element={<ReferAndEarn />} />
        {/*Reviews */}
        <Route path="/reviews" element={<Reviews />} />
        {/*Lean Six Sigma Certification */}
        <Route
          path="/lean-six-sigma-certification"
          element={<LeanSixSigmaCertification />}
        />
        {/*PMI-ACP Certification */}
        <Route path="/pmi-acp-certification" element={<PMIACPCertification />} />
        {/*CAPM Certification */}
        <Route path="/capm-certification" element={<CAPMCertification />} />
        {/*AI Project Management Certification */}
        <Route
          path="/ai-project-management-certification"
          element={<AIProjectManagementCertification />}
        />
        {/*FAQ */}
        <Route path="/faq" element={<Faq />} />
        {/*Mobile App */}
        <Route path="/mobile-app" element={<MobileApp />} />
        {/*Terms of Service */}
        <Route path="/terms-of-service" element={<TermsofService />} />
        {/*Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/*Privacy Policy */}
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
