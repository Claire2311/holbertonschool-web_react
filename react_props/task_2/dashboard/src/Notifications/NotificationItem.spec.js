import { render, screen } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  it("should render blue color data-notification-type set to default when type is default", async () => {
    render(<NotificationItem type="default" value="Test notification" />);

    const liElement = screen.getByText("Test notification");

    expect(liElement).toBeInTheDocument();
    expect(liElement.tagName).toBe("LI");
    expect(liElement).toHaveAttribute("data-notification-type", "default");

    const style = window.getComputedStyle(liElement);
    expect(style.color).toBe("blue");
  });

  it("should render red color data-notification-type set to urgent when type is urgent", async () => {
    render(<NotificationItem type="urgent" value="Test notification" />);

    const liElement = screen.getByText("Test notification");

    expect(liElement).toBeInTheDocument();
    expect(liElement.tagName).toBe("LI");
    expect(liElement).toHaveAttribute("data-notification-type", "urgent");

    const style = window.getComputedStyle(liElement);
    expect(style.color).toBe("red");
  });
});
