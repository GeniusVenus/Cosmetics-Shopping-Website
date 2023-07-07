import React from "react";
import "./style.scss";
import NavBarImage from "../../../assets/image/NavBarImage";
const Product = (props) => {
  const { src, title, brand, gender, price } = props.product;
  const { cartIcon2 } = NavBarImage;
  return (
    <>
      <div className="product-container">
        <div className="product-image">
          <img src={src} alt={title} />
        </div>
        <div className="product-title"> {title} </div>
        <div className="product-other-info">
          <div className="main-info">
            <div className="product-brand-gender">
              <div className="product-brand">
                {" "}
                <span> Brand: </span>
                {brand}{" "}
              </div>

              <div className="product-gender">
                <span> Gender: </span> {gender}{" "}
              </div>
            </div>
            <div className="product-price"> {price} VND </div>
          </div>
          <div className="cart-section">
            <div className="cart-btn">{cartIcon2}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
