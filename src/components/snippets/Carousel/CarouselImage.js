import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CarouselImage.css'; // Assuming you have some CSS to style the image

function ExampleCarouselImage({ text }) {
    
    let imagePath;

    switch (text){
        case 'Get your visas on time, that is a promise':
            imagePath = '/images/banner-1.jpg'
            break;
        case 'Let’s Explore Your Holiday Trip':
            imagePath = '/images/banner-2.jpg'
            break;
        case 'Receive your visas promptly, we guarantee it':
            imagePath = '/images/destination-4.jpg'
            break;
        default:
            imagePath = '/images/banner-1.jpg';
    }


  return (
    <div className="example-carousel-image">
      <img
        className="d-block w-100"
        src={`${process.env.PUBLIC_URL}${imagePath}`}
        alt={text}
      />
      <div className="carousel-text-overlay">
        {text}
      </div>
    </div>
  );
}

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
