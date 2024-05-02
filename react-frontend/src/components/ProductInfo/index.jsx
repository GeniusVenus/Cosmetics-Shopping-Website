import React from "react";
import ProductReview from "./ProductReview";
import { useSelector } from "react-redux";
import "./style.scss";
import ProductDetailImage from "../../assets/image/ProductDetailImage";
import Info from "./Info";
import { selectCurrentRoles } from "../../features/auth/authSlice";

const { messageIcon } = ProductDetailImage;

const ProductInfo = (props) => {
  const { productId, image, name, cost, category, ...others } = props.product;
  const roles = useSelector(selectCurrentRoles);
  return (
    <>
      <div className="product-info">
        <div className="product-info-layout">
          <div className="product-info-content">
            <div className="main-info">
              <div className="product-type">{category} </div>
              <div className="product-name">{name}</div>
              <div className="product-price">{cost}</div>
              <div className="interact-btn">
                <div className="contact-btn">Contact us</div>
                <div className="seller-contact-btn">
                  {messageIcon} Chat with seller
                </div>
              </div>
            </div>
            <div className="other-info">
              {Object.entries(others).map(([title, value]) => {
                if (title === "profit" && !roles.includes("ROLE_ADMIN"))
                  return "";
                return (
                  <Info
                    title={title.slice(0, 1).toUpperCase() + title.slice(1)}
                    value={value}
                  />
                );
              })}
            </div>
            <div className="other-interact-btn">
              <div
                className="add-to-cart-btn"
                // onClick={() => handleAddToCart(productId, cost)}
              >
                Add to cart
              </div>
              <div className="add-to-favorite-btn"> Add to favorite</div>
            </div>
          </div>
          <ProductReview />
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
