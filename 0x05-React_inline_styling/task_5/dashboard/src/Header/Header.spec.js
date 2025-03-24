import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("Should render the logo image", async () => {
    render(<Header />);

    const image = screen.getByAltText(/holberton logo/i);

    expect(image).toBeInTheDocument();
  });

  it("Render h1 with good text", async () => {
    render(<Header />);

    const titleH1 = screen.getByRole("heading", {
      level: 1,
      name: /School Dashboard/i,
    });

    expect(titleH1).toBeInTheDocument();
  });
});
