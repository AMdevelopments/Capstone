// CartPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import axios from 'axios';
import './CartPage.scss';

const CartPage = ({ cart, setCart }) => {
  const [delivery, setDelivery] = useState(false); // false represents pickup, true represents delivery
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const navigate = useNavigate(); 

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const confirmPurchase = () => {
    setOrderConfirmed(true);
    setCart([]);

    axios.post('http://localhost:5000/api/order', {
      cart,
      delivery,
      totalAmount,
      status: 'Processing'
    }).then(response => {
      console.log(response.data);
      navigate(`/order/${response.data.orderId}`); // navigate to the order details page with the id of the order
    }).catch(error => {
      console.error(error);
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item.id !== itemToRemove.id));
  };

  return (
    <section className="cart-section">
      <h2>Your Cart</h2>
      {orderConfirmed ? (
        <p>Your order is confirmed!</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-card" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <p>Total: ${totalAmount}</p>
          <div>
            <label>
              <input type="radio" value="Pickup" checked={!delivery} onChange={() => setDelivery(false)} />
              Pickup
            </label>
            <label>
              <input type="radio" value="Delivery" checked={delivery} onChange={() => setDelivery(true)} />
              Delivery
            </label>
          </div>
          <button onClick={confirmPurchase}>Confirm Purchase</button>
        </>
      )}
    </section>
  );
};

export default CartPage;







