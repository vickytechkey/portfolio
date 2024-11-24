import React from 'react';
import ResponsiveGif from './gifcomponent';
import top50sql from './asset/Top_SQL_50.gif'
const GifGallery = () => {
  const gifs = [
    { src: top50sql, alt: 'Description 1' }
    // Add more GIFs as needed
  ];

  return (
    <div className="container">
         <h2 className="center-align">My LeetCode Badges</h2>
      <div className="row">
        {gifs.map((gif, index) => (
          <div key={index} className="col s12 m3 l3">
            <ResponsiveGif src={gif.src} alt={gif.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifGallery;