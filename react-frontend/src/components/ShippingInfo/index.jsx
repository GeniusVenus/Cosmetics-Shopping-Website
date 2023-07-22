import './style.scss';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectPurchaseState } from "../../features/purchase/purchaseSlice";

export default function ShippingInfo() {
  const success = useSelector(selectPurchaseState);
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
            onChange={(e) => setShippingMethod(e.target.value)}
            onBlur={validateShippingMethod} // Validate the shipping method when it loses focus
          />
          <label htmlFor="shipping-standard">Standard Shipping (10.000 vnd)</label>
        </div>
        <div className='shipping-option shipping-option-bottom'>
          <input
            type="radio"
            id="shipping-express"
            name="ship"
            className="shipping-option-input"
            value="Express"
            checked={shippingMethod === 'Express'}
            onChange={(e) => setShippingMethod(e.target.value)}
            onBlur={validateShippingMethod} // Validate the shipping method when it loses focus
          />
          <label htmlFor="shipping-express">Express Shipping (50.000 vnd)</label>
        </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </>
  );
}
