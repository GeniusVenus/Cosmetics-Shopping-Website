import React, { useState, useRef, useEffect } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const DropdownWithSearch = (props) => {
  const [active, setActive] = useState(false);
  const { options, value, tag, name, onChange } = props;
  const [selected, setSelected] = useState(value);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) setActive(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <>
      <div className="dropdown-with-search" ref={menuRef}>
        <div className="dropdown-btn" onClick={(e) => setActive(!active)}>
          <div className="option">{value !== "" ? value : tag}</div>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div
          className={active ? "dropdown-content active" : "dropdown-content"}
        >
          <div className="inner">
            <div className="list-options">
              {options.map((option, index) => {
                return (
                  option.Name !== selected && (
                    <div
                      className="dropdown-item"
                      key={index}
                      onClick={(e) => {
                        setSelected(option.Name);
                        setActive(false);
                        onChange(name, option.Name);
                      }}
                    >
                      {" "}
                      {option.Name}
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownWithSearch;
