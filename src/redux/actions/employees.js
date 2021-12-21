import employeeService from "redux/services/employeeService";
import {
  API_CALL_ERROR,
  API_CALL_START,
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  SEARCH_EMPLOYEES,
  UPDATE_EMPLOYEE,
  LIST_EMPLOYEES
} from "./types";

export const createUser = data => {
  console.log(data);
  return { type: CREATE_EMPLOYEE, payload: data };
};

/*
export const searchEmployees = filters => dispatch => {
  try {
    const queryParams = new URLSearchParams(filters);

    dispatch({
      type: API_CALL_START,
      payload: SEARCH_EMPLOYEES,
    });

    const res = employeeService.searchEmployees(queryParams);

    dispatch({
      type: SEARCH_EMPLOYEES,
      payload: res.data,
    });
    
  } catch (err) {
    dispatch({
      type: API_CALL_ERROR,
      payload: err,
    });
  }
};*/


export const searchEmployees = (filters) => async (dispatch) => {
  try {
    const queryParams = new URLSearchParams(filters);

    dispatch({
      type: API_CALL_START,
      payload: SEARCH_EMPLOYEES,
    });
    
    const res = await employeeService.searchEmployees(queryParams);

    console.log(res)

    dispatch({
      type: SEARCH_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: API_CALL_ERROR,
      payload: err,
    });
  }
};



export const listEmployees = () => async (dispatch) => {
  try {
   
    dispatch({
      type: API_CALL_START,
      payload: LIST_EMPLOYEES,
    });
    
    const res = await employeeService.listEmployees();

    console.log(res)

    dispatch({
      type: LIST_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: API_CALL_ERROR,
      payload: err,
    });
  }
};



export const updateUser = (id, data) => {
  return { type: UPDATE_EMPLOYEE, payload: id, data };
};

export const deleteUser = id => {
  return { type: DELETE_EMPLOYEE, payload: { id } };
};
