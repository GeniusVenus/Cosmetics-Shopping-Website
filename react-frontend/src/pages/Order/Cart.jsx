import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { getCurrency, getMoney } from "../../utils/MoneyTranslate";
const Cart = () => {
  const itemsInCart = useSelector(selectCurrentCart);
  const navigate = useNavigate();
  // const handleAddItem = () => {

  // }
  // const handleDeleteItem = () => {

  // }
  const getTotalCost = () => {
    var total = 0;
    var currency = "";
    itemsInCart.forEach((item) => {
      if (currency.length === 0) currency = getCurrency(item.cost);
      total += parseFloat(item.cost.substr(1)) * item.quantity;
    });
    return currency + total;
  };
  return (
    <>
      {" "}
      <div className="cart-page">
        <div className="cart-page-header"> Cart </div>
        <div className="cart-page-body">
          {itemsInCart.length === 0 ? (
            <div className="empty-cart-container">
              {" "}
              <img
                src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
                alt="empty"
              />
              <span>Your cart is empty </span>
              <p> Looks like you have not added anything to your cart </p>
              <button onClick={() => navigate("/")}> Continue shopping </button>
            </div>
          ) : (
            <ul className="list-items-cart">
              {itemsInCart.map((item, index) => {
                const { name, brand, volume, image, quantity, cost } = item;
                return (
                  <li className="item-in-cart" key={index}>
                    {" "}
                    <div className="item-image">
                      {" "}
                      <img alt="funny" src={image} />{" "}
                    </div>
                    <div className="item-info">
                      <div className="item-name">{name}</div>
                      <div className="item-brand"> {brand} </div>
                      <div className="item-volume"> {volume} </div>
                    </div>{" "}
                    <div className="item-total-cost">
                      <div className="total-cost">
                        Total :{getCurrency(cost) + quantity * getMoney(cost)}{" "}
                      </div>
                      <div className="single-cost">{cost} </div>
                      <div className="quantity-change">
                        <FontAwesomeIcon icon={faMinus} />
                        <span> {quantity} </span>
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="cart-page-footer">
          <div className="cart-total-price"> Total : {getTotalCost()} </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
