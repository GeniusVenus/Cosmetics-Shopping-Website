import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Result = (props) => {
  const { productId, image, name, brand, cost, handleClick } = props;
  const navigate = useNavigate();
  return (
    <>
      <div
        className="search-result"
        onClick={() => {
          navigate(`/products/${productId}`);
          handleClick();
        }}
      >
        <div className="result-image">
          <img alt="wow" src={image} />
        </div>
        <div className="result-info">
          <div className="result-name">{name}</div>
          <div className="result-brand">{brand}</div>
          <div className="result-cost">{cost}</div>
        </div>
      </div>
    </>
  );
};

export default Result;
