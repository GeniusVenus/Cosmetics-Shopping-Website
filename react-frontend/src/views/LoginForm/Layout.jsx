import React from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginLayout = () => {
  return (
    <>
      <ToastContainer />
      <div className="LoginForm">
        <div className="group-name">The Eleventh</div>
        <div className="container">
          <div className="first-container">
            <div className="greeting"> Welcome to our website</div>
            <div className="side-image"></div>
          </div>
          <div className="second-container">
            <div className="card">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginLayout;
