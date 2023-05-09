import React from "react";
import { useState } from "react";
import PasswordToggle from "./PasswordToggle";
import "./style.scss";
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const [values, setValues] = useState(props);
  const handleToggle = (type) => {
    setValues({ ...values, type: type });
  };
  return (
    <>
      <div className="formInput">
        <label>{values.label}</label>
        <fieldset focused={focused.toString()}>
          <input
            placeholder={values.placeholder}
            name={values.name}
            type={values.type}
            pattern={props.pattern}
            required={values.required}
            onBlur={() => setFocused(true)}
            onFocus={() =>
              values.name === "confirmPassword" && setFocused(true)
            }
            onChange={props.onChange}
          />
          {(values.name === "confirmPassword" ||
            values.name === "password") && (
            <PasswordToggle handleToggle={handleToggle} />
          )}
        </fieldset>
        <span>{values.errorMessage}</span>
      </div>
    </>
  );
};

export default FormInput;
