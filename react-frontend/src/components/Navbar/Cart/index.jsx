import React from "react";
import { selectCurrentCart } from "../../../features/cart/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBarImage from "../../../assets/image/NavBarImage";
import "./style.scss";
const Cart = () => {
  let { cartIcon } = NavBarImage;
  const cart = useSelector(selectCurrentCart);
  const navigate = useNavigate();
  return (
    <div className="cart" onClick={() => navigate("/cart")}>
      <div className={cart.length === 0 ? "icon" : "icon fixed"}>
        {cartIcon}
        {cart.length !== 0 && <span> {cart.length} </span>}
      </div>
      <p> Cart </p>
    </div>
  );
};

export default Cart;
