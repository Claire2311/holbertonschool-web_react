import { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Courselist from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import axios from "axios";
import { initialState, appReducer, APP_ACTIONS } from "./appReducer";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

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

        dispatch({
          type: APP_ACTIONS.SET_NOTIFICATIONS,
          payload: updatedNotifications,
        });
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
        dispatch({ type: APP_ACTIONS.SET_COURSES, payload: response.data });
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourses();
  }, [state.user]);

  return (
    <>
      {state.notifications ? (
        <>
          <div className="root-notifications">
            <Notifications
              notificationsList={state.notifications}
              handleDisplayDrawer={() =>
                dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER, payload: true })
              }
              handleHideDrawer={() =>
                dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER, payload: false })
              }
              displayDrawer={state.displayDrawer}
              markNotificationAsRead={(notification) => {
                dispatch({
                  type: APP_ACTIONS.MARK_NOTIFICATION_READ,
                  payload: notification,
                });
              }}
            />
          </div>
          <Header
            logOut={() => dispatch({ type: APP_ACTIONS.LOGOUT })}
            user={state.user}
          />
          <div className={css(styles.body)}>
            {state.user?.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <Courselist courses={state.courses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={() => dispatch({ type: APP_ACTIONS.LOGIN })} />
              </BodySectionWithMarginBottom>
            )}
          </div>
          <BodySection title="News from the School">
            <p>Holberton School News goes here</p>
          </BodySection>
          <div className={css(styles.footer)}>
            <Footer user={state.user} />
          </div>
        </>
      ) : (
        ""
      )}
    </>
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
