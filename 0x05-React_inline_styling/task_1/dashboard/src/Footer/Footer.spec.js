import { render, screen } from "@testing-library/react";
import { getCurrentYear, getFooterCopy } from "../utils/utils";
import Footer from "./Footer";
import * as Aphrodite from "aphrodite";

describe("Footer", () => {
  it("paragraphs should have the correct text", async () => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
    render(<Footer />);
    const p = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "p" &&
        content.includes(`Copyright ${getCurrentYear()} - ${getFooterCopy()}`)
      );
    });

    expect(p).toBeInTheDocument();
  });
});
