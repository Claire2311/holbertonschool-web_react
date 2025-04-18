import { useSelector, useDispatch } from "react-redux";
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
      <div className="header">
        <img src={holbertonLogo} alt="holberton logo" className="header-img" />
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
