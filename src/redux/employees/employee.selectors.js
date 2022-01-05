import { createSelector } from "reselect";

export const selectEmployees = createSelector(
  [state => state.employee.entities],
  data => data,
);

export const selectEmployeeById = id =>
  createSelector([selectEmployees], employeesdata =>
    employeesdata.find(employee => employee.id === parseInt(id)),
  );
