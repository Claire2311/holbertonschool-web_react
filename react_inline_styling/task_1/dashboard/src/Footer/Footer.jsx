import { getCurrentYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <>
      <div>
        <p>
          Copyright {getCurrentYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
}

export default Footer;
