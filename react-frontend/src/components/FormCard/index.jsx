import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import OtherLoginForms from "../../components/OtherLoginForms";
import LoginFormHeader from "../../components/LoginFormHeader";
const FormCard = (props) => {
  const [inputs, values, onChange, handleSubmit] = props;
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <LoginFormHeader type="login" />
        <OtherLoginForms type="login" />
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="forgot-password">
          <Link to="/forgot-password"> Forgot Password ?</Link>
        </div>
        <button onClick={handleSubmit}> Sign in</button>
      </form>
    </div>
  );
};

export default FormCard;
