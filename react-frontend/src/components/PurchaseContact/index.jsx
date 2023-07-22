import './style.scss';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPurchaseState, setPurchaseState } from "../../features/purchase/purchaseSlice";

export default function PurchaseContact() {
  const success = useSelector(selectPurchaseState);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = () => {
    if (success == 'success') {
      if (inputValue.trim() === '') {
        setErrorMessage('This field is required.'); // Set the error message if the field is empty
      } else {
        setErrorMessage(''); // Clear the error message if the field is not empty
      }
    }
  };

  useEffect(() => {
    validateInput(); // Validate the input initially
  }, [success]);

  return (
    <>
      <p className='heading'>Contact Information</p>
      <div className='contact-info'>
        <div className='contact-form'>
          <div className='contact-form-label'>
            New address ? 
            <span> (optional)</span>
          </div>
          <input
            className='contact-form-input'
            id="address"
            name="address"
            placeholder='Address'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={validateInput} // Validate the input when it loses focus
          />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
    </>
  );
}
