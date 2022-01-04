import httpCommon from "../http-common";



const searchEmployees = (queryParams) => {
  return httpCommon.get(`/employees?${queryParams}`);
  //return httpCommon.get(`/employees`);
};


const employeeService = {
  searchEmployees,
};

export default employeeService;

