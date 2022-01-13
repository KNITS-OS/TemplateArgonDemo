import { httpCommon } from "redux/http-common";

const listCountries = () => httpCommon.get(`/countries`);

export const countryService = {
  listCountries,
};
