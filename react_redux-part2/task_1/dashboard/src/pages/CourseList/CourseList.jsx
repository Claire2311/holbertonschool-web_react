import { useSelector } from "react-redux";
import CourseListRow from "./CourseListRow/CourseListRow";
import "./CourseList.css";
import WithLogging from "../../components/HOC/WithLogging";

function CourseList() {
  const { courses } = useSelector((state) => state.courses);

  return (
    <table id="CourseList" className="course-list">
      <thead className="table-bordered">
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody className="table-bordered">
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

const CourseListWithLogging = WithLogging(CourseList);
export default CourseListWithLogging;
