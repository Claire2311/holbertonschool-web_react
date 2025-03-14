import React from "react";
import { render, screen } from "@testing-library/react";
import WithLogging from "./WithLogging";

class MockApp extends React.Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

describe("HOC", () => {
  it("should render a heading element with the good text", () => {
    render(<WithLogging Component={<MockApp />} />);

    const title = screen.getByRole("heading", {
      level: 1,
      name: /Hello from Mock App Component/i,
    });

    expect(title).toBeInTheDocument();
  });
});
