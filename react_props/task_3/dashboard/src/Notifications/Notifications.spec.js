import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("App", () => {
  it("should render 3 li elements", async () => {
    render(<Notifications />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });
});
