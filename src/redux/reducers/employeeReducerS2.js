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

import employeesData from "mock-data/employees.js"

const initialEmployeeState={
  loading:false,
  error:{message:'', hasError:false},
  employees : []
}

const employeesReducer = (employeeState = initialEmployeeState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_EMPLOYEE:
        return {...employeeState, 
              employees: [...employeeState.employees, payload],
              loading:false,
              error:{message:'', hasError:false},
        };      

    case SEARCH_EMPLOYEES:
    case  LIST_EMPLOYEES:      
      return {...employeeState, 
        employees: payload,
        loading:false,
        error:{message:'', hasError:false},
      };  
    

    case UPDATE_EMPLOYEE:{
          let employeesAfterUpdate =  employeeState.employees.map(user => {
            if (user.id === payload.id) {
              return {
                ...user,
                ...payload,
              };
            } else {
              return user;
            }
        });

        return {...employeeState, 
          employees: employeesAfterUpdate,
          loading:false,
          error:{message:'', hasError:false},
        };  


    }

     
       

    case DELETE_EMPLOYEE:{
      let employeesAfterDelete = employeeState.employees.filter(({ id }) => id !== payload.id);
      return {...employeeState, 
        employees: employeesAfterDelete,
        loading:false,
        error:{message:'', hasError:false},
      };  
    }
   

    case API_CALL_START:  
      return {...employeeState,          
        loading:true,
        error:{message:'', hasError:false},
      };  

    case API_CALL_ERROR: 
      return {...employeeState,         
        loading:false,
        error:{message:payload, hasError:true},
      };  

    case CLOSE_ERROR_ALERT: 
      return {...employeeState,         
        loading:false,
        error:{message:payload, hasError:false},
    };  
    default:
      return employeeState;
  }
};

export default employeesReducer;
