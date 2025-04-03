import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import notificationsReducer from "../features/notifications/notificationsSlice";
import coursesReducer from "../features/courses/coursesSlice";

const rootReducer = combineReducers({
  authReducer,
  notificationsReducer,
  coursesReducer,
});

export default rootReducer;
