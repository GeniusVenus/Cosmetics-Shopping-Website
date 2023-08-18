import React from "react";
import "./style.scss";
import PasswordInput from "./PasswordInput";
const ChangePassword = () => {
  const inputs = [
    {
      name: "password",
      type: "password",
      placeholder: "",
      label: "Re-type Your Password",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "",
      label: "Password Confirmation",
    },
  ];
  return (
    <>
      <div className="change-password-card">
        <div className="title"> Change password</div>
        <div className="change-password-inputs">
          {inputs.map((input, index) => {
            return <PasswordInput {...input} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
