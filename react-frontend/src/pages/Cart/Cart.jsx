import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PurchaseNavigation from "../../components/PurchaseNavigation";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './style.scss'
import ShippingInfo from "../../components/ShippingInfo";
import { useSelector, useDispatch } from 'react-redux';
import CartItem from "../../components/CartItem";
import OrderReview from "../../components/OrderReview";
import { selectCurrentUserId } from '../../features/auth/authSlice';
import { setCurrentProductIds, 
    getCurrentProductIds, 
    setCurrentCartId, 
    getCurrentCartId, 
    fetchProductIds, 
    fetchCart, 
    getCurrentTotalPrice, 
    setCurrentTotalPrice,
    fetchTotalPrice } from '../../features/cart/cartSlice';
export default function Cart() {
    const dispatch = useDispatch();
    const userId = useSelector(selectCurrentUserId);
    const productIdsInCart = useSelector(getCurrentProductIds);

    useEffect(() => {
        dispatch(fetchProductIds(userId));
      }, [dispatch]);
    return(
        <>
            <Navbar/>
            <PurchaseNavigation title="Cart"/>
            <div className="purchase-layout purchase-container">
                <div className="purchase-field">
                    <CartItem/>
                </div>
                {
                    productIdsInCart.length ? 
                    <div className="purchase-field">
                        <OrderReview inPage="cart"/>
                    </div> 
                    : null
                }
                
            </div>
            <Footer/>
        </>
    )
}