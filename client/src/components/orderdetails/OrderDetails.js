// OrderDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './OrderDetails.scss'

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/order/${id}`)
    .then(response => {
      setOrder(response.data);
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
      setOrder(null);
    });
  }, [id]);

  return (
    <div className="order-details">
      <h2>Your Order Details</h2>
      {order ? (
        <>
          <div className="order-info">
            <h3>Items:</h3>
            {order.cart.map((item, index) => (
              <div className="order-item" key={index}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))}
            <p className="order-total">Total: ${order.totalAmount}</p>
            <p>Delivery Method: {order.delivery ? "Delivery" : "Pickup"}</p>
            <p>Status: {order.status}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OrderDetails;






