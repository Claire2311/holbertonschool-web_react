import { useContext } from "react";
import newContext from "../Context/context";
import { getCurrentYear, getFooterCopy } from "../utils/utils";

function Footer() {
  const { user } = useContext(newContext);
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

export default Footer;
