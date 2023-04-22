import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
        <li>
          <Link to="/register"> Register</Link>
        </li>
      </nav>
    </>
  );
};

export default NavBar;
