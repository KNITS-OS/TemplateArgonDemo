import { httpCommon } from "redux/http-common";

const searchEmployees = queryParams => {
  return httpCommon.get(`/employees?${queryParams}`);
};

const getEmployeeById = id => {
  return httpCommon.get(`/employees/${id}`);
};

const searchEmployeesByIds = employeeIds => {
  const searchString = employeeIds.map(id => `id=${id}`).join("&");
  return httpCommon.get(`/employees?${searchString}`);
};

const createEmployee = body => {
  return httpCommon.post(`/employees`, body);
};

const updateEmployee = (id, body) => {
  return httpCommon.put(`/employees/${id}`, body);
};

const partialUpdateEmployee = (id, body) => {
  return httpCommon.patch(`/employees/${id}`, body);
};

const deleteEmployee = id => {
  return httpCommon.delete(`/employees/${id}`);
};

export const employeeService = {
  searchEmployees,
  getEmployeeById,
  searchEmployeesByIds,
  createEmployee,
  updateEmployee,
  partialUpdateEmployee,
  deleteEmployee,
};
