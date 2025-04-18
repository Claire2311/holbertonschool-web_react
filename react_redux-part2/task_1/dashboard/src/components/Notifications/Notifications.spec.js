import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({
  notifications: {
    notifications: [],
  },
});

describe("Notifications", () => {
  it("should not display close button, p element when displayDrawer is false", async () => {
    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    // Find the elements
    const titleElement = screen.getByText("Your notifications");
    const notificationPanel = screen.getByText(
      "No new notification for now"
    ).parentElement;

    // Check initial state (should not have the visible class)
    expect(notificationPanel.classList.contains("visible")).toBe(false);

    // Click on the title to toggle
    fireEvent.click(titleElement);

    // Now it should have the visible class
    expect(notificationPanel.classList.contains("visible")).toBe(true);

    // Click again
    fireEvent.click(titleElement);

    // Class should be removed
    expect(notificationPanel.classList.contains("visible")).toBe(false);
  });
});
