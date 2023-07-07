import { useState } from "react";
import React from "react";
import FormInput from "../../components/FormInput";
// import { Link } from "react-router-dom";
import OtherLoginForms from "../../components/OtherLoginForms";
import LoginFormHeader from "../../components/LoginFormHeader";
import LoginGreeting from "../../components/LoginGreeting";
import "./style.scss";
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
        <LoginGreeting type="login" text="Welcome back!" />
      </div>
      <div className="second-container">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <LoginFormHeader type="register" />
            <OtherLoginForms type="register" />
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button> Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
