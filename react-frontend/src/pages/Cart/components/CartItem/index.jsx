import './style.scss'
export default function CartItem(props) {
    return (
        <div className="cart-item">
            <div>
                <img src="https://www.kasandbox.org/programming-images/avatars/leaf-blue.png"/>
            </div>
            <div>
                {props.productName}
            </div>
            <div>
                {props.productPrice}
            </div>
        </div>
    );
}