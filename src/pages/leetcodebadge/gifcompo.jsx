import React from 'react';
import ResponsiveGif from './gifcomponent';
import top50sql from './asset/Top_SQL_50.gif'
import day50badge from './asset/day50.gif'
import advancesql50 from './asset/advancesql50.jpeg'
import day502025 from './asset/202550days.gif'
import day1002025 from './asset/2025100days.gif'
const GifGallery = () => {
  const gifs = [
    { src: day502025, alt: 'Description 1' },
    { src: top50sql, alt: 'Description 1' },
    { src: day50badge, alt: 'Description 1' },
    { src: advancesql50, alt: 'Description 1' },
    { src: day1002025, alt: 'Description 1' }
    
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