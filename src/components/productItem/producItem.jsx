import React from 'react';

function ProductItem({ product, addToCart }) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
}

export default ProductItem;