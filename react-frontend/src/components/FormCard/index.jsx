import React from "react";
import { Link } from "react-router-dom";
import LoginFormHeader from "./LoginFormHeader";
import OtherLoginForms from "./OtherLoginForms";
import FormInput from "./FormInput";
import "./style.scss";
const FormCard = (props) => {
  const { type, inputs, values, onChange, handleSubmit } = props;
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <LoginFormHeader type={type} />
        <OtherLoginForms type={type} />
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {type === "login" && (
          <div className="forgot-password">
            <Link to="/forgot-password"> Forgot Password ?</Link>
          </div>
        )}
        {type === "forgot-password" && (
          <div className="send-email">
            We will send you an email with the instruction to reset your
            password.
          </div>
        )}
        <button onClick={handleSubmit}>
          {type === "login" && "Sign in"}
          {type === "register" && "Sign up"}
          {type === "reset-password" && "Reset Password"}
          {type === "forgot-password" && "Send Email"}
        </button>
      </form>
    </div>
  );
};

export default FormCard;
