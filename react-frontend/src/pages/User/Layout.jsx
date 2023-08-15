import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../../components/Dashboard";
import UserHeader from "../../components/UserHeader";
const UserLayout = () => {
  const [active, setActive] = useState(false);
  const [page, setPage] = useState("Profile");
  const handleDashBoard = () => setActive(!active);
  return (
    <>
      <ToastContainer />
      <div className="user-page-layout">
        <Dashboard active={active} setPage={setPage} />
        <div className={active ? "container active" : "container"}>
          <UserHeader page={page} handleDashBoard={handleDashBoard} />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default UserLayout;
