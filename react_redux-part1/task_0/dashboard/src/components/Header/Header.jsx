import holbertonLogo from "../../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

const Header = ({ logOut, user }) => {
  return (
    <>
      <div className={css(styles.header)}>
        <img
          src={holbertonLogo}
          alt="holberton logo"
          className={css(styles.img)}
        />
        <h1>School dashboard</h1>
      </div>
      {user.isLoggedIn && (
        <p id="logoutSection">
          {`Welcome ${user.email} `}
          <a id="logoutclick" href="#" onClick={logOut}>
            (logout)
          </a>
        </p>
      )}
    </>
  );
};

export default Header;

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: "#e1003c",
    borderBottom: "2px solid #e1003c",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  img: {
    height: "200px",
  },
});
