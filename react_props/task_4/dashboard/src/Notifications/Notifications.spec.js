import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

describe("App", () => {
  it("Render the notification title", async () => {
    render(<Notifications />);

    const p = screen.getByText(/here is the list of notifications/i);

    expect(p).toBeInTheDocument();
  });

  it("should render a button", async () => {
    render(<Notifications />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should render 3 li elements", async () => {
    render(<Notifications />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  it("should display the right message in the console when click on the button", async () => {
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {}); // Spy on console.log

    render(<Notifications />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(consoleLogSpy).toHaveBeenCalledWith("Close button has been clicked");

    consoleLogSpy.mockRestore(); // Clean up spy after test
  });
});
