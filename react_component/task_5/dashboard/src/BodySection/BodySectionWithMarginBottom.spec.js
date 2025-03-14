import { render, screen } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("BodySection component", () => {
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
