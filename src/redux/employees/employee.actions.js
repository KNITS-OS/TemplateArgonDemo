import {
  SEARCH_EMPLOYEE_LOADING,
  SEARCH_EMPLOYEE_ERROR,
  SEARCH_EMPLOYEE_COMPLETE,
  CREATE_EMPLOYEE_COMPLETE,
  CREATE_EMPLOYEE_ERROR,
  CREATE_EMPLOYEE_LOADING,
  DELETE_EMPLOYEE_COMPLETE,
  DELETE_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_LOADING,
  PARTIAL_UPDATE_EMPLOYEE_COMPLETE,
  PARTIAL_UPDATE_EMPLOYEE_ERROR,
  PARTIAL_UPDATE_EMPLOYEE_LOADING,
  SEARCH_EMPLOYEES_BY_IDS_COMPLETE,
  SEARCH_EMPLOYEES_BY_IDS_ERROR,
  SEARCH_EMPLOYEES_BY_IDS_LOADING,
  SEARCH_EMPLOYEES_COMPLETE,
  SEARCH_EMPLOYEES_ERROR,
  SEARCH_EMPLOYEES_LOADING,
  UPDATE_EMPLOYEE_COMPLETE,
  UPDATE_EMPLOYEE_ERROR,
  UPDATE_EMPLOYEE_LOADING,
} from "redux/types.actions";

import { employeeService } from ".";

export const createEmployee = body => async dispatch => {
  try {
    dispatch({
      type: CREATE_EMPLOYEE_LOADING,
      payload: CREATE_EMPLOYEE_LOADING,
    });

    const { data } = await employeeService.createEmployee(body);

    dispatch({
      type: CREATE_EMPLOYEE_COMPLETE,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: CREATE_EMPLOYEE_ERROR, payload: err.message });
  }
};

export const searchEmployee = id => async dispatch => {
  try {
    dispatch({
      type: SEARCH_EMPLOYEE_LOADING,
      payload: SEARCH_EMPLOYEE_LOADING,
    });

    const { data } = await employeeService.getEmployeeById(id);
    dispatch({
      type: SEARCH_EMPLOYEE_COMPLETE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_EMPLOYEE_ERROR,
      payload: err.message,
    });
  }
};

export const searchEmployees = filters => async dispatch => {
  try {
    const queryParams = new URLSearchParams(filters);

    dispatch({
      type: SEARCH_EMPLOYEES_LOADING,
      payload: SEARCH_EMPLOYEES_LOADING,
    });

    const { data } = await employeeService.searchEmployees(queryParams);

    dispatch({
      type: SEARCH_EMPLOYEES_COMPLETE,
      payload: data,
    });
  } catch (err) {
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
      payload: SEARCH_EMPLOYEES_BY_IDS_LOADING,
    });

    const { data } = await employeeService.searchEmployeesByIds(
      employeeIds
    );

    dispatch({
      type: SEARCH_EMPLOYEES_BY_IDS_COMPLETE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_EMPLOYEES_BY_IDS_ERROR,
      payload: err.message,
    });
  }
};

export const updateEmployee = (id, body) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_EMPLOYEE_LOADING,
      payload: UPDATE_EMPLOYEE_LOADING,
    });

    const { data } = await employeeService.updateEmployee(id, body);

    dispatch({
      type: UPDATE_EMPLOYEE_COMPLETE,
      payload: { id, data },
    });
  } catch (err) {
    dispatch({ type: UPDATE_EMPLOYEE_ERROR, payload: err.message });
  }
};

export const partialUpdateEmployee = (id, body) => async dispatch => {
  try {
    dispatch({
      type: PARTIAL_UPDATE_EMPLOYEE_LOADING,
      payload: PARTIAL_UPDATE_EMPLOYEE_LOADING,
    });

    const { data } = await employeeService.partialUpdateEmployee(id, body);

    dispatch({
      type: PARTIAL_UPDATE_EMPLOYEE_COMPLETE,
      payload: { id, data },
    });
  } catch (err) {
    dispatch({
      type: PARTIAL_UPDATE_EMPLOYEE_ERROR,
      payload: err.message,
    });
  }
};

export const deleteEmployee = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_EMPLOYEE_LOADING,
      payload: DELETE_EMPLOYEE_LOADING,
    });

    await employeeService.deleteEmployee(id);

    dispatch({
      type: DELETE_EMPLOYEE_COMPLETE,
      payload: { id },
    });
  } catch (err) {
    dispatch({ type: DELETE_EMPLOYEE_ERROR, payload: err.message });
  }
};
