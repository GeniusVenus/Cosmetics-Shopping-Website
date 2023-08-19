import React from "react";
import ProductReview from "./ProductReview";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUserId } from "../../features/auth/authSlice";
import "./style.scss";
import ProductDetailImage from "../../assets/image/ProductDetailImage";
import Info from "./Info";
import { getActiveCartByUserId } from "../../api/apiFunctions";
import { updateOrCreateCart } from "../../api/apiFunctions";
import { toast } from "react-toastify";
import {
  fetchProductIds,
  getCurrentTotalPrice,
  fetchTotalPrice,
  setCurrentCartEntity,
} from "../../features/cart/cartSlice";
import { useEffect, useState } from "react";

import { selectCurrentRoles } from "../../features/auth/authSlice";

const ProductInfo = (props) => {
  const dispatch = useDispatch();
  const { messageIcon } = ProductDetailImage;
  const { productId, image, name, cost, category, ...others } = props.product;
  const [cartId, setCartId] = useState(null);
  const userId = useSelector(selectCurrentUserId);
  const currentTotalPrice = useSelector(getCurrentTotalPrice);

  useEffect(() => {
    dispatch(fetchProductIds(userId));
    dispatch(fetchTotalPrice(userId));
  }, [dispatch]);

  useEffect(() => {
    const fetchCartId = async () => {
      const cart = await getActiveCartByUserId(userId);
      setCartId(cart.cartId);
    };

    fetchCartId();
  }, [userId]);

  const handleAddToCart = async (id, cost) => {
    const numericCost = parseFloat(cost.replace(/[^0-9.-]+/g, ""));

    try {
      if (cartId !== null) {
        const cartData = await getActiveCartByUserId(userId);

        const updatedProductIds = [...cartData.productIds, id];

        const createOrUpdateCartPayload = {
          cartId: cartId,
          userId: userId,
          productIds: updatedProductIds,
          isActive: true,
          totalPrice: currentTotalPrice + numericCost,
        };

        const updatedCartData = await updateOrCreateCart(
          createOrUpdateCartPayload
        );

        if (updatedCartData) {
          dispatch(setCurrentCartEntity(updatedCartData));
          toast.success("You have added product to cart");
        } else {
          toast.error("Error when add product to cart");
        }
      } else {
        toast.error("Error when add product to cart");
      }
    } catch (error) {
      toast.error("Error when add product to cart");
    }
  };
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
                if (title === "profit" && !roles.includes("ROLE_ADMIN")) return;
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
                onClick={() => handleAddToCart(productId, cost)}
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
