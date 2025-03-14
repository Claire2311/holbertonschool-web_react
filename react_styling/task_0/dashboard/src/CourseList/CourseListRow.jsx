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
          <th colSpan="2" className="bg-table-header opacity-45">
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th className="bg-table-header opacity-45">{textFirstCell}</th>
          <th className="bg-table-header opacity-45">{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td className="bg-table-rows opacity-66">{textFirstCell}</td>
        <td className="bg-table-rows opacity-66">{textSecondCell}</td>
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
