// SpecialsSection.js
import React, { useEffect, useState } from "react";
import './Specials.scss';

const SpecialsSection = () => {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/specials") 
      .then((response) => response.json())
      .then((data) => setSpecials(data))
      .catch((error) => console.log(error));
  }, []);

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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialsSection;






