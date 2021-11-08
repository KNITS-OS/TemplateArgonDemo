import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import employeesReducer from "./employeeReducer";
import groupReducer from "./groupReducer";

export const rootReducer = combineReducers({
  employees: employeesReducer,
  categories: categoryReducer,
  groups: groupReducer,
});
