// OrdersList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './OrdersList.scss'

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/order')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="orders-list">
      <h2>All Orders</h2>
      {orders.length > 0 ? (
        <div className="order-cards">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <Link to={`/order/${order.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <p><strong>Order #{order.id}</strong></p>
                <p>Status: {order.status}</p>
                <p>Total: ${order.total}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrdersList;


