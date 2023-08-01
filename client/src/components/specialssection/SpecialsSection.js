// SpecialsSection.js
import React, { useEffect, useState } from "react";
import './Specials.scss';

const SpecialsSection = ({ cart, setCart }) => { // get cart and setCart as props
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/specials") 
      .then((response) => response.json())
      .then((data) => setSpecials(data))
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (item) => {
    setCart(oldCart => [...oldCart, item]); // use a callback to ensure we have the latest cart state
  };

  return (
    <section className="specials-section">
      <h2>Specials</h2>
      <div className="specials-wrapper">
        {specials.map((item) => ( 
          <div className="special-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">Price: ${item.price}</p>
              <button className="addToCartBtn" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialsSection;









