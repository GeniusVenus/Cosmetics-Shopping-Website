import CheckoutButton from '../PurchaseButton/CheckoutButton';
import { useEffect } from 'react';
import PayButton from '../PurchaseButton/PayButton';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUserId } from '../../features/auth/authSlice';
import { setCurrentProductIds, 
    getCurrentProductIds, 
    setCurrentCartId, 
    getCurrentCartId, 
    fetchProductIds, 
    fetchCart, 
    getCurrentTotalPrice, 
    setCurrentTotalPrice, 
    getCurrentShippingMethod} from '../../features/cart/cartSlice';
import './style.scss'

export default function OrderReview(props) {
    const dispatch = useDispatch();
    const userId = useSelector(selectCurrentUserId);
    const currentTotalPrice = useSelector(getCurrentTotalPrice);
    const currentShippingMethod = useSelector(getCurrentShippingMethod);
    const shippingValue = (
        currentShippingMethod === 1 ? 10:
        currentShippingMethod === 2 ? 50 : 0);
    

    useEffect(() => {
        dispatch(fetchCart(userId));
      }, [dispatch]);

    return (
        <>
            <p className='heading'>Order Review</p>
            {
                props.inPage == "checkout" ? 
                (<div className="purchase-suggest-text checkout-edit-cart">
                    You have 5 items in Cart, 
                    <span className="purchase-suggest-link">
                        <Link to="/cart">Edit My Order</Link>
                    </span>
                </div>) :null
            }
            <div className='price'>
                <div className='price-label'>Subtotal</div>
                <div className='price-value'>{currentTotalPrice+"$"}</div>
            </div>
            {
                props.inPage == "checkout" ?
                <>
                    <div className='price price-bottom'>
                        <div className='price-label'>
                        {
                            "Shipping " +
                            (currentShippingMethod == 1 ? "(Standard)" :
                            currentShippingMethod == 2 ? "(Express)" : "")
                        }
                        </div>
                        <div className='price-value'>
                            {shippingValue+"$"}
                        </div>
                    </div>
                    <div className='totalprice'>
                        <div >
                            <div className='totalprice-label'>Total</div>
                        </div>
                        <div className='totalprice-value'>{(currentTotalPrice + shippingValue) +"$"}</div>
                    </div>
                </>
                : null
            }

            
            {props.inPage == "cart" ? <CheckoutButton/> : <PayButton/>}
        </>
    );
}