import React from 'react'
import './Fotter.css';
import loogo from './pic/6a2cf129.jpeg';
import { GrLinkTop } from 'react-icons/gr';

import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
const Footer = () => {

  // scroll up 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });
  };


  return (
    <>
      <div className='footerr'>
        <div className='mainFooter'>
          <div className='footerDiv'>
            <h3>Information</h3>
            <a style={{ textDecoration: "none", color: "black" }} href='/about'>About</a>
            <p>Press</p>
            <p>Resources and Policies</p>
            <p>Careers</p>
            <p>Trust & Safty</p>
            <a style={{ textDecoration: "none", color: "black" }} href='/contact'>Contact us</a>
          </div>
          <div className='footerDiv'>
            <h3> Expolre</h3>
            <p> Write a review</p>
            <p>Add a Place</p>
            <p>Join</p>
            <p>Travellers' Choice</p>
            <p>GreenLeaders</p>
          </div>
          <div className='footerDiv'>
            <h3>Do Business With Us</h3>
            <p>Owners & DMO/CVB</p>
            <p>Business Advantage</p>
            <p>Sponsored Placements</p>
            <p>Access our Content API</p>
          </div>
        </div>
        <div className='lowerFotter' >
          <a href="https://shivila.com/" target='_blak'
            class="logo">
            <img src={loogo} alt="Logo" />
          </a>
          <div class="copy-right">
            Designed by SHIVILA TECHNOLOGIES PRIVATE LIMITED.
          </div>
        </div>
      </div>



      <button onClick={handleClick} style={{ display: isVisible ? 'block' : 'none', backgroundColor: 'transparent', border: 'none' }}>
        <GrLinkTop style={{ fontSize: '30px' }} />
      </button>


    </>
  )
}

export default Footer