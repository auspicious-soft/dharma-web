import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const Layouts = () => {
  return (
    <>
      <Header />
      <main className="lg:mt-[-94px]">
        <Outlet />
      </main>
    </>
  );
};

export default Layouts;
