import {
  LIST_BUSINESS_UNITS_COMPLETE,
  LIST_BUSINESS_UNITS_LOADING,
  LIST_BUSINESS_UNITS_ERROR,
} from "redux/types.actions";

import businessUnitService from "./business-unit.service";

export const listBusinessUnitsLoading = () => {
  return {
    type: LIST_BUSINESS_UNITS_LOADING,
    payload: "LIST_BUSINESS_UNITS_LOADING",
  };
};

export const listBusinessUnitsError = err => {
  return {
    type: LIST_BUSINESS_UNITS_ERROR,
    payload: err.message,
  };
};

export const listBusinessUnitsComplete = data => {
  return {
    type: LIST_BUSINESS_UNITS_COMPLETE,
    payload: data,
  };
};

export const listBusinessUnits = () => async dispatch => {
  try {
    dispatch(listBusinessUnitsLoading());

    const { data } = await businessUnitService.listBusinessUnits();

    console.log(data);
    dispatch(listBusinessUnitsComplete(data));
  } catch (err) {
    dispatch(listBusinessUnitsError(err));
  }
};