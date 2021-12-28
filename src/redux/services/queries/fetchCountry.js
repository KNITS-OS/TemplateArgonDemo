import axios from "axios";

const fetchCountry = async (select, params) => {
  const { countryIsoCode3Param } = params;

  let { data } = await axios.get(`http://localhost:5000/countries`, {
    params: {
      select,
      code3: `eq.${countryIsoCode3Param}`,
    },
  });

  return { data: data[0] };
};

export default fetchCountry;
