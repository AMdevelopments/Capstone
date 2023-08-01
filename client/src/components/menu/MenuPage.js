//MenuPage.js
import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import './MenuPage.scss';

const MenuPage = ({ setCart }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/menu") 
      .then((response) => response.json())
      .then((data) => setMenu(data))
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (item) => {
    setCart(oldCart => [...oldCart, item]);
  };

  return (
    <>
      <section className="menu-section">
        <h2>Menu</h2>
        <div className="menu-wrapper">
          {menu.map((item) => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">Price: ${item.price}</p>
                <button onClick={() => addToCart(item)} className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MenuPage;




