import React from "react";
import "./style.scss";

const Info = (props) => {
  const { title, value } = props;
  return (
    <>
      <div className="info-container">
        <div className="info-title"> {title} </div>
        <div className="info-value"> {value} </div>
      </div>
    </>
  );
};

export default Info;
