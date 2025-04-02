import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import useLogin from "../hooks/useLogin";

function Login({ logIn }) {
  const {
    enableSubmit,
    // formData,
    handleLoginSubmit,
    // handleEnableSubmit,
    handleChangeEmail,
    handleChangePassword,
  } = useLogin(logIn);

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
