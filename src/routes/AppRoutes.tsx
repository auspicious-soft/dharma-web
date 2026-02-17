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
        <Route path="/pmp/pmp-exam-prep-course" element={<PMPExamPrepCourse />} /> 
        <Route path="/pmp/pmp-on-demand-course" element={<PMPOnDemandCourse />} /> 
        <Route path="/pmp/pmp-exam-simulator" element={<PMPExamSimulator />} /> 
        <Route path="/pmp/pmp-flash-cards" element={<PMPFlashCards />} /> 
        <Route path="/pmp/pmp-real-practice-exam" element={<PMPRealPracticeExam />} /> 
        <Route path="/pmp/pmp-domains-and-tasks" element={<PMPDomainsandTasks />} /> 
        <Route path="/pmp/pmp-application-support" element={<PMPApplicationSupport />} /> 
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
      </Route>
    </Routes>
  );
};

export default AppRoutes;
