import { createSelector } from "reselect";

export const selectCharts = createSelector(
  [state => state.chart.entities],
  data => data
);
