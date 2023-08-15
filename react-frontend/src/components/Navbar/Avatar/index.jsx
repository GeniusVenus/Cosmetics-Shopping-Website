import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../../../features/auth/authSlice";
import "./style.scss";
const Avatar = () => {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  return (
    <>
      {token ? (
        <div className="avatar" onClick={() => navigate("/my-profile")}>
          <div className="avatar-content">
            <FontAwesomeIcon icon={faUser} />
            <span> {user} </span>
          </div>
        </div>
      ) : (
        <button className="loginBtn" onClick={() => navigate("/login")}>
          {" "}
          Log in/Sign up
        </button>
      )}
    </>
  );
};

export default Avatar;
