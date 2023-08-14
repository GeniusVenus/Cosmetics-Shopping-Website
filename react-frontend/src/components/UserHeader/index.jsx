import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
const UserHeader = (props) => {
  const { page, handleDashBoard } = props;
  return (
    <div className="user-page-header">
      <div className="menu-bar" onClick={handleDashBoard}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="page">{page}</div>
    </div>
  );
};

export default UserHeader;
