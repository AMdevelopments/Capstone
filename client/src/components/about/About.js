// About.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './About.scss';  

function About() {
  const [aboutContent, setAboutContent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/content')
      .then(response => {
        setAboutContent(response.data.about);
      });
  }, []);

  if (!aboutContent) return null;

  return (
    <div className="about-content">
      <h1>{aboutContent.title}</h1>
      <p>{aboutContent.content}</p>
    </div>
  );
}

export default About;

