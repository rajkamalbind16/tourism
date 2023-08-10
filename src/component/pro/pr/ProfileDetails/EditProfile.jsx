import React, { useState, useEffect } from 'react';
import './EditProfile.css';
import { RiUpload2Line } from 'react-icons/ri';
import { BsFillBagFill, BsHeartFill, BsCalendarDayFill } from 'react-icons/bs';
import { MdSchool, MdHome, MdLocationPin, MdCall } from 'react-icons/md';
import axios from 'axios';
import moment from 'moment/moment';

const EditProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('');
  const [Pname, setPName] = useState('');
  const [bio, setBio] = useState('');
  const [work, setWork] = useState('');
  const [lives, setLives] = useState('');
  const [from, setFrom] = useState('');
  const [school, setSchool] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [mno, setMno] = useState('');
  const [dob, setDob] = useState('');
  const [responseData, setResponseData] = useState(null);

  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

  const handleCoverImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedCoverImage(file);
    localStorage.setItem('cover_photo', event.target.result);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
      localStorage.setItem('photo', e.target.result);
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const profileData = JSON.parse(localStorage.getItem('profileData'));
    console.log(localStorage)
    console.log(profileData)
    if (profileData) {
      setName(profileData.name);
      setPName(profileData.Pname);
      setBio(profileData.bio);
      setWork(profileData.work);
      setLives(profileData.lives);
      setFrom(profileData.from);
      setSchool(profileData.school);
      setMaritalStatus(profileData.maritalStatus);
      setMno(profileData.mno);
      setDob(profileData.dob);
    }
  }, []);

  const handleEdit = () => {
    setIsEditMode(true);
  };
  let [year, month, date] = dob.split(`-`)

  let day = date + "-" + month

  const handleSave = async () => {

    setIsEditMode(false);

    const updatedProfileData = {
      name,
      Pname,
      bio,
      worksAt: work,
      liveIn: lives,
      from,
      school,
      maritalStatus,
      mno,
      dob,
      dobNew: day,
      cover_photo: selectedCoverImage

    };

    try {
      console.log(userId);
      const response = await axios.put(
        `https://travel-cg48.onrender.com/user/update/${userId}`,
        updatedProfileData
      );

      window.alert(response.data.message);
      window.location.reload()
      // Handle success response
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }

  const userId = localStorage.getItem('userId');
  console.log(dob, "");
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(userId)
        const response = await axios.get(
          `https://travel-cg48.onrender.com/user/get/${userId}`
        );
        console.log(response.data.data)
        setResponseData(response.data.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    if (responseData) {
      console.log(responseData);
    }
  }, [responseData]);

  return (
    <>
      <div className='profileDetails'>

        <div className='coverImagess'>
          {isEditMode ? (
            <input type='file' onChange={handleCoverImageUpload} />
          ) : (
            <span>
              {selectedCoverImage && (
                <img
                  src={responseData.cover_photo}
                  alt='Uploaded'
                  id='coverImagess'
                />
              )}
            </span>
          )}
        </div>

        <div className='profilee'>
          {isEditMode ? (
            <input type='file' onChange={handleImageUpload} />
          ) : (
            <span>
              {selectedImage && (
                <img
                  src={`https://travel-cg48.onrender.com/profile_images/${responseData.photo}`}
                  alt='Uploaded'
                  id='profiledp'
                />
              )}
            </span>
          )}

          <div id='NamePositions'>
            <label id='Profilename'>
              {isEditMode ? (
                <input
                  type='text'
                  value={name}
                  placeholder='Name'
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <span id='editMyname'>
                  {responseData && responseData.first_name}{' '}
                  {responseData && responseData.last_name}
                </span>
              )}
            </label>
            &nbsp;

            <label id='ProfilePname'>
              {isEditMode ? (
                <input
                  type='text'
                  value={Pname}
                  placeholder='Nick Name'
                  onChange={(e) => setPName(e.target.value)}
                />
              ) : (
                <span id='editMyPname'>&#10088;&nbsp;{Pname}&nbsp;&#10089;</span>
              )}
            </label>
            <br />

            <label>
              Bio: {isEditMode ? (
                <textarea
                  value={bio}
                  placeholder='Bio'
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              ) : (
                <span>{bio}</span>
              )}
            </label>
            <br />
            <div className='email'>
              <label>

                Email:{' '}
                {!isEditMode ? (

                  <span>{responseData ? responseData.email : ''}</span>
                ) : (

                  null
                )}
              </label>
            </div>

            <label>
              <BsFillBagFill />
              Works at:{' '}
              {isEditMode ? (
                <input
                  type='text'
                  value={responseData && responseData.worksAt}
                  onChange={(e) => setWork(e.target.value)}
                />
              ) : (
                <span>{responseData ? responseData.worksAt : ''}</span>
              )}
            </label>
            <br />

            <label>
              <MdSchool />
              Went to:{' '}
              {isEditMode ? (
                <input
                  type='text'
                  value={responseData && responseData.wentTo}
                  onChange={(e) => setSchool(e.target.value)}
                />
              ) : (
                <span>{responseData ? responseData.wentTo : ''}</span>
              )}
            </label>
            <br />

            <label>
              <MdHome />
              Lives in:{' '}
              {isEditMode ? (
                <input
                  type='text'
                  value={responseData && responseData.liveIn}
                  onChange={(e) => setLives(e.target.value)}
                />
              ) : (
                <span>{responseData ? responseData.liveIn : ''}</span>
              )}
            </label>
            <br />

            <label>
              <MdLocationPin />
              From:{' '}
              {isEditMode ? (
                <input
                  type='text'
                  value={responseData && responseData.from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              ) : (
                <span>{responseData ? responseData.from : ''}</span>
              )}
            </label>
            <br />

            {/* <label>
              <BsHeartFill /> MaritalStatus:{' '}
              {isEditMode ? (
                <input
                  type='text'
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                />
              ) : (
                <span>{responseData ? responseData.maritalStatus : ''}</span>
              )}
            </label> */}


            <label>
              <MdCall />
              Mobile No.{' '}
              {isEditMode ? (
                <input
                  type='mobile'
                  value={responseData && responseData.mobile}
                  onChange={(e) => setMno(e.target.value)}
                />
              ) : (
                <span>{responseData ? responseData.mobile : ''}</span>
              )}
            </label>
            <br />

            <label>
              <BsCalendarDayFill />DOB:{' '}
              {isEditMode ? (
                <input
                  type='date'
                  value={moment(responseData && responseData.dob).format()}
                  onChange={(e) => setDob(e.target.value)}
                />
              ) : (
                <span>{responseData ? responseData.dobNew : ''}</span>
              )}
            </label>
            <br />

            {isEditMode ? (
              <button className='saveButton' onClick={handleSave}>
                Save
              </button>
            ) : (
              <button className='editButton' onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
