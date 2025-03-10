import React from 'react';
import ProductItem from '../productItem/producItem';

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      <h2>Productos Disponibles</h2>
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;