import { render, screen } from "@testing-library/react";
import Courselist from "./CourseList";
import * as Aphrodite from "aphrodite";

describe("CourseList Component", () => {
  it("should render one columnheader that has the attributecolspan = 2 if textSecondCell is null", async () => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    const coursesList = [
      { id: 1, name: "ES6", credit: "60" },
      { id: 2, name: "Webpack", credit: "20" },
      { id: 3, name: "React", credit: "30" },
    ];

    render(<Courselist courses={coursesList} />);

    const rows = screen.getAllByRole("row");

    expect(rows).toHaveLength(5);
  });
});
