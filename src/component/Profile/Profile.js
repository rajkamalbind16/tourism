import React, { useState, useEffect } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Box, TextField, Button, Typography } from '@mui/material';
import './Profile.css';
import image from './avatar.png';
import Comment from '../comment/Comment';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AnimatedAvatar = ({ imageUpdated }) => {
  const name = localStorage.getItem('first_name');
  const [avatarImage, setAvatarImage] = useState(localStorage.getItem('photo') || image);

  useEffect(() => {
    setAvatarImage(localStorage.getItem('profile_images') || image);
  }, [imageUpdated]);
console.log(localStorage)
  return (
    <div className="avatar-container">
      <AvatarEditor
        image={avatarImage}
        width={250}
        height={200}
        borderRadius={100}
        color={[255, 255, 255, 0.6]}
        scale={1}
        rotate={0}
      />
      <div>
        <span className="gradient-text blink" style={{ fontSize: '20px', backgroundImage: 'linear-gradient(135deg, cyan, #71b7e6, #9b59b6, tomato)' }}>
          {`Hii!! ${name}, Welcome,let's Post Something Today`}
        </span>
      </div>
    </div>
  );
};

const Profile = () => {
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState("");
  const [photo, setPhoto] = useState('');
  const id = localStorage.getItem('id');
  const [imageUpdated, setImageUpdated] = useState(false);
  const navigate = useNavigate();

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [showPostedContent, setShowPostedContent] = useState(false);

  const files = [];

  const userId = localStorage.getItem('userId');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handlePost = async () => {
    const formData = new FormData();
    formData.append('profile_image', photo);

    try {
      const response = await axios.post(`https://travel-cg48.onrender.com/user/upload-profile/${userId}`, formData);
      console.log(response.data);
      localStorage.setItem("profile_images", response.data.data.profile_images);
      console.log(localStorage);
      setImageUpdated(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (photo) {
      handlePost(); 
    }
  }, [photo]);

  return (
    <div className="profile-form-container">
      <div className="profiless">
        <h1>Profile</h1>
        <AnimatedAvatar imageUpdated={imageUpdated} />
      </div>
      <div className="form">
        <label>Add photo or Video </label>
        <input type="file" onChange={handleImageChange} />
        <button onClick={handlePost} style={{borderRadius:'15px'}}>Post</button>

   
{/* /dont look */}
      {showPostedContent ? (
        <>
          {selectedImages.length > 0 && (
            <div>
              <h2>Selected Images</h2>
              {selectedImages.map((image, index) => (
                <div key={index}>
                  <img width="400px" height="300px" src={URL.createObjectURL(image)} alt={`Selected Image ${index}`} />
                <Comment/>

                </div>
              ))}
            </div>
          )}

          {selectedVideos.length > 0 && (
            <div>
              <h2>Selected Videos</h2>
              {selectedVideos.map((video, index) => (
                <div key={index}>
                  <video controls>
                    <source  width="400px" height="300px" src={URL.createObjectURL(video)} type={video.type} />
                    Your browser does not support the video tag.
                  </video>
                  <Comment/>
                </div>
              ))}
            </div>
          )}
        </>
      ):null}
      <div>
      
      </div>
      {/* dont look */}
        {/* <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="caption" className="form-label">Caption:</label>
            <input
              type="text"
              id="caption"
              value={caption}
              onChange={handleCaptionChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="file" className="form-label">Post:</label>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="form-input"
              style={{ backgroundColor: 'white', border: '1px solid #ccc',borderRadius: '4px',  padding: '8px', }}
            />
          </div>
          <button type="submit" className="form-button">Post</button>
        </form> */}
      </div>
    </div>
  );
};

export default Profile;
