import '../style.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductList, fetchProductIdList } from '../../../features/product/productSlice';
export default function CheckoutButton() {
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
    const currentProductIdList = useSelector(getProductList);

    useEffect(() => {
        dispatch(fetchProductIdList());
        // console.log(productIdList);
        // dispatch(setNewList([1,2,3,4]));
    }, [dispatch]);

    const updateCart = () => {

        const url = 'http://localhost:8080/api/cart';
        const payload = {
            cartId: '64b536c31cb463531d44bcce',
            userId: '7',
            productIds: currentProductIdList,
            isActive: true,
            totalPrice: 0.0,
            // shippingMethod: getShippingMethod()
        };
        if (currentProductIdList.length == 0) {
            alert('You have no product in your cart, add more to checkout');
            return;
        }
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(data => {
            // Process the received data
            // dispatch(setValue(String('success')));
            console.log(data);
            navigate('/checkout');
            })
            .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
            });
    }
    return (
        <button onClick={checkout} className='checkout-btn checkout-btn-green'>
                Checkout
        </button>
    );
}