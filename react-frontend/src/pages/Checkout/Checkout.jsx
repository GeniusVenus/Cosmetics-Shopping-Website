import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PurchaseNavigation from "../../components/PurchaseNavigation";
import CartItem from "../../components/CartItem";
import ShippingInfo from "../../components/ShippingInfo";
import OrderReview from "../../components/OrderReview";

import { useSelector, useDispatch } from 'react-redux';
import { selectValue } from "../../features/test/testSlice";
import PurchaseContact from "../../components/PurchaseContact";

export default function Checkout() {
    const success = useSelector((state) => {
        return selectValue(state);
    })
    return (
        <>
          <Navbar/>
          <PurchaseNavigation title="Checkout"/>
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
          <Footer/>
        </>
      );
}