import { createSelector } from "reselect";

export const selectEmployees = createSelector(
  [state => state.employee.entities],
  data => data,
);

export const selectEmployeeById = id =>
  createSelector([selectEmployees], employeesData =>
    employeesData.find(employee => employee.id === parseInt(id)),
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
  createSelector([selectEmployees], employeesData => {
    console.log("selectEmployees", selectEmployees);
    console.log("employeesData", employeesData);
    const groupMembers = employeeIds.map(employeeId => {
      return employeesData.find(employee => employee.id === employeeId);
    });
    console.log("groupMembers", groupMembers);
    return groupMembers;
  });
