import { createSelector } from "reselect";

export const selectCountriesAsListNoReselect = state => state.country.entities;

export const selectCountriesAsList = createSelector(
  state => state.country.entities,
  countries => countries.map(country => ({ value: country.name, label: country.name }))
);
