import { employeesData as employees } from "./employees";

export const employeesFromIds = (employeeIds: number[]) => {
  let groupMembers = employees.filter(employee => {
    for (let empId of employeeIds) {
      if (employee.id === empId) {
        return true;
      }
    }

    return false;
  });
  return groupMembers;
};
