import { combineReducers } from "redux";

import { businessUnitReducer } from "./business-units";
import { countryReducer } from "./countries";
import { employeeReducer } from "./employees";
import { groupReducer } from "./groups";

export const rootReducer = combineReducers({
  employee: employeeReducer,
  group: groupReducer,
  country: countryReducer,
  businessUnit: businessUnitReducer,
});
