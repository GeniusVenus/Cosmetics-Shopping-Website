import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const LoginFormHeader = (props) => {
  return (
    <>
      <div className="login-form-header">
        <div className="first">
          <div className="title">
            Welcome to&nbsp;
            <p> THE ELEVENTH</p>
          </div>
          <div className="link">
            <div className="link-container">
              {props.type === "login" && (
                <>
                  {" "}
                  <div className="question">No Account ?</div>
                  <Link to="/register">Sign up</Link>{" "}
                </>
              )}
              {(props.type === "register" ||
                props.type === "forgot-password" ||
                props.type === "reset-password") && (
                <>
                  <div className="question">Have an Account ?</div>
                  <Link to="/login">Sign in</Link>{" "}
                </>
              )}
            </div>
          </div>
        </div>
        {props.type === "login" && <h1>Sign in</h1>}
        {props.type === "register" && <h1>Sign up</h1>}
        {props.type === "forgot-password" && <h1>Forgot Password?</h1>}
        {props.type === "reset-password" && <h1> Reset Password</h1>}
      </div>
    </>
  );
};

export default LoginFormHeader;
