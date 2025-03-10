import React, { useState } from 'react';
import ProductList from './components/productList/productList';
import Cart from './components/cart/cart';
import products from './data/data';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productInCart = cart.find(item => item.id === product.id);
    if (productInCart) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  return (
    <div className="App">
      <h1>Tienda de Productos</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;