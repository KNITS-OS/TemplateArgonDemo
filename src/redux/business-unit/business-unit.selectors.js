import { createSelector } from "reselect";

export const selectBusinessUnitsAsListNoReselect = state => state.businessUnit.entities;

export const selectBusinessUnitsAsList = createSelector(
  state => state.businessUnit.entities,
  businessUnits =>
    businessUnits.map(businessUnit => ({
      value: businessUnit.name,
      label: businessUnit.name,
    }))
);
