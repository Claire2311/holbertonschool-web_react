import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Render h1 with good text", async () => {
    render(<App />);

    const titleH1 = screen.getByRole("heading", { level: 1 });

    expect(titleH1).toBeInTheDocument();
    expect(titleH1).toHaveTextContent(/school dashboard/i);
  });

  it("paragraph 1 should have the correct text", async () => {
    render(<App />);

    const p1 = screen.getByText(/login to access the full dashboard/i);

    expect(p1).toBeInTheDocument();
  });

  it("paragraph 2 should have the correct text", async () => {
    render(<App />);

    const p2 = screen.getByText(/copyright 2024 - holberton school/i);

    expect(p2).toBeInTheDocument();
  });

  it("Should render the logo image", async () => {
    render(<App />);

    const image = screen.getByAltText(/holberton logo/i);

    expect(image).toBeInTheDocument();
  });
});
