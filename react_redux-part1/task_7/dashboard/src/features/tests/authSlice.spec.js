import reducer, { login, logout } from "../auth/authSlice";

describe("Authentication Slice tests", () => {
  it("should return the initial state by default", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      user: {
        email: "",
        password: "",
      },
      isLoggedIn: false,
    });
  });

  it("should handle login action", () => {
    const previousState = {
      user: {
        email: "",
        password: "",
      },
      isLoggedIn: false,
    };
    const user = { email: "test@example.com", password: "password123" };
    const action = login(user);
    const expectedState = {
      user,
      isLoggedIn: true,
    };
    expect(reducer(previousState, action)).toEqual(expectedState);
  });

  it("should handle logout action", () => {
    const previousState = {
      user: {
        email: "test@mail.com",
        password: "password123",
      },
      isLoggedIn: true,
    };

    expect(reducer(previousState, logout())).toEqual({
      user: { email: "", password: "" },
      isLoggedIn: false,
    });
  });
});
