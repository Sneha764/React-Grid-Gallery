import React from 'react';
import './ImageCard.css';

const ImageCard = ({ title, description, url }) => {
  return (
    <div className="image-card">
      <img src={url} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ImageCard;
