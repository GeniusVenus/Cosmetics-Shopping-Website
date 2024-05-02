import React from "react";
import "./style.scss";
import PasswordInput from "./PasswordInput";
const ChangePassword = (props) => {
  const { values, onChange } = props;
  const inputs = [
    {
      name: "newpassword",
      type: "password",
      placeholder: "",
      label: "Re-type Your Password",
      pattern: "",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "",
      label: "Password Confirmation",
      pattern: values.newpassword,
    },
  ];
  return (
    <>
      <div className="change-password-card">
        <div className="title"> Change password</div>
        <div className="change-password-inputs">
          {inputs.map((input, index) => {
            return <PasswordInput {...input} key={index} onChange={onChange} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
