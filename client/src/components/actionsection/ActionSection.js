// ActionSection.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ActionSection.scss';

function ActionSection() {
  const [actionSectionContent, setActionSectionContent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/content')
      .then(response => {
        setActionSectionContent(response.data.actionSection);
      });
  }, []);

  if (!actionSectionContent) return null;

  return (
    <div className="action-section">
      {actionSectionContent.actions.map((action, index) => (
        <div key={index} className="action-box">
          <h3>{action.title}</h3>
          <Link to={action.cta.url}>{action.cta.label}</Link>
        </div>
      ))}
    </div>
  );
}

export default ActionSection;


