import './style.scss';
export default function ShippingInfo() {
    return (
        <>
            <p className="heading">Shipping Method</p>
            <div className='shipping'>
                <div className='shipping-option'>
                    <input type="radio" id="shipping-standard" className="shipping-option-input"/>
                    <label for="shipping-standard">Standard Shipping (10.000 vnd)</label>
                </div>
                <div className='shipping-option shipping-option-bottom'>
                    <input type="radio" id="shipping-express" className="shipping-option-input"/>
                    <label for="shipping-standard">Express Shipping (50.000 vnd)</label>
                </div>
            </div> 
        </>
    );
}