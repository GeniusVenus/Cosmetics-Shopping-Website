import React from "react";
import { useNavigate } from "react-router-dom";
import NavBarImage from "../../../assets/image/NavBarImage";
import "./style.scss";
import { useSelector } from "react-redux";
import { selectCurrentCart } from "../../../features/cart/cartSlice";
const { cartIcon } = NavBarImage;
const Cart = () => {
  const itemsInCart = useSelector(selectCurrentCart);
  const navigate = useNavigate();

  return (
    <div className="cart" onClick={() => navigate("/cart")}>
      <div className={itemsInCart.length === 0 ? "icon" : "icon fixed"}>
        {cartIcon}
        {itemsInCart.length !== 0 && <span> {itemsInCart.length} </span>}
      </div>
      <p> Cart </p>
    </div>
  );
};

export default Cart;
