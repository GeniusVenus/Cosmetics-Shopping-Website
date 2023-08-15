import './style.scss'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUserId } from '../../features/auth/authSlice';
import { setCurrentProductsInCart, getProductsInCart,fetchProductIdList } from '../../features/product/productSlice';

export default function CartItem() {
    const dispatch = useDispatch();
    const userId = useSelector(selectCurrentUserId);
    const productIdsInCart = useSelector(getProductsInCart);
    const productIdsInCartReduce = productIdsInCart.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    
    const [productList, setProductList] = useState([]);

    useEffect(() => {
      //Refactor
      //Todo: Replace with cartId of userId
      dispatch(fetchProductIdList(userId));
    }, [dispatch]);
  
    useEffect(() => {
      const fetchData = async () => {
        const newProductList = [];
        for (const productId of productIdsInCart) {
          const response = await fetch(`http://localhost:8080/api/product/${productId}`);
          const productData = await response.json();
          newProductList.push(productData);
        }
        setProductList(newProductList);
        console.log('asd');
      };
      fetchData();
    }, [productIdsInCart]);

    const changeQty = (id, changeQuantity) => {
        if (productIdsInCartReduce.hasOwnProperty(id)) {
          if (changeQuantity === "increase") {
            productIdsInCartReduce[id]++;
          } else if (changeQuantity === "decrease") {
            productIdsInCartReduce[id]--;
          }

          if (productIdsInCartReduce[id] === 0) {
            delete productIdsInCartReduce[id];
          }
      
          // Convert the updated productListInCart object to an array
          const updatedQtyProducts = Object.keys(productIdsInCartReduce).flatMap((productId) =>
            Array.from({ length: productIdsInCartReduce[productId] }, () => productId)
          );
      
          // Perform the API call to update Item qty
          const url = 'http://localhost:8080/api/cart';
          const payload = {
            cartId: '64b536c31cb463531d44bcce',
            userId: userId,
            productIds: updatedQtyProducts,
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
              dispatch(setCurrentProductsInCart(updatedQtyProducts));
            })
            .catch((error) => {
              // Handle any errors that occurred during the request
              console.error('Error:', error);
            });
      
          
        }
      };
      
    return (
        <>
            <p class="heading">Edit you Items</p>
            {Object.entries(productIdsInCartReduce).map(([productId, quantity]) => {
              const productItem = productList.find(item => item.productId == productId);
              if (productItem) {
                return (
                  <div className="cart-item" id={"product-" + productItem.productId} key={productItem.productId}>
                      <div className="cart-item-img">
                      <img src={productItem.image} alt={productItem.name} />
                      </div>
                      <div className="cart-item-info">{productItem.name.split(' ').slice(0, 2).join(' ')}</div>
                      <div className="cart-item-price">{productItem.productPrice}</div>
                    {/* Render the quantity here based on the quantity in the productListInCart object */}
                      <div className="cart-item-qty">
                          <button onClick={() => changeQty(productItem.productId, "decrease")}>-</button>
                          <div className='qty'>
                          {quantity}
                          </div>
                          <button onClick={() => changeQty(productItem.productId, "increase")}>+</button>
                      </div>
                  </div>
                );
              } else {
                return null;
              }
              })
            }
        </>
    );
}