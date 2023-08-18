import NavBarImage from "../../assets/image/NavBarImage";
import { useNavigate, Link } from "react-router-dom";
import { selectPurchaseState, setPurchaseState } from "../../features/purchase/purchaseSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUserId } from "../../features/auth/authSlice";
import './style.scss'
export default function PurchaseNavigation(props) {
    const success = useSelector(selectPurchaseState);
    const userId = useSelector(selectCurrentUserId);
    let {goBackIcon} = NavBarImage;
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }
    return (
        <>
            <div className="purchase-navigation purchase-header">
                <div className="purchase-back" onClick={back}>
                    <div>{goBackIcon}</div>
                    <div className="purchase-back-text">Back</div>
                </div>
                <div className="purchase-title">{props.title}</div>
                {
                    userId == null 
                    ?
                    <div className="purchase-suggest-text">Have an account? 
                        <span className="purchase-suggest-link">
                            <Link to="/login">Sign In</Link>
                        </span>
                    </div>
                    : <div></div>
                }
            </div>
            {
                !success ?? 
                <div className="purchase-noti-tofill"> 
                    Fill the form below to complete your purchase
                </div>
            }
            
        </>
    );
}