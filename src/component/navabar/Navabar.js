import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

import { Box, Tooltip, IconButton, Avatar, colors } from "@mui/material";
import Styles from "./navabar.module.css"
import trip from "../image/trip.svg"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import Musicpage from '../home/music/Musicpage';
import axios from 'axios';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { ColorStyle } from 'quill';

import { useDispatch } from 'react-redux';
import { RiCloseCircleLine } from 'react-icons/ri'
import DayNightButton from './nightMode';


import { RiNotification2Line } from 'react-icons/ri';
import NotificationPanel from './Notification';

import userr1 from '../pic/aghori.png';
import { Margin } from '@mui/icons-material';


const Navbar = () => {

  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchButtonClick = () => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: searchInput });
  };


  const [hide, setHide] = useState(false);
  const [click, setClick] = useState(false);
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const name = localStorage.getItem('first_name');
  const isLogin = localStorage.getItem('isLogin');

  const handleOpenUserMenu = () => {
    if (isLogin) {
      navigate('/profileForm');
    } else {
      navigate('/form');
      window.alert('You have to login first');
    }
  };

  const handleClick = () => setClick(!click);



  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      console.log('logOut');
      localStorage.clear();
      window.location.href = '/';
      console.log('home');
    }
  };


  const [show, setshow] = useState(false)
  const handleShow = () => {
    setshow(true)
    setactive(true)
  }
  const [active, setactive] = useState(false)
  const showActive = () => {
    setactive(false)
    setshow(false)
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };



  // const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  //   const [notificationCount, setNotificationCount] = useState(3); // Example notification count, you can use your own logic to determine the count

  //   const toggleNotificationPanel = () => {
  //     setShowNotificationPanel(!showNotificationPanel);
  //   };

  //   const handleNotificationClick = () => {
  //     toggleNotificationPanel();
  //     setNotificationCount(0); // Reset the notification count when the panel is opened
  //   };

  //   const handleCloseNotificationPanel = () => {
  //     setShowNotificationPanel(false);
  //     setNotificationCount(null);
  //   };
  const userId = localStorage.getItem('userId');
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {


    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      console.log(userId)
      const response = await axios.post(
        `https://travel-cg48.onrender.com/notification/get`, {
        userId: userId,
        key: 1
      }
      );
      console.log(response.data.data)
      setResponseData(response.data);

    } catch (error) {
      console.error(error);
    }
  };
  const handleRead = async (id) => {
    try {
      console.log(userId)
      const response = await axios.post(
        `https://travel-cg48.onrender.com/notification/mark-read`, {
        userId: userId,
        notificationId: id
      }
      );
      console.log(response.data.data)
      fetchData()

    } catch (error) {
      console.error(error);
    }
  };
  const Notification = ({ notifications }) => {
    const [isNotiOpen, setIsNotiOpen] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState(null);

    const handleNotiClick = (notification) => {
      setSelectedNotification(notification);

      setIsNotiOpen(true);
    };

    const handleNotiClose = () => {

      setIsNotiOpen(false);
      setSelectedNotification(null);
    };
    let array = [];
    responseData && responseData.data && responseData.data.forEach(element => {
      if (element.isRead === false) {
        return array.push(element);
      }
    });


    console.log(array, "totalUnread");
    console.log(array.length, "length");



    return (
      <div className={Styles.notification}>
        {isNotiOpen && selectedNotification ? (
          <div style={{ background: "white", textAlign: "center" }} className={Styles.dropdownmenu}>
            <div className="modal-content">
              <button onClick={handleNotiClose} ><GrClose /> </button>

              <h2>Notification </h2>
              {
                selectedNotification && selectedNotification?.birthday === true && <div style={{ background: "gray" }}>
                  <b>Happy Birthday</b> <br />
                  <p>Today is you birthday</p>

                  <hr />
                </div>
              }
              {
                selectedNotification && selectedNotification?.data?.map((i, key) => {
                  return i.isRead === false ? <div idx={key._id} style={{ background: "gray" }} onClick={() =>

                    handleRead(i._id)}>
                    <b>{i.title}</b> <br />
                    <p>  {i.body}</p>
                    <hr />
                  </div> : <div idx={key._id}>
                    <b>{i.title}</b> <br />
                    <p>  {i.body}</p>
                    <hr />
                  </div>
                })
              }


              {/* <img src={selectedNotification.proImage} height='50px' width='50px' /> */}

              {/* <h3>Likes:</h3>
              <ul>
                {selectedNotification.likes.map((like, index) => (
                  <li key={index}>{like}</li>
                ))}
              </ul>
              <h3>Comments:</h3>
              <ul>
                {selectedNotification.comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul> */}
            </div>
          </div>
        ) : (
          <div className={Styles.notificationbar}>

            <div className="notification-icon" onClick={() => handleNotiClick(notifications)}>
              {isNotiOpen && selectedNotification ? (
                <RiNotification2Line />
              ) : (
                <faBell />
              )}
              <span className="notification-count"><RiNotification2Line />{array.length}</span>
            </div>

          </div>
        )}
      </div>
    );
  };



  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.left}>
          <Link to="/">
            <img className={Styles.nimg} src={trip} alt="Logo" />
          </Link>
        </div>
        <div className={Styles.right}>

          <ul>
            <li >
              <div className={Styles.search}>
                <input
                  type="text"
                  placeholder="Where to"
                  className={Styles.input} // Apply specific CSS class for the input field
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <button className={`${Styles.searchButton} searchButton`} type="submit" onClick={handleSearchButtonClick}>
                  <AiOutlineSearch />
                </button>
              </div>
            </li>
            <li className="hvr-pulse">
              <Link to="/" style={{  textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li className={Styles.advanture}>
              <Link to="/Advanture" style={{ textDecoration: 'none' }}>
                Adventure
              </Link>
            </li>
            <li className={Styles.feed}>
              <Link to="/Feeds" style={{  textDecoration: 'none' }}>
                Feeds
              </Link>
            </li>
            <li className={Styles.about}>
              <Link to="/About" style={{  textDecoration: 'none' }}>
                About
              </Link>
            </li>
            <li>
            <Musicpage />
            </li>

            <li>
              {/* <button onClick={handleNotificationClick}>
            <RiNotification2Line size={20} />
            {notificationCount > 0 && (
              <span className={Styles.notificationCount}>{notificationCount}</span>
            )}
          </button>
          {showNotificationPanel && (
            <>
              <button className={Styles.closeButton} onClick={handleCloseNotificationPanel}>
                Close
              </button>
              <NotificationPanel />
            </>
          )} */}
              <Notification notifications={responseData} />





            </li>
            <li>
              <div
                onClick={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="dropdown"
              >
                <button className="dropdown-toggle" style={{borderRadius :'15px'}}>search by state</button>

                {isOpen && (
                  <div className={Styles.dropdownmenu}>
                    <Link style={{ textDecoration: 'none' }} to="/arunachalPradesh">
                      <p>Arunachal Pradesh </p>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/jhharkhand">
                      <p> Jhharkhand</p>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/nagaland">
                      <p>Nagaland </p>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/bihar">
                      <p>Bihar </p>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/tamilNadu">
                      <p> Tamil Nadu</p>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/sikkim">
                      <p>Sikkim </p>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/jammu">
                      <p>Jammu </p>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/Goa">
                      <p>Goa </p>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/kerala">
                      <p>Kerala </p>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/maharashtra">
                      <p>Maharashtra </p>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/mP">
                      <p> MP</p>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/andhra">
                      <p>Andhra </p>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to="/uttarakhand">
                      <p>Uttarakhand </p>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to="/bangalore">
                      <p>Karnataka </p>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to="/rajsthan">
                      <p>Rajsthan </p>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to="/assam">
                      <p>Assam </p>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to="/odisha">
                      <p>Odisha </p>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to="/westBengal">
                      <p>West Bengal </p>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to="/Telangana">
                      <p>Telangana </p>
                    </Link>

                  </div>
                )}
              </div>
            </li>
            <li className={Styles.hi}>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                    <h6>{name ? `Hi!! ${name}` : 'Hi Guest!!'}</h6>
                  </IconButton>
                </Tooltip>
              </Box>
            </li>
            {isLogin ? (
              <li className={Styles.hideh}>
                <Link onClick={handleLogout} style={{ color: 'black', textDecoration: 'none' }}>
                  Logout
                </Link>
              </li>
            ) : (
              <li className={Styles.hideh}>
                <Link to="/form" style={{ color: 'black', textDecoration: 'none' }}>
                  Sign In
                </Link>
              </li>
            )}



          </ul>










          
        </div>
        <div className={Styles.last}>
        
          {active ? <div onClick={showActive} style={{ color: 'black', fontSize: '20px' }}></div> : <div onClick={handleShow} ><FaBars size={20} style={{ color: 'black' }} /> </div>}




          {show && <div><ul className={Styles.active} style={{ listStyle: 'none' }}>
            <li onClick={showActive} style={{ color: "white", fontSize: "150%" }}>
              <RiCloseCircleLine />
            </li>
            <li >
              <div className={Styles.search}>
                <input
                  type="text"
                  placeholder="Where to"
                  className={Styles.input} // Apply specific CSS class for the input field
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <button className={`${Styles.searchButton} searchButton`} type="submit" onClick={handleSearchButtonClick}>
                  <AiOutlineSearch />
                </button>
              </div>

            </li>
            <li>
           
            </li>
            <li><DayNightButton />
            </li>
            <li className={Styles.hideh}>
              <Link to="/" style={{ textDecoration: 'none',Margin:'80px', }}>
                Home
              </Link>
            </li>
            <li className={Styles.hideh}>
              <Link to="/Advanture" style={{ textDecoration: 'none' }}>
                Adventure
              </Link>
            </li>
            <li className={Styles.hideh}>
              <Link to="/Feeds" style={{ textDecoration: 'none' }}>
                Feeds
              </Link>
            </li>
            <li className={Styles.hideh}>
              <Link to="/About" style={{ textDecoration: 'none' }}>
                About
              </Link>
            </li>
            <li className={Styles.hideh}>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                    <h6 style={{ color: "white" }}>{name ? `Hi!! ${name}` : 'Hi Guest!!'}</h6>

                  </IconButton>
                </Tooltip>
              </Box>
            </li>
            {isLogin ? (
              <li style={{ color: "white" }} className={Styles.lihideh}>
                <Link to="/form" onClick={handleLogout} style={{ textDecoration: 'none' }}>
                  Logout
                </Link>
              </li>
            ) : (
              <li style={{ color: "white" }} className={Styles.lihideh}>
                <Link to="/form" style={{ textDecoration: 'none' }}>
                  Sign In
                </Link>
              </li>
            )}

            <li className={Styles.lihome}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li className={Styles.liadvanture}>
              <Link to="/Advanture" style={{ textDecoration: 'none' }}>
                Adventure
              </Link>
            </li>
            <li className={Styles.lifeed}>
              <Link to="/Feeds" style={{ textDecoration: 'none' }}>
                Feeds
              </Link>
            </li>
            <li className={Styles.liabout}>
              <Link to="/About" style={{ textDecoration: 'none' }}>
                About
              </Link>
            </li>
            <li>
              <a href="/contact" style={{ textDecoration: 'none' }}>ContactUs</a>
            </li>
            <li>
              <a href='/' style={{ textDecoration: 'none' }}>Destination</a>
            </li>
            <li>
              <a href='/' style={{ textDecoration: 'none' }}>Review</a>
            </li>
            <li>
              <a href='/' style={{ textDecoration: 'none' }}>Alert</a>
            </li>
            <li>
              <a href='/' style={{ textDecoration: 'none' }}>Trip</a>
            </li>
            <li>
              <a href='/' style={{ textDecoration: 'none' }}>Basket</a>
            </li>
          </ul> </div>}
        </div>


      </div>

      {/* <div className="header">
          <div className="container">
            <div className={Styles.left}>
              <Link to="/">
                <img width="80%" src={trip} alt="Logo" />
              </Link>
            </div>
            <div className="navv">
              <nav>
                <ul className="containerr">
                  <li>
                    <div className="search-bar">
                      <input type="text" placeholder="Where to" style={{ width: '150px', height: '10px' }} />
                      <button type="submit">
                        <AiOutlineSearch />
                      </button>
                    </div>
                  </li>
                  <li>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Advanture" style={{ textDecoration: 'none' }}>
                      Adventure
                    </Link>
                  </li>
                  <li>
                    <Link to="/Feeds" style={{ textDecoration: 'none' }}>
                      Feeds
                    </Link>
                  </li>
                  <Link to="/About" style={{ textDecoration: 'none' }}>
                      About
                    </Link>
                  <li>
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                          <h6>{name ? `Hi!! ${name}` : 'Hi Guest!!'}</h6>
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </li>
                  {isLogin ? (
                    <li>
                      <Link to="/form" onClick={handleLogout} style={{ textDecoration: 'none' }}>
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/form" style={{ textDecoration: 'none' }}>
                        Sign In
                      </Link>
                    </li>
                  )}
                </ul>
    
       {show && <div><ul className={ 'nav active'} style={{ listStyle: 'none' }}>
       <li onClick={showActive} style={{color: "white"}}>
       closed
       </li>
              <li>
                <a href="/contact" style={{ textDecoration: 'none' }}>ContectUs</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Destination</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Review</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Alert</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Trip</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Basket</a>
              </li>
            </ul> </div> } 
    
            </nav>
        
            </div>
            
             <Musicpage />
            
           {active ?<div onClick={showActive} style={{color: "white"}}>X</div> :<FaBars onClick={handleShow } size={10} /> }
    
        
    
            
        </div>
    
        </div> */}
    </>

  )
}

export default Navbar;