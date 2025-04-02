import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan="2" className={css(styles.headerColumn)}>
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th className={css(styles.headerColumn)}>{textFirstCell}</th>
          <th className={css(styles.headerColumn)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td className={css(styles.row)}>{textFirstCell}</td>
        <td className={css(styles.row)}>{textSecondCell}</td>
      </tr>
    );
  }
}

export default CourseListRow;

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string,
};

const styles = StyleSheet.create({
  headerColumn: {
    backgroundColor: "#deb5b545",
  },
  row: {
    backgroundColor: "#f5f5f5ab",
  },
});
