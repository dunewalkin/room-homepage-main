import React from 'react';
import '../styles/main.css';
import lightImage from '../images/image-about-light.jpg';
import darkImage from '../images/image-about-dark.jpg';
import data from '../data.json';

const Footer = () => {
  const { title, description } = data.footer;

  return (
    <section className='footer-section'>
      <div className='left-pic-wrapper'>
        <img className='left-pic' src={darkImage} alt='Dark' />
      </div>

      <div className='footer-content-container'>
        <div className='footer-content'>
          <h2 className='heading-m'>{title}</h2>
          <p className='content-main'>{description}</p>
        </div>
      </div>

      <div className='right-pic-wrapper'>
        <img className='right-pic' src={lightImage} alt='Light' />
      </div>
    </section>
  );
};

export default Footer;
