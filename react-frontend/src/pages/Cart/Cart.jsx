import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PurchaseNavigation from "../../components/PurchaseNavigation";
import { Link } from "react-router-dom";
import './style.scss'
import ShippingInfo from "../../components/ShippingInfo";
import CartItem from "../../components/CartItem";
import OrderReview from "../../components/OrderReview";
export default function Cart() {
    return(
        <>
            <Navbar/>
            <PurchaseNavigation title="Cart"/>
            <div className="purchase-layout purchase-container">
                <div className="purchase-field">
                    <CartItem/>
                </div>
                <div className="purchase-field">
                    <ShippingInfo/>
                </div>
                <div className="purchase-field">
                    <OrderReview inPage="cart"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}