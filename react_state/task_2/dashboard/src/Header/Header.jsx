import holbertonLogo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
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
    </>
  );
}

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
