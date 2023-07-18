import './style.scss'
export default function CartItem() {
    // Get from redux store
    const productList = [
        {
            productName : "Test 1",
            imgSrc: "https://www.kasandbox.org/programming-images/avatars/leaf-blue.png",
            productPrice : "Price 1"
        },
        {
            productName : "Test 2",
            imgSrc: "https://www.kasandbox.org/programming-images/avatars/leaf-blue.png",
            productPrice : "Price 2"
        }
    ]
    return (
        <>
            <p class="heading">Edit you Items</p>
            {
                productList.map(item => (
                    <div className='cart-item'>
                        <div className='cart-item-img'>
                            <img src={item.imgSrc}/>
                        </div>
                        <div className='cart-item-info'>{item.productName}</div>
                        <div className='cart-item-price'>{item.productPrice}</div>
                    </div>
                ))
            }
        
        </>
        
    );
}