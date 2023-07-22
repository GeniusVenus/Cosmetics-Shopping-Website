import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavBarImage from "../../assets/image/NavBarImage";
import PurchaseNavigation from "../../components/PurchaseNavigation";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectPurchaseState, setPurchaseState } from "../../features/purchase/purchaseSlice";
import './style.scss'
import { useDispatch } from "react-redux";
export default function CheckoutSuccess() {
    const {tickIcon} = NavBarImage;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(setPurchaseState('done'));
    });
    return (
        <>
            <Navbar/>
            <PurchaseNavigation title="Checkout"/>
            <div className='purchase-success-container'>
                <div className='purchase-success-element purchase-success-icon'>
                    {tickIcon}
                </div>
                <div className='purchase-success-element purchase-success-message'>
                    Your order has been confirmed
                </div>
                <div className='purchase-success-element ' 
                    onClick={() => {navigate("/")}}>
                    <btn className="checkout-btn checkout-btn-green purchase-success-btn">
                        Continue Shopping
                    </btn>
                </div>
            </div>
            <Footer/>
        </>
    )
}