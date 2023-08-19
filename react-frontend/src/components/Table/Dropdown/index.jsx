import React, { useEffect, useRef, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
const Dropdown = (props) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(10);
  const { setInfoPerPage } = props;
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) setActive(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const options = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
  ];
  return (
    <div className="dropdown-with-style" ref={menuRef}>
      <div className="dropdown-btn" onClick={(e) => setActive(!active)}>
        <div className="option">
          {" "}
          {selected && selected !== "None"
            ? selected
            : "Select your option"}{" "}
        </div>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className={active ? "dropdown-content active" : "dropdown-content"}>
        <div className="inner">
          {options.map((option, index) => {
            return (
              option.label !== selected && (
                <div
                  className="dropdown-item"
                  key={index}
                  onClick={(e) => {
                    setSelected(option.label);
                    setInfoPerPage(option.value);
                    setActive(false);
                  }}
                >
                  {" "}
                  {option.label}
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
