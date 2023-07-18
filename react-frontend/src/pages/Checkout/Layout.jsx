import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import './style.scss'
const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default Layout;
