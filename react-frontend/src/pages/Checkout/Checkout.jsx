import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PurchaseNavigation from "../../components/PurchaseNavigation";
import CartItem from "../../components/CartItem";
import ShippingInfo from "../../components/ShippingInfo";
import OrderReview from "../../components/OrderReview";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectPurchaseState, setPurchaseState } from "../../features/purchase/purchaseSlice";
import PurchaseContact from "../../components/PurchaseContact";
import PurchaseSuccess from "../../components/PurchaseSuccess";
import { useEffect } from "react";

export default function Checkout() {
    const success = useSelector(selectPurchaseState);
    const navigate = useNavigate();
    useEffect(() => {
      if (success == 'done') {
        // navigate("/");
    }
    })
    return (
        <>
            
          <Navbar/>
          <PurchaseNavigation title="Checkout"/>
          {
            // !success ? 
            <div className="purchase-layout purchase-container">
                    <div className="purchase-field">
                        <PurchaseContact/>
                    </div>
                    <div className="purchase-field">
                        <ShippingInfo/>
                    </div>
                    <div className="purchase-field">
                        <OrderReview inPage="checkout"/>
                    </div>
            </div> 
            // : <PurchaseSuccess/>
          }
          <Footer/>
        </>
      );
}