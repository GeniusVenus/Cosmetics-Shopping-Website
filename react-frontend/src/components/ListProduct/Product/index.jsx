import React from "react";
import "./style.scss";
import NavBarImage from "../../../assets/image/NavBarImage";

import { Link } from "react-router-dom";

const Product = (props) => {
  const { productId, image, name, brand, cost } = props.product;
  const { cartIcon2 } = NavBarImage;
  return (
    <>
      <Link className="product-container" to={"/products/" + productId}>
        <div className="product-image">
          <img src={image} alt={name} />
        </div>
        <div className="product-name"> {name} </div>
        <div className="product-other-info">
          <div className="main-info">
            <div className="product-brand-gender">
              <div className="product-brand">
                {" "}
                <span> Brand: </span>
                {brand}{" "}
              </div>

              <div className="product-gender">
                <span> Gender: </span> Unisex{" "}
              </div>
            </div>
            <div className="product-price"> {cost} </div>
          </div>
          <div className="cart-section">
            <div className="cart-btn">{cartIcon2}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
