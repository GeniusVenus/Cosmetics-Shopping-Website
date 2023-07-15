import './style.scss';
export default function Subtotal(props) {
    return (
        <>
            <div className="subtotal-shipping">
                <div className="subtotal-shipping-item">
                    <div>Sutotal</div>
                    <div>1234</div>
                </div>
                <div className="subtotal-shipping-item">
                    <div>Shipping</div>
                    <div>1234</div>
                </div>
            </div>
            <div className="total">
                <div>
                    <h3>Total</h3>
                    <p>Including 8% VAT</p>
                </div>
                <div className="total-price">
                    12345
                </div>
            </div>
        </>
    );
}