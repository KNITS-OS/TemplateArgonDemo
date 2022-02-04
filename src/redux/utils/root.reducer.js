import { combineReducers } from "redux";

import { businessUnitReducer } from "../business-unit";
import { chartReducer } from "../charts";
import { countryReducer } from "../countries";
import { employeeReducer } from "../employees";
import { groupReducer } from "../groups/group.reducer";
import { worldOverviewReducer } from "../world-overview";

export const rootReducer = combineReducers({
  businessUnit: businessUnitReducer,
  chart: chartReducer,
  group: groupReducer,
  country: countryReducer,
  employee: employeeReducer,
  worldOverview: worldOverviewReducer,
});
