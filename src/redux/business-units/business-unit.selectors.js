import { createSelector } from "reselect";

export const selectBusinessUnitsAsListNoReselect = state => {
  return state.businessUnit.entities;
};

export const selectBusinessUnitsAsList = createSelector(
  state => state.businessUnit.entities,
  businessUnits => {
    return businessUnits.map(businessUnit => {
      return { value: businessUnit.name, label: businessUnit.name };
    });
  },
);
