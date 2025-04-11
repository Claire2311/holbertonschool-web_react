import { render, screen } from "@testing-library/react";
import { beforeEach } from "@jest/globals";
import Header from "./Header";
import * as Aphrodite from "aphrodite";
import newContext from "../Context/context";

describe("Header", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  it("test", () => {
    const HeaderPrototype = Object.getOwnPropertyNames(Header.prototype);

    expect(HeaderPrototype).toEqual(expect.arrayContaining(["constructor"]));
    expect(HeaderPrototype).toHaveLength(1);
    expect(Header.prototype.__proto__).toEqual({});
    // const HeaderPrototype = Object.getOwnPropertyNames(Header.prototype);
    // console.log("---------------------------------");
    // console.log(HeaderPrototype);
    // console.log(Header.prototype.__proto__);
    // console.log("---------------------------------");
    // expect(Header.prototype.__proto__).toEqual({});
  });

  it("Should render the logo image", async () => {
    // Mock le contexte
    const mockContextValue = {
      userObject: { isLoggedIn: false, email: "" },
      logOut: jest.fn(),
    };

    render(
      <newContext.Provider value={mockContextValue}>
        <Header />
      </newContext.Provider>
    );

    const image = screen.getByAltText(/holberton logo/i);

    expect(image).toBeInTheDocument();
  });

  it("Render h1 with good text", async () => {
    // Mock le contexte
    const mockContextValue = {
      userObject: { isLoggedIn: false, email: "" },
      logOut: jest.fn(),
    };

    render(
      <newContext.Provider value={mockContextValue}>
        <Header />
      </newContext.Provider>
    );

    // Vérifie que le heading h1 est présent
    const titleH1 = screen.getByRole("heading", {
      level: 1,
      name: /School Dashboard/i,
    });

    expect(titleH1).toBeInTheDocument();
  });
});
