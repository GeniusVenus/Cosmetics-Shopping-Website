import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CartItem from "./components/CartItem";
import CheckoutNavigation from "../Checkout/components/CheckoutNavigation";
import FormField from "../Checkout/components/FormField";
import Button from "../Checkout/components/SendButton";
import { Link } from "react-router-dom";
import Subtotal from "./components/Subtotal";
export default function Cart() {
    const productList = [
        {
            productName : "Test 1",
            productPrice : "Price 1"
        },
        {
            productName : "Test 2",
            productPrice : "Price 2"
        }
    ]
    return(
        <>
            <Navbar/>
            <CheckoutNavigation/>
            <div className="checkout-layout checkout-form-container">
                <div className="checkout-form-first">
                    <div>
                        <h2 className="checkout-section">3. Shipping Method</h2>
                        <div className="item-container">
                            <p className="item-title">5 items in cart <span className="item-edit">Edit my order</span></p>
                            {productList.map((product, index) => (
                                <CartItem
                                    key={index}
                                    productName={product.productName}
                                    productPrice={product.productPrice}
                                />
                            ))}
                        </div>
                    </div>
                    
                </div>
                <div className="checkout-form-second">
                    <div>
                        <h2 className="checkout-section">3. Shipping Method</h2>
                        <div className="radio-wrapper">
                            <FormField type="radio" fieldName="Standard Shipping" name="shipping" isTop="true"/>
                            <FormField type="radio" fieldName="Express Shipping" name="shipping" />
                        </div>
                        <p className="message-title">Learn more about shipping</p>
                    </div>
                    <div>
                        <h2 className="checkout-section">3. Shipping Method</h2>
                        <div className="radio-wrapper">
                            <FormField type="radio" fieldName="Standard Shipping" name="shipping" isTop="true"/>
                            <FormField type="radio" fieldName="Express Shipping" name="shipping" />
                        </div>
                        <p className="message-title">Learn more about Insurance</p>
                    </div>
                </div>
                <div className="checkout-form-third">
                    <h2 className="checkout-section">7. Order Review</h2>
                    <p>1 Items in cart, edit my order</p>
                    <Subtotal/>
                    <button className="button-pay">
                        <Link to="/checkout">Checkout</Link>
                    </button>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}