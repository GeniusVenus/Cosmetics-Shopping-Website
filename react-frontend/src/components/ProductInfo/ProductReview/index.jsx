import React from "react";
import ProductDetailImage from "../../../assets/image/ProductDetailImage";
import "./style.scss";

const ProductReview = () => {
  const { sendIcon } = ProductDetailImage;
  return (
    <div className="product-review">
      <span> Leave a complain or review</span>
      <div className="review">
        <textarea placeholder="Enter message"></textarea>
        <div className="send-review-container">
          <div className="send-review">{sendIcon}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
