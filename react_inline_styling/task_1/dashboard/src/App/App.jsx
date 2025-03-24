import React from "react";
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

const notificationsList = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {
    id: 3,
    type: "urgent",
    html: {
      __html: getLatestNotification(),
    },
  },
];

const coursesList = [
  { id: 1, name: "ES6", credit: "60" },
  { id: 2, name: "Webpack", credit: "20" },
  { id: 3, name: "React", credit: "30" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: props.isLoggedIn || false };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    return (
      <>
        <Notifications notificationsList={notificationsList}></Notifications>
        <div className={css(styles.app)}>
          <Header></Header>
          <div className={css(styles.body)}>
            <p>Login to access the full dashboard</p>
            {this.props.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <Courselist courses={coursesList} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Holberton School News goes here</p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer></Footer>
          </div>
        </div>
      </>
    );
  }
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
  app: {
    fontFamily: "Arial, Helvetica, sans-serif",
    display: "flex",
    flexDirection: "column",
    minHeight: "95vh",
  },
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
