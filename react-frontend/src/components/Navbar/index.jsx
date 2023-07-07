import React, { useState, useEffect } from "react";
import "./style.scss";
import { NavLink, useNavigate } from "react-router-dom";
import NavBarImage from "../../assets/image/NavBarImage";
import { motion } from "framer-motion";
const Navbar = () => {
  let { logo, searchIcon, cartIcon } = NavBarImage;
  const [fixed, setFixed] = useState(false);
  const navigate = useNavigate();
  const showStickyNav = () => {
    if (window.scrollY >= 130) setFixed(true);
    else setFixed(false);
  };
  useEffect(() => {
    showStickyNav();
  }, []);
  window.addEventListener("scroll", showStickyNav);
  return (
    <>
      <motion.div className={fixed ? "nav-bar fixed" : "nav-bar"}>
        <div className="logo" onClick={(e) => navigate("/")}>
          {logo}
          <p> The Eleventh</p>
        </div>
        <div className="menu-first">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products"> Products </NavLink>
          <NavLink to="/contact"> Contact </NavLink>
        </div>
        <div className="menu-second">
          <div className="item">
            <div className="icon">{searchIcon}</div>
            <p> Search</p>
          </div>
          <div className="item">
            <div className="icon">{cartIcon}</div>
            <p> Cart </p>
          </div>
          <button className="loginBtn" onClick={() => navigate("/login")}>
            {" "}
            Log in/Sign up
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
