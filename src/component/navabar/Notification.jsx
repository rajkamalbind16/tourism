import React, { useState } from 'react';
import './notification.css';
import notif1 from '../pic/aghori.png';

const NotificationPanel = () => {
  const [showModal, setShowModal] = useState(false);
  const [notificationData, setNotificationData] = useState(null);

  // Function to handle opening the modal and setting the notification data
  const handleOpenModal = (notification) => {
    setShowModal(true);
    setNotificationData(notification);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setNotificationData(null);
  };

  // Array of dummy notifications (replace with your actual notification data)
  const notifications = [
    {
      id: 1,
      user: 'Aman Bind',
      likes: 1,
      comments: 'jay ho!!!!',
      img: notif1,
    },
    {
      id: 2,
      user: 'Aghori',
      likes: 1,
      comments: 'very good',
      img: notif1,
    },
    {
      id: 3,
      user: 'Aghorii',
      wish: 'Happy Birthday',
      img: notif1,
    },
    // Add more notifications as needed
  ];

  return (
    <div className='notificationBar'>
      {/* Render the list of notifications */}
      {notifications.map((notification) => (
        <div key={notification.id}>
          <p>
            <img src={notif1} alt='' className='notiProfile' /> &nbsp; {notification.user}
          </p>
          {notification.wish && <p>{notification.wish}</p>}
          <button onClick={() => handleOpenModal(notification)}>Dekhle Bhai</button>
        </div>
      ))}

      {/* Modal */}
      {showModal && (
        <div className='notifi'>
          {/* Render the modal content */}
          <div className='notifiDetail'>
            <h2 style={{ color: 'blue' }}>Notification</h2>
            {notificationData && (
              <div>
                <p>{notificationData.user}</p>
                {notificationData.likes && <p>👍🏽 {notificationData.likes}</p>}
                {notificationData.comments && <p>📝 {notificationData.comments}</p>}
                {notificationData.wish && <p>{notificationData.wish}</p>}
              </div>
            )}
            <button onClick={handleCloseModal}>Close</button> {/* Close button */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;
