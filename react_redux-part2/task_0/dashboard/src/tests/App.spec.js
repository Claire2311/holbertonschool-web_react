import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";
import { beforeEach, jest } from "@jest/globals";
import * as Aphrodite from "aphrodite";
import { fetchNotifications } from "../features/notifications/notificationsSlice";

jest.mock("../features/notifications/notificationsSlice", () => ({
  fetchNotifications: jest.fn(),
}));

const mockStore = configureStore([]);

describe("App Component", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  it("renders Login component when isLoggedIn is false", () => {
    const store = mockStore({
      auth: { isLoggedIn: false },
      notifications: { items: [] },
      courses: { items: [] },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(
      screen.getByText("Login to access the full dashboard")
    ).toBeInTheDocument();
  });

  it("renders CourseList component when isLoggedIn is true", () => {
    const store = mockStore({
      auth: { isLoggedIn: true },
      notifications: { items: [] },
      courses: { items: [] },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("Course list")).toBeInTheDocument();
  });
});
