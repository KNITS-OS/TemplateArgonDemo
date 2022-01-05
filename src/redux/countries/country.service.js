import { httpCommon } from "redux/http-common";

const listCountries = () => {
  return httpCommon.get(`/countries`);
};

export const countryService = {
  listCountries,
};
