import React from 'react';

function Cart({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x 
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                min="1"
              />
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;