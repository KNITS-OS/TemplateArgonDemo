import httpCommon from "../http-common";


const listCountries = () => {
   return httpCommon.get(`/countries`);
};

const countryService = {
  listCountries,
};

export default countryService;

