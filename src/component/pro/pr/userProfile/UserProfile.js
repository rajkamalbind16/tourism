import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import { RiUpload2Line } from 'react-icons/ri';



import { BsFillBagFill, BsHeartFill, BsCalendarDayFill } from 'react-icons/bs';
import { GrUpdate } from 'react-icons/gr';
import { MdSchool, MdAdd, MdHome, MdEdit, MdUpdate, MdDelete, MdLocationPin, MdCall, MdEmail } from 'react-icons/md';

const UserProfile = () => {
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
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');


  // imageuplard 
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);


  const handleCoverImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedCoverImage(e.target.result);
      localStorage.setItem('uploadedImage', e.target.result);
      // sessionStorage.setItem('uploadedImage', e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
      // Store image in localStorage
      localStorage.setItem('uploadedImage', e.target.result);
      // Store image in sessionStorage
      sessionStorage.setItem('uploadedImage', e.target.result);
    };

    reader.readAsDataURL(file);
  };


  const [hobbies, setHobbies] = useState('');

  useEffect(() => {
    // Load data from local storage
    const profileData = JSON.parse(localStorage.getItem('profileData'));
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
      setEmail(profileData.email);

    }
  }, []);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  }




  const profileData = {
    name,
    Pname,
    bio,
    work,
    lives,
    from,
    school,
    maritalStatus,
    mno,
    dob,
    email,
  };
  localStorage.setItem('profileData', JSON.stringify(profileData));




  // hobby
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      if (editIndex === -1) {
        setTasks([...tasks, inputValue]);
      } else {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = inputValue;
        setTasks(updatedTasks);
        setEditIndex(-1);
      }
      setInputValue('');
    }
  };

  const handleEditTask = (index) => {
    setInputValue(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };


  return (
    <>
      <div className='profileDeatils'>
        <div className='coverImages'>
          {/* <img src={profileCover} id="coverImages" /> */}

          <div>

            {isEditMode ? (
              <input type="file" onChange={handleCoverImageUpload} />

            ) : (
              <span>      {selectedCoverImage && <img src={selectedCoverImage} alt="Uploaded" id='coverImages' />}
              </span>
            )}

            {/* <input type="file" onChange={handleCoverImageUpload}  /> */}
            {/* {selectedCoverImage && <img src={selectedCoverImage} alt="Uploaded" id='coverImages' />} */}
          </div>

        </div>

        <div className='profile'>
          {/* <img src={profilepic} id='proImages' alt='Profile Picture' /> */}


          {isEditMode ? (
            <input type="file" onChange={handleImageUpload} />

          ) : (<div> {selectedImage && <img src={selectedImage} alt="Uploaded" id='profiledp' />}
          </div>
          )}

          <div id='NamePostion'>
            <label id='Profilename'>
              {isEditMode ? (
                <input
                  type='text'
                  value={name}
                  placeholder='Name'

                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <span id='editMyname'>{name}</span>
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
              {isEditMode ? (
                <textarea
                  value={bio}
                  placeholder='Bio'
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              ) : (
                <span>{bio}</span>
              )}
            </label>
          </div>
        </div>

        <hr />

        <div className='detailsDiv'>

          <p style={{ fontSize: '240x', fontWeight: 'bolder' }}>Details</p>

          <br />

          <label>
            <BsFillBagFill />
            Works at:{' '}
            {isEditMode ? (
              <input
                type='text'
                value={work}
                onChange={(e) => setWork(e.target.value)}
              />
            ) : (
              <span>{work}</span>
            )}
          </label>
          <br />

          <label>
            <MdSchool />
            Went to{' '}
            {isEditMode ? (
              <input
                type='text'
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              />
            ) : (
              <span>{school}</span>
            )}
          </label>
          <br />

          <label>
            <MdHome />
            Lives in{' '}
            {isEditMode ? (
              <input
                type='text'
                value={lives}
                onChange={(e) => setLives(e.target.value)}
              />
            ) : (
              <span>{lives}</span>
            )}
          </label>
          <br />

          <label>
            <MdLocationPin />
            From{' '}
            {isEditMode ? (
              <input
                type='text'
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            ) : (
              <span>{from}</span>
            )}
          </label>
          <br />

          <label>
            maritalStatus{' '} <BsHeartFill />{' '}
            {isEditMode ? (
              <input
                type='text'
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
              />
            ) : (
              <span>{maritalStatus}</span>
            )}
          </label>
          <br />

          <label>
            <MdCall />{' mno'}
            {isEditMode ? (
              <input
                type='tel'
                value={mno}
                onChange={(e) => setMno(e.target.value)}
              />
            ) : (
              <span>{mno}</span>
            )}
          </label>
          <br />


          <label>
            <MdEmail />{'email '}
            {isEditMode ? (
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <span>{email}</span>
            )}
          </label>
          <br />

          <label>
            <BsCalendarDayFill />:{'dob '}
            {isEditMode ? (
              <input
                type='date'
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            ) : (
              <span>{dob}</span>
            )}
          </label>
          <br />

          <p style={{ fontSize: '240x', fontWeight: 'bolder' }}>Hobby</p>
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter Hobbies"
              id='hobbyInput'
            />
            <button onClick={handleAddTask} id='hobbyBtn1' >{editIndex === -1 ? <MdAdd /> : <MdUpdate />}</button>
            <ul id='liHobby'>
              {tasks.map((task, index) => (
                <li key={index} >
                  {task}
                  <button onClick={() => handleEditTask(index)} id='hobbyBtn'><MdEdit /></button>
                  <button onClick={() => handleDeleteTask(index)} id='hobbyBtn'><MdDelete /></button>
                </li>
              ))}
            </ul>

          </div>
        </div>
        {isEditMode ? (
          <button onClick={handleSave} id='myBtnProfile'>
            Save
          </button>
        ) : (
          <button onClick={handleEdit} id='myBtnProfile'>
            Edit
          </button>
        )}
      </div>



    </>
  );
};

export default UserProfile;