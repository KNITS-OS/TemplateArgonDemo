import { createSelector } from "reselect";

export const selectEmployees = createSelector(
  [state => state.employee.entities],
  data => data
);

export const selectEmployeeById = id =>
  createSelector([selectEmployees], employeesData =>
    employeesData.find(employee => employee.id === parseInt(id))
  );

export const selectEmployeesAsList = createSelector(
  [selectEmployees],
  employeesData =>
    employeesData.map(employee => {
      return { value: employee.id, label: employee.internationalName };
    })
);
