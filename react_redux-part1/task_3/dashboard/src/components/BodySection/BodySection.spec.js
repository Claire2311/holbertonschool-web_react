import { render, screen } from "@testing-library/react";
import BodySection from "./BodySection";

describe("BodySection component", () => {
  it("should render a heading with the title prop value", () => {
    render(<BodySection title="test value for title" />);

    const titleH2 = screen.getByRole("heading", {
      level: 2,
    });

    expect(titleH2).toBeInTheDocument();
    expect(titleH2).toHaveTextContent("test value for title");
  });

  it("renders any number of children passed to it", () => {
    render(
      <BodySection title="With Children">
        <p>Child 1</p>
        <p>Child 2</p>
      </BodySection>
    );

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });
});
