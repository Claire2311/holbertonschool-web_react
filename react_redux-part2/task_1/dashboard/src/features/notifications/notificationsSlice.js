import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLatestNotification } from "../../utils/utils";

const initialState = {
  notifications: [],
};

const API_BASE_URL = "http://localhost:5173";

const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`,
};

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    try {
      const response = await axios.get(ENDPOINTS.notifications);
      const data = response.data;

      const latestNotification = data[data.length - 1];
      if (
        latestNotification.html &&
        latestNotification.html.__html === "getLatestNotification()"
      ) {
        latestNotification.html.__html = getLatestNotification();
      }

      return data;
    } catch (error) {
      console.error("Error fetching notifications:", error);
      throw error;
    }
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    markNotificationAsRead: (state, action) => {
      const notificationId = action.payload;
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== notificationId
      );
      console.log(`Notification ${action.payload} has been marked as read`);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
    });
  },
});

export const { markNotificationAsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;
