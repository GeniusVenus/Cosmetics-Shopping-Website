import React, { useState } from "react";
import "./style.scss";
import { NavLink, useNavigate } from "react-router-dom";
import NavBarImage from "../../assets/image/NavBarImage";
import Search from "./Search";
import Cart from "./Cart";
import Avatar from "./Avatar";
const Navbar = () => {
  let { logo } = NavBarImage;
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  // const [fixed] = useState(false);
  // const showStickyNav = () => {
  //   if (window.scrollY >= 130) setFixed(true);
  //   else setFixed(false);
  // };
  // useEffect(() => {
  //   showStickyNav();
  // }, []);
  // window.addEventListener("scroll", showStickyNav);
  return (
    <>
      <div className={active ? "nav-bar search-active" : "nav-bar"}>
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
          <Search active={active} setActive={setActive} />
          <Cart />
          <Avatar />
        </div>
      </div>
    </>
  );
};

export default Navbar;
