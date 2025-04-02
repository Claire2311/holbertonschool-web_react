import { render, screen } from "@testing-library/react";
import { beforeEach } from "@jest/globals";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import * as Aphrodite from "aphrodite";

describe("BodySection component", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  it("should render a heading with the title prop value", () => {
    const { container } = render(<BodySectionWithMarginBottom />);

    const divElement = container.querySelector(".bodySectionWithMargin");
    expect(divElement).toBeInTheDocument();
  });

  it("should render the BodySection component", () => {
    render(<BodySectionWithMarginBottom />);
    const titleH2 = screen.getByRole("heading", {
      level: 2,
    });

    expect(titleH2).toBeInTheDocument();
    expect(titleH2).toHaveClass("bodySection");
  });
});
