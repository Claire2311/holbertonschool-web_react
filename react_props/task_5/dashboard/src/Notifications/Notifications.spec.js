import { render, screen } from "@testing-library/react";
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
});
