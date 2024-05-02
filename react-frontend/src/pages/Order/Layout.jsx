import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import "./style.scss";
import Footer from "../../components/Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="order-page-layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
