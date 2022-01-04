import { combineReducers } from "redux";
import employeeReducer from "redux/employees/employee.reducer.js";
import groupReducer from "redux/groups/group.reducer.js";
import countryReducer from "redux/countries/country.reducer.js";


export const rootReducer = combineReducers({
  employee: employeeReducer,
  group: groupReducer,
  country:countryReducer
});
