import React from "react";
import ProductReview from "./ProductReview";
import { useSelector } from "react-redux";
import { selectCurrentUserId } from "../../features/auth/authSlice";
import "./style.scss";
import ProductDetailImage from "../../assets/image/ProductDetailImage";
import Info from "./Info";
const ProductInfo = (props) => {
  const { messageIcon } = ProductDetailImage;
  const { productId, image, name, cost, category, ...others } = props.product;
  const userId = useSelector(selectCurrentUserId);
  const handleAddToCart = async (id) => {
    //Refactor
    try {
      const getCartUrl = `http://localhost:8080/api/cart/userId/${userId}/1`;
      const getCartResponse = await fetch(getCartUrl);
      const cartData = await getCartResponse.json();

      const updatedProductIds = [...cartData[0].productIds, id];

      const updateCartUrl = 'http://localhost:8080/api/cart';
      const payload = {
        cartId: cartData[0].cartId,
        userId: userId,
        productIds: updatedProductIds,
        isActive: true,
        totalPrice: 0.0
      };

      const updateCartResponse = await fetch(updateCartUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (updateCartResponse.ok) {
        console.log('Product added to cart successfully');
      } else {
        console.error('Failed to add product to cart');
      }
    } catch (error) {
      console.error('Errsor:', error);
    }
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
                onClick={() => handleAddToCart(productId)}
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
