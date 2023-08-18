import './style.scss'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUserId } from '../../features/auth/authSlice';
import { setCurrentProductIds, 
  getCurrentProductIds, 
  setCurrentCartId, 
  getCurrentCartId, 
  fetchProductIds, 
  fetchCart, 
  getCurrentTotalPrice, 
  setCurrentTotalPrice,
  fetchTotalPrice } from '../../features/cart/cartSlice';
import { getProductsInfoInCart, updateOrCreateCart, getActiveCartByUserId } from '../../api/apiFunctions';

export default function CartItem() {
    const dispatch = useDispatch();
    const userId = useSelector(selectCurrentUserId);
    const productIdsInCart = useSelector(getCurrentProductIds);
    const currentTotalPrice =useSelector(getCurrentTotalPrice);
    const productIdsInCartReduce = productIdsInCart.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    
    const [productInfoList, setProductInfoList] = useState([]);
    const [cartId, setCartId] = useState([]);

    useEffect(() => {
      dispatch(fetchProductIds(userId));
      dispatch(fetchCart(userId));
    }, [dispatch]);
  
    useEffect(() => {
      const fetchData = async () => {
        const productInfoList = await getProductsInfoInCart(productIdsInCart);
        const cart = await getActiveCartByUserId(userId);
        setCartId(cart.cartId);
        setProductInfoList(productInfoList);
      };
      fetchData();
    }, [productIdsInCart]);

    const changeQty = (id, changeQuantity) => {
      if (productIdsInCartReduce.hasOwnProperty(id)) {
        const product = productInfoList.find(item => item.productId === id);
    
        if (!product) {
          return; 
        }
        
        const cost = parseFloat(product.cost.replace(/[^0-9.-]+/g, ""));
        let newTotalPrice = currentTotalPrice;
        if (changeQuantity === "increase") {
          productIdsInCartReduce[id]++;
          newTotalPrice = currentTotalPrice + cost;
          dispatch(setCurrentTotalPrice(newTotalPrice));
        } else if (changeQuantity === "decrease") {
          productIdsInCartReduce[id]--;
          newTotalPrice = currentTotalPrice - cost;
          dispatch(setCurrentTotalPrice(newTotalPrice));
        }

        if (productIdsInCartReduce[id] == 0) {
          delete productIdsInCartReduce[id];
        }
    
        const updatedQtyProducts = Object.keys(productIdsInCartReduce).flatMap((productId) =>
          Array.from({ length: productIdsInCartReduce[productId] }, () => productId)
        );
    
        const payload = {
          cartId: cartId,
          userId: userId,
          productIds: updatedQtyProducts,
          isActive: true,
          totalPrice: newTotalPrice
        };
    
        updateOrCreateCart(payload)
          .then((data) => {
            dispatch(setCurrentProductIds(updatedQtyProducts));
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    };
      
    return (
        <>
            <p class="heading">Edit you Items</p>
            {
              productIdsInCart.length == 0 
              ? <div className="cart-item-alert">You have no items in cart, please add more !</div> 
              : null
            }
            {Object.entries(productIdsInCartReduce).map(([productId, quantity]) => {
              const productItem = productInfoList.find(item => item.productId == productId);
              if (productItem && productIdsInCart) {
                return (
                  <div className="cart-item" id={"product-" + productItem.productId} key={productItem.productId}>
                      <div className="cart-item-img">
                      <img src={productItem.image} alt={productItem.name} />
                      </div>
                      <div className="cart-item-info">{productItem.name.split(' ').slice(0, 2).join(' ')}</div>
                      <div className="cart-item-price">{productItem.productPrice}</div>
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