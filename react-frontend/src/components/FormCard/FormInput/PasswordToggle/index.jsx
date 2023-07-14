import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import "./style.scss";
const PasswordToggle = (props) => {
  const [visible, setVisible] = useState(false);
  const handleOnToggle = () => {
    setVisible(!visible);
    if (!visible) props.handleToggle("text");
    else props.handleToggle("password");
  };
  return (
    <>
      {visible ? (
        <FontAwesomeIcon icon={faEye} onClick={handleOnToggle} />
      ) : (
        <FontAwesomeIcon icon={faEyeSlash} onClick={handleOnToggle} />
      )}
    </>
  );
};
export default PasswordToggle;
