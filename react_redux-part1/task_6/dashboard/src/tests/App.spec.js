import { render, screen } from "@testing-library/react";
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

  // it("should render the CourseListRow component when isLoggedIn is true", () => {
  //   // Mock the context to simulate a logged-in user
  //   const mockUser = {
  //     email: "test@example.com",
  //     password: "1234",
  //     isLoggedIn: true,
  //   };

  //   render(<App user={mockUser} />);

  //   // Check if the Courselist component is rendered
  //   expect(screen.getByText("Course list")).toBeInTheDocument();
  //   expect(screen.getByText("ES6")).toBeInTheDocument();
  //   expect(screen.getByText("Webpack")).toBeInTheDocument();
  //   expect(screen.getByText("React")).toBeInTheDocument();
  // });

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

  // it("a title of Course list is displayed above the CourseList component when the isLoggedIn prop is set to true", () => {
  //   render(<App isLoggedIn={true} />);

  //   const titleH2 = screen.getByRole("heading", {
  //     level: 2,
  //     name: /Course list/i,
  //   });

  //   expect(titleH2).toBeInTheDocument();
  // });

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
