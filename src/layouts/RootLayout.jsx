import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/Home/Shared/NavBar";
import Footer from "../pages/Home/Shared/Footer";

const RootLayout = () => {
  return (
    <div className="sm:w-10/12 mx-auto w-11/12">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
