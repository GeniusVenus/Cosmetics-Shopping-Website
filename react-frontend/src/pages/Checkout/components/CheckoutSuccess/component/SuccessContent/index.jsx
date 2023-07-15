import "./style.scss";
import { Link } from "react-router-dom";
export default function SuccessContent () {
    return(
        <div className="checkout-success">
            <div className="success-element message">Your order has been confirmed</div>
            <div className="success-element continue-shopping">
                <Link to="/">Continue Shopping</Link>
            </div>
        </div>
    );
}