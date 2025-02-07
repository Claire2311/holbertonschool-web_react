import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Render h1 with good text", async () => {
    render(<App />);

    const titleH1 = screen.getByRole("heading", { level: 1 });

    expect(titleH1).toBeInTheDocument();
    expect(titleH1).toHaveTextContent(/school dashboard/i);
  });

  it("paragraphs should have the correct text", async () => {
    // render(<App />);
    const { getByText } = render(<App />);
    const p1 = getByText(/login to access the full dashboard/i);
    const p2 = getByText(/copyright 2024 - holberton school/i);

    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  it("Should render the logo image", async () => {
    const { getByAltText } = await render(<App />);

    const image = getByAltText(/holberton logo/i);

    expect(image).toBeInTheDocument();
  });
});
