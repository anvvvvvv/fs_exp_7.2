import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 150 },
  { id: 3, name: 'Smartphone', price: 800 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🛒 Product List</h2>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: '10px' }}>
          <strong>{p.name}</strong> - ${p.price}
          <button onClick={() => dispatch(addToCart(p))} style={{ marginLeft: '10px' }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
