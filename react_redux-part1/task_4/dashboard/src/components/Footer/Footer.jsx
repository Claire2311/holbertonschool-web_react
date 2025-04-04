import { useSelector } from "react-redux";
import "./Footer.css";
import { getCurrentYear, getFooterCopy } from "../../utils/utils";
import PropTypes from "prop-types";

function Footer() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <div>
        <p>
          Copyright {getCurrentYear()} - {getFooterCopy()}
        </p>
        {isLoggedIn ? <a href="">Contact us</a> : ""}
      </div>
    </>
  );
}

Footer.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Footer;
