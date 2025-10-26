import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🛍️ Your Cart</h2>
      {items.length === 0 && <p>Cart is empty.</p>}
      {items.map((item) => (
        <div key={item.id}>
          {item.name} x {item.quantity} — ${item.price * item.quantity}
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            style={{ marginLeft: '10px' }}
          >
            Remove
          </button>
        </div>
      ))}
      <hr />
      <h3>Total: ${totalAmount}</h3>
      {items.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      )}
    </div>
  );
};

export default Cart;
