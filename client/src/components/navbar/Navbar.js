// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Navbar.scss'

function Navbar({ cart }) {
  const [navbarContent, setNavbarContent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/content')
      .then(response => {
        setNavbarContent(response.data.navbar);
      });
  }, []);

  if (!navbarContent) return null;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">{navbarContent.logo}</Link>
      <ul className="navbar__links">
        {navbarContent.links
          .filter(link => link.label.toLowerCase() !== 'cart' && link.label.toLowerCase() !== 'order details')  // Exclude the 'cart' and 'order details' link from being rendered here.
          .map((link, index) => (
            <li key={index}><Link to={link.url}>{link.label}</Link></li>
          ))}
        <li><Link to="/cart">Cart ({cart.length})</Link></li>  
        <li><Link to="/order">Order Details</Link></li> {/* New link */}
      </ul>
    </nav>
  );
}

export default Navbar;




  



