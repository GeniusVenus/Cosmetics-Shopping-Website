import '../style.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUserId } from '../../../features/auth/authSlice';
import { selectPurchaseState, setPurchaseState } from '../../../features/purchase/purchaseSlice';
import { setCurrentProductIds, 
  getCurrentProductIds, 
  setCurrentCartId, 
  getCurrentCartId, 
  fetchProductIds, 
  fetchCart, 
  getCurrentTotalPrice, 
  setCurrentTotalPrice,
  fetchTotalPrice, } from '../../../features/cart/cartSlice';
import { updateOrCreateCart } from '../../../api/apiFunctions';
import { getActiveCartByUserId } from '../../../api/apiFunctions';

export default function PayButton() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentProductIdList = useSelector(getCurrentProductIds);
    const currentTotalPrice = useSelector(getCurrentTotalPrice);
    const userId = useSelector(selectCurrentUserId);
    const [cartId, setCartId] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const cart = await getActiveCartByUserId(userId);
          setCartId(cart.cartId);
        }
        fetchData();
        dispatch(fetchProductIds());
    }, [dispatch]);

    const validateInput = () => {
      const textValid = document.getElementById('address').value.trim() != '';
      const radioValid = document.getElementById('shipping-express').checked || document.getElementById('shipping-standard').checked;
      return textValid && radioValid;
    }

    const pay = () => {
        const inputValid = validateInput();
        if (inputValid) {
            checkoutAndCreateNewCart();
        }
        dispatch(setPurchaseState('success'));
    }

    const getShippingMethod = () => {
        const standardInput = document.getElementById("shipping-standard");
        const expressInput = document.getElementById("shipping-express");
        
        if (standardInput.checked) {
            return 1;
        } else if(expressInput.checked) {
            return 2;
        } else {
            return 0;
        }

    }

    const getAddress = () => {
        const addressInput = document.getElementById("address");
        const addressValue = addressInput.value;
        return addressValue;
    }

    const checkoutAndCreateNewCart = async () => {
      try {
        const shippingMethod = getShippingMethod();
        const address = getAddress();
  
        const checkoutPayload = {
          userId: userId,
          cartId: cartId,
          productIds: currentProductIdList,
          isActive: false,
          isOrder: true,
          totalPrice: currentTotalPrice,
          shippingMethod: shippingMethod,
          address: address,
          orderStatus: "New",
          paymentMethod: "COD",
          date: new Date().toLocaleString()
        };
  
        const checkoutCartData = await updateOrCreateCart(checkoutPayload);
  
        if (checkoutCartData) {
          console.log('Cart updated successfully');
          const createNewCartPayload = {
            userId: userId,
            productIds: [],
            isActive: true,
            isOrder: false,
            totalPrice: 0,
          };
  
          const createNewCartResponse = await updateOrCreateCart(createNewCartPayload);
  
          if (createNewCartResponse) {
            console.log('New cart created successfully');
            navigate('/checkout/success');
          } else {
            console.error('Failed to create a new cart');
          }
        } else {
          console.error('Payment failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return (
        <button onClick={pay} className='checkout-btn checkout-btn-green'>
                Pay
        </button>
    );
}