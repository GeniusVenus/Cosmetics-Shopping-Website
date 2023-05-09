import React from "react";
import { useState } from "react";
import FormInput from "../../components/FormInput";
import { useNavigate } from "react-router-dom";
import LoginFormHeader from "../../components/LoginFormHeader";
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
      <form onSubmit={handleSubmit}>
        <LoginFormHeader type="forgot-password" />
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="sendEmail">
          We will send you an email with the instruction to reset your password
        </div>
        <button> Send Email </button>
      </form>
    </>
  );
};

export default Login;
