import React, { useState } from "react";
import LoginGreeting from "../../components/LoginGreeting";
import "./style.scss";
import FormCard from "../../components/FormCard";
const Register = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username or email address",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Enter your username or email address",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Enter your Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password doesn't match!",
      label: "Confirm your Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="first-container">
        <LoginGreeting type="register" text="Hi there!" />
      </div>
      <div className="second-container">
        <FormCard
          type="register"
          inputs={inputs}
          values={values}
          onChange={onChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Register;
