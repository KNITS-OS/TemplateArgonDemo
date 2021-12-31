import employeeService from "redux/services/employee.service";
import {
  CREATE_EMPLOYEE_COMPLETE,
  DELETE_EMPLOYEE_COMPLETE,
  SEARCH_EMPLOYEES_COMPLETE,
  SEARCH_EMPLOYEES_ERROR,
  SEARCH_EMPLOYEES_LOADING,
  UPDATE_EMPLOYEE_COMPLETE,
} from "./types";

export const createUser = data => {
  console.log(data);
  return { type: CREATE_EMPLOYEE_COMPLETE, payload: data };
};

export const searchEmployees = filters => async dispatch => {
  try {
    const queryParams = new URLSearchParams(filters);

    dispatch({
      type: SEARCH_EMPLOYEES_LOADING,
      payload: 'SEARCH_EMPLOYEES_LOADING',
    });

    
    const { data } = await employeeService.searchEmployees(queryParams);

    // search
    // const { data } = await searchWithFilters(
    //   queryParams,
    //   "*",
    //   "employees",
    // );

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

/*
export const searchEmployees = (filters) => async (dispatch) => {
  try {
    const queryParams = new URLSearchParams(filters);

    const res = await employeeService.searchEmployees(queryParams);

    console.log(res)

    dispatch({
      type: RETRIEVE_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};*/

export const updateUser = (id, data) => {
  return { type: UPDATE_EMPLOYEE_COMPLETE, payload: id, data };
};

export const deleteUser = id => {
  return { type: DELETE_EMPLOYEE_COMPLETE, payload: { id } };
};
