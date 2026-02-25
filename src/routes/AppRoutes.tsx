import { Routes, Route } from "react-router-dom";
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
import PMIACPFlashCard from "@/pages/PMI-ACP/PMIACPFlashCard";
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
import PMIACPExamPrepCourse from "@/pages/PMI-ACP/PMIACPExamPrepCourse";
import PMIACPOnDemandCourse from "@/pages/PMI-ACP/PMIACPOnDemandCourse";
import PMIACPExamSimulator from "@/pages/PMI-ACP/PMIACPExamSimulator";
import PMIACPRealPracticeExam from "@/pages/PMI-ACP/PMIACPRealPracticeExam";
import PMIACPDomainsandTasks from "@/pages/PMI-ACP/PMIACPDomainsandTasks";
import PMIACPApplicationSupport from "@/pages/PMI-ACP/PMIACPApplicationSupport";

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

         {/* PMP Pages */}
         <Route path="pmp">
            <Route path="pmp-exam-prep-course" element={<PMPExamPrepCourse />} /> 
            <Route path="pmp-on-demand-course" element={<PMPOnDemandCourse />} /> 
            <Route path="pmp-exam-simulator" element={<PMPExamSimulator />} /> 
            <Route path="pmp-flash-cards" element={<PMPFlashCards />} /> 
            <Route path="pmp-real-practice-exam" element={<PMPRealPracticeExam />} /> 
            <Route path="pmp-domains-and-tasks" element={<PMPDomainsandTasks />} /> 
            <Route path="pmp-application-support" element={<PMPApplicationSupport />} /> 
        </Route>

         {/* PgMP Pages */}
         <Route path="pgmp">
           <Route path="pgmp-exam-prep-course" element={<PgMPExamPrepCourse />} /> 
            <Route path="pgmp-on-demand-course" element={<PgMPOnDemandCourse />} /> 
            <Route path="pgmp-exam-simulator" element={<PgMPExamSimulator />} /> 
            <Route path="pgmp-real-practice-exam" element={<PgMPRealPracticeExam />} /> 
            <Route path="pgmp-domains-and-tasks" element={<PgMPDomainsandTasks />} /> 
            <Route path="pgmp-application-support" element={<PgMPApplicationSupport />} />
            <Route path="pgmp-flash-cards" element={<PgMPFlashCard />} /> 
        </Route>

         {/* PfMP Pages */} 
         <Route path="pfmp">
            <Route path="pfmp-exam-prep-course" element={<PfMPExamPrepCourse />} /> 
            <Route path="pfmp-on-demand-course" element={<PfMPOnDemandCourse />} /> 
            <Route path="pfmp-exam-simulator" element={<PfMPExamSimulator />} /> 
            <Route path="pfmp-real-practice-exam" element={<PfMPRealPracticeExam />} /> 
            <Route path="pfmp-domains-and-tasks" element={<PfMPDomainsandTasks />} /> 
            <Route path="pfmp-application-support" element={<PfMPApplicationSupport />} />
            <Route path="pfmp-flash-cards" element={<PfMPFlashCard />} />
        </Route>
      
          {/* PMOCP Pages */}
          <Route path="pmocp">
            <Route path="pmocp-exam-prep-course" element={<PMOCPExamPrepCourse />} /> 
            <Route path="pmocp-on-demand-course" element={<PMOCPOnDemandCourse />} /> 
            <Route path="pmocp-exam-simulator" element={<PMOCPExamSimulator />} /> 
            <Route path="pmocp-real-practice-exam" element={<PMOCPRealPracticeExam />} /> 
            <Route path="pmocp-domains-and-tasks" element={<PMOCPDomainsandTasks />} /> 
            <Route path="pmocp-application-support" element={<PMOCPApplicationSupport />} />
            <Route path="pmocp-flash-cards" element={<PMOCPFlashCard />} />
         </Route>

          {/* PMI-ACP Pages */}
          <Route path="pmi-acp">
            <Route path="pmi-acp-exam-prep-course" element={<PMIACPExamPrepCourse />} /> 
            <Route path="pmi-acp-on-demand-course" element={<PMIACPOnDemandCourse />} /> 
            <Route path="pmi-acp-exam-simulator" element={<PMIACPExamSimulator />} /> 
            <Route path="pmi-acp-real-practice-exam" element={<PMIACPRealPracticeExam />} /> 
            <Route path="pmi-acp-domains-and-tasks" element={<PMIACPDomainsandTasks />} /> 
            <Route path="pmi-acp-application-support" element={<PMIACPApplicationSupport />} />
            <Route path="pmi-acp-flash-cards" element={<PMIACPFlashCard />} />
         </Route>

         {/* Exam Simulators Page */}
        <Route path="/exam-simulators" element={<ExamSimulators />} />  
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
