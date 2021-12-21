import {
  API_CALL_ERROR,
  API_CALL_START,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  SEARCH_EMPLOYEES,
  DELETE_EMPLOYEE,
  LIST_EMPLOYEES,
  CLOSE_ERROR_ALERT
} from "../actions/types";

import { employeesData } from "mock-data/employees.js"

const employeesReducer = (employeeState = employeesData, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case CREATE_EMPLOYEE:  
      return [...employeeState , payload];

    case SEARCH_EMPLOYEES:
    case LIST_EMPLOYEES:    
        return employeeState;
    
    case UPDATE_EMPLOYEE:   
      console.log("Action: ",action);
      break;

    default:
      return employeeState;
  }

};

export default employeesReducer;
