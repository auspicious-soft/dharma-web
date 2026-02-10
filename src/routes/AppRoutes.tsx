import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layouts from "@/layouts";
import PMPExamPrepCourse from "@/pages/PMP/PMPExamPrepCourse";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} /> 
        <Route path="/pmp/pmp-exam-prep-course" element={<PMPExamPrepCourse />} /> 
      </Route>
    </Routes>
  );
};

export default AppRoutes;
