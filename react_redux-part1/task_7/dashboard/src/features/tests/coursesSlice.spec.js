import reducer from "../courses/coursesSlice";
import logout from "../auth/authSlice";

describe("Courses Slice tests", () => {
  it("should return the initial state by default", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      courses: [],
    });
  });

  it("Should reset courses array on logout", () => {
    const stateWithCourses = {
      courses: [
        { id: 1, title: "Introduction to Programming" },
        { id: 2, title: "Advanced Mathematics" },
      ],
    };
    const action = { type: logout.type };
    const state = reducer(stateWithCourses, action);
    expect(state).toEqual({
      courses: [],
    });
  });
});
