import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/Home/Shared/NavBar";
import Footer from "../pages/Home/Shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
