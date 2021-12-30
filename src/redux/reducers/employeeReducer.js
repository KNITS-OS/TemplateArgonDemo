import {
  CREATE_EMPLOYEE_LOADING,
  CREATE_EMPLOYEE_ERROR,
  CREATE_EMPLOYEE_COMPLETE,
  UPDATE_EMPLOYEE_LOADING,
  UPDATE_EMPLOYEE_ERROR,
  UPDATE_EMPLOYEE_COMPLETE,
  SEARCH_EMPLOYEES_LOADING,
  SEARCH_EMPLOYEES_ERROR,
  SEARCH_EMPLOYEES_COMPLETE,
  DELETE_EMPLOYEE_LOADING,
  DELETE_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_COMPLETE,
  CLOSE_ALERT
} from "../actions/types";


const initialState = {
  loading: false,
  errorMessage: false,
  employees: [], 
  employee: null 
};

const employeesReducer = (employeesState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case CLOSE_ALERT:
      return {
        loading: false,
        errorMessage: false,
        employees: [], 
        employee: null
      }

    case CREATE_EMPLOYEE_LOADING:
    case UPDATE_EMPLOYEE_LOADING:
    case SEARCH_EMPLOYEES_LOADING:
    case DELETE_EMPLOYEE_LOADING:
      return {
        loading: true,
        errorMessage: null,
        employees: [], 
        employee: null
      }
        
    case CREATE_EMPLOYEE_ERROR:
    case UPDATE_EMPLOYEE_ERROR:
    case SEARCH_EMPLOYEES_ERROR:
    case DELETE_EMPLOYEE_ERROR:
      console.log(action)
        return {
          loading: false,
          errorMessage: payload,
          employees: [], 
          employee: null
        }


    case CREATE_EMPLOYEE_COMPLETE:      
      return {
        loading: false,
        errorMessage: null,
        employees: [...employeesState.employees, payload], 
        employee: null
      }

    case SEARCH_EMPLOYEES_COMPLETE:
      return {
        loading: false,
        errorMessage: null,
        employees: payload, 
        employee: null
      }   

    case UPDATE_EMPLOYEE_COMPLETE:

      let updatedEmployees= employeesState.employees.map(employee => {
        if (employee.id === payload.id) {
          return {
            ...employee,
            ...payload,
          };
        } else {
          return employee;
        }
      });

      return {
        loading: false,
        errorMessage: null,
        employees: updatedEmployees, 
        employee: null
      }  


    case DELETE_EMPLOYEE_COMPLETE:
      let employeesToKeep= employeesState.employees.filter(({ id }) => id !== payload.id);
      
      return {
        loading: false,
        errorMessage: null,
        employees: employeesToKeep, 
        employee: null
      }  



    default:
      return employeesState;
  }
};

export default employeesReducer;
