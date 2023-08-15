import '../style.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUserId } from '../../../features/auth/authSlice';
import { getProductsInCart, fetchProductIdList } from '../../../features/product/productSlice';
export default function CheckoutButton() {
    const userId = useSelector(selectCurrentUserId);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const checkout = () => {
        updateCart();
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
    const currentProductIdList = useSelector(getProductsInCart);

    useEffect(() => {
        dispatch(fetchProductIdList());
        // console.log(productIdList);
        // dispatch(setNewList([1,2,3,4]));
    }, [dispatch]);

    const updateCart = async () => {
        try {
            const getCartUrl = `http://localhost:8080/api/cart/userId/${userId}/1`;
            const getCartResponse = await fetch(getCartUrl);
            const cartData = await getCartResponse.json();
      
            const updateCartUrl = 'http://localhost:8080/api/cart';
            const payload = {
              cartId: cartData[0].cartId,
              userId: userId,
              productIds: currentProductIdList,
              isActive: true,
              isOrder: false,
              totalPrice: 0.0
            };
      
            const updateCartResponse = await fetch(updateCartUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });
      
            if (updateCartResponse.ok) {
              console.log('Checkout successfully');
              navigate('/checkout');
            } else {
              console.error('Failed to add product to cart');
            }
          } catch (error) {
            console.error('Errsor:', error);
          }
    }
    return (
        <button onClick={checkout} className='checkout-btn checkout-btn-green'>
                Checkout
        </button>
    );
}