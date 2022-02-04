import {
  LIST_BUSINESS_UNITS_COMPLETE,
  LIST_BUSINESS_UNITS_LOADING,
  LIST_BUSINESS_UNITS_ERROR,
} from "redux/utils";

import { businessUnitService } from ".";

export const listBusinessUnitsLoading = () => ({
  type: LIST_BUSINESS_UNITS_LOADING,
  payload: "LIST_BUSINESS_UNITS_LOADING",
});

export const listBusinessUnitsError = err => ({
  type: LIST_BUSINESS_UNITS_ERROR,
  payload: err.message,
});

export const listBusinessUnitsComplete = data => ({
  type: LIST_BUSINESS_UNITS_COMPLETE,
  payload: data,
});

export const listBusinessUnits = () => async dispatch => {
  try {
    dispatch(listBusinessUnitsLoading());

    const { data } = await businessUnitService.listBusinessUnits();

    dispatch(listBusinessUnitsComplete(data));
  } catch (err) {
    dispatch(listBusinessUnitsError(err));
  }
};
