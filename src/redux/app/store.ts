import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "redux/features/example/counterSlice";
import sidenavReducer from "redux/features/sidenav/sidenavSlice";
import employeesReducer from "redux/features/employees/employeesSlice";
import groupsReducer from "redux/features/groups/groupsSlice";
import { employeesApiSlice } from "../features/employees/employeesApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sidenav: sidenavReducer,
    employees: employeesReducer,
    groups: groupsReducer,
    [employeesApiSlice.reducerPath]: employeesApiSlice.reducer,
  },
  // add special capabilites to the store
  // like tracking cache lifetimes
  // if no other part of the codebase needs this data
  // it will be removed from the cache after it expires
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(employeesApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDisptatch = typeof store.dispatch;
