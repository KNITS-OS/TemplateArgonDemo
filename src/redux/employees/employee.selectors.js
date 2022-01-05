import { createSelector } from "reselect";

export const selectEmployees = createSelector(
  [state => state.employee.entities],
  data => data,
);

export const selectEmployeeById = id =>
  createSelector([selectEmployees], employeesdata =>
    employeesdata.find(employee => employee.id === parseInt(id)),
  );

export const selectEmployeesAsList = createSelector(
  [selectEmployees],
  employeesData =>
    employeesData.map(employee => {
      return { value: employee.id, label: employee.internationalName };
    }),
);

/**
 * @description get all groupMembers of a group
 * @param array employeeIds
 */
export const getGroupMembers = employeeIds =>
  createSelector([selectEmployees], employeesData =>
    employeeIds.map(employeeId => {
      return employeesData.find(employee => employee.id === employeeId);
    }),
  );
