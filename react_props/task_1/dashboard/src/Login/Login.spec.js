import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("App", () => {
  it("should render 2 label, 2 inputs, and 1 button", async () => {
    render(<Login />);
    const inputEmail = screen.getByLabelText(/email/i, { selector: "input" });
    const inputPassword = screen.getByLabelText(/password/i, {
      selector: "input",
    });

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();

    const labelEmail = screen.getByText(/email:/i);
    const labelPassword = screen.getByText(/password:/i);

    expect(labelEmail).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
  });

  it("input element should focus when coresponding label is clicked", async () => {
    render(<Login />);
    const emailLabel = screen.getByText(/email:/i);
    const emailInput = screen.getByLabelText(/email/i, { selector: "input" });

    await userEvent.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });
});
