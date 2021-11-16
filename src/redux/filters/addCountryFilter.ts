import { fetchCountry } from "../api";

const addCountryFilter = async (countryParam: string) => {
  let country = null;
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
