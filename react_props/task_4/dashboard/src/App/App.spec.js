import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render the Notifications component", () => {
    render(<App />);
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
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
    render(<App isLoggedIn={true} />);

    const tableElement = screen.getByRole("table");

    expect(tableElement).toBeInTheDocument();
  });
});
