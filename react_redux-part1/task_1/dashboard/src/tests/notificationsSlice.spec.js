// import axios from "axios";
// import AxiosMockAdapter from "axios-mock-adapter";
// import { configureStore } from "@reduxjs/toolkit";
// import { waitFor } from "@testing-library/react";
// import { fetchNotifications } from "../features/notifications/notificationsSlice";
import reducer, {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} from "../features/notifications/notificationsSlice";

describe("Notifications Slice tests", () => {
  it("should return the initial state by default", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      notifications: [],
      displayDrawer: true,
    });
  });

  //   it("should fetch the data correctly", async () => {
  //     const mock = new AxiosMockAdapter(axios);

  //     mock.onGet("http://localhost:5173/notifications.json").reply(200, [
  //       { id: 1, type: "default", value: "New course available" },
  //       { id: 2, type: "urgent", value: "New resume available" },
  //     ]);

  //     const store = configureStore({ reducer: { notifications: reducer } });

  //     // Dispatcher l'action et attendre le résultat
  //     const result = await store.dispatch(fetchNotifications());

  //     // Vérifier les données retournées
  //     await waitFor(() => {
  //       expect(result.payload).toEqual([
  //         { id: 1, type: "default", value: "New course available" },
  //         { id: 2, type: "urgent", value: "New resume available" },
  //       ]);
  //     });

  //     mock.reset();
  //   }, 10000);

  it("should remove a notification correctly when the markNotificationAsRead action is dispatched", () => {
    const previousState = {
      notifications: [
        { id: 1, value: "New course available" },
        { id: 2, value: "New resume available" },
      ],
      displayDrawer: true,
    };

    expect(reducer(previousState, markNotificationAsRead(1))).toEqual({
      notifications: [{ id: 2, value: "New resume available" }],
      displayDrawer: true,
    });
  });

  it("should toggle the displayDrawer state correctly when the hideDrawer action is dispatched", () => {
    const previousState = {
      notifications: [],
      displayDrawer: true,
    };

    expect(reducer(previousState, hideDrawer())).toEqual({
      notifications: [],
      displayDrawer: false,
    });
  });

  it("should toggle the displayDrawer state correctly when the showDrawer action is dispatched", () => {
    const previousState = {
      notifications: [],
      displayDrawer: false,
    };

    expect(reducer(previousState, showDrawer())).toEqual({
      notifications: [],
      displayDrawer: true,
    });
  });
});
