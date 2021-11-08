import { categoriesData } from "mock-data/categories";
import { employeesData } from "mock-data/employees";

const searchEmployees = queryParams => {
  let result = employeesData.filter(employee => {
    if (
      queryParams &&
      queryParams.get("lastName") &&
      employee.lastName !== queryParams.get("lastName")
    ) {
      return false;
    }

    if (queryParams && queryParams.get("countryIsoCode3")) {
      const countryCode = queryParams.get("countryIsoCode3");
      const countryObj = categoriesData.countryListAllIsoData.find(
        country => country.code3 === countryCode,
      );

      if (employee.country !== countryObj.name) {
        return false;
      }
    }

    if (queryParams && queryParams.get("businessUnitId")) {
      const bunitId = parseInt(queryParams.get("businessUnitId"));
      const businessUnitObj = categoriesData.businessUnits.find(
        bunit => bunit.id === bunitId,
      );

      if (employee.businessUnit !== businessUnitObj.name) {
        return false;
      }
    }

    return true;
  });

  return { data: result };
};

const employeeService = {
  searchEmployees,
};

export default employeeService;

/** real implementation */
/*
const getAllEmployees = () => {
  return http.get('/employees')
}

const searchEmployees = (queryParams) => {
  return http.get(`/employees?${queryParams}`);
};
*/
