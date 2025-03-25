import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <>
      <div className={css(styles.loginBody, styles.small)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="mail" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="button">OK</button>
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

  small: {
    "@media (max-width: 900px)": {
      marginLeft: "0px",
    },
  },
});
