import './style.scss'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNewList, getProductList,fetchProductIdList } from '../../features/product/productSlice';
import NavBarImage from '../../assets/image/NavBarImage';
export default function CartItem() {
    const {removeIcon} = NavBarImage;
    // Get productId from redux store
    // Get imgSrc and Price by Product API
    const dispatch = useDispatch();
    const productIdList = useSelector(getProductList);
    const productIdListReduce = productIdList.reduce((acc, productId) => {
        acc[productId] = (acc[productId] || 0) +1;
        return acc;
    }, {});
    const productStatus = useSelector(state => state.product.status);
    
    useEffect(() => {
        dispatch(fetchProductIdList());
        console.log(productIdList);
        // dispatch(setNewList([1,2,3,4]));
    }, [dispatch]);

    const removeProduct = (id, changeQuantity) => {
        // Check if the product is present in the cart
        if (productIdListReduce.hasOwnProperty(id)) {
          // Reduce the quantity by 1
          if (changeQuantity === "increase") {
            productIdListReduce[id]++;
          } else if (changeQuantity === "decrease") {
            productIdListReduce[id]--;
          }
          // Remove the product from the cart if its quantity becomes zero
          if (productIdListReduce[id] === 0) {
            delete productIdListReduce[id];
          }
      
          // Convert the updated productListInCart object to an array
          const newProductIdList = Object.keys(productIdListReduce).flatMap((productId) =>
            Array.from({ length: productIdListReduce[productId] }, () => parseInt(productId))
          );
      
          // Perform the API call here with newProductIdList
          const url = 'http://localhost:8080/api/cart';
          const payload = {
            cartId: '64b536c31cb463531d44bcce',
            userId: '7',
            productIds: newProductIdList,
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
            .then((response) => response.json())
            .then((data) => {
              // Process the received data if needed
              console.log(data);
              dispatch(setNewList(newProductIdList));
              console.log('dispatched');
            })
            .catch((error) => {
              // Handle any errors that occurred during the request
              console.error('Error:', error);
            });
      
          
        }
      };
      

    const productList = [
        {
          productId: 1,
          productName: "Test 1",
          imgSrc: "https://www.kasandbox.org/programming-images/avatars/leaf-blue.png",
          productPrice: "Price 1",
        },
        {
          productId: 2,
          productName: "Test 2",
          imgSrc: "https://www.kasandbox.org/programming-images/avatars/leaf-blue.png",
          productPrice: "Price 2",
        },
        {
          productId: 3,
          productName: "Test 3",
          imgSrc: "https://www.kasandbox.org/programming-images/avatars/leaf-blue.png",
          productPrice: "Price 3",
        },
        {
          productId: 4,
          productName: "Test 4",
          imgSrc: "https://www.kasandbox.org/programming-images/avatars/leaf-blue.png",
          productPrice: "Price 4",
        },
        {
          productId: 5,
          productName: "Test 5",
          imgSrc: "https://www.kasandbox.org/programming-images/avatars/leaf-blue.png",
          productPrice: "Price 5",
        },
      ];
    return (
        <>
            <p class="heading">Edit you Items</p>
            {console.log(productIdListReduce)}
            {Object.entries(productIdListReduce).map(([productId, quantity]) => {
        const productItem = productList.find(item => item.productId === parseInt(productId));
        if (productItem) {
          return (
            <div className="cart-item" id={"product-" + productItem.productId} key={productItem.productId}>
                <div className="cart-item-img">
                <img src={productItem.imgSrc} alt={productItem.productName} />
                </div>
                <div className="cart-item-info">{productItem.productName}</div>
                <div className="cart-item-price">{productItem.productPrice}</div>
              {/* Render the quantity here based on the quantity in the productListInCart object */}
                <div className="cart-item-qty">
                    <button onClick={() => removeProduct(productItem.productId, "decrease")}>-</button>
                    <div className='qty'>
                     {quantity}
                    </div>
                    <button onClick={() => removeProduct(productItem.productId, "increase")}>+</button>
                </div>
            </div>
          );
        } else {
          // If the product with the given productId is not found in the productList, you can handle it here
          // For example, you can return null or display a message.
          return null;
        }
      })}
        
        </>
        
    );
}