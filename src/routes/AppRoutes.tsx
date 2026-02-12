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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
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
      </Route>
    </Routes>
  );
};

export default AppRoutes;
