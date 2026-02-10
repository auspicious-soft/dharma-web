import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layouts from "@/layouts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} /> 
      </Route>
    </Routes>
  );
};

export default AppRoutes;
