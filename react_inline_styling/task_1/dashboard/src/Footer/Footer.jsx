import { getCurrentYear, getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";

function Footer() {
  return (
    <>
      <div className={css(styles.footer)}>
        <p>
          Copyright {getCurrentYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footer: {
    textAlign: "center",
    fontStyle: "italic",
    borderTop: "2px solid #e1003c",
  },
});
