import '../style.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectPurchaseState, setPurchaseState } from '../../../features/purchase/purchaseSlice';
import { getProductList, fetchProductIdList } from '../../../features/product/productSlice';

export default function PayButton() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentProductIdList = useSelector(getProductList);

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
        dispatch(setPurchaseState(true));
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
  
    const updateCart = () => {
        
        const url = 'http://localhost:8080/api/cart';
        const payload = {
            cartId: '64b536c31cb463531d44bcce',
            userId: '7',
            productIds: currentProductIdList,
            isActive: true,
            totalPrice: 0.0,
            address: getAddress(),
            shippingMethod: getShippingMethod() //Update later 
        };
      
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
                console.log('aloo');
                navigate('/checkout/success');
            })
            .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
            });
    }
    return (
        <button onClick={pay} className='checkout-btn checkout-btn-green'>
                Pay
        </button>
    );
}