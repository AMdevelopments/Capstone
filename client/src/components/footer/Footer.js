// Footer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  const [footerContent, setFooterContent] = useState(null);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle your subscription logic here...
    console.log(`Subscribing with email: ${email}`);
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/content')
      .then(response => {
        setFooterContent(response.data.footer);
      });
  }, []);

  if (!footerContent) return null;

  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>JOIN OUR NEWSLETTER TO GET SPECIAL OFFERS!</h2>
        <div className="input-group">
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      </div>
      <p>{footerContent.copyright}</p>
      <ul className="footer-links">
        {footerContent.links.map((link, index) => (
          <li key={index}><Link to={link.url}>{link.label}</Link></li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;

