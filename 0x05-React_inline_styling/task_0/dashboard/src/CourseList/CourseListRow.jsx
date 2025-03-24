import PropTypes from "prop-types";

function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan="2" style={{ backgroundColor: "#deb5b545" }}>
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th style={{ backgroundColor: "#deb5b545" }}>{textFirstCell}</th>
          <th style={{ backgroundColor: "#deb5b545" }}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td style={{ backgroundColor: "#f5f5f5ab" }}>{textFirstCell}</td>
        <td style={{ backgroundColor: "#f5f5f5ab" }}>{textSecondCell}</td>
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
