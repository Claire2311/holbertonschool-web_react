import { useSelector, useDispatch } from "react-redux";
import closeImage from "../../assets/close-icon.png";
import NotificationItem from "../NotificationItem/NotificationItem";
import { markNotificationAsRead } from "../../features/notifications/notificationsSlice";
import "./Notifications.css";
import { useRef } from "react";

const Notifications = () => {
  const dispatch = useDispatch();
  const { loading, notifications } = useSelector(
    (state) => state.notifications
  );

  const notificationVisibility = useRef();

  const handleToggleDrawer = () => {
    if (notificationVisibility.current) {
      notificationVisibility.current.classList.toggle("visible");
    }
  };

  const handleMarkNotificationAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
  };

  return (
    <>
      <div className="notifications-title" onClick={() => handleToggleDrawer()}>
        Your notifications
      </div>

      <div
        className="notifications notification-small"
        ref={notificationVisibility}
      >
        {loading ? (
          <p>isLoading...</p>
        ) : notifications.length === 0 ? (
          <>
            <p>No new notification for now</p>
            <button
              aria-label="Close"
              onClick={() => handleToggleDrawer()}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={closeImage}
                alt="Close icon"
                style={{ width: "10px", height: "10px" }}
              />
            </button>
          </>
        ) : (
          <>
            <p>Here is the list of notifications</p>
            <button
              aria-label="Close"
              onClick={() => handleToggleDrawer()}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={closeImage}
                alt="Close icon"
                style={{ width: "10px", height: "10px" }}
              />
            </button>
            <ul className="notification-small">
              {notifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  id={notif.id}
                  type={notif.type}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={handleMarkNotificationAsRead}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Notifications;
