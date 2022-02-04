import { createSelector } from "reselect";

export const selectEmployeesState = rootState => rootState.employee;

export const selectAllEmployeesData = createSelector(
  [selectEmployeesState],
  employeeState => employeeState.entities
);

export const selectEmployeeById = id =>
  createSelector([selectAllEmployeesData], employeesData =>
    employeesData.find(employee => employee.id === parseInt(id))
  );

export const selectEmployeesAsList = createSelector([selectAllEmployeesData], employeesData =>
  employeesData.map(employee => ({ value: employee.id, label: employee.internationalName }))
);

export const selectEmployeesByIds = ids => {
  return createSelector([selectAllEmployeesData], employees => {
    const groupMembers = [];

    ids.forEach(id => groupMembers.push(employees.find(employee => employee.id === id)));
    return groupMembers;
  });
};
