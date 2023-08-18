import './style.scss';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPurchaseState } from "../../features/purchase/purchaseSlice";
import { setCurrentShippingMethod } from '../../features/cart/cartSlice';

export default function ShippingInfo() {
  const success = useSelector(selectPurchaseState);
  const dispatch = useDispatch();
  const [shippingMethod, setShippingMethod] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateShippingMethod = () => {
    if (success == 'success') {
      if (shippingMethod === '') {
        setErrorMessage('Please select a shipping method.'); // Set the error message if shipping method is not selected
      } else {
        setErrorMessage(''); // Clear the error message if shipping method is selected
      }
    }
  };

  const updateShippingMethod = (value) => {
    const intValue = value == "Standard" ? 1 : 2;
    setShippingMethod(value);
    console.log('shippint');
    console.log(value);
    dispatch(setCurrentShippingMethod(intValue));
  }

  useEffect(() => {
    validateShippingMethod(); // Validate the shipping method initially
  }, [success, shippingMethod]);

  return (
    <>
      <p className="heading">Shipping Method</p>
      <div className='shipping'>
        <div className='shipping-option'>
          <input
            type="radio"
            id="shipping-standard"
            name="ship"
            className="shipping-option-input"
            value="Standard"
            checked={shippingMethod === 'Standard'}
            onChange={(e) => updateShippingMethod(e.target.value)}
            onBlur={validateShippingMethod} // Validate the shipping method when it loses focus
          />
          <label htmlFor="shipping-standard">Standard Shipping (10.000 $)</label>
        </div>
        <div className='shipping-option shipping-option-bottom'>
          <input
            type="radio"
            id="shipping-express"
            name="ship"
            className="shipping-option-input"
            value="Express"
            checked={shippingMethod === 'Express'}
            onChange={(e) => updateShippingMethod(e.target.value)}
            onBlur={validateShippingMethod} // Validate the shipping method when it loses focus
          />
          <label htmlFor="shipping-express">Express Shipping (50.000 $)</label>
        </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </>
  );
}
