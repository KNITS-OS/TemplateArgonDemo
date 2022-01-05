import { httpCommon } from "redux/http-common";

const searchEmployees = queryParams => {
  // return httpCommon.get(`/employees?${queryParams}`);
  return httpCommon.get(`/employees`);
};

export const employeeService = {
  searchEmployees,
};
