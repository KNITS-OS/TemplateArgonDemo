import { fetchFilteredData } from ".";
import {
  addBusinessUnitFilter,
  addCountryFilter,
  addLastNameFilter,
} from "../filters";

const searchWithFilters = async queryParams => {
  const lastNameFilter = addLastNameFilter(queryParams.get("lastName"));
  const countryFilter = await addCountryFilter(
    queryParams.get("countryIsoCode3"),
  );
  const businessUnitFilter = await addBusinessUnitFilter(
    queryParams.get("businessUnitId"),
  );

  const params = {
    lastName: lastNameFilter,
    country: countryFilter,
    businessUnit: businessUnitFilter,
  };

  const { data } = await fetchFilteredData(params);

  return { data };
};
export default searchWithFilters;
