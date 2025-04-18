import PropTypes from "prop-types";

function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
  id = null,
  changeRow = null,
}) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan="2" className="header-column">
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th className="header-column">{textFirstCell}</th>
          <th className="header-column">{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td className="row-cell">
          <input
            type="checkbox"
            onChange={(e) => changeRow && id && changeRow(id, e.target.checked)}
          />
        </td>
        <td className="row-cell">{textFirstCell}</td>
        <td className="row-cell">{textSecondCell}</td>
      </tr>
    );
  }
}

export default CourseListRow;

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string,
  id: PropTypes.string,
  changeRow: PropTypes.func,
};
