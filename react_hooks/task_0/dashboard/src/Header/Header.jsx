import holbertonLogo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import newContext from "../Context/context";
import { useContext } from "react";

const Header = () => {
  const { userObject, logOut } = useContext(newContext);

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
      {userObject.isLoggedIn && (
        <p id="logoutSection">
          {`Welcome ${userObject.email} `}
          <a id="logoutclick" href="#" onClick={logOut}>
            (logout)
          </a>
        </p>
      )}
    </>
  );
};

export default Header;

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
