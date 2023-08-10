import React, { useState } from 'react';
import './ProfileForm.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import {Box, TextField, Button, Typography, CardMedia} from "@mui/material"
// import ProfileFormb from './About';
import Profile from '../../Profile/Profile';
import Photo from '../../photo/Photo';
import img from "../../image/andhra.jpg"

import profilepic from './Img/20211115_155259.jpg';
import profileCover from './Img/neven-krcmarek-V4EOZj7g1gw-unsplash.jpg';
import { Link } from 'react-router-dom';
// import CreatePost from './createPost';
import pic01 from '../../picc/p1.jpg';
import pic02 from '../../picc/p2.jpg';
import pic03 from '../../picc/p3.jpg';
import pic04 from '../../picc/p4.jpg';
import pic05 from '../../picc/p5.jpg';
import pic06 from '../../picc/p6.jpg';
import pic07 from '../../picc/p7.jpg';
import pic08 from '../../picc/p8.jpg';
import EditProfile from './ProfileDetails/EditProfile'

const ProfileForm = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('');
  const [Pname, setPName] = useState('');
  const [show,setShow] =useState(false)

  const userId = localStorage.getItem('userID')
  const handleabout=()=>{
setShow(true)

  }
  const images = [pic01,pic02,pic03,pic04,pic05,pic06,pic07,pic08]
  const settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     cssEase: "linear"
   };
  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };
console.log(localStorage)
  return (
    <>
<div  className='profileConatinerrr'>
      <div
        style={{
          position: 'absolute',
          top: -100,
          left: 0,
          width: '100%',
          height: '800px',
          overflow: 'hidden',
          zIndex: -1, // Set a negative z-index to place it at the background
        }}   className='myProfileStyle'
      >
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image} style={{ height: '100vh' }}>
              <img
                src={image}
                alt="Image 1"
                style={{
                  width: '100%',
                  height: '800px',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>

   <div className='profile'>
   <div>
   <img src={img} id='proImages' />
   </div>
   
    <div id='NamePostion'>
   <label id='Profilename'>
   <br/>
        {' '}
        {isEditMode ? (
          <input
            type="text"
            value={name}
            placeholder=' Name'
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <span>{name}</span>
        )}
      </label>
      <br/>

      <label id='ProfilePname'>
        {' '}
        {isEditMode ? (
          <input
            type="text"
            value={Pname}
            placeholder='Nick Name'
            onChange={(e) => setPName(e.target.value)}
          />
        ) : (
          <span>{Pname}</span>
        )}
        <br/>
      </label> &nbsp; &nbsp;
      {isEditMode ? (
        <button id="myBtnProfile" onClick={handleSave} >Save</button>
      ) : (
        <button id="myBtnProfile" onClick={handleEdit}>Edit</button>
      )}

      </div>
   </div>

   <div> <EditProfile/></div>

   <div className='ProfileNavbar' >
    <li><Link to='/post' style={{textDecoration:'none'}}>Post</Link></li>
    <li onClick={handleabout}>About</li>
    <li><Link to='/photo'style={{textDecoration:'none'}}>Photos</Link></li>
    <li><Link to='/video'style={{textDecoration:'none'}}>Videos</Link></li>

   </div>
   <div className='about'>
   <div> <Photo/> </div>
  <div><Profile/></div>  
    
    </div>
    {/* <h1>Create Post</h1>
<CreatePost /> */}



          </>
  );
};

export default ProfileForm;




          
