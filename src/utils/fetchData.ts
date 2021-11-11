import { categoriesData } from "mock-data/categories";
import { employeesData } from "mock-data/employees";
import { OptionType } from "types/types";

export const getSelectBusinessUnits: OptionType[] =
  categoriesData.businessUnits.map(businessUnit => {
    return { value: businessUnit.id.toString(), label: businessUnit.name };
  });

export const getSelectCountries: OptionType[] =
  categoriesData.countryListAllIsoData.map(country => {
    return { value: country.code, label: country.name };
  });

export const getSelectEmployees: OptionType[] = employeesData.map(
  employee => {
    return {
      value: employee.id.toString(),
      label: employee.internationalName,
    };
  },
);
