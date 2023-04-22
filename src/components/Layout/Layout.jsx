import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
const Layout = () => {
  return (
    <>
      <div className="App">
        <h1> Hello </h1>
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
