import React from 'react';
import ResponsiveGif from '../leetcodebadge/gifcomponent';
// image assets
import spark_developer_badge from './asset/spark_developer_badge.png'
import spark_developer_certificate from './asset/spark_developer_certificate.pdf'

const certificationGallery = () => {
  const badge_images = [

    { src: spark_developer_badge, alt: 'Description 1' , certificate_image : spark_developer_certificate }

    // Add more GIFs as needed
  ];

  return (
    <div className="container">
         <h2 className="center-align">My Certifications</h2>
      <div className="row">
        {badge_images.map((badge, index) => (
          <div  key={index} className="col s12 m3 l3 center-align">
            <ResponsiveGif src={badge.src} alt={badge.alt} />
            <a href={badge.certificate_image} target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default certificationGallery;