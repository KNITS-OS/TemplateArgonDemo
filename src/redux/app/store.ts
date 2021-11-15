import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "redux/features/example/counterSlice";
import sidenavReducer from "redux/features/sidenav/sidenavSlice";
import employeesReducer from "redux/features/employees/employeesSlice";
import groupsReducer from "redux/features/groups/groupsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sidenav: sidenavReducer,
    employees: employeesReducer,
    groups: groupsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDisptatch = typeof store.dispatch;
