import { render, screen, fireEvent } from "@testing-library/react";
import NotificationItem from "./NotificationItem";
import { beforeEach } from "@jest/globals";
import * as Aphrodite from "aphrodite";

describe("NotificationItem", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  it("should render blue color data-notification-type set to default when type is default", async () => {
    render(
      <NotificationItem
        id={1}
        type="default"
        value="Test notification"
        markAsRead={() => {}}
      />
    );

    const listItem = screen.getByText("Test notification");
    expect(listItem).toBeInTheDocument();
    expect(listItem.getAttribute("data-notification-type")).toBe("default");
  });

  it("should render red color data-notification-type set to urgent when type is urgent", async () => {
    render(
      <NotificationItem
        id={2}
        type="urgent"
        value="Urgent notification"
        markAsRead={() => {}}
      />
    );

    const listItem = screen.getByText("Urgent notification");
    expect(listItem).toBeInTheDocument();
    expect(listItem.getAttribute("data-notification-type")).toBe("urgent");
  });

  it("should call markAsRead once", async () => {
    const handleClick = jest.fn();
    render(
      <NotificationItem markAsRead={handleClick} value="Test notification" />
    );
    fireEvent.click(screen.getByText("Test notification"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
