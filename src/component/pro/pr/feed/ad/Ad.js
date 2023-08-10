import React from 'react'
import Styles from "./ad.module.css"
import Ad1 from "./shivila.png"

const Ad = () => {
  return (
    <div>
      <div className={Styles.marquee}>
      <div className={Styles.marquee}>
        <p>For  </p> 
        <p>Posting </p>
        <p>Ad </p>
        <p>just </p>
        <p>Contact</p>
        <p> with</p>
        &nbsp;
        <img src={Ad1} alt="" height={40} width={100}/>
      </div>
    </div>
    </div>
  )
}

export default Ad
