import { render, screen, fireEvent } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  it("should render blue color data-notification-type set to default when type is default", async () => {
    render(<NotificationItem type="default" value="Test notification" />);

    const liElement = screen.getByText("Test notification");

    expect(liElement).toBeInTheDocument();
    expect(liElement.tagName).toBe("LI");
  });
});
