import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormCard from "../../components/FormCard";
import LoginGreeting from "../../components/LoginGreeting";
import "./style.scss";
const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username or email address",
      errorMessage: "",
      label: "Enter your username or email address",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      {" "}
      <div className="container">
        <div className="first-container">
          <LoginGreeting
            type="forgot-password"
            text="Let us help you find your account"
          />
        </div>
        <div className="second-container">
          <FormCard
            type="forgot-password"
            inputs={inputs}
            values={values}
            onChange={onChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
