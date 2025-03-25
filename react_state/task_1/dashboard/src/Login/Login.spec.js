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
    render(<Login enableSubmit={true} />);

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

  it("submit input is disabled by default", () => {
    render(<Login />);
    const submitInput = screen.queryByRole("button", { name: /ok/i });
    expect(submitInput).toHaveAttribute("disabled");
  });

  it("submit input becomes enabled only after both the Email and Password inputs meet the required criteria", () => {
    render(<Login />);

    const inputEmail = screen.getByLabelText(/email/i, { selector: "input" });
    const inputPassword = screen.getByLabelText(/password/i, {
      selector: "input",
    });

    fireEvent.change(inputEmail, { target: { value: "c.gi@mail.com" } });
    fireEvent.change(inputPassword, { target: { value: "password123" } });

    const submitInput = screen.getByRole("button");
    expect(submitInput).toBeInTheDocument();
  });
});
