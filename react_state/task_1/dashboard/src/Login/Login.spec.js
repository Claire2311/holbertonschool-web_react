import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { beforeEach } from "@jest/globals";
import * as Aphrodite from "aphrodite";

describe("App", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  it("should render 2 input elements", async () => {
    render(<Login />);
    const inputEmail = screen.getByLabelText(/email/i, { selector: "input" });
    const inputPassword = screen.getByLabelText(/password/i, {
      selector: "input",
    });

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  it("should render 2 label element with the correct text", async () => {
    render(<Login />);
    const labelEmail = screen.getByText(/email:/i);
    const labelPassword = screen.getByText(/password:/i);

    expect(labelEmail).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();
  });

  it("should render a button with the correct text", async () => {
    render(<Login />);

    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
  });

  it("input element should focus when coresponding label is clicked", async () => {
    render(<Login />);
    const labelEmail = screen.getByText(/email:/i);
    const inputEmail = screen.getByLabelText(/email/i, { selector: "input" });

    fireEvent.click(labelEmail);
    expect(inputEmail).toHaveFocus();
  });
});
