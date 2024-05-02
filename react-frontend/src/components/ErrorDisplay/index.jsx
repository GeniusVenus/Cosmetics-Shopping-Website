import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const ErrorDisplay = ({ refetch }) => {
  return (
    <>
      <div className="errorModule">
        <div className="errorIcon">
          <FontAwesomeIcon icon={faLinkSlash} />
        </div>
        <div className="errorMsg">
          Oops! Something went wrong. Try again :{"("}
        </div>
        <button className="try-again-btn" onClick={refetch}>
          {" "}
          Try again !
        </button>
      </div>
    </>
  );
};

export default ErrorDisplay;
