import React from "react";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { selectCurrentCart } from "../../features/cart/cartSlice";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
const Checkout = () => {
  const cart = useSelector(selectCurrentCart);
  if (cart.length === 0) return <Navigate to="/cart" />;
  return (
    <>
      {" "}
      <div className="check-out-page">
        <header>
          <div className="back-btn">
            <FontAwesomeIcon icon={faChevronLeft} />
            <p> Back</p>
          </div>
          <h1> Checkout </h1>
        </header>
        <body>
          <p> Fill in the form below to complete your purchase</p>
        </body>
      </div>
    </>
  );
};

export default Checkout;
