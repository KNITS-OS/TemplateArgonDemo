import { LIST_COUNTRIES_COMPLETE, LIST_COUNTRIES_LOADING, LIST_COUNTRIES_ERROR } from "redux/utils";

import { countryService } from ".";

export const listCountriesLoading = () => ({
  type: LIST_COUNTRIES_LOADING,
  payload: "LIST_COUNTRIES_LOADING",
});

export const listCountriesError = err => ({
  type: LIST_COUNTRIES_ERROR,
  payload: err.message,
});

export const listCountriesComplete = data => ({
  type: LIST_COUNTRIES_COMPLETE,
  payload: data,
});

export const listCountries = () => async dispatch => {
  try {
    dispatch(listCountriesLoading());

    const { data } = await countryService.listCountries();

    dispatch(listCountriesComplete(data));
  } catch (err) {
    dispatch(listCountriesError(err));
  }
};
