
import { createSelector } from 'reselect'


export const selectCountriesAsListNoReselect = (state) =>{
  return state.country.entities;
}


export const selectCountriesAsList = createSelector(
  (state) =>  state.country.entities,
  (countries) => {   
    return countries.map(country => {
      return { value: country.code3, label: country.name };
    });    
  }
)
