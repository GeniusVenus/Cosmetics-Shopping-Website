import React, { useRef, useEffect } from "react";
import NavBarImage from "../../../assets/image/NavBarImage";
import "./style.scss";
const Search = (props) => {
  let { searchIcon } = NavBarImage;
  const { active, setActive } = props;
  const searchRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!searchRef.current.contains(e.target)) setActive(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setActive]);
  return (
    <>
      <div
        className={active ? "search active" : "search"}
        ref={searchRef}
        onClick={() => (active ? "" : setActive(!active))}
      >
        <div className="icon" onClick={() => setActive(!active)}>
          {searchIcon}
        </div>
        <div className="search-container">
          <input type="search" placeholder="Search here" />
          <div className="search-results">
            <div className="num-results"> There are 3 results as u can see</div>
            <div className="list-results"></div>
          </div>
        </div>
        <p> Search</p>
      </div>
    </>
  );
};

export default Search;
