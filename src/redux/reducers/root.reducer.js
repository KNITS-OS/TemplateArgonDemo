import { combineReducers } from "redux";
import employeeReducer from "./employee.reducer.js";
import groupReducer from "./group.reducer.js";
import countryReducer from "./country.reducer.js";


export const rootReducer = combineReducers({
  employee: employeeReducer,
  group: groupReducer,
  country:countryReducer
  // businessUnitState: businessUnitReducer,
  // countryState: countryReducer,
});
