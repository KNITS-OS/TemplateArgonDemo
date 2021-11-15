import axiosInstance from "utils/axiosInstance";
import { IEmployeeFilters } from "types/types";
import {
  addBusinessUnitFilter,
  addCountryFilter,
  addLastnameFilter,
} from "../filters";

interface Props {
  filters: IEmployeeFilters;
  select: string;
}

/**
 *  @description gets data from the API using filters
 */
const searchWithFilters = async ({ filters, select }: Props) => {
  const lastNameFilter = addLastnameFilter(filters.lastName);
  const countryFilter = await addCountryFilter(filters.countryIsoCode);
  const businessUnitFilter = await addBusinessUnitFilter(
    filters.businessUnitId,
  );
  // @todo add more filters for care members

  const params = {
    select,
    lastName: lastNameFilter,
    country: countryFilter,
    businessUnit: businessUnitFilter,
  };

  let { data } = await axiosInstance.get("/employees", {
    params,
  });

  return { data };
};
export default searchWithFilters;
