import React from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
const LoginLayout = () => {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <div className="login-form">
        <div className="login-container">
          <div className="login-layout">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default LoginLayout;
