import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import "./Header.css";
import holbertonLogo from "../../assets/holberton-logo.jpg";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
  };

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
      {isLoggedIn && (
        <p id="logoutSection">
          {`Welcome ${user.email} `}
          <a id="logoutclick" href="#" onClick={handleLogout}>
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
