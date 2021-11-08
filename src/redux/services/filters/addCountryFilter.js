import { fetchCountry } from "../queries";

const addCountryFilter = async countryIsoCode3Param => {
  let country = null;

  if (countryIsoCode3Param) {
    const { data } = await fetchCountry("name", { countryIsoCode3Param });

    country = `eq.${data.name}`;
  }

  return country;
};

export default addCountryFilter;
