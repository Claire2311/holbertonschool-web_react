import { createContext } from "react";

const userObject = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const logOut = () => {};

const newContext = createContext({
  user: userObject,
  logOut: logOut,
});

export default newContext;
