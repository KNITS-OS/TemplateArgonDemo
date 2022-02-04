import { EMPLOYEE_ROUTE } from "redux/common";
import { httpCommon } from "redux/utils";

const searchEmployees = queryParams => httpCommon.get(`${EMPLOYEE_ROUTE}?${queryParams}`);

const getEmployeeById = id => httpCommon.get(`${EMPLOYEE_ROUTE}/${id}`);

const searchEmployeesByIds = employeeIds => {
  const searchString = employeeIds.map(id => `id=${id}`).join("&");
  return httpCommon.get(`${EMPLOYEE_ROUTE}?${searchString}`);
};

const createEmployee = body => httpCommon.post(`${EMPLOYEE_ROUTE}`, body);

const updateEmployee = (id, body) => httpCommon.put(`${EMPLOYEE_ROUTE}/${id}`, body);

const partialUpdateEmployee = (id, body) => httpCommon.patch(`${EMPLOYEE_ROUTE}/${id}`, body);

const deleteEmployee = id => httpCommon.delete(`${EMPLOYEE_ROUTE}/${id}`);

export const employeeService = {
  searchEmployees,
  getEmployeeById,
  searchEmployeesByIds,
  createEmployee,
  updateEmployee,
  partialUpdateEmployee,
  deleteEmployee,
};
