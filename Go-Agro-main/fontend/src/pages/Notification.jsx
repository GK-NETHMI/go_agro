import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [notificationToDelete, setNotificationToDelete] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/notifications')
      .then((res) => {
        setNotifications(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setNotificationToDelete(id);
    setShowPopup(true);
  };

  const confirmDelete = () => {
    // Call API to delete the notification
    axios.delete(`http://localhost:5000/notifications/${notificationToDelete}`)
      .then(() => {
        // Filter out the deleted notification
        setNotifications(notifications.filter(notification => notification._id !== notificationToDelete));
        setShowPopup(false);
      })
      .catch(error => {
        console.log(error);
        setShowPopup(false);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <style>{`
        .back-button {
          background-color: #28a745;
          color: #fff;
          padding: 4px 16px;
          border-radius: 4px;
          position: absolute;
          left: 16px;
        }
        
        .back-button:hover {
          text-decoration: none;
        }

        .back-icon {
          font-size: 24px;
        }

        .notification-heading {
          text-align: center;
          font-size: 24px;
          color: #28a745;
          margin-bottom: 20px;
          margin-top: 60px;
        }

        .notification-list {
          display: grid;
          gap: 20px;
        }

        .notification-item {
          display: flex;
          align-items: center;
          border: 1px solid #d3d3d3;
          background-color: rgb(210, 219, 210);
          padding: 10px;
          border-radius: 7px;
        }

        .notification-message {
          flex: 1;
        }

        .notification-link {
          color: #11b239;
          margin-right: 50px;
          font-size: large;
        }

        .notification-link:hover {
          text-decoration: underline;
        }

        .notification-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .view-button,
        .delete-button {
          cursor: pointer;
          border-radius: 20px;
          padding: 8px 12px;
        }

        .view-button {
          border: 1px solid #11b239;
        }

        .delete-button {
          color: #f30b2e;
          border: 1px solid #c50f0f;
          margin-left: 10px;
        }

        .delete-button:hover {
          text-decoration: underline;
        }

        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .popup-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          text-align: center;
        }

        .popup-buttons {
          margin-top: 20px;
        }

        .yes-button,
        .no-button {
          color: rgb(20, 18, 18);
          padding: 3px 10px;
          border-radius: 8px;
        }

        .yes-button {
          border: 2px solid red;
          margin-right: 10px;
        }

        .no-button {
          border: 2px solid rgb(37, 34, 34);
        }

        .no-button:hover,
        .yes-button:hover {
          text-decoration: underline;
        }
      `}</style>
      <div>
        <Link to="/" className="back-button">
          <BsArrowLeft className="back-icon" />
        </Link>
      </div>
      <h1 className="notification-heading">My Notification</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="notification-list">
          {notifications.map((notification, index) => (
            <div key={index} className="notification-item">
              <div className="notification-message">{notification.message}</div>

              {notification.onClickPath && (
                <div className="notification-link">
                  <Link to={`/reviews/create/${notification.ordernumber}`}>{notification.onClickPath}</Link>
                </div>
              )}
              <div className="notification-buttons">
                <button className="view-button">
                  <Link to={`/notifications/details/${notification._id}`}>View Full Notification</Link>
                </button>
                <button className="delete-button" onClick={() => handleDelete(notification._id)}>Delete Notification</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to delete this notification?</p>
            <div className="popup-buttons">
              <button className="yes-button" onClick={confirmDelete}>Yes</button>
              <button className="no-button" onClick={() => setShowPopup(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
