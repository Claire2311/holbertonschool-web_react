import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";
import { beforeEach } from "@jest/globals";
import * as Aphrodite from "aphrodite";

describe("App", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  it("should not display close button, p element when displayDrawer is false", async () => {
    render(<Notifications displayDrawer={false} />);

    const button = screen.queryByAltText("Close icon");
    const p = screen.queryByText(/here is the list of notifications/i);
    const notificationText = screen.getByText("Your notifications");

    expect(button).not.toBeInTheDocument();
    expect(p).not.toBeInTheDocument();
    expect(notificationText).toBeInTheDocument();
  });

  it("should display close button, p element when displayDrawer is true", async () => {
    const notificationsList = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        value: "<strong>Urgent requirement</strong> - complete by EOD",
      },
    ];

    render(
      <Notifications
        notificationsList={notificationsList}
        displayDrawer={true}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const p = screen.getByText(/here is the list of notifications/i);
    expect(p).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);

    const notificationText = screen.getByText("Your notifications");
    expect(notificationText).toBeInTheDocument();
  });

  it("should display displays the correct text when displayDrawer is true and notificationsList is empty", async () => {
    render(<Notifications />);
    const p = screen.getByText(/No new notification for now/i);
    expect(p).toBeInTheDocument();

    const notificationText = screen.getByText("Your notifications");
    expect(notificationText).toBeInTheDocument();
  });

  it("should display the text with the id in the console", async () => {
    const notificationsList = [
      { id: 1, type: "default", value: "Test notification" },
    ];
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {}); // Spy on console.log

    render(<Notifications notificationsList={notificationsList} />);

    const li = screen.getByText("Test notification");
    fireEvent.click(li);

    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Notification 1 has been marked as read"
    );

    consoleLogSpy.mockRestore();
  });

  it("does not rerender when updating the props with the same list", () => {
    const notificationsList = [
      { id: 1, type: "default", value: "Test notification" },
    ];

    const spy = jest.spyOn(Notifications.prototype, "render");

    const { rerender } = render(
      <Notifications notificationsList={notificationsList} />
    );

    rerender(<Notifications notificationsList={notificationsList} />);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("does rerender when the length of the notifications List change", () => {
    const notificationsList1 = [
      { id: 1, type: "default", value: "Test notification" },
    ];

    const notificationsList2 = [
      ...notificationsList1,
      { id: 2, type: "default", value: "Test notification2" },
    ];

    const spy = jest.spyOn(Notifications.prototype, "render");

    const { rerender } = render(
      <Notifications notificationsList={notificationsList1} />
    );

    rerender(<Notifications notificationsList={notificationsList2} />);

    expect(spy).toHaveBeenCalledTimes(3);
  });

  it("should call handleDisplayDrawer when you click on 'Your notifications'", () => {
    const handleDisplayDrawerMock = jest.fn();
    render(<Notifications handleDisplayDrawer={handleDisplayDrawerMock} />);

    const notificationText = screen.getByText("Your notifications");
    fireEvent.click(notificationText);
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it("should call handleHideDrawer when you click on the close button", () => {
    const handleHideDrawerMock = jest.fn();
    render(
      <Notifications
        displayDrawer={true}
        handleHideDrawer={handleHideDrawerMock}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });
});
