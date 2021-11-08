import { fetchFilteredData } from ".";
import {
  addBusinessUnitFilter,
  addCountryFilter,
  addLastNameFilter,
} from "../filters";

const searchWithFilters = async (queryParams, select, table) => {
  const lastNameFilter = addLastNameFilter(queryParams.get("lastName"));
  const countryFilter = await addCountryFilter(
    queryParams.get("countryIsoCode3"),
  );
  const businessUnitFilter = await addBusinessUnitFilter(
    queryParams.get("businessUnitId"),
  );
  // @todo add more filters for care members

  const params = {
    lastName: lastNameFilter,
    country: countryFilter,
    businessUnit: businessUnitFilter,
  };

  const { data } = await fetchFilteredData(select, table, params);

  return { data };
};
export default searchWithFilters;
