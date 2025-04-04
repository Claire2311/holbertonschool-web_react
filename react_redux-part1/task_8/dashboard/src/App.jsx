import { useEffect } from "react";
import Notifications from "./components/Notifications/Notifications";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginWithLogging from "./pages/Login/Login";
import CourseListWithLogging from "./pages/CourseList/CourseList";
import BodySectionWithMarginBottom from "./components/BodySectionWithMarginBottom/BodySectionWithMarginBottom";
import BodySection from "./components/BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotifications } from "./features/notifications/notificationsSlice";
import { fetchCourses } from "./features/courses/coursesSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <>
        <div className="root-notifications">
          <Notifications />
        </div>
        <Header />
        <div className={css(styles.body)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseListWithLogging />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <LoginWithLogging />
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
    </>
  );
}

export default App;

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
