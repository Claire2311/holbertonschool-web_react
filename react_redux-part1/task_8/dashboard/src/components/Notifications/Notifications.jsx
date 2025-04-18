import { useSelector, useDispatch } from "react-redux";
import closeImage from "../../assets/close-icon.png";
import NotificationItem from "../NotificationItem/NotificationItem";
import {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} from "../../features/notifications/notificationsSlice";
import "./Notifications.css";

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications, displayDrawer } = useSelector(
    (state) => state.notifications
  );
  const handleDisplayDrawer = () => {
    dispatch(showDrawer());
  };
  const handleHideDrawer = () => {
    dispatch(hideDrawer());
  };
  const handleMarkNotificationAsRead = (id) => {
    dispatch(markNotificationAsRead(id));
  };

  return (
    <>
      <div
        className="notifications-title"
        onClick={() => handleDisplayDrawer()}
      >
        Your notifications
      </div>
      {displayDrawer ? (
        <div className="notifications notification-small">
          {notifications.length === 0 ? (
            <>
              <p>No new notification for now</p>
              <button
                aria-label="Close"
                onClick={() => handleHideDrawer()}
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
                onClick={() => handleHideDrawer()}
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
      ) : (
        ""
      )}
    </>
  );
};

export default Notifications;
