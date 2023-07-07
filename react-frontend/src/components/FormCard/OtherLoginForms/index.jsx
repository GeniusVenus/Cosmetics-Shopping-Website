import React from "react";
import "./style.scss";
import LoginImage from "../../../assets/image/LoginImage";
const OtherLoginForms = (props) => {
  const { googleIcon, facebookIcon, appleIcon } = LoginImage;
  return (
    <>
      <div className="list-sci">
        <div className="first-sci">
          <div className="logo">
            {googleIcon}
            {props.type === "login" && <p> Sign in with Google </p>}
            {props.type === "register" && <p> Sign up with Google </p>}
          </div>
        </div>
        <div className="second-sci">
          <div className="logo">{facebookIcon}</div>
        </div>
        <div className="second-sci">
          <div className="logo">{appleIcon}</div>
        </div>
      </div>
    </>
  );
};

export default OtherLoginForms;
