export async function getProductsInfoInCart(productIds) {
    const productInfoList = await Promise.all(
      productIds.map(async (productId) => {
        const response = await fetch(`http://localhost:8080/api/product/${productId}`);
        const productData = await response.json();
        return productData;
      })
    );
    return productInfoList;
}

export async function updateOrCreateCart(payload) {
    const url = 'http://localhost:8080/api/cart';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
}

export async function getActiveCartByUserId(userId) {
    const url = `http://localhost:8080/api/cart/userId/${userId}/1`;
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        console.error('Failed to fetch cart data');
        return null;
      }
      
      const cartData = await response.json();
      return cartData[0];
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }