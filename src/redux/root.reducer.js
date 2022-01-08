import { combineReducers } from "redux";

import { businessUnitReducer } from "./business-units";
import { chartReducer } from "./charts";
import { countryReducer } from "./countries";
import { employeeReducer } from "./employees";
import { groupReducer } from "./groups";
import { worldMapReducer } from "./world-map";

export const rootReducer = combineReducers({
  employee: employeeReducer,
  group: groupReducer,
  country: countryReducer,
  businessUnit: businessUnitReducer,
  chart: chartReducer,
  worldMap: worldMapReducer,
});
