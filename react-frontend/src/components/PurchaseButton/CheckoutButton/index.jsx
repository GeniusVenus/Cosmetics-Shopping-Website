import '../style.scss';
import { useNavigate } from 'react-router-dom';

export default function CheckoutButton() {
    const navigate = useNavigate();
    const checkout = () => {
        updateCart();
    }
    const updateCart = () => {
        const url = 'http://localhost:8080/api/cart';
        const payload = {
            cartId: '64b536c31cb463531d44bcce',
            userId: '7',
            productIds: ['1', '2', '3', '15'],
            isActive: true,
            totalPrice: 0.0
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