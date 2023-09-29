import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartItem = ({ id, name, quantity, price }) => {
  const navigate = useNavigate();
  const { removeItem } = useCart();

  const handleRemoveItem = (e) => {
    e.stopPropagation();
    removeItem(id);
  };

  return (
    <div onClick={() => navigate(`/detail/${id}`)} style={{ cursor: 'pointer' }}>
      <div>
        <h2>{name}</h2>
        <div>
          <p>Quantity: {quantity}</p>
          <p>${price}</p>
          <p>Subtotal: ${price * quantity}</p>
        </div>
        <button onClick={handleRemoveItem}>Remove</button>
      </div>
    </div>
  );
};



export default CartItem