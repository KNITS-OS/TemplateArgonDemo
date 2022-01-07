import {
  CREATE_EMPLOYEE_COMPLETE,
  DELETE_EMPLOYEE_COMPLETE,
  SEARCH_EMPLOYEES_BY_IDS_COMPLETE,
  SEARCH_EMPLOYEES_BY_IDS_ERROR,
  SEARCH_EMPLOYEES_BY_IDS_LOADING,
  SEARCH_EMPLOYEES_COMPLETE,
  SEARCH_EMPLOYEES_ERROR,
  SEARCH_EMPLOYEES_LOADING,
  UPDATE_EMPLOYEE_COMPLETE,
} from "redux/types.actions";

import { employeeService } from ".";

export const createUser = data => {
  console.log(data);
  return { type: CREATE_EMPLOYEE_COMPLETE, payload: data };
};

export const searchEmployees = filters => async dispatch => {
  try {
    const queryParams = new URLSearchParams(filters);

    dispatch({
      type: SEARCH_EMPLOYEES_LOADING,
      payload: "SEARCH_EMPLOYEES_LOADING",
    });

    const { data } = await employeeService.searchEmployees(queryParams);

    dispatch({
      type: SEARCH_EMPLOYEES_COMPLETE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SEARCH_EMPLOYEES_ERROR,
      payload: err.message,
    });
  }
};

export const searchEmployeesByIds = employeeIds => async dispatch => {
  try {
    dispatch({
      type: SEARCH_EMPLOYEES_BY_IDS_LOADING,
      payload: "SEARCH_EMPLOYEES_BY_IDS_LOADING",
    });

    const { data } = await employeeService.searchEmployeesByIds(
      employeeIds,
    );

    dispatch({
      type: SEARCH_EMPLOYEES_BY_IDS_COMPLETE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SEARCH_EMPLOYEES_BY_IDS_ERROR,
      payload: err.message,
    });
  }
};

export const updateUser = (id, data) => {
  return { type: UPDATE_EMPLOYEE_COMPLETE, payload: id, data };
};

export const deleteUser = id => {
  return { type: DELETE_EMPLOYEE_COMPLETE, payload: { id } };
};
