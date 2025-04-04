import { getCurrentYear, getFooterCopy } from "../../utils/utils";
import PropTypes from "prop-types";

function Footer({ user }) {
  return (
    <>
      <div>
        <p>
          Copyright {getCurrentYear()} - {getFooterCopy()}
        </p>
        {user.isLoggedIn ? <a href="">Contact us</a> : ""}
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
