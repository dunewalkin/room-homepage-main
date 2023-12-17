import React, { useState, useEffect } from 'react';
import '../styles/main.css';
import angleLeft from '../images/icon-angle-left.svg';
import angleRight from '../images/icon-angle-right.svg';
import data from '../data.json'

const Showcase = () => {
  const [items] = useState(data.showcase);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.desktop;
      img.srcset = `${item.mobile} 600w, ${item.desktop} 1024w`;
    });
  }, [items]);

  function nextSlide() {
    setSlideIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function previousSlide() {
    setSlideIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }

  const currentItem = items[slideIndex];

  return (
    <section className='top-section' key={currentItem.id}>
      <div className='main-pic-wrapper'>
        <picture>
          <source media='(min-width: 600px)' srcSet={currentItem.desktop} />
          <img className='main-pic' src={currentItem.mobile} alt={currentItem.title} />
        </picture>
      </div>

      <div className='btn-wrapper'>
        <button onClick={previousSlide} className='control-btn'>
          <img src={angleLeft} alt='Previous' />
        </button>
        <button onClick={nextSlide} className='control-btn'>
          <img src={angleRight} alt='Next' />
        </button>
      </div>

      <div className='top-content-container'>
        <div className='top-content'>
          <h1 className='heading-l'>{currentItem.title}</h1>
          <p className='content-secondary'>{currentItem.desc}</p>
          <button className='order-btn'>
            Shop now
            <svg className='arrow' width='40' height='12' xmlns='http://www.w3.org/2000/svg'>
              <path d='M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z' />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
