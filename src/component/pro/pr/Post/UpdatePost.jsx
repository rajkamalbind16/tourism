import React ,{useState} from "react";
import axios from "axios";

import { useNavigate } from 'react-router-dom';
import './CreatePost.css'
function UpdatePost() {
  const [caption, setCaption] = useState('');
  const [photo, setPhoto] = useState(null);

  const userId = localStorage.getItem('userId');

  
    const navigate = useNavigate();

    
  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handlePhotoChange = (e) => {
    if (e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('photo', photo);

    try {
      const response = await axios.post(`https://travel-cg48.onrender.com/user/post/add/${userId}`, formData);
      console.log(response.data); // Do something with the response if needed
    } catch (error) {
      console.error(error);
    }

    // Reset the form inputs
    setCaption('');
    setPhoto(null);
  };

  return (
    <div class="form-container">
  <form onSubmit={handleSubmit}>
    <h1>Update Form</h1>
    <label>
      Caption:
      <input type="text" value={caption} onChange={handleCaptionChange} />
    </label>
    <br />
    <label>
      Photo:
      <input type="file" onChange={handlePhotoChange} />
    </label>
    <br />
    <button type="submit">Update</button>
  </form>
</div>
  );
}

export default UpdatePost ;