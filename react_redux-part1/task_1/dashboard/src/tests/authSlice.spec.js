import reducer, { login, logout } from "../features/auth/authSlice";

describe("Authentication Slice tests", () => {
  it("should return the initial state by default", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      email: "",
      password: "",
      isLoggedIn: false,
    });
  });

  it("should handle login action", () => {
    const previousState = { email: "", password: "", isLoggedIn: false };

    expect(
      reducer(
        previousState,
        login({
          email: "test@mail.com",
          password: "password123",
          isLoggedIn: true,
        })
      )
    ).toEqual({
      email: "test@mail.com",
      password: "password123",
      isLoggedIn: true,
    });
  });

  it("should handle logout action", () => {
    const previousState = {
      email: "test@mail.com",
      password: "password123",
      isLoggedIn: true,
    };

    expect(reducer(previousState, logout())).toEqual({
      email: "",
      password: "",
      isLoggedIn: false,
    });
  });
});
