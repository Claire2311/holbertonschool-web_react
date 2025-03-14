import { getCurrentYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="App-footer">
        <p>
          Copyright {getCurrentYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
}

export default Footer;
