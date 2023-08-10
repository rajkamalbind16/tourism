import React from 'react';
import './ScrollAd.css';

import Ad1 from '../../footer/pic/6a2cf129.jpeg'

const ScrollAd = () => {
  return (
    <>
     <div className="marquee-container">
      <div className="marquee">
        <span>For Posting Ad just Contact with </span> &nbsp;
        <img src={Ad1} alt="" height={80} width={300}/>
      </div>
    </div>
    
    
    </>
  )
}

export default ScrollAd



