import { render, screen } from "@testing-library/react";
import { beforeEach } from "@jest/globals";
import Header from "./Header";
import * as Aphrodite from "aphrodite";

describe("Header", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  it("Should render the logo image", async () => {
    render(<Header />);

    const image = screen.getByAltText(/holberton logo/i);

    expect(image).toBeInTheDocument();
  });

  it("Render h1 with good text", async () => {
    render(<Header />);

    const titleH1 = screen.getByRole("heading", {
      level: 1,
      name: /School Dashboard/i,
    });

    expect(titleH1).toBeInTheDocument();
  });
});
