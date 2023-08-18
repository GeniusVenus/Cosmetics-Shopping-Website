import '../style.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUserId } from '../../../features/auth/authSlice';
import { setCurrentProductIds, 
  getCurrentProductIds, 
  setCurrentCartId, 
  getCurrentCartId, 
  fetchProductIds, 
  getCurrentTotalPrice, 
  fetchTotalPrice, 
  setCurrentCartEntity} from '../../../features/cart/cartSlice';
import { getActiveCartByUserId, updateOrCreateCart } from '../../../api/apiFunctions';

export default function CheckoutButton() {
    const userId = useSelector(selectCurrentUserId);
    const currentProductIdList = useSelector(getCurrentProductIds);
    const currentTotalPrice = useSelector(getCurrentTotalPrice);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    useEffect(() => {
        dispatch(fetchProductIds(userId));
        dispatch(fetchTotalPrice(userId));
    }, [dispatch]);

    const updateCart = async () => {
        try {
            
            const cartData = await getActiveCartByUserId(userId);
      
            const payload = {
              cartId: cartData.cartId,
              userId: userId,
              productIds: currentProductIdList,
              isActive: true,
              isOrder: false,
              totalPrice: currentTotalPrice
            };
      
            updateOrCreateCart(payload)
            .then((data) => {
              navigate('/checkout');
            })
            .catch((error) => {
              console.error('Error:', error);
            });
            } catch (error) {
              console.error('Errsor:', error);
            }
    }
    return (
        <button onClick={updateCart} className='checkout-btn checkout-btn-green'>
                Checkout
        </button>
    );
}