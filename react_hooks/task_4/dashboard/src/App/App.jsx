import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import newContext from "../Context/context";
import { useEffect } from "react";
import axios from "axios";
import WithLogging from "../HOC/WithLogging";

const LoginWithLogging = WithLogging(Login);
const CourseListWithLogging = WithLogging(CourseList);

function App() {
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(newContext._currentValue.user);
  const [notifications, setNotifications] = useState([]);
  const [courses, setCourses] = useState([]);

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const logOut = useCallback(() => {
    setUser({ email: "", password: "", isLoggedIn: false });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  }, []);

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("notifications.json");
        const updatedNotifications = response.data.map((notification) => {
          if (notification.html) {
            return {
              ...notification,
              html: { __html: getLatestNotification() },
            };
          }
          return notification;
        });

        setNotifications(updatedNotifications);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNotifications();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/courses.json");
        setCourses(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourses();
  }, [user]);

  return (
    <newContext.Provider
      value={{
        userObject: user,
        logOut: logOut,
      }}
    >
      {notifications ? (
        <>
          <div className="root-notifications">
            <Notifications
              notificationsList={notifications}
              handleDisplayDrawer={handleDisplayDrawer}
              handleHideDrawer={handleHideDrawer}
              displayDrawer={displayDrawer}
              markNotificationAsRead={markNotificationAsRead}
            />
          </div>
          <Header />
          <div className={css(styles.body)}>
            {user?.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseListWithLogging courses={courses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <LoginWithLogging logIn={logIn} />
              </BodySectionWithMarginBottom>
            )}
          </div>
          <BodySection title="News from the School">
            <p>Holberton School News goes here</p>
          </BodySection>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </>
      ) : (
        ""
      )}
    </newContext.Provider>
  );
}

export default App;

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  logOut: () => {},
};

const styles = StyleSheet.create({
  body: {
    margin: "2.5rem",
    flexGrow: 1,
  },
  footer: {
    textAlign: "center",
    fontStyle: "italic",
    borderTop: "2px solid #e1003c",
  },
});
