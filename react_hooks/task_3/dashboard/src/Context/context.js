import { createContext } from "react";

const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const logOut = () => {};

const newContext = createContext({
  user: defaultUser,
  logOut: logOut,
});

export default newContext;
