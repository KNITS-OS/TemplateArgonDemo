import { httpCommon } from "redux/utils";

const listCountries = () => httpCommon.get(`/countries`);

export const countryService = {
  listCountries,
};
