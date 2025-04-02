import { render, screen } from "@testing-library/react";
import { getCurrentYear, getFooterCopy } from "../../utils/utils";
import Footer from "./Footer";

describe("Footer", () => {
  it("paragraphs should have the correct text", async () => {
    const userObject = {
      email: "",
      password: "",
      isLoggedIn: false,
    };

    render(<Footer user={userObject} />);
    const p = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "p" &&
        content.includes(`Copyright ${getCurrentYear()} - ${getFooterCopy()}`)
      );
    });

    expect(p).toBeInTheDocument();
  });

  it("should display 'Contact us' when user is logged in", async () => {
    const userObject = {
      email: "",
      password: "",
      isLoggedIn: true,
    };

    render(<Footer user={userObject} />);
    const p = screen.getByText("Contact us");

    expect(p).toBeInTheDocument();
  });

  it("should not display 'Contact us' when user is not logged in", async () => {
    const userObject = {
      email: "",
      password: "",
      isLoggedIn: false,
    };

    render(<Footer user={userObject} />);
    const p = screen.queryByText("Contact us");

    expect(p).not.toBeInTheDocument();
  });
});
