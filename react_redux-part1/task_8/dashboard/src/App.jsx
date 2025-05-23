import { useEffect } from "react";
import Notifications from "./components/Notifications/Notifications";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginWithLogging from "./pages/Login/Login";
import CourseListWithLogging from "./pages/CourseList/CourseList";
import BodySectionWithMarginBottom from "./components/BodySectionWithMarginBottom/BodySectionWithMarginBottom";
import BodySection from "./components/BodySection/BodySection";
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
    if (isLoggedIn) {
      dispatch(fetchCourses());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <>
        <div className="root-notifications">
          <Notifications />
        </div>
        <Header />
        <div>
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
        <div>
          <Footer />
        </div>
      </>
    </>
  );
}

export default App;
