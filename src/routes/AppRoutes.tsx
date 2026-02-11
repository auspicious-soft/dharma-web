import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layouts from "@/layouts";
import PMPExamPrepCourse from "@/pages/PMP/PMPExamPrepCourse";
import PMPOnDemandCourse from "@/pages/PMP/PMPOnDemandCourse";
import PMPExamSimulator from "@/pages/PMP/PMPExamSimulator";
import PMPFlashCards from "@/pages/PMP/PMPFlashCards";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} /> 
        <Route path="/pmp/pmp-exam-prep-course" element={<PMPExamPrepCourse />} /> 
        <Route path="/pmp/pmp-on-demand-course" element={<PMPOnDemandCourse />} /> 
        <Route path="/pmp/pmp-exam-simulator" element={<PMPExamSimulator />} /> 
        <Route path="/pmp/pmp-flash-cards" element={<PMPFlashCards />} /> 
      </Route>
    </Routes>
  );
};

export default AppRoutes;
