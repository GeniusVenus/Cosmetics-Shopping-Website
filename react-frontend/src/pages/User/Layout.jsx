import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../../components/Dashboard";
import UserHeader from "../../components/UserHeader";
const UserLayout = () => {
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(null);
  const handleDashBoard = () => setActive(!active);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("my-profile")) setPage("Profile");
    else if (location.pathname.includes("orders")) setPage("Orders");
    else if (location.pathname.includes("settings")) setPage("Settings");
    else if (location.pathname.includes("my-coupons")) setPage("Coupons");
    else if (location.pathname.includes("users")) setPage("Users");
    else if (location.pathname.includes("favorites")) setPage("Favorites");
    else if (location.pathname.includes("manage")) setPage("Manage");
  }, [location]);
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
