import { combineReducers } from "redux";
import employeeReducer from "redux/employees/employee.reducer";
import groupReducer from "redux/groups/group.reducer";
import countryReducer from "redux/countries/country.reducer";
import businessUnitReducer from "redux/business-units/business-unit.reducer";

export const rootReducer = combineReducers({
  employee: employeeReducer,
  group: groupReducer,
  country: countryReducer,
  businessUnit: businessUnitReducer,
});
