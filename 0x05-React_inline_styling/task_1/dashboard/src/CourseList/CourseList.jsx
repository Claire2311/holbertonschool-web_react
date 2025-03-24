import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";

function Courselist({ courses = [] }) {
  return (
    <table id="CourseList" className={css(styles.CourseList)}>
      <thead className={css(styles.table)}>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody className={css(styles.table)}>
        {courses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

export default Courselist;

Courselist.propTypes = {
  courses: PropTypes.array,
};

const styles = StyleSheet.create({
  CourseList: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "80px",
    marginBottom: "200px",
  },
  table: {
    border: "1px solid black",
  },
});
