import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import * as Aphrodite from "aphrodite";

describe("App", () => {
  it("should render the Notifications component", () => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    render(<App />);
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  it("should render the Header component", () => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    render(<App />);
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });

  it("should render the Login component when isLoggedIn is false", () => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    render(<App isLoggedIn={false} />);
    expect(
      screen.getByText(/Login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  it("should render the Footer component", () => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    render(<App />);
    expect(
      screen.getByText(/Holberton School main dashboard/i)
    ).toBeInTheDocument();
  });

  it("should render the CourseListRow component when isLoggedIn is true", () => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    render(<App isLoggedIn={true} />);

    const tableElement = screen.getByRole("table");

    expect(tableElement).toBeInTheDocument();
  });

  it("when ctrl+h is pressed, logs out is called once", () => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    const logOutMock = jest.fn();
    render(<App isLoggedIn={true} logOut={logOutMock} />);

    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.keyDown(document, { key: "h", ctrlKey: true });

    expect(logOutMock).toHaveBeenCalledTimes(1);

    alertMock.mockRestore();
  });

  it("when ctrl+h is pressed, logs out is called with the string Logging you out", () => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    const logOutMock = jest.fn();
    render(<App isLoggedIn={true} logOut={logOutMock} />);

    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.keyDown(document, { key: "h", ctrlKey: true });

    expect(alertMock).toHaveBeenCalledWith("Logging you out");

    alertMock.mockRestore();
  });

  it("a title of Course list is displayed above the CourseList component when the isLoggedIn prop is set to true", () => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    render(<App isLoggedIn={true} />);

    const titleH2 = screen.getByRole("heading", {
      level: 2,
      name: /Course list/i,
    });

    expect(titleH2).toBeInTheDocument();
  });

  it("a title of Log in to continue is displayed above the Login component when the isLoggedIn prop is set to false", () => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    render(<App isLoggedIn={false} />);

    const titleH2 = screen.getByRole("heading", {
      level: 2,
      name: /Log in to continue/i,
    });

    expect(titleH2).toBeInTheDocument();
  });

  it("a title with the text News from the School, and a paragraph element with the text Holberton School News goes here are displayed", () => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    render(<App />);

    const titleH2 = screen.getByRole("heading", {
      level: 2,
      name: /News from the School/i,
    });

    const p = screen.getByText(/Holberton School News goes here/i);

    expect(titleH2).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
});
