import { httpCommon } from "redux/http-common";

const searchEmployees = queryParams => httpCommon.get(`/employees?${queryParams}`);

const getEmployeeById = id => httpCommon.get(`/employees/${id}`);

const searchEmployeesByIds = employeeIds => {
  const searchString = employeeIds.map(id => `id=${id}`).join("&");
  return httpCommon.get(`/employees?${searchString}`);
};

const createEmployee = body => httpCommon.post(`/employees`, body);

const updateEmployee = (id, body) => httpCommon.put(`/employees/${id}`, body);

const partialUpdateEmployee = (id, body) => httpCommon.patch(`/employees/${id}`, body);

const deleteEmployee = id => httpCommon.delete(`/employees/${id}`);

export const employeeService = {
  searchEmployees,
  getEmployeeById,
  searchEmployeesByIds,
  createEmployee,
  updateEmployee,
  partialUpdateEmployee,
  deleteEmployee,
};
