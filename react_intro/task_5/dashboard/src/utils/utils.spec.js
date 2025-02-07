import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils";

describe("functions", () => {
  it("getCurrentYear() should return the current year", () => {
    const currentYear = 2025;
    expect(getCurrentYear()).toBe(currentYear);
  });

  it("getFooterCopy() should return 'Holberton School' when isIndex is true", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  it("getFooterCopy() should return 'Holberton School main dashboard' when isIndex is true", () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  it("getLatestNotification() should return the correct output", () => {
    expect(getLatestNotification()).toBe(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});
