import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import closeImage from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (
      nextProps.notificationsList.length !==
        this.props.notificationsList.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    )
      return true;

    return false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {
      notificationsList,
      handleDisplayDrawer,
      handleHideDrawer,
      displayDrawer,
    } = this.props;
    // const { displayDrawer } = this.state;
    return (
      <>
        <div
          className={css(styles.notificationsTitle)}
          onClick={() => handleDisplayDrawer()}
        >
          Your notifications
        </div>
        {displayDrawer ? (
          <div className={css(styles.notifications, styles.small)}>
            {notificationsList.length === 0 ? (
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
                <ul className={css(styles.small)}>
                  {notificationsList.map((notif) => (
                    <NotificationItem
                      key={notif.id}
                      type={notif.type}
                      value={notif.value}
                      html={notif.html}
                      markAsRead={this.markAsRead.bind(this, notif.id)}
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
  }
}

Notifications.propTypes = {
  notificationsList: PropTypes.arrayOf(PropTypes.object),
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  notificationsList: [],
  displayDrawer: true,
};

export default Notifications;

const translateKeyframes = {
  "0%": {
    transform: "translateY(0px)",
  },

  "50%": {
    transform: "translateY(-5px)",
  },

  "100%": {
    transform: "translateY(5px)",
  },
};

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const styles = StyleSheet.create({
  notifications: {
    border: "2px dashed red",
    padding: "16px",
  },

  notificationsTitle: {
    ":hover": {
      animationName: [translateKeyframes, opacityKeyframes],
    },
    animationDuration: "1s, 0.5s",
    animationIterationCount: "3, 1",
  },

  small: {
    "@media (max-width: 900px)": {
      border: "none",
      padding: "0",
      fontSize: "20px",
      width: "100%",
      height: "100%",
      inset: 0,
      backgroundColor: "white",
    },
  },
});
