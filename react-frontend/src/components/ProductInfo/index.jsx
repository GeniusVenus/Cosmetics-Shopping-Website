import React from "react";
import ProductReview from "./ProductReview";
import "./style.scss";
import ProductDetailImage from "../../assets/image/ProductDetailImage";
import Info from "./Info";
const ProductInfo = (props) => {
  const { messageIcon } = ProductDetailImage;
  const { productId, image, name, cost, category, ...others } = props.product;
  const handleAddToCart = (id) => {
    console.log(id);
  };
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
              {Object.entries(others).map(([title, value]) => (
                <Info
                  title={title.slice(0, 1).toUpperCase() + title.slice(1)}
                  value={value}
                />
              ))}
            </div>
            <div className="other-interact-btn">
              <div
                className="add-to-cart-btn"
                onClick={handleAddToCart(productId)}
              >
                {" "}
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
