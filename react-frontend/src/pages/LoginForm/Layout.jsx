import React from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "react-toastify/dist/ReactToastify.css";
const LoginLayout = () => {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <div className="login-form">
        <div className="login-layout">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default LoginLayout;
