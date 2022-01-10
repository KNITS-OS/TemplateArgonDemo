import {
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
  SEARCH_EMPLOYEE_COMPLETE,
  SEARCH_EMPLOYEE_ERROR,
  SEARCH_EMPLOYEE_LOADING,
  UPDATE_EMPLOYEE_COMPLETE,
  UPDATE_EMPLOYEE_ERROR,
  UPDATE_EMPLOYEE_LOADING,
} from "redux/types.actions";

const initialState = {
  loading: false,
  isError: false,
  errorMessage: null,
  entities: [],
  entity: null,
};

export const employeeReducer = (employeeState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_EMPLOYEES_LOADING:
    case SEARCH_EMPLOYEE_LOADING:
    case SEARCH_EMPLOYEES_BY_IDS_LOADING:
    case CREATE_EMPLOYEE_LOADING:
    case PARTIAL_UPDATE_EMPLOYEE_LOADING:
    case UPDATE_EMPLOYEE_LOADING:
    case DELETE_EMPLOYEE_LOADING:
      return {
        isLoading: true,
        isError: false,
        errorMessage: null,
        entities: [],
        entity: null,
      };

    case SEARCH_EMPLOYEES_ERROR:
    case SEARCH_EMPLOYEE_ERROR:
    case SEARCH_EMPLOYEES_BY_IDS_ERROR:
    case CREATE_EMPLOYEE_ERROR:
    case PARTIAL_UPDATE_EMPLOYEE_ERROR:
    case UPDATE_EMPLOYEE_ERROR:
    case DELETE_EMPLOYEE_ERROR:
      console.log(action);
      return {
        isLoading: false,
        isError: true,
        errorMessage: payload,
        entities: [],
        entity: null,
      };

    case CREATE_EMPLOYEE_COMPLETE:
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: [...employeeState.entities, payload],
        entity: null,
      };

    case SEARCH_EMPLOYEE_COMPLETE:
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: null,
        entity: payload,
      };

    case SEARCH_EMPLOYEES_COMPLETE:
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: payload,
        entity: null,
      };

    case SEARCH_EMPLOYEES_BY_IDS_COMPLETE:
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: payload,
        entity: null,
      };

    case UPDATE_EMPLOYEE_COMPLETE:
      let updatedEmployees = employeeState.entities.map(employee => {
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
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: updatedEmployees,
        entity: null,
      };

    case PARTIAL_UPDATE_EMPLOYEE_COMPLETE:
      let partiallyUpdatedEmployees = employeeState.entities.map(
        employee => {
          if (employee.id === payload.id) {
            return {
              ...employee,
              ...payload,
            };
          } else {
            return employee;
          }
        },
      );

      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: partiallyUpdatedEmployees,
        entity: null,
      };

    case DELETE_EMPLOYEE_COMPLETE:
      let employeesToKeep = employeeState.entities.filter(
        ({ id }) => id !== payload.id,
      );

      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: employeesToKeep,
        entity: null,
      };

    default:
      return employeeState;
  }
};
