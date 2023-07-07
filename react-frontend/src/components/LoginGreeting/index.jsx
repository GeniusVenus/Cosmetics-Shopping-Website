import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./style.scss";
const LoginGreeting = (props) => {
  return (
    <div className="login-greeting">
      <div className="first">
        <Typewriter words={[props.text]} />
      </div>
      <div className="second">
        {props.type === "login" &&
          "Sign in for a personalized shopping experience."}{" "}
        {props.type === "register" &&
          "Sign up for a personalized shopping experience."}
        {(props.type === "forgot-password" ||
          props.type === "reset-password") &&
          "Enter your email address, and you will be back in no time."}
      </div>
      <div className="third">
        Discover the ultimate destination for all your beauty needs. We're more
        than just an online store; we're a curated collection of top-rated,
        must-have beauty products from around the globe. Our mission is to help
        you look and feel your best, one product at a time.
      </div>
    </div>
  );
};

export default LoginGreeting;
