import React from "react";
import { selectCurrentCart } from "../../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCurrentProductIds, setCurrentProductIds, getCurrentCartId, setCurrentCartId, fetchProductIds } from "../../../features/cart/cartSlice";
import NavBarImage from "../../../assets/image/NavBarImage";
import { selectCurrentUserId } from "../../../features/auth/authSlice";
import "./style.scss";
const Cart = () => {
  let { cartIcon } = NavBarImage;
  const dispatch = useDispatch();
  const userId = useSelector(selectCurrentUserId);
  const productIdsInCart = useSelector(getCurrentProductIds);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductIds(userId));
  }, [dispatch]);

  return (
    <div className="cart" onClick={() => navigate("/cart")}>
      <div className={productIdsInCart.length === 0 ? "icon" : "icon fixed"}>
        {cartIcon}
        {productIdsInCart.length !== 0 && <span> {productIdsInCart.length} </span>}
      </div>
      <p> Cart </p>
    </div>
  );
};

export default Cart;
