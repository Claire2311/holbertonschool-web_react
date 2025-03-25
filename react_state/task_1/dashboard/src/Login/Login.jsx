import React from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  emailIsValid = false;
  passwordIsValid = false;

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleEnableSubmit() {
    if (this.emailIsValid && this.passwordIsValid) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
    this.emailIsValid = /^[^@]+@[^@]+\.[^@]+$/.test(this.state.email);
    this.handleEnableSubmit();
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
    this.passwordIsValid = this.state.password.length >= 8;
    this.handleEnableSubmit();
  }

  render() {
    return (
      <>
        <div className={css(styles.loginBody, styles.small)}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">
              Email:
              <input type="mail" id="email" onChange={this.handleChangeEmail} />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                id="password"
                onChange={this.handleChangePassword}
              />
            </label>
            <input
              id="inputSubmit"
              type="submit"
              value="OK"
              className={css(styles.button)}
              disabled={!this.state.enableSubmit}
            />
          </form>
        </div>
      </>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  loginBody: {
    marginTop: "30px",
    marginLeft: "20px",
  },

  button: {
    width: "fit-content",
  },

  small: {
    "@media (max-width: 900px)": {
      marginLeft: "0px",
      display: "flex",
      flexDirection: "column",
    },
  },
});
