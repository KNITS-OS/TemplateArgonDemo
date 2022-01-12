import { createSelector } from "reselect";

export const selectWorldMap = createSelector(
  [state => state.worldMap.entities],
  data => data
);
