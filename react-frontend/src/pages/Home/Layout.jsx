import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SignUpBox from "../../components/SignUpBox";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SignUpBox />
      <Footer />
    </>
  );
};
export default Layout;
