import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import * as Aphrodite from "aphrodite";
import { beforeEach, afterEach } from "@jest/globals";
import mockAxios from "jest-mock-axios";

describe("App", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    mockAxios.reset();
    jest.clearAllMocks();
  });

  it("should render the Notifications component", () => {
    render(<App />);
    expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();
  });

  it("should render the Header component", () => {
    render(<App />);
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });

  it("should render the Login component when isLoggedIn is false", () => {
    render(<App isLoggedIn={false} />);
    expect(
      screen.getByText(/Login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  it("should render the Footer component", () => {
    render(<App />);
    expect(
      screen.getByText(/Holberton School main dashboard/i)
    ).toBeInTheDocument();
  });

  it("should render the CourseListRow component when isLoggedIn is true", () => {
    const courses = [
      { id: 1, name: "ES6", credit: "60" },
      { id: 2, name: "Webpack", credit: "20" },
      { id: 3, name: "React", credit: "30" },
    ];
    render(<App courses={courses} />);
    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /ok/i });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    // Check if the Courselist component is rendered
    expect(screen.getByText("Course list")).toBeInTheDocument();
    expect(screen.getByText("Available courses")).toBeInTheDocument();
  });

  // it("when ctrl+h is pressed, logs out is called once", () => {
  //   const logOutMock = jest.fn();
  //   render(<App isLoggedIn={true} logOut={logOutMock} />);

  //   const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

  //   fireEvent.keyDown(document, { key: "h", ctrlKey: true });

  //   expect(logOutMock).toHaveBeenCalledTimes(1);

  //   alertMock.mockRestore();
  // });

  // it("when ctrl+h is pressed, logs out is called with the string Logging you out", () => {
  //   const logOutMock = jest.fn();
  //   render(<App isLoggedIn={true} logOut={logOutMock} />);

  //   const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

  //   fireEvent.keyDown(document, { key: "h", ctrlKey: true });

  //   expect(alertMock).toHaveBeenCalledWith("Logging you out");

  //   alertMock.mockRestore();
  // });

  it("a title of Course list is displayed above the CourseList component when the isLoggedIn prop is set to true", () => {
    render(<App />);
    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /ok/i });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    const titleH2 = screen.getByRole("heading", {
      level: 2,
      name: /Course list/i,
    });

    expect(titleH2).toBeInTheDocument();
  });

  it("a title of Log in to continue is displayed above the Login component when the isLoggedIn prop is set to false", () => {
    render(<App isLoggedIn={false} />);

    const titleH2 = screen.getByRole("heading", {
      level: 2,
      name: /Log in to continue/i,
    });

    expect(titleH2).toBeInTheDocument();
  });

  it("a title with the text News from the School, and a paragraph element with the text Holberton School News goes here are displayed", () => {
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
