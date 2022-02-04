import { COUNTRY_ROUTE } from "redux/common";
import { httpCommon } from "redux/utils";

const listCountries = () => httpCommon.get(`${COUNTRY_ROUTE}`);

export const countryService = {
  listCountries,
};
