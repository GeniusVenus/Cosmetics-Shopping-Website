import './style.scss'
import { useNavigate } from 'react-router-dom';
import NavBarImage from '../../assets/image/NavBarImage';
export default function PurchaseSuccess() {
    const {tickIcon} = NavBarImage;
    const navigate = useNavigate();
    return (
        <>
            <div className='purchase-success-container'>
                <div className='purchase-success-element purchase-success-icon'>
                    {tickIcon}
                </div>
                <div className='purchase-success-element purchase-success-message'>
                    Your order has been confirmed
                </div>
                <div className='purchase-success-element ' 
                    onClick={() => {navigate("/")}}>
                    <btn className="checkout-btn checkout-btn-green purchase-success-btn">
                        Continue Shopping
                    </btn>
                </div>
            </div>
        </>
    );
}