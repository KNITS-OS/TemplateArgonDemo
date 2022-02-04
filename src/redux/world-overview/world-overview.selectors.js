import { createSelector } from "reselect";

export const selectWorldOverview = createSelector(
  [state => state.worldOverview.entities],
  data => data
);
