import { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

function Login({ logIn }) {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  function validateForm(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && password.length >= 8;
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    logIn(formData);
  }

  function handleEnableSubmit(email, password) {
    // Met à jour enableSubmit en fonction de la validation
    setEnableSubmit(validateForm(email, password));
  }

  function handleChangeEmail(e) {
    const email = e.target.value;
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, email };
      handleEnableSubmit(updatedFormData.email, updatedFormData.password);
      return updatedFormData;
    });
  }

  function handleChangePassword(e) {
    const password = e.target.value;
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, password };
      handleEnableSubmit(updatedFormData.email, updatedFormData.password);
      return updatedFormData;
    });
  }

  return (
    <>
      <div className={css(styles.loginBody, styles.small)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">
            Email:
            <input type="mail" id="email" onChange={handleChangeEmail} />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              onChange={handleChangePassword}
            />
          </label>
          <input
            id="inputSubmit"
            type="submit"
            value="OK"
            className={css(styles.button)}
            disabled={!enableSubmit}
          />
        </form>
      </div>
    </>
  );
}

export default Login;

Login.propTypes = {
  logIn: PropTypes.func,
};

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
