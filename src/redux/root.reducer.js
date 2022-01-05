import { combineReducers } from "redux";
import employeeReducer from "redux/employees/employee.reducer";
import groupReducer from "redux/groups/group.reducer";
import countryReducer from "redux/countries/country.reducer";

export const rootReducer = combineReducers({
  employee: employeeReducer,
  group: groupReducer,
  country: countryReducer,
});
