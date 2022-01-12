import { createSelector } from "reselect";

export const selectGroups = createSelector(
  [state => state.group.entities],
  data => data
);

export const selectGroupById = id =>
  createSelector([selectGroups], groupsdata =>
    groupsdata.find(group => group.id === parseInt(id))
  );
