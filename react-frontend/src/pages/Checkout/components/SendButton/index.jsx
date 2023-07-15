import React from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../../../../features/test/testSlice';
import "./style.scss";
export default function Button() {
    const dispatch = useDispatch();

    const send = () => {
        fetch('https://06177d84-579e-49f5-afdd-e59c4565b05c.mock.pstmn.io/test')
      .then(response => response.json())
      .then(data => {
        // Process the received data
        dispatch(setValue(String('success')));
        // console.log(data.data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
        //Send API implementation
    }
    return (
        <button onClick={send} className="button-pay">
            Pay
        </button>
    );
}