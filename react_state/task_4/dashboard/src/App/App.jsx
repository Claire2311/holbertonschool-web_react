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
import newContext from "../Context/context";

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
    this.state = {
      displayDrawer: false,
      userObject: { email: "", password: "", isLoggedIn: false },
      logOut: () => {},
      notificationsList: notificationsList,
      courses: coursesList,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
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

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      userObject: { email: email, password: password, isLoggedIn: true },
    });
  }

  logOut() {
    this.setState({
      userObject: { email: "", password: "", isLoggedIn: false },
    });
  }

  markNotificationAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
    this.setState({
      notificationsList: this.state.notificationsList.filter(
        (notification) => notification.id !== id
      ),
    });
  }

  render() {
    return (
      <newContext.Provider
        value={{
          userObject: this.state.userObject,
          logOut: this.logOut,
        }}
      >
        <>
          <div className="root-notifications">
            <Notifications
              notificationsList={this.state.notificationsList}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
              displayDrawer={this.state.displayDrawer}
              markNotificationAsRead={this.markNotificationAsRead}
            />
          </div>
          <Header />
          <div className={css(styles.body)}>
            {this.state.userObject.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <Courselist courses={this.state.courses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
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
      </newContext.Provider>
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
