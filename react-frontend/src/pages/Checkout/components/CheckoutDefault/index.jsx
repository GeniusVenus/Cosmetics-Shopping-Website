import FormField from "../FormField";
import Button from "../SendButton";
import CheckoutNavigation from "../CheckoutNavigation";
import "./style.scss";
export default function () {
    const listForm1 = [
        "Company (optional)",
        "Address",
        "Apartment, suite, etc. (optional)",
        "Suburb"
    ];
    return (
        <>
            {/* <div className="checkout-layout checkout-header">
                <div>Back</div>
                <div>Checkout</div>
                <div>Have an account? Sign In</div>
            </div> */}
            <CheckoutNavigation/>
          <div className="checkout-layout checkout-header-text">
            Fill the form below to complete your purchase
          </div>
          <div className="checkout-layout checkout-form-container">
                <div className="checkout-form-first">
                    <div>
                        <h2>1. Contact Information</h2>
                        <FormField fieldName="Email" />
                    </div>
                    <div>
                        <h2 className="checkout-section">2. Shipping Adrress</h2>
                        <div className="checkout-form-double">
                            <FormField fieldName="First Name"/>
                            <FormField fieldName="Last Name"/>
                        </div>
                        {listForm1.map(
                                value=> <FormField fieldName={value} />
                            )}
                        
                    </div>
                    <div>
                        <h2 className="checkout-section">3. Shipping Method</h2>
                        <div className="radio-wrapper">
                            <FormField type="radio" fieldName="Standard Shipping" name="shipping" isTop="true"/>
                            <FormField type="radio" fieldName="Express Shipping" name="shipping" />
                        </div>
                    </div>
                    <div>
                        <h2 className="checkout-section">4. Fashion Insurance</h2>
                    </div>
                </div>
                <div className="checkout-form-second">
                    <div>
                        <h2 className="checkout-section">5. Payment</h2>
                        <p class="section-message">All transaction are secured and encrypted</p>
                        <div className="radio-wrapper">
                            <FormField type="radio" fieldName="Standard Shipping" name="shipping" isTop="true"/>
                            <FormField type="radio" fieldName="Express Shipping" name="shipping" />
                            <FormField type="radio" fieldName="Express Shipping" name="shipping"/>
                            <FormField type="radio" fieldName="Standard Shipping" name="shipping" isTop="true"/>
                            <FormField type="radio" fieldName="Express Shipping" name="shipping" />
                            <FormField type="radio" fieldName="Express Shipping" name="shipping"/>
                        </div>
                    </div>
                    <div>
                        <h2 className="checkout-section">6. Billing Address</h2>
                    </div>
                    <div>
                        <h2 className="checkout-section">Remember me</h2>
                    </div>
                </div>
                <div className="checkout-form-third">
                    <h2 className="checkout-section">7. Order Review</h2>
                    <p>1 Items in cart, edit my order</p>
                    <h2>Total</h2>
                    <Button/>
                </div>
          </div>
        </>
    );
}