import { useDispatch } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import useLogin from "../../hooks/useLogin";
import { login } from "../../features/auth/authSlice";
import WithLogging from "../../components/HOC/WithLogging";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const {
    email,
    password,
    enableSubmit,
    handleLoginSubmit,
    handleChangeEmail,
    handleChangePassword,
  } = useLogin({
    onLogin: (email, password) => dispatch(login({ email, password })),
  });

  return (
    <>
      <div className={css(styles.loginBody, styles.small)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              value={password}
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

const LoginWithLogging = WithLogging(Login);
export default LoginWithLogging;

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
