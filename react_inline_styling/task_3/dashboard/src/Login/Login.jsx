import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <>
      <div className={css(styles.loginBody, styles.small)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">
          Email:
          <input type="mail" id="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" />
        </label>
        <button type="button" className={css(styles.button)}>
          OK
        </button>
      </div>
    </>
  );
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
