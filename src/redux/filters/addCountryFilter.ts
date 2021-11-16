import { fetchCountry } from "../api";

/**
 * @param countryParam
 * @returns undefined or eq.countryParam
 * @description function that takes in a string and returns query param if it is defined
 */
const addCountryFilter = async (countryParam: string) => {
  let country = undefined;
  if (countryParam) {
    const { data } = await fetchCountry({
      select: "name",
      params: { country: countryParam },
    });

    country = `eq.${data.name}`;
  }

  return country;
};

export default addCountryFilter;
