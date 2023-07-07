import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginGreeting from "../../components/LoginGreeting";
import FormCard from "../../components/FormCard";

import "./style.scss";
const ResetPassword = () => {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "New password",
      errorMessage: "",
      label: "Enter your new password",
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Retype new password",
      errorMessage: "Password doesn't match!",
      label: "Re-type your new password",
      pattern: values.password,
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
            type="reset-password"
            text="Let us help you find your account"
          />
        </div>
        <div className="second-container">
          <FormCard
            type="reset-password"
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

export default ResetPassword;
