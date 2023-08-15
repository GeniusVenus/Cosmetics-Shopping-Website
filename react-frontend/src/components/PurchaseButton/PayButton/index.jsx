import '../style.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUserId } from '../../../features/auth/authSlice';
import { selectPurchaseState, setPurchaseState } from '../../../features/purchase/purchaseSlice';
import { getProductsInCart, fetchProductIdList } from '../../../features/product/productSlice';

export default function PayButton() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentProductIdList = useSelector(getProductsInCart);
    const userId = useSelector(selectCurrentUserId);

    useEffect(() => {
        dispatch(fetchProductIdList());
        // console.log(productIdList);
        // dispatch(setNewList([1,2,3,4]));
    }, [dispatch]);

    const pay = () => {
        const inputValid = validateInput();
        if (inputValid) {
            updateCart();
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

    const validateInput = () => {
        const textValid = document.getElementById('address').value.trim() != '';
        const radioValid = document.getElementById('shipping-express').checked || document.getElementById('shipping-standard').checked;
        return textValid && radioValid;
    }
  
    const updateCart = async () => {
        try {
          // Create a new cart for the customer
          const createCartUrl = 'http://localhost:8080/api/cart';
          const createCartPayload = {
            userId: userId,
            productIds: [],
            isActive: true,
            isOrder: false,
            totalPrice: 0.0,
          };
      
          const createCartResponse = await fetch(createCartUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(createCartPayload),
          });
      
          if (!createCartResponse.ok) {
            console.error('Failed to create a new cart');
            return;
          }
      
          // Get the created cart's information
          const createdCartData = await createCartResponse.json();
      
          // Update the existing cart with the necessary information
          const getCartUrl = `http://localhost:8080/api/cart/userId/${userId}/1`;
          const getCartResponse = await fetch(getCartUrl);
          const cartData = await getCartResponse.json();
      
          const updateCartUrl = 'http://localhost:8080/api/cart';
          const payload = {
            cartId: cartData[0].cartId,
            userId: userId,
            productIds: currentProductIdList,
            isActive: false,
            isOrder: true,
            totalPrice: 0.0,
          };
      
          const updateCartResponse = await fetch(updateCartUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
      
          if (updateCartResponse.ok) {
            console.log('Payment successful');
            navigate('/checkout/success');
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