import React from "react";
import "./style.scss";

const Info = (props) => {
  return (
    <>
      <div className="info-container">
        <div className="info-title"> {props.title} </div>
        <div className="info-value">{props.value} </div>
      </div>
    </>
  );
};

export default Info;
