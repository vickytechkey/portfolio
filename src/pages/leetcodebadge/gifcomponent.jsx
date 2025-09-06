import React from 'react';
import './ResponsiveGif.css';

const ResponsiveGif = ({ src, alt }) => {
  return (
    <div className="responsive-gif">
       <img src={src} alt={alt} className="badge-img" />
    </div>
  );
};

export default ResponsiveGif;