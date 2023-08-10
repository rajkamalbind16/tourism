import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';
import { capitalize } from "@mui/material";
import Posts from "./Posts";

function CreatePost() {
  const [caption, setCaption] = useState('');
  const [photo, setPhoto] = useState('');
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('post', photo);

    try {
      const response = await axios.post(`https://travel-cg48.onrender.com/user/post/add/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data.status);
      if(response.data.status === true){
        window.alert(response.data.message)
        window.location.reload(); 
      }else{
        window.alert(response.data.message)
      }
    } catch (error) {
      console.error(error);
    }
  };
 
  const fetchPosts = async () => {
    try {
      console.log(userId);
      const response = await axios.get(`https://travel-cg48.onrender.com/user/post/get/${userId}`);
      console.log(response)
      setPosts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [userId]);

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Post:</h1>
          <label>
            Caption:
            <input type="text" value={caption} onChange={handleCaptionChange} />
          </label>
          <br />
          <label>
            Photo:
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Posts posts={posts} />
    </>
  );
}

export default CreatePost;
