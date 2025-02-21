import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Courselist from "../CourseList/CourseList";
import PropTypes from "prop-types";

function App({ isLoggedIn = false }) {
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      type: "urgent",
      value: "<strong>Urgent requirement</strong> - complete by EOD",
    },
  ];

  const coursesList = [
    { id: 1, name: "ES6", credit: "60" },
    { id: 2, name: "Webpack", credit: "20" },
    { id: 3, name: "React", credit: "30" },
  ];

  return (
    <>
      <div className="root-notifications">
        <Notifications notificationsList={notificationsList} />
      </div>
      <Header />
      {isLoggedIn ? <Courselist courses={coursesList} /> : <Login />}
      <Footer />
    </>
  );
}

export default App;

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
