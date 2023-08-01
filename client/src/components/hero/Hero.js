// Hero.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Hero.scss';

function Hero() {
  const [heroContent, setHeroContent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/content')
      .then(response => {
        setHeroContent(response.data.hero);
      });
  }, []);

  if (!heroContent) return null;

  return (
    <div className="hero">
      <div className="hero__content">
        <h1>{heroContent.title}</h1>
        <p>{heroContent.description}</p>
        <Link to={heroContent.cta.url} className="hero__cta">{heroContent.cta.label}</Link>
      </div>
    </div>
  );
}

export default Hero;


