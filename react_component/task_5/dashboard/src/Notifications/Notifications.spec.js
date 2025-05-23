import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

describe("App", () => {
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

    const { container, rerender } = render(
      <Notifications
        notificationsList={notificationsList}
        displayDrawer={true}
      />
    );

    const initialRender = container.innerHTML;
    rerender(
      <Notifications
        notificationsList={notificationsList}
        displayDrawer={true}
      />
    );
    expect(container.innerHTML).toBe(initialRender);
  });

  it("does rerender when the length of the notifications List change", () => {
    const notificationsList1 = [
      { id: 1, type: "default", value: "Test notification" },
    ];

    const notificationsList2 = [
      ...notificationsList1,
      { id: 2, type: "default", value: "Test notification2" },
    ];

    const { container, rerender } = render(
      <Notifications
        notificationsList={notificationsList1}
        displayDrawer={true}
      />
    );

    const initialRender = container.innerHTML;
    rerender(
      <Notifications
        notificationsList={notificationsList2}
        displayDrawer={true}
      />
    );
    expect(container.innerHTML).not.toBe(initialRender);
  });
});
