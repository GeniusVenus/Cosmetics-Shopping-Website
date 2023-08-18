import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
const PasswordInput = (props) => {
  const [values, setValues] = useState(props);
  const togglePassword = () => {
    if (values.type === "text") setValues({ ...values, type: "password" });
    else setValues({ ...values, type: "text" });
  };
  return (
    <>
      <div className="password-input">
        <label>{values.label}</label>
        <fieldset className="input-container">
          <input
            type={values.type}
            name={values.name}
            placeholder={values.placeholder}
          />
          <div className="toggle" onClick={togglePassword}>
            {values.type === "text" ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default PasswordInput;
