import React from "react";
import { useState } from "react";
import FormInput from "../../components/FormInput";
import { useNavigate } from "react-router-dom";
import LoginFormHeader from "../../components/LoginFormHeader";
import { Fragment } from "react";
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
      <form onSubmit={handleSubmit}>
        <LoginFormHeader type="reset-password" />
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button> Reset Password</button>
      </form>
    </>
  );
};

export default ResetPassword;
