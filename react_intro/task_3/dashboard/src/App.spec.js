import { render, screen } from "@testing-library/react";
import App from "./App";
import { getCurrentYear, getFooterCopy } from "../src/utils";

describe("App", () => {
  it("Render h1 with good text", async () => {
    render(<App />);

    const titleH1 = screen.getByRole("heading", {
      level: 1,
      name: /School Dashboard/i,
    });

    expect(titleH1).toBeInTheDocument();
  });

  it("paragraphs should have the correct text", async () => {
    render(<App />);

    const p1 = screen.getByText(/login to access the full dashboard/i);
    const p2 = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "p" &&
        content.includes(`Copyright ${getCurrentYear()} - ${getFooterCopy()}`)
      );
    });

    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  it("Should render the logo image", async () => {
    render(<App />);

    const image = screen.getByAltText(/holberton logo/i);

    expect(image).toBeInTheDocument();
  });

  it("should render 2 input elements", async () => {
    render(<App />);
    const inputEmail = screen.getByLabelText(/email/i, { selector: "input" });
    const inputPassword = screen.getByLabelText(/password/i, {
      selector: "input",
    });

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  it("should render 2 label element with the correc text", async () => {
    render(<App />);
    const labelEmail = screen.getByText(/email:/i);
    const labelPassword = screen.getByText(/password:/i);

    expect(labelEmail).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();
  });

  it("should render a button with the correct text", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});
