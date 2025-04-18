import { useSelector, useDispatch } from "react-redux";
import CourseListRow from "./CourseListRow/CourseListRow";
import "./CourseList.css";
import WithLogging from "../../components/HOC/WithLogging";
import {
  selectCourse,
  unSelectCourse,
} from "../../features/courses/coursesSlice";

function CourseList() {
  const { courses } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const onChangeRow = (id, checked) => {
    if (checked) {
      dispatch(selectCourse(id));
    } else {
      dispatch(unSelectCourse(id));
    }
  };

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
              id={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              changeRow={onChangeRow}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

const CourseListWithLogging = WithLogging(CourseList);
export default CourseListWithLogging;
