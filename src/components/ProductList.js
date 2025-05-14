import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(error => console.log(error));
  }, []);

  // Handle adding items to the cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const isProductInCart = prevCart.some(item => item.id === product.id);

      if (isProductInCart) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Product Catalog</h2>
      <div className="catalog">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={`images/${product.image_url}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <h3>Your Shopping Cart</h3>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price}
              </li>
            ))}
          </ul>
        )}
        {/* Display Total */}
        {cart.length > 0 && (
          <div>
            <p><strong>Total: ${calculateTotal()}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;

