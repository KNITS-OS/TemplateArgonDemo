import { httpCommon } from "redux/http-common";

const searchEmployees = queryParams => {
  console.log(`/employees?${queryParams}`);
  return httpCommon.get(`/employees?${queryParams}`);
  // return httpCommon.get(`/employees`);
};

const searchEmployeesByIds = employeeIds => {
  const searchString = employeeIds.map(id => `id=${id}`).join("&");
  return httpCommon.get(`/employees?${searchString}`);
};

export const employeeService = {
  searchEmployees,
  searchEmployeesByIds,
};
