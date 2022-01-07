import {
  LIST_COUNTRIES_COMPLETE,
  LIST_COUNTRIES_LOADING,
  LIST_COUNTRIES_ERROR,
} from "redux/types.actions";

import { countryService } from ".";

export const listCountriesLoading = () => {
  return {
    type: LIST_COUNTRIES_LOADING,
    payload: "LIST_COUNTRIES_LOADING",
  };
};

export const listCountriesError = err => {
  return {
    type: LIST_COUNTRIES_ERROR,
    payload: err.message,
  };
};

export const listCountriesComplete = data => {
  return {
    type: LIST_COUNTRIES_COMPLETE,
    payload: data,
  };
};

export const listCountries = () => async dispatch => {
  try {
    dispatch(listCountriesLoading());

    const { data } = await countryService.listCountries();

    dispatch(listCountriesComplete(data));
  } catch (err) {
    dispatch(listCountriesError(err));
  }
};
